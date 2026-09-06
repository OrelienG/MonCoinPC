export const HeroBackground = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-44 top-12 h-96 w-96 rounded-full bg-primary/8 blur-3xl" />
      <div className="absolute -right-36 bottom-0 h-[30rem] w-[30rem] rounded-full bg-dark/5 blur-3xl" />
      <svg className="absolute inset-x-0 bottom-0 h-32 w-full text-dark/[0.055]" viewBox="0 0 1440 128" preserveAspectRatio="none">
        <path d="M0 112C260 42 432 46 688 92s438 36 752-44" fill="none" stroke="currentColor" />
        <path d="M0 127C272 70 474 64 704 106s430 26 736-28" fill="none" stroke="currentColor" />
      </svg>
    </div>
  );
};
