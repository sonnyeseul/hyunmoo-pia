const BUTTON_CLASS = "group relative flex size-14 shrink-0 items-center justify-center rounded-full shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-blue disabled:cursor-not-allowed disabled:opacity-75 md:size-16";

/** One accessible icon action; positioning is managed by ConsultationActions. */
export default function FabLink({ href, label, backgroundColor, newWindow = false, children }) {
  const content = (
    <>
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-md bg-white px-3 py-2 text-sm font-semibold text-navy opacity-0 shadow-md group-hover:opacity-100 group-focus-visible:opacity-100 md:block">
        {label}
      </span>
      {children}
    </>
  );

  if (!href) {
    return (
      <button
        type="button"
        disabled
        aria-disabled="true"
        aria-label={label}
        title={label}
        className={BUTTON_CLASS}
        style={{ backgroundColor }}
      >
        {content}
      </button>
    );
  }

  return (
    <a
      href={href}
      target={newWindow ? "_blank" : undefined}
      rel={newWindow ? "noopener noreferrer" : undefined}
      aria-label={`${label}${newWindow ? " (새 창)" : ""}`}
      title={label}
      className={BUTTON_CLASS}
      style={{ backgroundColor }}
    >
      {content}
    </a>
  );
}
