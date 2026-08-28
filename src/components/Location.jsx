import { busIcon, parkingIcon } from "../assets/figmaAssets";
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
              <img src={busIcon} alt="" className="h-[19px] w-4 shrink-0" />
              <div>
                <div className="text-[12px] font-bold tracking-[1.2px] text-slate">
                  대중교통 안내
                </div>
                <div className="text-[13px] text-[#44474d]">
                  3호선 사직역 3번 출구 도보 12분. 부산지방법원 인근 위치.
                </div>
              </div>
            </FadeUp>
            <FadeUp delay={240} className="flex gap-4">
              <img src={parkingIcon} alt="" className="h-[18px] w-[13px] shrink-0" />
              <div>
                <div className="text-[12px] font-bold tracking-[1.2px] text-slate">
                  주차 안내
                </div>
                <div className="text-[13px] text-[#44474d]">
                  건물 지하 층에 방문객을 위한 전용 주차 공간이 마련되어 있습니다.
                </div>
              </div>
            </FadeUp>
          </div>

          <FadeUp delay={300} as="p" className="pt-4 text-[10px] text-slate/60">
            방문 상담은 예약제로 시행되며, 지도앱에서 '현무 탐정사무소'를 검색해주세요.
          </FadeUp>
        </div>

        <FadeUp delay={150} className="group relative aspect-video overflow-hidden rounded-[10px] border border-white/10 bg-navy shadow-lg shadow-navy/10 transition-shadow duration-300 hover:shadow-2xl hover:shadow-navy/20">
          <img
            src={mapImage}
            alt="현무 PIA 사무실 위치 지도"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          {/* The map artwork already carries the HYUNMOO PIA탐정 label, so no
              overlay pin here — just a light vignette to seat it in the page. */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-b from-navy/20 via-transparent to-navy/25"
            aria-hidden
          />
        </FadeUp>
      </div>
    </section>
  );
}
