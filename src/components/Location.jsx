import Icon from "./Icon";
import { mapImage } from "../assets/site";
import FadeUp from "./FadeUp";

export default function Location() {
  return (
    <section className="bg-white px-6 md:px-10 py-24">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col gap-6">
          <FadeUp as="h2" className="text-[28px] md:text-[32px] font-semibold text-navy">사무실 위치 안내</FadeUp>
          <FadeUp delay={80} as="p" className="text-[18px] text-slate">
            부산광역시 동래구 여고북로 102, 5층 61호 (사직동)
          </FadeUp>

          <div className="flex flex-col gap-6 pt-2">
            <FadeUp delay={160} className="flex gap-4">
              <Icon name="bus" className="h-5 w-5 shrink-0 text-brand-blue" />
              <div>
                <div className="text-[12px] font-bold tracking-[1.2px] text-slate">
                  대중교통 안내
                </div>
                <div className="text-[13px] text-[#44474d]">
                  지도 앱에서 ‘부산광역시 동래구 여고북로 102’를 검색해 출발지별 경로를 확인해 주세요.
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={240} className="flex gap-4">
              <Icon name="parking" className="h-5 w-5 shrink-0 text-brand-blue" />
              <div>
                <div className="text-[12px] font-bold tracking-[1.2px] text-slate">
                  주차 안내
                </div>
                <div className="text-[13px] text-[#44474d]">
                  방문 전에 주차 가능 여부와 안내 사항을 전화로 확인해 주세요.
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={300} as="p" className="pt-4 text-[10px] text-slate/60">
            방문 상담은 예약제로 시행되며, 지도앱에서 '현무 탐정사무소'를 검색해주세요.
          </FadeUp>
        </div>

        <FadeUp delay={150} className="relative aspect-video overflow-hidden rounded-[10px] border border-border-gray bg-white shadow-lg shadow-navy/10">
          <img
            src={mapImage}
            alt="현무 PIA 사무실 위치 지도"
            className="h-full w-full object-cover"
            loading="lazy"
            decoding="async"
          />
        </FadeUp>
      </div>
    </section>
  );
}
