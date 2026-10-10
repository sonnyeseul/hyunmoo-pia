export default function BrandWordmark({ footer = false }) {
  return (
    <span
      aria-label="현무 민간조사 탐정사무소"
      data-footer={footer}
      className="group/wordmark inline-flex items-center gap-2 text-navy sm:gap-3 md:data-[footer=true]:gap-2 lg:data-[footer=true]:gap-3"
    >
      <span className="size-10 shrink-0 overflow-hidden rounded-full bg-navy ring-1 ring-navy/10 sm:size-12 lg:size-14 md:group-data-[footer=true]/wordmark:size-10 lg:group-data-[footer=true]/wordmark:size-12 xl:group-data-[footer=true]/wordmark:size-14">
        <img
          src="/brand-mark-128.webp"
          alt=""
          width="125"
          height="128"
          className="size-full object-cover"
        />
      </span>
      <span className="inline-flex flex-col items-center gap-1">
        <span className="whitespace-nowrap text-lg font-bold leading-tight sm:text-xl lg:text-2xl md:group-data-[footer=true]/wordmark:text-base lg:group-data-[footer=true]/wordmark:text-xl xl:group-data-[footer=true]/wordmark:text-2xl">
          현무 민간조사 탐정사무소
        </span>
        <span className="whitespace-nowrap text-xs font-medium leading-none text-brand-blue lg:text-sm">
          Private Investigation Administrator
        </span>
      </span>
    </span>
  );
}
