import { useState } from "react";
import { selectChevron } from "../assets/figmaAssets";
import FadeUp from "./FadeUp";

const FIELDS_OF_INTEREST = [
  "개인 / 가사 사실조사",
  "기업 / 금융 보안",
  "안전 및 소재 파악",
  "기타 문의",
];

// ── 이메일 전송 설정 ─────────────────────────────────────────────────────
// Formspree(https://formspree.io)를 사용해 백엔드 서버 없이 폼 제출 내용을
// 지정한 이메일(actoz2001@gmail.com)로 바로 받아볼 수 있도록 연동했습니다.
// 아래 FORM_ENDPOINT의 "YOUR_FORM_ID" 부분을 Formspree에서 발급받은 실제
// 폼 ID로 교체해야 실제로 이메일이 발송됩니다. 설정 방법은 대화 안내를
// 참고해 주세요.
const FORM_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | error
  const [form, setForm] = useState({
    name: "",
    contact: "",
    field: FIELDS_OF_INTEREST[0],
    region: "",
    details: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(e.target),
      });

      if (res.ok) {
        setStatus("idle");
        setSubmitted(true);
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="scroll-mt-20 bg-white px-6 md:px-10 py-24">
      <div className="mx-auto max-w-[768px]">
        <FadeUp className="flex flex-col gap-8 rounded-[10px] border border-[#bcc6cc] bg-white p-8 md:p-12 shadow-[0_1px_1px_rgba(0,0,0,0.05)]">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-navy">
              간편 비공개 상담 신청
            </h2>
            <p className="text-[16px] text-slate">
              현재 알고 있는 내용만으로 조사 가능 여부부터 확인하세요. 상담은 무료이며 철저히
              익명이 보장됩니다.
            </p>
          </div>

          {submitted ? (
            <div className="rounded-md bg-bg-gray px-6 py-8 text-center text-[16px] text-slate">
              상담 신청이 접수되었습니다. 빠른 시일 내에 안내드리겠습니다.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Formspree가 이메일 제목/회신 주소로 사용할 숨은 필드 */}
              <input type="hidden" name="_subject" value="[현무 PIA] 새 비공개 상담 신청" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-bold tracking-[1.2px] text-slate">
                    이름 또는 별칭
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="익명 가능"
                    className="w-full border-b border-[#bcc6cc] bg-transparent pb-4 pt-3.5 text-[16px] text-slate placeholder:text-placeholder focus:border-navy focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-bold tracking-[1.2px] text-slate">
                    연락처
                  </span>
                  <input
                    type="tel"
                    name="contact"
                    value={form.contact}
                    onChange={handleChange}
                    placeholder="010-0000-0000"
                    className="w-full border-b border-[#bcc6cc] bg-transparent pb-4 pt-3.5 text-[16px] text-slate placeholder:text-placeholder focus:border-navy focus:outline-none"
                  />
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-bold tracking-[1.2px] text-slate">
                    상담 분야
                  </span>
                  <div className="relative">
                    <select
                      name="field"
                      value={form.field}
                      onChange={handleChange}
                      className="w-full appearance-none border-b border-[#bcc6cc] bg-transparent pb-3 pt-3 pr-8 text-[16px] text-slate focus:border-navy focus:outline-none"
                    >
                      {FIELDS_OF_INTEREST.map((f) => (
                        <option key={f} value={f}>
                          {f}
                        </option>
                      ))}
                    </select>
                    <img
                      src={selectChevron}
                      alt=""
                      className="pointer-events-none absolute right-1 top-1/2 h-6 w-6 -translate-y-1/2"
                    />
                  </div>
                </label>

                <label className="flex flex-col gap-2">
                  <span className="text-[12px] font-bold tracking-[1.2px] text-slate">
                    활동 희망 지역
                  </span>
                  <input
                    type="text"
                    name="region"
                    value={form.region}
                    onChange={handleChange}
                    placeholder="예: 부산, 서울 등"
                    className="w-full border-b border-[#bcc6cc] bg-transparent pb-4 pt-3.5 text-[16px] text-slate placeholder:text-placeholder focus:border-navy focus:outline-none"
                  />
                </label>

                <label className="col-span-full flex flex-col gap-2">
                  <span className="text-[12px] font-bold tracking-[1.2px] text-slate">
                    현재 상황 상세
                  </span>
                  <textarea
                    name="details"
                    value={form.details}
                    onChange={handleChange}
                    placeholder="조사 목적과 현재 상황을 간략히 적어주세요."
                    rows={4}
                    className="w-full resize-none border-b border-[#bcc6cc] bg-transparent pb-4 pt-3 text-[16px] text-slate placeholder:text-placeholder focus:border-navy focus:outline-none"
                  />
                </label>
              </div>

              {status === "error" && (
                <p className="rounded-md bg-red-50 px-4 py-3 text-center text-[13px] text-red-600">
                  전송 중 문제가 발생했습니다. 잠시 후 다시 시도하거나, 대표전화
                  010-3583-3542 혹은 actoz2001@gmail.com으로 직접 연락해 주세요.
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending"}
                className="mx-auto flex items-center justify-center rounded-md bg-navy px-12 py-4 text-[18px] font-bold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-navy/90 hover:shadow-lg active:translate-y-0 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "전송 중..." : "비공개 상담 신청하기"}
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  );
}
