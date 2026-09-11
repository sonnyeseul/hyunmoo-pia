// Inline icon set. Replaces the Figma-hosted SVG assets, which were served from
// short-lived URLs and have since expired. Every glyph is drawn on a 24×24 grid
// with a 1.75 stroke and inherits the surrounding text colour via currentColor,
// so an icon is styled by its parent instead of being baked into a file.

const ICONS = {
  "chevron-down": <polyline points="6 9.5 12 15.5 18 9.5" />,

  "arrow-right": <path d="M4.5 12h15M13.5 6l6 6-6 6" />,

  quote: (
    <path
      d="M9.6 5.9 10.8 8C9.1 8.9 8.2 10.1 8.2 11.7h2.7v6H5.2v-4.9c0-3 1.7-5.6 4.4-6.9Zm8.2 0L19 8c-1.7.9-2.6 2.1-2.6 3.7h2.7v6h-5.7v-4.9c0-3 1.7-5.6 4.4-6.9Z"
      fill="currentColor"
      stroke="none"
    />
  ),

  "shield-lock": (
    <>
      <path d="M12 3.2 19 6v5.6c0 4.2-2.9 7.7-7 8.6-4.1-.9-7-4.4-7-8.6V6l7-2.8Z" />
      <rect x="9.4" y="11.2" width="5.2" height="4.4" rx="1" />
      <path d="M10.7 11.2v-1.1a1.3 1.3 0 0 1 2.6 0v1.1" />
    </>
  ),

  lock: (
    <>
      <rect x="4.6" y="10.4" width="14.8" height="10.1" rx="2.2" />
      <path d="M8 10.4V7.6a4 4 0 0 1 8 0v2.8" />
    </>
  ),

  "user-lock": (
    <>
      <circle cx="9.6" cy="7.8" r="3.3" />
      <path d="M3.6 19.6a6.2 6.2 0 0 1 9.1-5.5" />
      <rect x="14.6" y="15.2" width="6" height="5.2" rx="1.1" />
      <path d="M16 15.2v-1.4a1.6 1.6 0 0 1 3.2 0v1.4" />
    </>
  ),

  bus: (
    <>
      <rect x="4" y="3.4" width="16" height="13.2" rx="2.4" />
      <path d="M4 9.6h16" />
      <path d="M7.2 16.6v1.6M16.8 16.6v1.6" />
      <circle cx="8" cy="13.4" r="1" fill="currentColor" stroke="none" />
      <circle cx="16" cy="13.4" r="1" fill="currentColor" stroke="none" />
    </>
  ),

  parking: (
    <>
      <rect x="3.6" y="3.6" width="16.8" height="16.8" rx="3.2" />
      <path d="M9.6 16.8V7.4h3.3a3 3 0 0 1 0 6H9.6" />
    </>
  ),

  phone: (
    <path d="M6.4 3.6h2.9l1.5 3.9-2 1.4a12.2 12.2 0 0 0 6.3 6.3l1.4-2 3.9 1.5v2.9a2 2 0 0 1-2.2 2A17.2 17.2 0 0 1 4.4 5.8a2 2 0 0 1 2-2.2Z" />
  ),

  message: (
    <>
      <path d="M4 6.6A2.6 2.6 0 0 1 6.6 4h10.8A2.6 2.6 0 0 1 20 6.6v6.8a2.6 2.6 0 0 1-2.6 2.6H9.2L4 20Z" />
      <path d="M8.2 8.6h7.6M8.2 12h4.8" />
    </>
  ),

  chat: (
    <>
      <path d="M4 6.6A2.6 2.6 0 0 1 6.6 4h10.8A2.6 2.6 0 0 1 20 6.6v6.8a2.6 2.6 0 0 1-2.6 2.6H9.2L4 20Z" />
      <circle cx="8.6" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="10" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.4" cy="10" r="1" fill="currentColor" stroke="none" />
    </>
  ),

  send: <path d="M20.8 3.4 10.4 13.8m10.4-10.4-6.4 17.4-3.9-8.4-8.4-3.9 18.7-5.1Z" />,

  clock: (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <polyline points="12 6.9 12 12 15.6 14" />
    </>
  ),

  camera: (
    <>
      <path d="M3.4 8.6h3l1.5-2.1h6.2l1.5 2.1h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H3.4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2Z" />
      <circle cx="12" cy="14" r="3.2" />
    </>
  ),

  "map-pin": (
    <>
      <path d="M12 21.2s7-5.7 7-11.2a7 7 0 1 0-14 0c0 5.5 7 11.2 7 11.2Z" />
      <circle cx="12" cy="9.8" r="2.6" />
    </>
  ),

  users: (
    <>
      <circle cx="9.2" cy="8.4" r="3.3" />
      <path d="M3.4 19.6a5.8 5.8 0 0 1 11.6 0" />
      <path d="M16.2 5.6a3.3 3.3 0 0 1 0 6.4" />
      <path d="M17.4 14.2a5.4 5.4 0 0 1 3.6 5.4" />
    </>
  ),

  home: (
    <>
      <path d="M3.8 10.4 12 3.6l8.2 6.8v8.4a1.8 1.8 0 0 1-1.8 1.8H5.6a1.8 1.8 0 0 1-1.8-1.8Z" />
      <path d="M9.4 20.6v-6.2h5.2v6.2" />
    </>
  ),

  route: (
    <>
      <circle cx="6" cy="18.4" r="2.4" />
      <circle cx="18" cy="5.6" r="2.4" />
      <path d="M8.4 18.4h5.1a3.6 3.6 0 0 0 0-7.2h-3a3.6 3.6 0 0 1 0-7.2h5.1" />
    </>
  ),

  rings: (
    <>
      <circle cx="9.4" cy="13.4" r="5" />
      <circle cx="15" cy="10.6" r="5" />
    </>
  ),

  scale: (
    <>
      <path d="M12 4.2v16M6 20.2h12" />
      <path d="M12 6.6 5.4 8.6M12 6.6l6.6 2" />
      <path d="M2.4 13.6a3 3 0 0 0 6 0L5.4 8.6Z" />
      <path d="M15.6 13.6a3 3 0 0 0 6 0l-3-5Z" />
    </>
  ),

  "eye-off": (
    <>
      <path d="M3 12s3.6-6 9-6c1.6 0 3 .4 4.2 1.1M21 12s-3.6 6-9 6c-1.7 0-3.2-.5-4.4-1.3" />
      <circle cx="12" cy="12" r="2.8" />
      <path d="M3.6 3.6 20.4 20.4" />
    </>
  ),

  "check-circle": (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <polyline points="8.4 12.2 11 14.8 15.6 9.6" />
    </>
  ),

  "x-circle": (
    <>
      <circle cx="12" cy="12" r="8.6" />
      <path d="M9.2 9.2l5.6 5.6M14.8 9.2l-5.6 5.6" />
    </>
  ),

  "file-text": (
    <>
      <path d="M13.8 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.2Z" />
      <polyline points="13.8 3 13.8 8.2 19 8.2" />
      <path d="M8.4 12.6h7.2M8.4 16h5" />
    </>
  ),

  "file-check": (
    <>
      <path d="M13.8 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8.2Z" />
      <polyline points="13.8 3 13.8 8.2 19 8.2" />
      <polyline points="8.8 14.6 10.8 16.6 15 12.4" />
    </>
  ),

  "id-card": (
    <>
      <rect x="2.8" y="5" width="18.4" height="14" rx="2.2" />
      <circle cx="8.6" cy="10.8" r="2.1" />
      <path d="M5.4 16.2c.6-1.6 1.9-2.4 3.2-2.4s2.6.8 3.2 2.4" />
      <path d="M14.6 9.8h4M14.6 13.4h4" />
    </>
  ),

  car: (
    <>
      <path d="M4.6 15.4v3a1 1 0 0 1-1 1H2.8a1 1 0 0 1-1-1v-3M22.2 15.4v3a1 1 0 0 1-1 1h-.8a1 1 0 0 1-1-1v-3" />
      <path d="M3 15.4h18v-3.2l-1.8-4.6a2 2 0 0 0-1.9-1.3H6.7a2 2 0 0 0-1.9 1.3L3 12.2Z" />
      <path d="M4.6 11.6h14.8" />
    </>
  ),

  calendar: (
    <>
      <rect x="3.6" y="5" width="16.8" height="15.4" rx="2.2" />
      <path d="M3.6 9.6h16.8M8.4 3.2v3.6M15.6 3.2v3.6" />
      <path d="M7.8 13.4h3M7.8 16.6h6.6" />
    </>
  ),

  folder: (
    <path d="M3.4 7a2 2 0 0 1 2-2h3.5l2 2.6h7.7a2 2 0 0 1 2 2v8.4a2 2 0 0 1-2 2h-13.2a2 2 0 0 1-2-2Z" />
  ),

  clipboard: (
    <>
      <rect x="4.8" y="5" width="14.4" height="15.4" rx="2.2" />
      <rect x="9" y="2.8" width="6" height="3.6" rx="1.2" />
      <path d="M8.8 10.6h6.4M8.8 14h6.4M8.8 17.4h4" />
    </>
  ),

  database: (
    <>
      <ellipse cx="12" cy="6" rx="7.4" ry="3" />
      <path d="M4.6 6v12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3V6" />
      <path d="M4.6 12c0 1.7 3.3 3 7.4 3s7.4-1.3 7.4-3" />
    </>
  ),
};

export default function Icon({ name, className = "", strokeWidth = 1.75, ...rest }) {
  const glyph = ICONS[name];
  if (!glyph) return null;
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      className={className}
      {...rest}
    >
      {glyph}
    </svg>
  );
}
