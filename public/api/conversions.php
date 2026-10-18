<?php

declare(strict_types=1);

header('Cache-Control: no-store');
header('X-Content-Type-Options: nosniff');

$allowedEvents = [
    'phone_click',
    'email_click',
    'quote_click',
    'service_quote_click',
    'form_success',
    'google_reviews_click',
];

$publicDirectory = dirname(__DIR__);
$configurationPath = $publicDirectory . DIRECTORY_SEPARATOR . 'moncoinpc-analytics.php';
$configuration = is_file($configurationPath) ? require $configurationPath : [];
$statsPath = is_array($configuration) && is_string($configuration['statsPath'] ?? null)
    ? $configuration['statsPath']
    : dirname($publicDirectory) . DIRECTORY_SEPARATOR . 'moncoinpc-conversions.json';

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    header('Content-Type: application/json; charset=utf-8');
    $configuredKey = is_array($configuration) ? ($configuration['readKey'] ?? '') : '';
    $providedKey = $_GET['key'] ?? '';

    if (!is_string($configuredKey) || $configuredKey === '' || !is_string($providedKey) ||
        !hash_equals($configuredKey, $providedKey)) {
        http_response_code(404);
        echo json_encode(['error' => 'Not found']);
        exit;
    }

    if (!is_file($statsPath)) {
        echo json_encode(['version' => 1, 'totals' => new stdClass(), 'days' => new stdClass()]);
        exit;
    }

    readfile($statsPath);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('Allow: GET, POST');
    http_response_code(405);
    exit;
}

$fetchSite = $_SERVER['HTTP_SEC_FETCH_SITE'] ?? '';
if ($fetchSite !== '' && !in_array($fetchSite, ['same-origin', 'same-site'], true)) {
    http_response_code(403);
    exit;
}

$rawBody = file_get_contents('php://input', false, null, 0, 256);
$payload = is_string($rawBody) ? json_decode($rawBody, true) : null;
$event = is_array($payload) ? ($payload['event'] ?? null) : null;

if (!is_string($event) || !in_array($event, $allowedEvents, true)) {
    http_response_code(422);
    exit;
}

$handle = fopen($statsPath, 'c+');
if ($handle === false || !flock($handle, LOCK_EX)) {
    http_response_code(503);
    exit;
}

$existing = stream_get_contents($handle);
$stats = is_string($existing) && $existing !== '' ? json_decode($existing, true) : null;
if (!is_array($stats)) {
    $stats = ['version' => 1, 'totals' => [], 'days' => []];
}

$day = gmdate('Y-m-d');
$stats['totals'][$event] = (int) ($stats['totals'][$event] ?? 0) + 1;
$stats['days'][$day][$event] = (int) ($stats['days'][$day][$event] ?? 0) + 1;

$minimumDay = gmdate('Y-m-d', time() - (90 * 86400));
$stats['days'] = array_filter(
    $stats['days'],
    static fn(string $storedDay): bool => $storedDay >= $minimumDay,
    ARRAY_FILTER_USE_KEY
);

$encoded = json_encode($stats, JSON_UNESCAPED_SLASHES | JSON_PRETTY_PRINT);
if (!is_string($encoded)) {
    flock($handle, LOCK_UN);
    fclose($handle);
    http_response_code(500);
    exit;
}

rewind($handle);
ftruncate($handle, 0);
fwrite($handle, $encoded);
fflush($handle);
flock($handle, LOCK_UN);
fclose($handle);

http_response_code(204);
