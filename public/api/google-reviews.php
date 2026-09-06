<?php

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('Cache-Control: public, max-age=3600, stale-while-revalidate=86400');

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit;
}

$rootDirectory = dirname(__DIR__, 2);
$secretPath = $rootDirectory . DIRECTORY_SEPARATOR . 'moncoinpc-google.php';
$cachePath = $rootDirectory . DIRECTORY_SEPARATOR . 'moncoinpc-google-reviews-cache.json';
function respondFromCache(string $cachePath, bool $allowStale = false): bool
{
    if (!is_file($cachePath)) {
        return false;
    }

    if (!$allowStale && (time() - filemtime($cachePath)) >= 86400) {
        return false;
    }

    $content = file_get_contents($cachePath);
    if ($content === false) {
        return false;
    }

    echo $content;
    return true;
}

function googleRequest(
    string $url,
    string $apiKey,
    ?array $payload = null,
    ?string $fieldMask = null
): array
{
    $curl = curl_init($url);
    $headers = [
        'Content-Type: application/json',
        'X-Goog-Api-Key: ' . $apiKey,
    ];

    if ($fieldMask !== null) {
        $headers[] = 'X-Goog-FieldMask: ' . $fieldMask;
    }

    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 12,
        CURLOPT_HTTPHEADER => $headers,
    ]);

    if ($payload !== null) {
        curl_setopt($curl, CURLOPT_POST, true);
        curl_setopt($curl, CURLOPT_POSTFIELDS, json_encode($payload));
    }

    $response = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

    if (!is_string($response) || $status < 200 || $status >= 300) {
        throw new RuntimeException('Google Places request failed');
    }

    $decoded = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
    return is_array($decoded) ? $decoded : [];
}

if (respondFromCache($cachePath)) {
    exit;
}

if (!is_file($secretPath)) {
    http_response_code(503);
    echo json_encode(['error' => 'Reviews are not configured']);
    exit;
}

$configuration = require $secretPath;
$apiKey = is_array($configuration) ? ($configuration['apiKey'] ?? '') : '';

if (!is_string($apiKey) || $apiKey === '') {
    http_response_code(503);
    echo json_encode(['error' => 'Reviews are not configured']);
    exit;
}

try {
    $search = googleRequest(
        'https://places.googleapis.com/v1/places:searchText',
        $apiKey,
        [
            'textQuery' => 'Mon Coin PC, 44 Route de Craonne, 02160 La Ville-aux-Bois-lès-Pontavert',
            'languageCode' => 'fr',
            'regionCode' => 'FR',
        ],
        'places.id'
    );

    $placeId = $search['places'][0]['id'] ?? null;
    if (!is_string($placeId) || $placeId === '') {
        throw new RuntimeException('Google place was not found');
    }

    $detailsUrl = sprintf(
        'https://places.googleapis.com/v1/places/%s?languageCode=fr&regionCode=FR',
        rawurlencode($placeId)
    );

    $curl = curl_init($detailsUrl);
    curl_setopt_array($curl, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_TIMEOUT => 12,
        CURLOPT_HTTPHEADER => [
            'Content-Type: application/json',
            'X-Goog-Api-Key: ' . $apiKey,
            'X-Goog-FieldMask: displayName,rating,userRatingCount,reviews,googleMapsUri,reviewsUri',
        ],
    ]);

    $response = curl_exec($curl);
    $status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
    curl_close($curl);

    if (!is_string($response) || $status < 200 || $status >= 300) {
        throw new RuntimeException('Google Place Details request failed');
    }

    $place = json_decode($response, true, 512, JSON_THROW_ON_ERROR);
    $result = [
        'rating' => $place['rating'] ?? null,
        'reviewCount' => $place['userRatingCount'] ?? null,
        'googleMapsUri' => $place['reviewsUri'] ?? $place['googleMapsUri'] ?? null,
        'reviews' => array_slice($place['reviews'] ?? [], 0, 3),
        'updatedAt' => gmdate(DATE_ATOM),
    ];

    $encoded = json_encode($result, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    if (!is_string($encoded)) {
        throw new RuntimeException('Reviews could not be encoded');
    }

    file_put_contents($cachePath, $encoded, LOCK_EX);
    echo $encoded;
} catch (Throwable $error) {
    if (respondFromCache($cachePath, true)) {
        exit;
    }

    http_response_code(502);
    echo json_encode(['error' => 'Reviews are temporarily unavailable']);
}
