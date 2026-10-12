(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1365:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "@emotion/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5193);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "@emotion/react"
var react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: external "react-bootstrap/SSRProvider"
const SSRProvider_namespaceObject = require("react-bootstrap/SSRProvider");
var SSRProvider_default = /*#__PURE__*/__webpack_require__.n(SSRProvider_namespaceObject);
// EXTERNAL MODULE: ./src/sass/index.scss
var sass = __webpack_require__(4352);
// EXTERNAL MODULE: ./src/components/GlobalStyle.ts
var GlobalStyle = __webpack_require__(9920);
// EXTERNAL MODULE: ./node_modules/next/dynamic.js
var dynamic = __webpack_require__(5152);
var dynamic_default = /*#__PURE__*/__webpack_require__.n(dynamic);
;// CONCATENATED MODULE: ./src/components/Chatbot/ChatbotMount.tsx
"use client";



// Dynamic import with SSR disabled to guarantee zero hydration mismatch in Next.js 13 Pages Router
const ChatWidget = dynamic_default()(null, {
    loadableGenerated: {
        modules: [
            "../components/Chatbot/ChatbotMount.tsx -> " + "./ChatWidget"
        ]
    },
    ssr: false,
    loading: ()=>null
});
/**
 * ChatbotMount: Robust Client-side Mount Wrapper
 *
 * Usage in Next.js 13 Pages Router (_app.tsx):
 * ```tsx
 * import { ChatbotMount } from '@/components/Chatbot';
 *
 * export default function App({ Component, pageProps }: AppProps) {
 *   return (
 *     <>
 *       <Component {...pageProps} />
 *       <ChatbotMount />
 *     </>
 *   );
 * }
 * ```
 */ function ChatbotMount_ChatbotMount(props) {
    const [mounted, setMounted] = (0,external_react_.useState)(false);
    (0,external_react_.useEffect)(()=>{
        setMounted(true);
    }, []);
    if (!mounted) {
        return null;
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(ChatWidget, {
        ...props
    });
}

;// CONCATENATED MODULE: external "lucide-react"
const external_lucide_react_namespaceObject = require("lucide-react");
;// CONCATENATED MODULE: ./src/chatbot/lib/config.ts
/**
 * Centralized Configuration for Inpartner AI Assistant
 * Can be overridden via environment variables in .env.local without modifying code.
 */ const config_INPARTNER_CONFIG = {
    name: "Inpartner Agent",
    companyName: "PT Inpartner Optima Integra",
    tagline: "AI Business Consultation Assistant",
    websiteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://inpartner.id",
    // WhatsApp Contact (Tim Sales / Business Development)
    whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "6285934548202",
    whatsappDisplay: process.env.NEXT_PUBLIC_WHATSAPP_DISPLAY || "+62 859 3454 8202",
    // Official Corporate Email
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "corporatesecretary@inpartner.id",
    // Office Address
    addressJakarta: "Pakuwon Tower, Unit J, 10th Floor, Raya Casablanca Street, Kav. 88, South Jakarta, Indonesia",
    // Operating Hours
    operatingHours: "Monday – Friday: 09:00 – 17:00 WIB"
};
/**
 * Returns formatted WhatsApp click-to-chat URL with optional pre-filled message
 */ function config_getWhatsAppUrl(customMessage) {
    const cleanPhone = config_INPARTNER_CONFIG.whatsappNumber.replace(/[^0-9]/g, "");
    const phone = cleanPhone.startsWith("0") ? `62${cleanPhone.slice(1)}` : cleanPhone;
    const msg = customMessage ? `?text=${encodeURIComponent(customMessage)}` : "";
    return `https://wa.me/${phone}${msg}`;
}

// EXTERNAL MODULE: external "@emotion/styled"
var styled_ = __webpack_require__(1480);
;// CONCATENATED MODULE: ./src/components/Chatbot/ChatbotIcon.tsx
"use client";




const floatAnim = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{transform:translateY(0);}50%{transform:translateY(-3px);}")));
const blinkAnim = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,92%,100%{transform:scaleY(1);}95%{transform:scaleY(0.1);}")));
const antennaPulse = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{opacity:1;}50%{opacity:0.45;}")));
const antennaFast = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{opacity:1;}50%{opacity:0.2;}")));
const scanAnim = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{transform:translateX(-2.5px);}50%{transform:translateX(2.5px);}")));
const wiggleAnim = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{transform:rotate(0deg);}25%{transform:rotate(-7deg);}75%{transform:rotate(7deg);}")));
const IconContainer = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e14hp8ga0"
})("position:relative;display:inline-flex;align-items:center;justify-content:center;user-select:none;flex-shrink:0;width:", ({ dim  })=>dim, "px;height:", ({ dim  })=>dim, "px;", ({ animated  })=>animated && css`
      animation: ${floatAnim} 3.2s ease-in-out infinite;
    `, "  svg{width:100%;height:100%;display:block;overflow:visible;}.cb-head{transform-origin:32px 40px;transform-box:view-box;}.cb-eye{transform-box:fill-box;transform-origin:center;animation:", blinkAnim, " 4.2s ease-in-out infinite;}.cb-eye-happy{opacity:0;transition:opacity 0.2s ease;}.cb-eyes-open{transition:opacity 0.2s ease;}.cb-pupils{transition:transform 0.12s ease-out;}.cb-antenna-bulb{animation:", ({ thinking  })=>thinking ? antennaFast : antennaPulse, " ", ({ thinking  })=>thinking ? "0.6s" : "2.4s", " ease-in-out infinite;}.cb-smile{transition:d 0.25s ease;}", ({ thinking  })=>thinking && css`
      .cb-scan {
        animation: ${scanAnim} 1.1s ease-in-out infinite;
      }
    `, "  &:hover .cb-head,button:hover > & .cb-head{animation:", wiggleAnim, " 0.6s ease-in-out;}&:hover .cb-eyes-open,button:hover > & .cb-eyes-open{opacity:0;}&:hover .cb-eye-happy,button:hover > & .cb-eye-happy{opacity:1;}&:hover .cb-smile,button:hover > & .cb-smile{d:path('M24 43 Q32 50 40 43');}@media (prefers-reduced-motion:reduce){animation:none;*,&:hover .cb-head{animation:none !important;transition:none !important;}}")));
const SIZES = {
    xs: 22,
    sm: 28,
    md: 38,
    lg: 54,
    xl: 72
};
function ChatbotIcon_ChatbotIcon({ className ="" , size ="md" , animated =false , variant ="light" , state ="idle"  }) {
    const uid = useId().replace(/:/g, "");
    const pupilsRef = useRef(null);
    const containerRef = useRef(null);
    const dim = SIZES[size] || SIZES.md;
    const isLauncher = variant === "launcher";
    const isLarge = size === "lg" || size === "xl";
    const thinking = state === "thinking";
    // Large mascot follows the cursor with its eyes
    useEffect(()=>{
        if (!isLarge || thinking || "undefined" === "undefined") return;
        if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
        let frame = 0;
        const onMove = (e)=>{
            cancelAnimationFrame(frame);
            frame = requestAnimationFrame(()=>{
                const el = containerRef.current;
                const pupils = pupilsRef.current;
                if (!el || !pupils) return;
                const rect = el.getBoundingClientRect();
                const dx = e.clientX - (rect.left + rect.width / 2);
                const dy = e.clientY - (rect.top + rect.height / 2);
                const dist = Math.hypot(dx, dy) || 1;
                const k = Math.min(dist / 120, 1);
                pupils.style.transform = `translate(${(dx / dist * 2.2 * k).toFixed(2)}px, ${(dy / dist * 1.6 * k).toFixed(2)}px)`;
            });
        };
        window.addEventListener("mousemove", onMove);
        return ()=>{
            cancelAnimationFrame(frame);
            window.removeEventListener("mousemove", onMove);
        };
    }, [
        isLarge,
        thinking
    ]);
    const headFill = `url(#cb-head-${uid})`;
    const accent = `url(#cb-accent-${uid})`;
    const eyeColor = isLauncher ? "#38BDF8" : "#7DD3FC";
    return /*#__PURE__*/ _jsx(IconContainer, {
        ref: containerRef,
        className: className,
        dim: dim,
        animated: animated && isLarge,
        thinking: thinking,
        role: "img",
        "aria-label": "Inpartner AI Chatbot",
        children: /*#__PURE__*/ _jsxs("svg", {
            viewBox: "0 0 64 64",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
                /*#__PURE__*/ _jsxs("defs", {
                    children: [
                        /*#__PURE__*/ _jsx("linearGradient", {
                            id: `cb-head-${uid}`,
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "1",
                            children: isLauncher ? /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsx("stop", {
                                        offset: "0%",
                                        stopColor: "#FFFFFF"
                                    }),
                                    /*#__PURE__*/ _jsx("stop", {
                                        offset: "100%",
                                        stopColor: "#E2E8F0"
                                    })
                                ]
                            }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                children: [
                                    /*#__PURE__*/ _jsx("stop", {
                                        offset: "0%",
                                        stopColor: "#1E3A5F"
                                    }),
                                    /*#__PURE__*/ _jsx("stop", {
                                        offset: "100%",
                                        stopColor: "#0B1E33"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ _jsxs("linearGradient", {
                            id: `cb-accent-${uid}`,
                            x1: "0",
                            y1: "0",
                            x2: "1",
                            y2: "1",
                            children: [
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "0%",
                                    stopColor: "#38BDF8"
                                }),
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "100%",
                                    stopColor: "#0284C7"
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsxs("radialGradient", {
                            id: `cb-glow-${uid}`,
                            children: [
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "0%",
                                    stopColor: "#7DD3FC",
                                    stopOpacity: "0.9"
                                }),
                                /*#__PURE__*/ _jsx("stop", {
                                    offset: "100%",
                                    stopColor: "#38BDF8",
                                    stopOpacity: "0"
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ _jsxs("g", {
                    className: "cb-head",
                    children: [
                        /*#__PURE__*/ _jsx("line", {
                            x1: "32",
                            y1: "14",
                            x2: "32",
                            y2: "7",
                            stroke: accent,
                            strokeWidth: "2.2",
                            strokeLinecap: "round"
                        }),
                        /*#__PURE__*/ _jsx("circle", {
                            className: "cb-antenna-bulb",
                            cx: "32",
                            cy: "6",
                            r: "5",
                            fill: `url(#cb-glow-${uid})`
                        }),
                        /*#__PURE__*/ _jsx("circle", {
                            className: "cb-antenna-bulb",
                            cx: "32",
                            cy: "6",
                            r: "2.6",
                            fill: "#38BDF8"
                        }),
                        /*#__PURE__*/ _jsx("rect", {
                            x: "4",
                            y: "27",
                            width: "7",
                            height: "16",
                            rx: "3.5",
                            fill: accent
                        }),
                        /*#__PURE__*/ _jsx("rect", {
                            x: "53",
                            y: "27",
                            width: "7",
                            height: "16",
                            rx: "3.5",
                            fill: accent
                        }),
                        /*#__PURE__*/ _jsx("rect", {
                            x: "9",
                            y: "14",
                            width: "46",
                            height: "40",
                            rx: "15",
                            fill: headFill,
                            stroke: isLauncher ? "rgba(2,132,199,0.25)" : "rgba(125,211,252,0.25)",
                            strokeWidth: "1"
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            d: "M17 21 Q24 16.5 33 17",
                            stroke: "#FFFFFF",
                            strokeOpacity: isLauncher ? 0.9 : 0.35,
                            strokeWidth: "2",
                            strokeLinecap: "round"
                        }),
                        /*#__PURE__*/ _jsx("rect", {
                            x: "15",
                            y: "23",
                            width: "34",
                            height: "24",
                            rx: "10",
                            fill: isLauncher ? "#0B1E33" : "#06121F"
                        }),
                        /*#__PURE__*/ _jsxs("g", {
                            className: "cb-scan",
                            children: [
                                /*#__PURE__*/ _jsx("g", {
                                    className: "cb-eyes-open",
                                    children: /*#__PURE__*/ _jsxs("g", {
                                        ref: pupilsRef,
                                        className: "cb-pupils",
                                        children: [
                                            /*#__PURE__*/ _jsx("ellipse", {
                                                className: "cb-eye",
                                                cx: "25",
                                                cy: "33",
                                                rx: "3.2",
                                                ry: "4",
                                                fill: eyeColor
                                            }),
                                            /*#__PURE__*/ _jsx("ellipse", {
                                                className: "cb-eye",
                                                cx: "39",
                                                cy: "33",
                                                rx: "3.2",
                                                ry: "4",
                                                fill: eyeColor
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ _jsxs("g", {
                                    className: "cb-eye-happy",
                                    stroke: eyeColor,
                                    strokeWidth: "2.4",
                                    strokeLinecap: "round",
                                    children: [
                                        /*#__PURE__*/ _jsx("path", {
                                            d: "M21.5 34 Q25 29 28.5 34"
                                        }),
                                        /*#__PURE__*/ _jsx("path", {
                                            d: "M35.5 34 Q39 29 42.5 34"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ _jsx("path", {
                            className: "cb-smile",
                            d: "M26 42 Q32 45.5 38 42",
                            stroke: eyeColor,
                            strokeWidth: "2.2",
                            strokeLinecap: "round"
                        })
                    ]
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/chatbot/lib/diagnostic.ts
/**
 * INPARTNER AI — Consultative Diagnostic & Scoping Decision Tree Engine
 * PT Inpartner Optima Integra • Advisory Practice Discovery Framework
 */ const DIAGNOSTIC_DECISION_TREES = {
    strategy_corporate: {
        pillarKey: "strategy_corporate",
        serviceName_id: "Strategy & Corporate Advisory",
        serviceName_en: "Strategy & Corporate Advisory",
        serviceName_ko: "기업전략 & 기업 자문",
        tagline_id: "Perumusan arah strategis korporasi, transformasi bisnis, dan transaksi pasar modal.",
        tagline_en: "Corporate strategic direction, business transformation, and capital market transactions.",
        tagline_ko: "기업 전략 방향 수립, 비즈니스 전환 및 자본시장 거래 자문.",
        step1: {
            step: 1,
            title_id: "Fokus Strategis Korporasi",
            title_en: "Strategic Corporate Focus",
            title_ko: "기업 전략 중점 분야",
            question_id: "Apa fokus inisiatif strategis utama yang sedang dipersiapkan perusahaan Anda?",
            question_en: "What is the primary strategic corporate initiative your enterprise is preparing for?",
            question_ko: "현재 귀사에서 중점적으로 추진 중인 주요 전략적 과제는 무엇입니까?",
            options: [
                {
                    id: "ma_divestment",
                    label_id: "Merger, Akuisisi (M&A) & Divestasi",
                    label_en: "Mergers, Acquisitions (M&A) & Divestment",
                    label_ko: "M&A(인수합병) 및 사업부 분할\xb7매각",
                    detail_id: "Akuisisi target strategis atau penjualan unit bisnis",
                    detail_en: "Target acquisition or business unit divestment",
                    detail_ko: "전략적 인수 대상 발굴 또는 사업 매각"
                },
                {
                    id: "ipo_capital_market",
                    label_id: "Advisory IPO & Pasar Modal",
                    label_en: "IPO & Capital Markets Readiness",
                    label_ko: "IPO(기업공개) 및 자본시장 상장 자문",
                    detail_id: "Kesiapan go-public dan pendampingan underwriter",
                    detail_en: "Public listing readiness & underwriter facilitation",
                    detail_ko: "상장 예비 심사 및 주관사 선정 협력"
                },
                {
                    id: "business_transformation",
                    label_id: "Transformasi Bisnis & Roadmap Strategis",
                    label_en: "Business Transformation & Corporate Roadmap",
                    label_ko: "비즈니스 전환 및 중장기 기업 로드맵",
                    detail_id: "Modernisasi model bisnis dan roadmap jangka panjang",
                    detail_en: "Business model overhaul and multi-year roadmap",
                    detail_ko: "비즈니스 모델 혁신 및 중장기 성장 전략 수립"
                },
                {
                    id: "corporate_restructuring",
                    label_id: "Restrukturisasi Korporasi & Turnaround",
                    label_en: "Corporate Restructuring & Debt Turnaround",
                    label_ko: "기업 구조조정 및 재무 턴어라운드",
                    detail_id: "Penyehatan operasional atau restrukturisasi kewajiban",
                    detail_en: "Operational turnaround or debt restructuring",
                    detail_ko: "운영 효율화 및 채무 구조조정 자문"
                }
            ]
        },
        step2: {
            step: 2,
            title_id: "Kesiapan & Tata Kelola Internal",
            title_en: "Readiness & Governance Status",
            title_ko: "기업 준비도 및 거버넌스 현황",
            question_id: "Bagaimana status tata kelola dan kesiapan data internal saat ini?",
            question_en: "What is the current state of internal data readiness and financial governance?",
            question_ko: "현재 내부 재무 데이터 준비도 및 거버넌스 상태는 어떻습니까?",
            options: [
                {
                    id: "audited_ready",
                    label_id: "Laporan Keuangan Diaudit Tersedia (Audited Financials Ready)",
                    label_en: "Audited Financial Statements Available",
                    label_ko: "감사 완료된 재무제표 보유 (즉시 착수 가능)",
                    detail_id: "Data keuangan 2-3 tahun terakhir siap di-review",
                    detail_en: "2-3 years audited books ready for review",
                    detail_ko: "최근 2~3개년 감사보고서 검토 준비 완료"
                },
                {
                    id: "in_progress",
                    label_id: "Draf Strategis Sedang Disusun (Drafting Phase)",
                    label_en: "Internal Concept Note / Drafting in Progress",
                    label_ko: "내부 기획안 및 사업 계획 수립 중",
                    detail_id: "Memerlukan validasi dan penajaman konsultan independen",
                    detail_en: "Requires independent consulting validation and refining",
                    detail_ko: "외부 전문 기관의 타당성 검증 및 고도화 필요"
                },
                {
                    id: "urgent_turnaround",
                    label_id: "Kebutuhan Mendesak (< 1 Bulan - High Urgency)",
                    label_en: "Immediate Turnaround Need (< 1 Month Urgency)",
                    label_ko: "시급한 턴어라운드 실행 필요 (1개월 이내 착수)",
                    detail_id: "Memerlukan intervensi cepat konsultan senior",
                    detail_en: "Requires swift senior advisory intervention",
                    detail_ko: "수석 자문위원의 신속한 현장 개입 필요"
                },
                {
                    id: "exploratory",
                    label_id: "Eksplorasi Tahap Awal (Preliminary Exploration)",
                    label_en: "Preliminary Exploratory & Diagnostic Stage",
                    label_ko: "초기 사전 탐색 및 타당성 타진 단계",
                    detail_id: "Membutuhkan wawasan komparatif lanskap industri",
                    detail_en: "Seeking industry benchmark and diagnostic insights",
                    detail_ko: "업계 벤치마크 및 전략적 인사이트 검토 희망"
                }
            ]
        }
    },
    investment_advisory: {
        pillarKey: "investment_advisory",
        serviceName_id: "Investment & Project Advisory",
        serviceName_en: "Investment & Project Advisory",
        serviceName_ko: "투자 & 프로젝트 자문",
        tagline_id: "Studi kelayakan bankable, analisis finansial & komersial, serta pengembangan proyek investasi.",
        tagline_en: "Bankable feasibility studies, commercial & financial valuation, and capital project development.",
        tagline_ko: "금융권 제출용 타당성 연구(FS), 상업\xb7재무 분석 및 프로젝트 개발 자문.",
        step1: {
            step: 1,
            title_id: "Ruang Lingkup Proyek & Studi",
            title_en: "Project & Advisory Scope",
            title_ko: "프로젝트 및 자문 범위",
            question_id: "Apa kebutuhan utama analisis investasi atau pengembangan proyek Anda?",
            question_en: "What is the primary requirement for your investment or project advisory mandate?",
            question_ko: "귀하의 투자 또는 프로젝트 자문 의뢰의 핵심 목적은 무엇입니까?",
            options: [
                {
                    id: "bankable_fs",
                    label_id: "Studi Kelayakan Bankable (Bankable Feasibility Study)",
                    label_en: "Bankable Feasibility Study (Bank/Investor Ready)",
                    label_ko: "금융권\xb7투자자 제출용 타당성 조사 (Bankable FS)",
                    detail_id: "Penyusunan FS komprehensif untuk pengajuan pembiayaan/investor",
                    detail_en: "Comprehensive FS for syndication / institutional capital",
                    detail_ko: "프로젝트 파이낸싱 및 기관 투자 유치를 위한 종합 연구"
                },
                {
                    id: "financial_due_diligence",
                    label_id: "Analisis Komersial & Finansial (Due Diligence & Valuation)",
                    label_en: "Commercial & Financial Due Diligence / Valuation",
                    label_ko: "상업\xb7재무 실사(Due Diligence) 및 기업가치 평가",
                    detail_id: "Penilaian valuasi objektif dan analisis sensitivitas risiko",
                    detail_en: "Objective valuation modeling and financial sensitivity stress-test",
                    detail_ko: "객관적 기업가치 평가 모델링 및 재무적 스트레스 테스트"
                },
                {
                    id: "project_development",
                    label_id: "Pengembangan Proyek Baru (Greenfield / Brownfield)",
                    label_en: "Capital Project Development (Greenfield / Brownfield)",
                    label_ko: "신규 프로젝트 개발 (그린필드 / 브라운필드 확장)",
                    detail_id: "Penyusunan business plan dan struktur operasional proyek",
                    detail_en: "Structuring project masterplan, commercial model & operations",
                    detail_ko: "프로젝트 마스터플랜 및 사업 모델 구축"
                },
                {
                    id: "opportunity_assessment",
                    label_id: "Penilaian Peluang Investasi Independen",
                    label_en: "Independent Investment Opportunity Assessment",
                    label_ko: "독립적 투자 기회 및 타당성 사전 평가",
                    detail_id: "Review pihak ketiga sebelum komitmen modal disahkan",
                    detail_en: "Third-party independent review before capital commitment",
                    detail_ko: "최종 투자 집행 전 제3자 독립 자문 검토"
                }
            ]
        },
        step2: {
            step: 2,
            title_id: "Estimasi Nilai / Skala Investasi",
            title_en: "Estimated Investment Ticket Size",
            title_ko: "예상 투자 규모 (Ticket Size)",
            question_id: "Berapa perkiraan nilai belanja modal (CAPEX) atau tiket investasi proyek ini?",
            question_en: "What is the estimated capital expenditure (CAPEX) or investment ticket size?",
            question_ko: "본 프로젝트의 예상 자본적 지출(CAPEX) 또는 투자 규모는 어느 정도입니까?",
            options: [
                {
                    id: "ticket_small",
                    label_id: "< Rp 25 Miliar (< USD 1.5 Juta)",
                    label_en: "< IDR 25 Billion (< USD 1.5 Million)",
                    label_ko: "250억 루피아 미만 (약 150만 달러 미만)",
                    detail_id: "Skala menengah / ekspansi fasilitas awal",
                    detail_en: "Mid-scale expansion or initial facility pilot",
                    detail_ko: "중견 규모 확장 또는 파일럿 프로젝트"
                },
                {
                    id: "ticket_mid",
                    label_id: "Rp 25 Miliar - 100 Miliar (USD 1.5M - 6M)",
                    label_en: "IDR 25 Billion - 100 Billion (USD 1.5M - 6M)",
                    label_ko: "250억 - 1,000억 루피아 (약 150만 - 600만 달러)",
                    detail_id: "Proyek komersial terstruktur",
                    detail_en: "Structured commercial capital development",
                    detail_ko: "정형화된 상업용 자본 개발 프로젝트"
                },
                {
                    id: "ticket_large",
                    label_id: "Rp 100 Miliar - 500 Miliar (USD 6M - 30M)",
                    label_en: "IDR 100 Billion - 500 Billion (USD 6M - 30M)",
                    label_ko: "1,000억 - 5,000억 루피아 (약 600만 - 3,000만 달러)",
                    detail_id: "Investasi skala korporasi besar / sindikasi",
                    detail_en: "Large enterprise syndicated investment mandate",
                    detail_ko: "대기업 신디케이트 투자 및 인프라 프로젝트"
                },
                {
                    id: "ticket_mega",
                    label_id: "> Rp 500 Miliar (> USD 30 Juta / Mega Project)",
                    label_en: "> IDR 500 Billion (> USD 30 Million / Mega Project)",
                    label_ko: "5,000억 루피아 이상 (3,000만 달러 이상 / 대형 프로젝트)",
                    detail_id: "Mega proyek infrastruktur / industri strategis",
                    detail_en: "Mega infrastructure / national strategic priority asset",
                    detail_ko: "메가 인프라 / 국가 전략 프로젝트 규모"
                }
            ]
        }
    },
    market_access: {
        pillarKey: "market_access",
        serviceName_id: "Market Access & Business Expansion",
        serviceName_en: "Market Access & Business Expansion",
        serviceName_ko: "시장 접근 & 사업 확장",
        tagline_id: "Riset pasar mendalam, strategi masuk pasar, dan fasilitasi jaringan distributor/mitra lokal.",
        tagline_en: "Deep market intelligence, market entry strategy, and local distributor/partner facilitation.",
        tagline_ko: "심층 시장 조사, 시장 진입 전략 및 현지 유통 파트너 매칭.",
        step1: {
            step: 1,
            title_id: "Target Wilayah & Arah Ekspansi",
            title_en: "Expansion Territory & Target Market",
            title_ko: "목표 시장 및 확장 권역",
            question_id: "Ke mana arah target ekspansi pasar yang sedang direncanakan perusahaan Anda?",
            question_en: "What is the geographic scope of your enterprise expansion plans?",
            question_ko: "현재 추진 중인 시장 확장의 주요 대상 지역은 어디입니까?",
            options: [
                {
                    id: "domestic_regional",
                    label_id: "Ekspansi Domestik Regional (Antar-Pulau Indonesia)",
                    label_en: "Domestic Regional Expansion (Inter-Island Indonesia)",
                    label_ko: "인도네시아 국내 권역 확장 (자바 외 도서 지역 진출)",
                    detail_id: "Penetrasi ke wilayah luar Jawa, Sumatra, Kalimantan, Sulawesi",
                    detail_en: "Penetration into outer-island Indonesian commercial hubs",
                    detail_ko: "자바 외 주요 상업 거점 지역 유통망 확대"
                },
                {
                    id: "foreign_entry_indonesia",
                    label_id: "Perusahaan Asing Masuk Pasar Indonesia (Inbound Entry)",
                    label_en: "Foreign Enterprise Inbound Entry into Indonesia",
                    label_ko: "해외 기업의 인도네시아 신규 진출 (Inbound PMA)",
                    detail_id: "Pendirian PT PMA, izin operasional, dan kepatuhan lokal",
                    detail_en: "Foreign direct investment setup (PT PMA) and local licensing",
                    detail_ko: "외국인 투자법인(PT PMA) 설립 및 현지 규제 승인"
                },
                {
                    id: "export_international",
                    label_id: "Ekspansi Ekspor & Pasar Internasional (Outbound Global)",
                    label_en: "Export Growth & International Outbound Markets",
                    label_ko: "인도네시아 기업의 해외 수출 및 글로벌 확장 (Outbound)",
                    detail_id: "Membuka akses ke pasar ASEAN, Asia Timur, Timur Tengah",
                    detail_en: "Accessing ASEAN, East Asia, and global commercial corridors",
                    detail_ko: "ASEAN 및 동아시아 등 해외 시장 판로 개척"
                }
            ]
        },
        step2: {
            step: 2,
            title_id: "Tantangan Utama & Bantuan yang Dibutuhkan",
            title_en: "Key Commercial Challenge & Required Support",
            title_ko: "핵심 과제 및 필요 지원 사항",
            question_id: "Apa tantangan paling krusial yang memerlukan pendampingan konsultan?",
            question_en: "What is the most critical hurdle where Inpartner advisory is needed?",
            question_ko: "인파트너의 전문 지원이 가장 절실한 핵심 과제는 무엇입니까?",
            options: [
                {
                    id: "intelligence_regulatory",
                    label_id: "Riset Intelijen Pasar & Fasilitasi Regulasi/Perizinan",
                    label_en: "Market Intelligence & Regulatory Licensing Facilitation",
                    label_ko: "시장 인텔리전스 분석 및 인허가\xb7규제 승인 지원",
                    detail_id: "Studi kompetitor, pemetaan regulasi, BPOM/Halal/SNI",
                    detail_en: "Competitor benchmarking, regulatory navigation, local compliance",
                    detail_ko: "경쟁사 분석, 규제 환경 매핑 및 필수 인허가 취득"
                },
                {
                    id: "distributor_matching",
                    label_id: "Pencarian Mitra Distribusi & Business Matching",
                    label_en: "Local Distributor Matching & Strategic Partner Search",
                    label_ko: "현지 총판\xb7유통사 발굴 및 비즈니스 매칭",
                    detail_id: "Identifikasi distributor kredibel dan uji latar belakang komersial",
                    detail_en: "Vetting qualified distribution channels and commercial background checks",
                    detail_ko: "신뢰할 수 있는 현지 총판 검증 및 파트너십 협상"
                },
                {
                    id: "full_gtm_execution",
                    label_id: "Eksekusi Go-To-Market (GTM) Terintegrasi",
                    label_en: "End-to-End Go-To-Market (GTM) Strategy & Execution",
                    label_ko: "엔드투엔드 시장 진입(GTM) 전략 수립 및 실행",
                    detail_id: "Pendampingan terpadu dari strategi hingga peluncuran komersial",
                    detail_en: "Turnkey advisory from strategy formulation to commercial launch",
                    detail_ko: "전략 수립부터 상업 론칭까지 턴키 자문 지원"
                }
            ]
        }
    },
    cross_border: {
        pillarKey: "cross_border",
        serviceName_id: "Cross-Border & Technology Advisory",
        serviceName_en: "Cross-Border & Technology Advisory",
        serviceName_ko: "크로스보더 & 기술 자문",
        tagline_id: "Kemitraan strategis lintas negara, Joint Venture (JV), alih teknologi, dan alih pengetahuan.",
        tagline_en: "Cross-border strategic alliances, Joint Ventures (JV), technology transfer, and knowledge licensing.",
        tagline_ko: "국경 간 전략적 제휴, 합작투자(JV), 기술 이전 및 지식재산권 라이선싱 자문.",
        step1: {
            step: 1,
            title_id: "Skema Kerjasama Lintas Batas",
            title_en: "Cross-Border Structure & Mandate",
            title_ko: "크로스보더 협력 형태",
            question_id: "Apa bentuk skema kemitraan lintas batas yang ingin diwujudkan?",
            question_en: "What structural cross-border arrangement does your company envision?",
            question_ko: "귀사가 추진하고자 하는 국경 간 파트너십의 형태는 무엇입니까?",
            options: [
                {
                    id: "joint_venture",
                    label_id: "Pembentukan Joint Venture (JV) / Usaha Patungan",
                    label_en: "International Joint Venture (JV) Formation",
                    label_ko: "국제 합작투자 법인(Joint Venture) 설립",
                    detail_id: "Struktur kepemilikan saham, shareholder agreement, tata kelola JV",
                    detail_en: "Equity split, shareholders agreement, and joint governance",
                    detail_ko: "지분 구조 설계, 주주간 계약(SHA) 및 거버넌스 수립"
                },
                {
                    id: "tech_knowledge_transfer",
                    label_id: "Alih Teknologi & Alih Pengetahuan (Technology Transfer)",
                    label_en: "Technology & Knowledge Transfer Licensing",
                    label_ko: "기술 이전, 라이선싱 및 노하우 전수",
                    detail_id: "Perjanjian lisensi paten, transfer proses manufaktur/SOP",
                    detail_en: "Patent licensing, manufacturing process transfer, and technical training",
                    detail_ko: "특허 라이선스 계약, 제조 공정 및 기술 노하우 현지화"
                },
                {
                    id: "inbound_fdi",
                    label_id: "Pendampingan Investasi Asing Masuk (Inbound FDI)",
                    label_en: "Inbound Foreign Direct Investment (FDI) Advisory",
                    label_ko: "외국인 직접투자(FDI) 유치 및 현지화 자문",
                    detail_id: "Struktur modal asing, kemitraan strategis dengan konglomerasi lokal",
                    detail_en: "Structuring foreign capital and alliance with domestic conglomerates",
                    detail_ko: "외자 유치 구조화 및 현지 주요 그룹사와의 전략 제휴"
                },
                {
                    id: "outbound_partnership",
                    label_id: "Ekspansi Mitra Strategis ke Luar Negeri (Outbound)",
                    label_en: "Outbound Strategic Alliance & Overseas Expansion",
                    label_ko: "국내 기업의 해외 파트너 발굴 및 진출 자문",
                    detail_id: "Menemukan mitra internasional untuk ekspansi korporasi Indonesia",
                    detail_en: "Securing international partners for Indonesian enterprise growth",
                    detail_ko: "인도네시아 기업의 글로벌 파트너 발굴 및 현지 안착"
                }
            ]
        },
        step2: {
            step: 2,
            title_id: "Asal Negara / Mitra Counterparty",
            title_en: "Counterparty Origin / Target Geography",
            title_ko: "협력 대상 국가 및 파트너 권역",
            question_id: "Dari kawasan negara mana asal mitra counterparty yang terlibat atau dicari?",
            question_en: "What is the regional origin of the counterparty involved or sought?",
            question_ko: "협력 대상 파트너 또는 진출 대상 지역은 어느 권역입니까?",
            options: [
                {
                    id: "origin_apac",
                    label_id: "Asia Pasifik (Korea Selatan, Jepang, Tiongkok, Singapura, ASEAN)",
                    label_en: "Asia-Pacific (South Korea, Japan, China, Singapore, ASEAN)",
                    label_ko: "아시아 태평양 (한국, 일본, 중국, 싱가포르, ASEAN)",
                    detail_id: "Koridor investasi dan alih teknologi paling aktif di Indonesia",
                    detail_en: "Most active technology transfer and investment corridor to Indonesia",
                    detail_ko: "인도네시아 최대 투자 및 기술 이전 협력 권역"
                },
                {
                    id: "origin_west",
                    label_id: "Amerika Utara & Eropa (USA, UK, Jerman, Uni Eropa)",
                    label_en: "North America & Europe (USA, UK, Germany, European Union)",
                    label_ko: "북미 및 유럽 (미국, 영국, 독일, 유럽연합)",
                    detail_id: "Standar tata kelola internasional dan teknologi tingkat tinggi",
                    detail_en: "High-tech solutions and stringent ESG / international compliance",
                    detail_ko: "글로벌 선진 기술 및 엄격한 ESG\xb7거버넌스 표준 준수"
                },
                {
                    id: "origin_middle_east",
                    label_id: "Timur Tengah & Kawasan Lainnya (UAE, Saudi Arabia)",
                    label_en: "Middle East & Other Corridors (UAE, Saudi Arabia)",
                    label_ko: "중동 및 기타 지역 (UAE, 사우디아라비아 등)",
                    detail_id: "Sovereign wealth funds dan investasi modal energi/infrastruktur",
                    detail_en: "Sovereign wealth funds and energy / infrastructure capital",
                    detail_ko: "국부펀드 및 에너지\xb7인프라 대형 자본 협력"
                },
                {
                    id: "searching_counterparty",
                    label_id: "Belum Ada Mitra (Membutuhkan Identifikasi Mitra dari Nol)",
                    label_en: "No Counterparty Yet (Require Inpartner to Identify Partners)",
                    label_ko: "파트너 미정 (인파트너를 통한 해외 파트너 발굴 희망)",
                    detail_id: "INPARTNER memfasilitasi kurasi dan business matching global",
                    detail_en: "INPARTNER facilitates global curation, screening & matching",
                    detail_ko: "인파트너의 글로벌 네트워크를 통한 적격 파트너 추천"
                }
            ]
        }
    },
    human_capital: {
        pillarKey: "human_capital",
        serviceName_id: "Human Capital & Organization",
        serviceName_en: "Human Capital & Organization",
        serviceName_ko: "인적 자원 & 조직 개발",
        tagline_id: "Pencarian eksekutif (Executive Search), perancangan organisasi, dan pengembangan talenta pimpinan.",
        tagline_en: "C-Suite executive headhunting, organization design, and leadership capacity building.",
        tagline_ko: "C-레벨 임원 헤드헌팅, 조직 설계 및 핵심 리더십 역량 강화 자문.",
        step1: {
            step: 1,
            title_id: "Fokus Solusi Human Capital",
            title_en: "Human Capital Focus Area",
            title_ko: "인적 자원 자문 중점 영역",
            question_id: "Apa fokus kebutuhan penguatan organisasi atau talenta korporasi Anda?",
            question_en: "What is the primary human capital or organizational challenge you aim to solve?",
            question_ko: "귀사의 조직 강화 또는 핵심 인재 영입과 관련된 주요 과제는 무엇입니까?",
            options: [
                {
                    id: "executive_search",
                    label_id: "Pencarian Eksekutif (C-Suite & Board Headhunting)",
                    label_en: "Executive Search (C-Suite & Board Headhunting)",
                    label_ko: "임원 영입 (C-Suite 및 이사회급 헤드헌팅)",
                    detail_id: "Perekrutan Direktur Utama, CFO, COO, Head of Business Unit",
                    detail_en: "Recruiting CEO, CFO, COO, and strategic practice leaders",
                    detail_ko: "대표이사, CFO, 사업총괄 등 핵심 최고경영진 영입"
                },
                {
                    id: "organization_design",
                    label_id: "Desain Organisasi & Arsitektur Kinerja (KPI & Grading)",
                    label_en: "Organization Design & Performance Architecture",
                    label_ko: "조직 재설계 및 성과 평가 체계(KPI/직급) 고도화",
                    detail_id: "Restrukturisasi struktur divisi, matriks peran, dan sistem insentif",
                    detail_en: "Divisional structuring, job grading, and performance incentive alignment",
                    detail_ko: "조직도 개편, 직무 분석 및 성과 연동 인센티브 체계 정립"
                },
                {
                    id: "leadership_capacity",
                    label_id: "Program Pelatihan & Evaluasi Kepemimpinan Eksekutif",
                    label_en: "Executive Leadership Assessment & Capacity Building",
                    label_ko: "리더십 역량 평가 및 임원 맞춤형 교육 프로그램",
                    detail_id: "Executive business program dan pembinaan suksesi kepemimpinan",
                    detail_en: "Executive coaching, succession planning, and strategic leadership programs",
                    detail_ko: "경영진 코칭, 승계 계획 수립 및 전략적 리더십 교육"
                }
            ]
        },
        step2: {
            step: 2,
            title_id: "Skala / Kedalaman Penugasan",
            title_en: "Engagement Depth & Breadth",
            title_ko: "자문 범위 및 대상 규모",
            question_id: "Berapa cakupan pimpinan atau skala organisasi yang akan tercakup?",
            question_en: "What is the scope of leadership positions or organizational tiers involved?",
            question_ko: "프로젝트에 참여할 임원 직책 수 또는 대상 조직 범위는 어느 정도입니까?",
            options: [
                {
                    id: "key_executives",
                    label_id: "1 - 3 Posisi Pimpinan Kunci (Critical Executive Roles)",
                    label_en: "1 - 3 Critical Executive Roles",
                    label_ko: "핵심 임원 1~3개 직책 (긴급 배치)",
                    detail_id: "Penempatan mendesak posisi pengambil keputusan vital",
                    detail_en: "Immediate placement for top strategic leadership",
                    detail_ko: "의사결정 핵심 직책에 대한 신속한 영입"
                },
                {
                    id: "department_level",
                    label_id: "Tingkat Divisi / Direktorat Terpilih (Departmental Scope)",
                    label_en: "Specific Directorate / Departmental Scope",
                    label_ko: "특정 본부 / 부서 단위 조직 개편",
                    detail_id: "Peningkatan efisiensi operasional unit bisnis spesifik",
                    detail_en: "Targeted modernization for selected strategic units",
                    detail_ko: "특정 핵심 사업부의 조직 역량 최적화"
                },
                {
                    id: "enterprise_overhaul",
                    label_id: "Menyeluruh Seluruh Korporasi (Enterprise-Wide Overhaul)",
                    label_en: "Enterprise-Wide Strategic Transformation",
                    label_ko: "전사적 조직 진단 및 전면적 혁신",
                    detail_id: "Transformasi budaya kerja, KPI, dan struktur seluruh grup usaha",
                    detail_en: "Company-wide restructuring of culture, grading, and talent matrix",
                    detail_ko: "그룹 전사 차원의 조직 문화, 직무 체계 및 거버넌스 혁신"
                }
            ]
        }
    }
};
/**
 * Returns the diagnostic decision tree for a given advisory pillar.
 */ function diagnostic_getDiagnosticTree(pillarKey) {
    if (pillarKey in DIAGNOSTIC_DECISION_TREES) {
        return DIAGNOSTIC_DECISION_TREES[pillarKey];
    }
    return null;
}
/**
 * Returns all supported diagnostic pillar trees.
 */ function getAllDiagnosticPillars() {
    return Object.values(DIAGNOSTIC_DECISION_TREES);
}
/**
 * Infers the diagnostic pillar key from query text, intent, or service name.
 */ function diagnostic_detectDiagnosticPillar(textOrIntent) {
    const clean = (textOrIntent || "").trim();
    if (clean in DIAGNOSTIC_DECISION_TREES) {
        return clean;
    }
    const query = clean.toLowerCase();
    if (/strategy|corporate[\s_-]*advisory|m&a|merger|akuisisi|ipo|pre-ipo|restrukturisasi|restructuring|turnaround|divestment/i.test(query)) {
        return "strategy_corporate";
    }
    if (/feasibility|studi\s*kelayakan|investment|investasi|proyek|project[\s_-]*advisory|due\s*diligence|valuation|capex/i.test(query)) {
        return "investment_advisory";
    }
    if (/market[\s_-]*access|ekspansi\s*bisnis|business[\s_-]*expansion|market[\s_-]*entry|masuk\s*pasar|distributor|business\s*matching|gtm/i.test(query)) {
        return "market_access";
    }
    if (/cross[\s_-]*border|lintas\s*batas|joint\s*venture|jv|technology\s*transfer|alih\s*teknologi|foreign\s*investment|pt\s*pma|pma/i.test(query)) {
        return "cross_border";
    }
    if (/human[\s_-]*capital|organization|organisasi|executive\s*search|head\s*hunting|recruitment|kepemimpinan|leadership|kpi|pelatihan/i.test(query)) {
        return "human_capital";
    }
    return null;
}
/**
 * Generates an executive scoping synthesis from selected diagnostic choices.
 */ function diagnostic_generateScopingSummary(pillarKey, step1ChoiceId, step2ChoiceId, lang = "id") {
    const tree = DIAGNOSTIC_DECISION_TREES[pillarKey];
    if (!tree) {
        return {
            scopingSummary: "General Scoping Consultation",
            pillarName: "Advisory Consultation",
            step1Label: step1ChoiceId,
            step2Label: step2ChoiceId
        };
    }
    const step1Opt = tree.step1.options.find((o)=>o.id === step1ChoiceId);
    const step2Opt = tree.step2.options.find((o)=>o.id === step2ChoiceId);
    const pillarName = lang === "ko" ? tree.serviceName_ko : lang === "en" ? tree.serviceName_en : tree.serviceName_id;
    const step1Label = step1Opt ? lang === "ko" ? step1Opt.label_ko : lang === "en" ? step1Opt.label_en : step1Opt.label_id : step1ChoiceId;
    const step2Label = step2Opt ? lang === "ko" ? step2Opt.label_ko : lang === "en" ? step2Opt.label_en : step2Opt.label_id : step2ChoiceId;
    let scopingSummary = "";
    if (lang === "ko") {
        scopingSummary = `[${pillarName}] 중점: ${step1Label} • 자문 요건: ${step2Label}`;
    } else if (lang === "en") {
        scopingSummary = `[${pillarName}] Focus: ${step1Label} • Mandate Scope: ${step2Label}`;
    } else {
        scopingSummary = `[${pillarName}] Fokus: ${step1Label} • Lingkup Kebutuhan: ${step2Label}`;
    }
    return {
        scopingSummary,
        pillarName,
        step1Label,
        step2Label
    };
}

;// CONCATENATED MODULE: ./src/components/Chatbot/styled.tsx
/* =========================================================================
 * Inpartner AI Advisory Assistant - Elevated Emotion Design System
 * Modern Executive Aesthetic (Consistent with Inpartner Brand & Tech Stack)
 * ========================================================================= */ 

/* =========================================================================
 * Keyframe Animations
 * ========================================================================= */ const fadeIn = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("from{opacity:0;}to{opacity:1;}")));
const zoomIn = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("from{opacity:0;transform:scale(0.96);}to{opacity:1;transform:scale(1);}")));
const slideUp = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("from{opacity:0;transform:translateY(14px);}to{opacity:1;transform:translateY(0);}")));
const pulse = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{opacity:1;}50%{opacity:0.45;}")));
const bounce = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%,100%{transform:translateY(0);}50%{transform:translateY(-4px);}")));
const ping = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%{transform:scale(1);opacity:0.75;}75%,100%{transform:scale(1.6);opacity:0;}")));
const pulseRing = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("0%{transform:scale(0.95);opacity:0.7;}50%{transform:scale(1.15);opacity:0.2;}100%{transform:scale(1.25);opacity:0;}")));
const rotateSlow = /*#__PURE__*/ (/* unused pure expression or super */ null && (keyframes("from{transform:rotate(0deg);}to{transform:rotate(360deg);}")));
/* =========================================================================
 * Root Container & Reset Isolation
 * ========================================================================= */ const styled_Root = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap890"
})("box-sizing:border-box;font-family:'Plus Jakarta Sans',Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;color:#0f172a;line-height:1.5;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;*,*::before,*::after{box-sizing:border-box;}/* Custom 5px Scrollbar */\n  *::-webkit-scrollbar{width:5px;height:5px;}*::-webkit-scrollbar-track{background:transparent;}*::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:9999px;&:hover{background:#94a3b8;}}*{scrollbar-width:thin;scrollbar-color:#cbd5e1 transparent;}@media (prefers-reduced-motion:reduce){*,::before,::after{animation-duration:0.01ms !important;animation-iteration-count:1 !important;transition-duration:0.01ms !important;scroll-behavior:auto !important;}}")));
/* =========================================================================
 * Floating Launcher Component
 * ========================================================================= */ const styled_LauncherWrap = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap891"
})("position:fixed;bottom:1.5rem;right:1.5rem;z-index:99999;display:flex;flex-direction:column;align-items:flex-end;gap:0.75rem;pointer-events:none;")));
const styled_LauncherRow = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap892"
})("display:flex;align-items:center;gap:0.75rem;pointer-events:auto;")));
const styled_LauncherBtn = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap893"
})("position:relative;display:flex;align-items:center;justify-content:center;width:3.75rem;height:3.75rem;border-radius:9999px;background:linear-gradient(135deg,#0070ba 0%,#004d82 100%);color:#ffffff;border:none;box-shadow:0 14px 32px -4px rgba(0,112,186,0.45),0 4px 12px -2px rgba(0,112,186,0.25),inset 0 1px 1px rgba(255,255,255,0.3);cursor:pointer;transition:all 0.3s cubic-bezier(0.16,1,0.3,1);/* Subtle Radar Ambient Wave Ring */\n  &::before{content:'';position:absolute;inset:-4px;border-radius:9999px;background:radial-gradient(\n      circle,rgba(56,189,248,0.4) 0%,rgba(0,112,186,0) 70%\n    );z-index:-1;animation:", pulseRing, " 3s ease-out infinite;}/* Live green beacon on top-right */\n  .launcher-online-beacon{position:absolute;top:2px;right:2px;width:11px;height:11px;border-radius:9999px;background:#10b981;border:2px solid #ffffff;box-shadow:0 0 6px #10b981;}&:hover{background:linear-gradient(135deg,#005fa0 0%,#003e6b 100%);transform:scale(1.06) translateY(-2px);box-shadow:0 20px 40px -4px rgba(0,112,186,0.55),0 6px 16px -2px rgba(0,112,186,0.3);}&:active{transform:scale(0.95);}")));
const styled_ChatWindow = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap894"
})("position:fixed;bottom:0.75rem;right:0.75rem;z-index:99999;width:calc(100vw - 20px);max-width:418px;height:min(640px,calc(100dvh - 20px));display:flex;flex-direction:column;background:#ffffff;border-radius:1.25rem;border:1px solid rgba(226,232,240,0.95);box-shadow:0 24px 60px -12px rgba(11,37,69,0.22),0 8px 24px -6px rgba(0,112,186,0.12),0 0 0 1px rgba(226,232,240,0.85);overflow:hidden;animation:", fadeIn, " 0.2s cubic-bezier(0.16,1,0.3,1),", zoomIn, " 0.2s cubic-bezier(0.16,1,0.3,1);transition:all 0.3s cubic-bezier(0.16,1,0.3,1);@media (min-width:640px){bottom:1.5rem;right:1.5rem;width:418px;height:640px;max-height:calc(100dvh - 36px);border-radius:1.375rem;}", ({ embedded  })=>embedded && css`
      position: relative;
      bottom: auto;
      right: auto;
      width: 100%;
      height: 100%;
      max-width: none;
      border-radius: 0;
      box-shadow: none;
      border: none;
    `)));
/* =========================================================================
 * Header Component
 * ========================================================================= */ const styled_ChatHeader = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap895"
})("position:relative;top:0;z-index:20;flex-shrink:0;display:flex;align-items:center;justify-content:space-between;padding:0.625rem 0.875rem;background:rgba(255,255,255,0.96);backdrop-filter:blur(16px);border-bottom:1px solid rgba(226,232,240,0.85);/* Top Executive Accent Stripe */\n  &::before{content:'';position:absolute;top:0;left:0;right:0;height:2.5px;background:linear-gradient(90deg,#005fa0 0%,#0088e8 50%,#38bdf8 100%);}@media (min-width:640px){padding:0.75rem 1rem;}")));
const styled_HeaderBrand = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap896"
})("display:flex;align-items:center;gap:0.5rem;min-width:0;.header-avatar{position:relative;width:2.375rem;height:2.375rem;border-radius:0.6875rem;background:linear-gradient(135deg,#f0f7fd 0%,#e2eef9 100%);border:1px solid rgba(0,112,186,0.2);display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 8px -2px rgba(0,112,186,0.15);}.header-title-row{display:flex;align-items:center;gap:0.35rem;}.header-verified-tag{display:inline-flex;align-items:center;gap:0.2rem;font-size:8.5px;font-weight:700;color:#0070ba;background:rgba(0,112,186,0.08);border:1px solid rgba(0,112,186,0.15);border-radius:9999px;padding:0.0625rem 0.35rem;letter-spacing:0.02em;text-transform:uppercase;white-space:nowrap;}")));
const styled_HeaderTitle = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("h2", {
    target: "e9pap897"
})("font-size:0.875rem;font-weight:800;color:#0b2545;margin:0;line-height:1.25;letter-spacing:-0.015em;white-space:nowrap;@media (min-width:640px){font-size:0.9375rem;}")));
const styled_OnlineStatus = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap898"
})("display:flex;align-items:center;gap:0.375rem;font-size:10.5px;color:#059669;font-weight:600;margin-top:0.0625rem;")));
const styled_OnlineDot = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("span", {
    target: "e9pap899"
})("width:7px;height:7px;border-radius:9999px;background:#10b981;box-shadow:0 0 0 2px rgba(16,185,129,0.25);animation:", pulse, " 2s infinite;&.pinned{position:absolute;bottom:-1px;right:-1px;border:2px solid #ffffff;box-shadow:0 0 4px #10b981;}")));
const styled_HeaderActions = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8910"
})("display:flex;align-items:center;gap:0.375rem;")));
/* Segmented Language Selector */ const styled_LangSegmented = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8911"
})("display:inline-flex;align-items:center;background:#f1f5f9;border:1px solid rgba(226,232,240,0.95);border-radius:9999px;padding:2px;gap:1px;")));
const styled_LangSegmentBtn = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8912"
})("border:none;background:", ({ active  })=>active ? "#0070ba" : "transparent", ";color:", ({ active  })=>active ? "#ffffff" : "#64748b", ";font-size:10px;font-weight:", ({ active  })=>active ? 700 : 500, ";padding:0.15rem 0.375rem;border-radius:9999px;cursor:pointer;transition:all 0.18s cubic-bezier(0.16,1,0.3,1);box-shadow:", ({ active  })=>active ? "0 1px 4px rgba(0, 112, 186, 0.3)" : "none", ";&:hover{color:", ({ active  })=>active ? "#ffffff" : "#1e293b", ";}")));
/* Legacy fallback for LangPill */ const LangPill = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8913"
})("display:flex;align-items:center;gap:0.25rem;padding:0.25rem 0.5rem;font-size:11px;font-weight:600;border-radius:9999px;border:1px solid rgba(226,232,240,0.95);background:rgba(248,250,252,0.9);color:#334155;cursor:pointer;transition:all 0.2s ease;&:hover{border-color:#0070ba;background:rgba(0,112,186,0.06);}")));
const styled_IconBtn = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8914"
})("display:flex;align-items:center;justify-content:center;width:1.875rem;height:1.875rem;border-radius:0.5rem;border:none;background:transparent;color:#94a3b8;cursor:pointer;transition:all 0.2s ease;&:hover{color:#1e293b;background:#f1f5f9;}&.spin-on-hover:hover svg{transform:rotate(-180deg);transition:transform 0.4s ease;}")));
/* =========================================================================
 * Chat Body
 * ========================================================================= */ const styled_ChatBody = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8915"
})("flex:1 1 0%;min-height:0;overflow-y:auto;overscroll-behavior:contain;scroll-behavior:smooth;padding:0.875rem 1rem;background:#ffffff;@media (min-width:640px){padding:1rem 1.125rem;}")));
/* =========================================================================
 * Welcome Screen (Zero State) - Tuned for Perfect Viewport Fit
 * ========================================================================= */ const styled_WelcomeView = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8916"
})("min-height:100%;max-width:356px;margin:0 auto;width:100%;padding:0.25rem 0 0.5rem 0;display:flex;flex-direction:column;align-items:center;justify-content:flex-start;animation:", fadeIn, " 0.3s ease;")));
const styled_BrandAvatarBox = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8917"
})("position:relative;width:3.25rem;height:3.25rem;border-radius:0.875rem;background:linear-gradient(135deg,#f0f7fd 0%,#ffffff 50%,#e6f3fd 100%);border:1px solid rgba(0,112,186,0.18);display:flex;align-items:center;justify-content:center;margin-bottom:0.375rem;box-shadow:0 6px 16px -4px rgba(0,112,186,0.15),0 0 0 3px rgba(0,112,186,0.05);transition:transform 0.25s cubic-bezier(0.16,1,0.3,1);/* Ambient Glow Aura */\n  &::before{content:'';position:absolute;inset:-6px;border-radius:1.25rem;background:radial-gradient(\n      circle,rgba(56,189,248,0.2) 0%,transparent 70%\n    );z-index:-1;}&:hover{transform:translateY(-2px);}")));
const styled_WelcomeTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8918"
})("display:inline-flex;align-items:center;gap:0.375rem;font-size:10.5px;font-weight:600;color:#0070ba;background:rgba(0,112,186,0.07);border:1px solid rgba(0,112,186,0.15);border-radius:9999px;padding:0.15rem 0.5rem;margin-bottom:0.25rem;")));
const styled_WelcomeHeading = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("h1", {
    target: "e9pap8919"
})("font-size:1.0625rem;font-weight:800;color:#0f172a;text-align:center;line-height:1.25;margin:0;letter-spacing:-0.015em;@media (min-width:640px){font-size:1.125rem;}")));
const styled_WelcomeSub = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("p", {
    target: "e9pap8920"
})("font-size:0.75rem;color:#64748b;text-align:center;margin-top:0.2rem;margin-bottom:0.5rem;line-height:1.4;max-width:320px;font-weight:400;")));
/* Executive Action Cards */ const styled_ActionCardList = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8921"
})("display:flex;flex-direction:column;gap:0.375rem;width:100%;")));
const styled_ActionCard = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8922"
})("width:100%;padding:0.5625rem 0.75rem;border-radius:0.8125rem;background:#ffffff;border:1px solid rgba(226,232,240,0.95);display:flex;align-items:center;gap:0.6875rem;cursor:pointer;text-align:left;transition:all 0.22s cubic-bezier(0.16,1,0.3,1);box-shadow:0 2px 6px rgba(0,30,60,0.03);.action-icon-box{width:2.125rem;height:2.125rem;border-radius:0.5625rem;display:flex;align-items:center;justify-content:center;flex-shrink:0;transition:transform 0.2s ease;", ({ colorScheme  })=>colorScheme === "cyan" ? css`
            background: linear-gradient(135deg, #0284c7 0%, #0369a1 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(2, 132, 199, 0.28);
          ` : colorScheme === "emerald" ? css`
            background: linear-gradient(135deg, #059669 0%, #047857 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(5, 150, 105, 0.28);
          ` : css`
            background: linear-gradient(135deg, #0070ba 0%, #005fa0 100%);
            color: #ffffff;
            box-shadow: 0 2px 8px rgba(0, 112, 186, 0.28);
          `, "}.action-content{flex:1;min-width:0;}.action-title{font-size:0.8125rem;font-weight:700;color:#0f172a;line-height:1.3;transition:color 0.2s ease;}.action-desc{font-size:0.71875rem;color:#64748b;margin-top:0.125rem;line-height:1.35;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:1;overflow:hidden;}.action-arrow{width:0.875rem;height:0.875rem;color:#94a3b8;flex-shrink:0;transition:all 0.2s ease;}&:hover{border-color:rgba(0,112,186,0.35);background:linear-gradient(\n      135deg,rgba(240,247,253,0.6) 0%,#ffffff 100%\n    );transform:translateY(-2px);box-shadow:0 8px 18px -4px rgba(0,112,186,0.14),0 2px 6px rgba(0,0,0,0.02);.action-icon-box{transform:scale(1.05);}.action-title{color:#0070ba;}.action-arrow{color:#0070ba;transform:translateX(3px);}}&:active{transform:scale(0.99);}")));
/* Quick Prompt Pills */ const QuickPillsWrap = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8923"
})("display:flex;flex-wrap:wrap;align-items:center;justify-content:center;gap:0.3125rem;margin-top:0.45rem;width:100%;")));
const QuickPillBtn = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8924"
})("border:1px solid rgba(226,232,240,0.95);background:#f8fafc;color:#475569;font-size:0.65625rem;font-weight:600;padding:0.25rem 0.5625rem;border-radius:9999px;cursor:pointer;transition:all 0.18s ease;&:hover{background:#f0f7fd;border-color:rgba(0,112,186,0.3);color:#0070ba;transform:translateY(-1px);}")));
/* Legacy Aliases for Existing Imports */ const FeaturedCard = (/* unused pure expression or super */ null && (styled_ActionCard));
const SecondaryGrid = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8925"
})("display:grid;grid-template-columns:repeat(2,1fr);gap:0.5rem;width:100%;")));
const SecondaryCard = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8926"
})("padding:0.75rem 0.625rem;border-radius:0.875rem;border:1px solid rgba(226,232,240,0.95);background:#ffffff;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;gap:0.5rem;cursor:pointer;min-height:90px;transition:all 0.22s ease;box-shadow:0 2px 6px rgba(0,0,0,0.03);.card-icon-box{width:2rem;height:2rem;border-radius:9999px;background:rgba(0,112,186,0.1);color:#0070ba;display:flex;align-items:center;justify-content:center;flex-shrink:0;}.card-title{font-size:0.71875rem;font-weight:600;color:#1e293b;line-height:1.3;}&:hover{border-color:rgba(0,112,186,0.35);background:rgba(240,247,253,0.6);transform:translateY(-2px);box-shadow:0 6px 16px -3px rgba(0,112,186,0.12);}")));
const DividerBox = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8927"
})("width:100%;margin:0.875rem 0 0.625rem 0;display:flex;align-items:center;gap:0.5rem;")));
const DividerLine = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8928"
})("flex:1;height:1px;background:#e2e8f0;")));
const DividerText = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("span", {
    target: "e9pap8929"
})("font-size:9px;font-weight:700;color:#94a3b8;letter-spacing:0.06em;text-transform:uppercase;")));
/* =========================================================================
 * Chat Thread & Bubbles
 * ========================================================================= */ const styled_ThreadWrap = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8930"
})("display:flex;flex-direction:column;gap:0.875rem;width:100%;max-width:42rem;margin:0 auto;padding:0.25rem 0;")));
const styled_MsgRow = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8931"
})("display:flex;gap:0.5rem;animation:", fadeIn, " 0.25s ease;", ({ sender  })=>sender === "user" && css`
      justify-content: flex-end;
    `, " ", ({ sender  })=>sender === "bot" && css`
      justify-content: flex-start;
      align-items: flex-start;
    `, "  .bot-avatar-col{width:2rem;height:2rem;border-radius:0.625rem;background:linear-gradient(135deg,#f0f7fd 0%,#e2eef9 100%);border:1px solid rgba(0,112,186,0.15);display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0.125rem;box-shadow:0 2px 6px -1px rgba(0,112,186,0.1);}")));
const styled_MsgCol = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8932"
})("display:flex;flex-direction:column;max-width:86%;align-items:", ({ sender  })=>sender === "user" ? "flex-end" : "flex-start", ";@media (min-width:640px){max-width:84%;}")));
const styled_Bubble = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8933"
})("width:100%;border-radius:1.125rem;padding:0.75rem 0.9375rem;font-size:0.8125rem;line-height:1.6;position:relative;word-break:break-word;", ({ sender  })=>sender === "user" && css`
      background: linear-gradient(135deg, #0070ba 0%, #005696 100%);
      color: #ffffff;
      border-bottom-right-radius: 0.25rem;
      box-shadow: 0 4px 14px -2px rgba(0, 112, 186, 0.35),
        inset 0 1px 0 rgba(255, 255, 255, 0.15);

      p,
      div,
      span,
      strong {
        color: #ffffff !important;
      }
    `, " ", ({ sender  })=>sender === "bot" && css`
      background: #ffffff;
      border: 1px solid rgba(226, 232, 240, 0.9);
      color: #0f172a;
      border-bottom-left-radius: 0.25rem;
      box-shadow: 0 2px 10px -2px rgba(15, 23, 42, 0.05);
    `, "  /* Bot Header strip inside bubble */\n  .bot-bubble-meta{display:flex;align-items:center;justify-content:space-between;margin-bottom:0.375rem;padding-bottom:0.375rem;border-bottom:1px solid rgba(241,245,249,0.9);}.bot-name-tag{display:inline-flex;align-items:center;gap:0.25rem;font-size:10px;font-weight:700;color:#0070ba;letter-spacing:0.02em;text-transform:uppercase;}/* Prose styling for bot responses */\n  .bot-prose{font-size:0.8125rem;line-height:1.65;color:#1e293b;p{margin:0 0 0.5rem 0;&:last-child{margin-bottom:0;}}.bot-heading{font-size:0.875rem;font-weight:700;color:#005fa0;margin-top:0.75rem;margin-bottom:0.375rem;line-height:1.4;display:flex;align-items:center;gap:0.375rem;&::before{content:'';width:3px;height:12px;border-radius:2px;background:#0070ba;display:inline-block;}}.bot-bullet-row{display:flex;align-items:flex-start;gap:0.5rem;margin:0.25rem 0;padding-left:0.125rem;.bullet-dot{color:#0070ba;font-weight:800;line-height:1.4;user-select:none;}.bullet-text{flex:1;color:#334155;}}.bot-num-row{display:flex;align-items:flex-start;gap:0.5rem;margin:0.25rem 0;padding-left:0.125rem;.num-prefix{color:#0070ba;font-weight:700;font-size:11px;min-width:1.125rem;line-height:1.45;user-select:none;}.num-text{flex:1;color:#334155;}}hr{margin:0.625rem 0;border:0;border-top:1px solid rgba(226,232,240,0.85);}strong{font-weight:700;color:#0f172a;}a{color:#0070ba;font-weight:600;text-decoration:underline;text-underline-offset:2px;transition:color 0.15s ease;&:hover{color:#004d82;}}.bot-paragraph{margin:0.25rem 0;color:#1e293b;line-height:1.6;}.streaming-caret{display:inline-block;width:6px;height:14px;margin-left:4px;background:#0070ba;vertical-align:middle;border-radius:2px;animation:", pulse, " 1.2s infinite;}}")));
const styled_MsgTimestamp = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8934"
})("margin-top:0.375rem;display:flex;align-items:center;justify-content:flex-end;gap:0.5rem;font-size:10px;font-family:ui-monospace,SFMono-Regular,monospace;color:", ({ sender  })=>sender === "user" ? "rgba(224, 242, 254, 0.85)" : "#94a3b8", ";.streaming-tag{display:inline-flex;align-items:center;gap:0.25rem;color:#0070ba;font-weight:600;margin-right:auto;.tag-dot{width:6px;height:6px;border-radius:9999px;background:#0070ba;animation:", pulse, " 1.5s infinite;}}.copy-btn{border:none;background:transparent;color:#94a3b8;padding:2px 4px;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;gap:3px;font-size:10px;font-family:inherit;transition:all 0.18s ease;&:hover{color:#0070ba;background:#f1f5f9;}&.copied{color:#059669;}}")));
/* =========================================================================
 * Consultation Card (Official WhatsApp Direct)
 * ========================================================================= */ const styled_ConsultationCard = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8935"
})("margin-top:0.75rem;margin-bottom:0.25rem;width:100%;background:linear-gradient(135deg,#f0f7fd 0%,#e6f3fd 100%);border:1px solid rgba(0,112,186,0.22);border-radius:1rem;padding:1rem;box-shadow:0 4px 14px -3px rgba(0,112,186,0.1);transition:all 0.2s ease;&:hover{border-color:rgba(0,112,186,0.35);box-shadow:0 6px 20px -3px rgba(0,112,186,0.15);}")));
const styled_ConsultationHeader = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8936"
})("display:flex;align-items:center;gap:0.625rem;margin-bottom:0.375rem;")));
const styled_ConsultationBadge = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8937"
})("width:2.25rem;height:2.25rem;border-radius:0.625rem;background:linear-gradient(135deg,#0070ba 0%,#005fa0 100%);color:#ffffff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 3px 8px rgba(0,112,186,0.25);")));
const styled_ConsultationTitle = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("h4", {
    target: "e9pap8938"
})("font-size:0.875rem;font-weight:700;color:#0f172a;line-height:1.35;margin:0;")));
const styled_ConsultationDesc = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("p", {
    target: "e9pap8939"
})("font-size:0.78125rem;color:#475569;line-height:1.5;font-weight:400;margin:0 0 0.75rem 0;")));
const styled_BtnWa = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("a", {
    target: "e9pap8940"
})("display:flex;align-items:center;justify-content:center;gap:0.5rem;width:100%;padding:0.625rem 1rem;border-radius:0.75rem;background:linear-gradient(135deg,#25d366 0%,#128c7e 100%);color:#ffffff;font-weight:700;font-size:0.8125rem;text-decoration:none;box-shadow:0 4px 14px -2px rgba(37,211,102,0.4);cursor:pointer;transition:all 0.2s cubic-bezier(0.16,1,0.3,1);&:hover{background:linear-gradient(135deg,#20bd5a 0%,#0e7065 100%);box-shadow:0 6px 18px -2px rgba(37,211,102,0.5);transform:translateY(-1px);color:#ffffff;}&:active{transform:scale(0.99);}")));
/* =========================================================================
 * Diagnostic Module (Consultative Discovery)
 * ========================================================================= */ const styled_DiagModule = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8941"
})("margin-top:0.75rem;width:100%;background:linear-gradient(\n    135deg,#ffffff 0%,rgba(240,249,255,0.5) 50%,rgba(0,112,186,0.06) 100%\n  );border:1px solid rgba(0,112,186,0.2);border-radius:1rem;padding:0.875rem;box-shadow:0 2px 8px rgba(0,112,186,0.06);@media (min-width:640px){width:98%;padding:1rem;}.diag-header{display:flex;align-items:center;justify-content:space-between;gap:0.5rem;border-bottom:1px solid #f1f5f9;padding-bottom:0.625rem;margin-bottom:0.75rem;}.diag-badge-left{display:flex;align-items:center;gap:0.5rem;min-width:0;}.diag-icon-box{width:1.75rem;height:1.75rem;border-radius:0.5rem;background:linear-gradient(135deg,#0070ba 0%,#005fa0 100%);color:#ffffff;display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 2px 4px rgba(0,112,186,0.2);}.diag-titles{min-width:0;}.diag-badge-label{font-size:10px;font-weight:700;color:#0070ba;text-transform:uppercase;letter-spacing:0.05em;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.diag-service-name{font-size:0.75rem;font-weight:600;color:#1e293b;display:block;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}.diag-step-pill{font-size:10px;font-weight:700;padding:0.25rem 0.625rem;border-radius:9999px;border:1px solid #bae6fd;background:#f0f7fd;color:#0070ba;flex-shrink:0;&.completed{background:#ecfdf5;color:#047857;border-color:#a7f3d0;}}.diag-step-content{display:flex;flex-direction:column;gap:0.625rem;}.diag-question{font-size:0.78125rem;font-weight:600;color:#0f172a;line-height:1.4;margin:0;}.diag-opt-list{display:flex;flex-direction:column;gap:0.375rem;padding-top:0.25rem;}.diag-choice-chip{display:flex;align-items:center;justify-content:space-between;background:rgba(240,247,253,0.85);border:1px solid rgba(0,112,186,0.2);border-radius:0.75rem;padding:0.375rem 0.75rem;font-size:0.75rem;color:#334155;.chip-left{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;padding-right:0.5rem;font-weight:500;}.chip-step-label{color:#94a3b8;font-weight:600;margin-right:0.25rem;}.chip-reset-btn{color:#0070ba;font-weight:600;font-size:11px;flex-shrink:0;background:none;border:none;cursor:pointer;&:hover{text-decoration:underline;}}}.diag-summary-box{padding:0.75rem;background:rgba(236,253,245,0.85);border:1px solid rgba(167,243,208,0.9);border-radius:0.75rem;display:flex;flex-direction:column;gap:0.25rem;.summary-label{font-size:10px;font-weight:700;color:#065f46;text-transform:uppercase;letter-spacing:0.05em;}.summary-text{font-size:0.75rem;font-weight:600;color:#064e3b;line-height:1.5;margin:0;}}.diag-cta-row{display:flex;flex-wrap:wrap;align-items:center;gap:0.5rem;padding-top:0.25rem;.diag-wa-btn{background:linear-gradient(135deg,#25d366 0%,#128c7e 100%);color:#ffffff;font-size:0.75rem;font-weight:700;padding:0.5rem 0.875rem;border-radius:0.75rem;display:inline-flex;align-items:center;gap:0.375rem;text-decoration:none;cursor:pointer;box-shadow:0 2px 6px rgba(37,211,102,0.35);transition:all 0.2s ease;&:hover{background:linear-gradient(135deg,#20bd5a 0%,#0e7065 100%);transform:translateY(-1px);color:#ffffff;}}.diag-restart-btn{color:#64748b;font-size:0.75rem;font-weight:500;padding:0.25rem 0.5rem;background:none;border:none;cursor:pointer;transition:color 0.15s ease;&:hover{color:#1e293b;}}}")));
const styled_DiagOptBtn = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8942"
})("width:100%;text-align:left;padding:0.625rem 0.8125rem;border-radius:0.75rem;border:1px solid #e2e8f0;background:#ffffff;display:flex;align-items:flex-start;gap:0.625rem;cursor:pointer;transition:all 0.2s ease;box-shadow:0 1px 3px rgba(0,0,0,0.02);.diag-opt-icon{width:1.25rem;height:1.25rem;border-radius:9999px;background:#f1f5f9;color:#64748b;display:flex;align-items:center;justify-content:center;flex-shrink:0;margin-top:0.125rem;transition:all 0.2s ease;}.diag-opt-text-wrap{flex:1;min-width:0;}.diag-opt-title{font-size:0.75rem;font-weight:600;color:#1e293b;display:block;line-height:1.35;transition:color 0.2s ease;}.diag-opt-desc{font-size:11px;color:#64748b;margin-top:0.125rem;display:block;line-height:1.3;font-weight:400;}&:hover{border-color:#0070ba;background:rgba(240,247,253,0.85);transform:translateY(-1px);box-shadow:0 4px 10px rgba(0,112,186,0.08);.diag-opt-icon{background:rgba(0,112,186,0.1);color:#0070ba;}.diag-opt-title{color:#0070ba;}}")));
/* =========================================================================
 * Follow-up Suggestions
 * ========================================================================= */ const styled_FollowupWrap = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8943"
})("margin-top:0.5rem;display:flex;flex-direction:column;gap:0.375rem;width:100%;.followup-label{font-size:10.5px;font-weight:600;color:#64748b;display:flex;align-items:center;gap:0.25rem;}")));
const styled_FollowupChip = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8944"
})("text-align:left;font-size:0.75rem;font-weight:500;background:#ffffff;color:#334155;padding:0.4375rem 0.75rem;border-radius:9999px;border:1px solid rgba(226,232,240,0.95);display:inline-flex;align-items:center;justify-content:space-between;gap:0.5rem;cursor:pointer;transition:all 0.2s cubic-bezier(0.16,1,0.3,1);box-shadow:0 1px 3px rgba(0,0,0,0.03);&:hover{background:rgba(240,247,253,0.9);border-color:rgba(0,112,186,0.4);color:#0070ba;transform:translateY(-1px);box-shadow:0 4px 10px -2px rgba(0,112,186,0.15);}&:active{transform:scale(0.98);}")));
/* =========================================================================
 * Typing Indicator
 * ========================================================================= */ const styled_TypingRow = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8945"
})("display:flex;gap:0.5rem;align-items:flex-start;")));
const styled_TypingBubble = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8946"
})("background:#ffffff;border:1px solid #e2e8f0;border-radius:1rem;border-bottom-left-radius:2px;padding:0.5625rem 0.8125rem;display:flex;align-items:center;gap:0.375rem;box-shadow:0 2px 6px rgba(0,0,0,0.04);")));
const styled_TypingDot = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8947"
})("width:6px;height:6px;border-radius:9999px;background:#0070ba;animation:", bounce, " 1s infinite;", ({ delay  })=>delay && `animation-delay: ${delay};`)));
/* =========================================================================
 * Service Badges & Sources
 * ========================================================================= */ const styled_ServiceBadge = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8948"
})("margin-top:0.5rem;display:inline-flex;align-items:center;gap:0.375rem;padding:0.25rem 0.625rem;background:rgba(0,112,186,0.07);color:#0070ba;border:1px solid rgba(0,112,186,0.18);border-radius:0.5rem;font-size:0.71875rem;font-weight:600;letter-spacing:-0.01em;")));
const SourcesWrap = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8949"
})("margin-top:0.5rem;padding-top:0.4375rem;border-top:1px solid rgba(226,232,240,0.8);display:flex;flex-wrap:wrap;align-items:center;gap:0.375rem;font-size:0.71875rem;color:#64748b;.sources-label{font-size:9.5px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;}")));
const SourceTag = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("span", {
    target: "e9pap8950"
})("background:#f8fafc;padding:0.1875rem 0.5rem;border-radius:0.375rem;border:1px solid rgba(226,232,240,0.95);font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,monospace;font-size:10px;color:#475569;font-weight:500;")));
/* =========================================================================
 * Teaser Card (Proactive Bubble)
 * ========================================================================= */ /* =========================================================================
 * Footer & Input Bar
 * ========================================================================= */ const styled_ChatFooter = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8951"
})("position:relative;bottom:0;z-index:20;flex-shrink:0;border-top:1px solid rgba(241,245,249,0.95);padding:0.625rem 0.875rem;padding-bottom:max(0.625rem,env(safe-area-inset-bottom));background:rgba(255,255,255,0.96);backdrop-filter:blur(12px);box-shadow:0 -4px 16px rgba(0,0,0,0.02);")));
const styled_InputForm = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("form", {
    target: "e9pap8952"
})("position:relative;display:flex;align-items:center;")));
const styled_ChatInput = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("input", {
    target: "e9pap8953"
})("width:100%;background:#f8fafc;color:#0f172a;font-size:0.8125rem;font-weight:400;padding:0.625rem 2.75rem 0.625rem 1rem;border-radius:9999px;border:1px solid #e2e8f0;outline:none;transition:all 0.2s ease;font-family:inherit;@media (min-width:640px){font-size:0.84375rem;padding:0.6875rem 2.875rem 0.6875rem 1.125rem;}&:hover{background:#ffffff;border-color:#cbd5e1;}&:focus{background:#ffffff;border-color:#0070ba;box-shadow:0 0 0 3px rgba(0,112,186,0.12);}&::placeholder{color:#94a3b8;font-weight:400;}")));
const styled_SendBtn = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("button", {
    target: "e9pap8954"
})("position:absolute;right:0.3125rem;top:50%;transform:translateY(-50%);width:1.875rem;height:1.875rem;border-radius:9999px;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,#0070ba 0%,#005696 100%);color:#ffffff;border:none;cursor:pointer;box-shadow:0 2px 6px rgba(0,112,186,0.25);transition:all 0.2s cubic-bezier(0.16,1,0.3,1);&:hover:not(:disabled){transform:translateY(-50%) scale(1.08);box-shadow:0 4px 10px rgba(0,112,186,0.35);}&:active:not(:disabled){transform:translateY(-50%) scale(0.95);}&:disabled{background:#f1f5f9;color:#cbd5e1;box-shadow:none;cursor:not-allowed;}", ({ isStop  })=>isStop && css`
      background: #fee2e2;
      color: #e11d48;
      box-shadow: 0 2px 6px rgba(225, 29, 72, 0.15);
      &:hover {
        background: #fecdd3;
        transform: translateY(-50%) scale(1.08);
      }
    `)));
const styled_DisclaimerText = /*#__PURE__*/ (/* unused pure expression or super */ null && (styled("div", {
    target: "e9pap8955"
})("display:flex;align-items:center;justify-content:center;gap:0.25rem;text-align:center;font-size:10px;color:#94a3b8;margin-top:0.375rem;font-weight:400;user-select:none;")));
/* =========================================================================
 * No-scrollbar utility
 * ========================================================================= */ const noScrollbarStyles = /*#__PURE__*/ (/* unused pure expression or super */ null && (css("-ms-overflow-style:none;scrollbar-width:none;&::-webkit-scrollbar{display:none;}")));

;// CONCATENATED MODULE: ./src/components/Chatbot/ChatWidget.tsx
"use client";








function ChatWidget_ChatWidget({ initialOpen =false , embeddedMode =false , onClose  }) {
    const [isOpen, setIsOpen] = useState(initialOpen);
    const handleCloseWidget = ()=>{
        setIsOpen(false);
        if (onClose) {
            onClose();
        }
        if (false) {}
    };
    const [sessionId, setSessionId] = useState("");
    const [inputMessage, setInputMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [selectedNeed, setSelectedNeed] = useState(null);
    const [lang, setLang] = useState("id");
    const [copiedId, setCopiedId] = useState(null);
    const handleCopyMessage = (msgId, text)=>{
        try {
            if (typeof navigator !== "undefined" && navigator.clipboard) {
                navigator.clipboard.writeText(text);
                setCopiedId(msgId);
                setTimeout(()=>setCopiedId(null), 2000);
            }
        } catch (e) {
            console.warn("Failed to copy text:", e);
        }
    };
    // Trilingual UI Translations (ID / EN / KO)
    const t = lang === "id" ? {
        onlineStatus: "Online • Siap Membantu",
        newChat: "Percakapan baru",
        chatWa: "Chat WhatsApp Resmi",
        callOffice: "Hubungi Kantor Pusat",
        privacyPolicy: "Kebijakan Privasi",
        title: "Solusi Bisnis Apa yang Anda Butuhkan?",
        subtitle: "Inpartner AI siap menganalisis tantangan korporasi dan merekomendasikan solusi konsultasi bisnis yang tepat.",
        featured: {
            title: "Strategi Korporat & Konsultasi Investasi",
            desc: "Corporate strategy, M&A Advisory, IPO, Feasibility Study & Investment Advisory",
            query: "Bagaimana Inpartner dapat mendampingi strategi korporat, investasi, atau advisory pasar untuk perusahaan saya?",
            intent: "strategy_corporate"
        },
        dividerText: "JELAJAHI LAYANAN KONSULTASI LAINNYA",
        secondary1: {
            title: "Akses Pasar & Ekspansi Bisnis",
            query: "Saya membutuhkan bantuan untuk riset pasar, strategi masuk pasar baru, atau business matching.",
            intent: "market_access"
        },
        secondary2: {
            title: "Diagnostik Kebutuhan Bisnis",
            query: "Saya belum yakin layanan apa yang paling dibutuhkan perusahaan saya. Mohon pandu melalui diagnostik kebutuhan bisnis.",
            intent: "other"
        },
        inputPlaceholder: "Tanyakan seputar solusi bisnis atau kendala perusahaan Anda...",
        sending: "Sedang mengetik...",
        stopGenerating: "Hentikan respon",
        disclaimer: "AI dapat melakukan kesalahan. Silakan konfirmasi informasi dengan tim konsultan.",
        sources: "Sumber Resmi:",
        service: "Layanan:",
        generating: "Menyusun analisis...",
        interestedCta: "Tertarik dengan Konsultasi Strategis Lebih Lanjut?",
        interestedDesc: "Konsultasikan kebutuhan strategis dan tantangan bisnis Anda secara langsung bersama tim penasihat senior Inpartner.",
        diagnosticBadge: "Biar kami pahami kebutuhan Anda \xb7 2 pertanyaan singkat",
        diagnosticStep1: "Langkah 1/2",
        diagnosticStep2: "Langkah 2/2",
        diagnosticCompletedBadge: "Scoping Diagnostik Selesai",
        diagnosticWaWithScoping: "Konsultasi via WhatsApp",
        diagnosticChangeStep1: "Ubah Pilihan Langkah 1",
        diagnosticRestart: "Ulangi Diagnostik",
        diagnosticOther: "Lainnya / belum yakin",
        diagnosticOtherDesc: "Ceritakan langsung kebutuhan Anda di chat"
    } : lang === "ko" ? {
        onlineStatus: "온라인 • 실시간 상담 가능",
        newChat: "새 대화 시작",
        chatWa: "공식 WhatsApp 문의",
        callOffice: "본사 전화 문의",
        privacyPolicy: "개인정보 처리방침",
        title: "어떤 비즈니스 솔루션이 필요하십니까?",
        subtitle: "인파트너(Inpartner) AI가 기업의 주요 과제를 분석하고 최적화된 전략 자문 솔루션을 제시합니다.",
        featured: {
            title: "기업전략 & 투자 자문",
            desc: "기업 전략, M&A, IPO, 타당성 연구 및 투자 자문 서비스",
            query: "인파트너는 기업전략, 투자 자문, 시장 접근 전략을 어떻게 지원합니까?",
            intent: "strategy_corporate"
        },
        dividerText: "주요 자문 분야 둘러보기",
        secondary1: {
            title: "시장 접근 & 사업 확장",
            query: "시장 조사, 신규 시장 진입 전략, 또는 비즈니스 매칭 서비스에 대한 자문이 필요합니다.",
            intent: "market_access"
        },
        secondary2: {
            title: "기업 경영 진단 및 솔루션 매칭",
            query: "현재 기업에 가장 필요한 솔루션이 무엇인지 진단을 받고 싶습니다.",
            intent: "other"
        },
        inputPlaceholder: "기업 경영 과제 또는 문의 사항을 입력하세요...",
        sending: "답변 작성 중...",
        stopGenerating: "답변 생성 중지",
        disclaimer: "AI 응답은 참고용입니다. 세부 사항은 인파트너 전문 컨설턴트와 확인하세요.",
        sources: "참조 공식 문서:",
        service: "추천 서비스:",
        generating: "분석 내용 생성 중...",
        interestedCta: "심층 비즈니스 자문이 필요하십니까?",
        interestedDesc: "기업의 전략적 목표와 경영 과제를 인파트너 수석 자문팀과 실시간으로 상담해 보세요.",
        diagnosticBadge: "귀사의 요구사항 파악을 위한 2가지 간단한 질문",
        diagnosticStep1: "1단계 / 2단계",
        diagnosticStep2: "2단계 / 2단계",
        diagnosticCompletedBadge: "사전 진단 요약 완료",
        diagnosticWaWithScoping: "수석 파트너 WhatsApp 실시간 문의",
        diagnosticChangeStep1: "1단계 선택 변경",
        diagnosticRestart: "진단 다시 시작하기",
        diagnosticOther: "기타 / 잘 모르겠음",
        diagnosticOtherDesc: "채팅으로 직접 설명해 주세요"
    } : {
        onlineStatus: "Online • Ready to assist",
        newChat: "New conversation",
        chatWa: "Official WhatsApp Chat",
        callOffice: "Call Corporate Office",
        privacyPolicy: "Privacy Policy",
        title: "What Business Solutions Do You Need?",
        subtitle: "Inpartner AI is ready to analyze your corporate challenges and recommend tailored strategic advisory solutions.",
        featured: {
            title: "Corporate Strategy & Investment Advisory",
            desc: "Corporate strategy, M&A Advisory, IPO, Feasibility Studies & Investment Advisory",
            query: "How does Inpartner assist with corporate strategy, investment advisory, and market access for my company?",
            intent: "strategy_corporate"
        },
        dividerText: "EXPLORE OTHER ADVISORY SERVICES",
        secondary1: {
            title: "Market Access & Business Expansion",
            query: "I need assistance with market research, market entry strategy, or business matching.",
            intent: "market_access"
        },
        secondary2: {
            title: "Business Needs Diagnosis",
            query: "I am not sure which service my company needs most. Please guide me through a business needs diagnosis.",
            intent: "other"
        },
        inputPlaceholder: "Ask about business solutions or your company's challenges...",
        sending: "Thinking...",
        stopGenerating: "Stop generating",
        disclaimer: "AI can make mistakes. Double-check replies with our advisory team.",
        sources: "Sources:",
        service: "Service:",
        generating: "Generating response...",
        interestedCta: "Interested in Further Corporate Advisory?",
        interestedDesc: "Consult your strategic goals and business challenges directly with Inpartner senior advisors.",
        diagnosticBadge: "Help us understand your needs \xb7 2 quick questions",
        diagnosticStep1: "Step 1 of 2",
        diagnosticStep2: "Step 2 of 2",
        diagnosticCompletedBadge: "Preliminary Scoping Complete",
        diagnosticWaWithScoping: "Fast-Track WhatsApp Discussion",
        diagnosticChangeStep1: "Change Step 1 Choice",
        diagnosticRestart: "Restart Diagnostic",
        diagnosticOther: "Other / not sure yet",
        diagnosticOtherDesc: "Describe your need directly in the chat"
    };
    // Inpartner Agent Configuration derived from active language
    const agentConfig = {
        name: lang === "ko" ? "인파트너 AI" : "Inpartner AI",
        title: t.title,
        subtitle: t.subtitle,
        featured: t.featured,
        dividerText: t.dividerText,
        secondary1: t.secondary1,
        secondary2: t.secondary2,
        inputPlaceholder: t.inputPlaceholder
    };
    const [activeDiagnostic, setActiveDiagnostic] = useState(null);
    // Messages state
    const [messages, setMessages] = useState([]);
    const [isStreaming, setIsStreaming] = useState(false);
    const [mounted, setMounted] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);
    const abortControllerRef = useRef(null);
    // Initialize session and restore persisted conversation
    useEffect(()=>{
        setMounted(true);
        let sess = localStorage.getItem("inpartner_chat_session");
        if (!sess) {
            sess = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
            localStorage.setItem("inpartner_chat_session", sess);
        }
        setSessionId(sess);
        // Restore saved language preference
        try {
            const savedLang = localStorage.getItem("inpartner_chat_lang");
            if (savedLang === "id" || savedLang === "en" || savedLang === "ko") {
                setLang(savedLang);
            }
        } catch  {}
        // Restore previously saved conversation state
        try {
            const savedMessagesStr = localStorage.getItem(`inpartner_chat_messages_${sess}`);
            if (savedMessagesStr) {
                const savedMessages = JSON.parse(savedMessagesStr);
                if (Array.isArray(savedMessages) && savedMessages.length > 0) {
                    setMessages(savedMessages.map((m)=>({
                            ...m,
                            isStreaming: false
                        })));
                }
            }
            const savedNeed = localStorage.getItem(`inpartner_selected_need_${sess}`);
            if (savedNeed) {
                setSelectedNeed(savedNeed);
            }
            const savedDiagStr = localStorage.getItem(`inpartner_diagnostic_${sess}`);
            if (savedDiagStr) {
                try {
                    const parsedDiag = JSON.parse(savedDiagStr);
                    if (parsedDiag && parsedDiag.pillarKey) {
                        setActiveDiagnostic(parsedDiag);
                    }
                } catch  {}
            }
        } catch (err) {
            console.warn("Could not restore chat state from localStorage:", err);
        }
    }, []);
    const handleToggleLanguage = (targetLang)=>{
        let next;
        if (targetLang) {
            next = targetLang;
        } else {
            // Cycle: id -> en -> ko -> id
            if (lang === "id") next = "en";
            else if (lang === "en") next = "ko";
            else next = "id";
        }
        setLang(next);
        try {
            localStorage.setItem("inpartner_chat_lang", next);
        } catch  {}
    };
    // Auto-save messages to localStorage
    useEffect(()=>{
        if (!mounted || !sessionId) return;
        try {
            if (messages.length > 0) {
                localStorage.setItem(`inpartner_chat_messages_${sessionId}`, JSON.stringify(messages.slice(-60)));
            } else {
                localStorage.removeItem(`inpartner_chat_messages_${sessionId}`);
            }
        } catch (err) {
            console.warn("Failed to save chat messages to localStorage:", err);
        }
    }, [
        messages,
        sessionId,
        mounted
    ]);
    // Auto-save selectedNeed
    useEffect(()=>{
        if (!mounted || !sessionId) return;
        try {
            if (selectedNeed) {
                localStorage.setItem(`inpartner_selected_need_${sessionId}`, selectedNeed);
            }
        } catch  {}
    }, [
        selectedNeed,
        sessionId,
        mounted
    ]);
    // Auto-save activeDiagnostic
    useEffect(()=>{
        if (!mounted || !sessionId) return;
        try {
            if (activeDiagnostic) {
                localStorage.setItem(`inpartner_diagnostic_${sessionId}`, JSON.stringify(activeDiagnostic));
            } else {
                localStorage.removeItem(`inpartner_diagnostic_${sessionId}`);
            }
        } catch (err) {
            console.warn("Failed to save active diagnostic to localStorage:", err);
        }
    }, [
        activeDiagnostic,
        sessionId,
        mounted
    ]);
    // Scroll to bottom on new message (Instant during streaming to prevent animation jitter, smooth on complete)
    useEffect(()=>{
        if (messages.length > 0) {
            messagesEndRef.current?.scrollIntoView({
                behavior: isStreaming ? "auto" : "smooth"
            });
        }
    }, [
        messages,
        isLoading,
        isStreaming
    ]);
    const handleStopGeneration = ()=>{
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            abortControllerRef.current = null;
        }
        setIsStreaming(false);
        setIsLoading(false);
        setMessages((prev)=>prev.map((m)=>m.isStreaming ? {
                    ...m,
                    isStreaming: false
                } : m));
    };
    const handleSendMessage = async (textToSend, needCategory)=>{
        const text = (textToSend || inputMessage).trim();
        if (!text || isLoading || isStreaming) return;
        if (text.length > 2000) return;
        const currentNeed = needCategory || selectedNeed || undefined;
        // Offer the diagnostic card only after the visitor has described a need
        // (a picked service, or at least one earlier message), never on the first free-typed line.
        const canOfferDiagnostic = !!currentNeed || messages.some((m)=>m.sender === "user");
        const userMsg = {
            id: `usr_${Date.now()}`,
            sender: "user",
            text,
            timestamp: new Date().toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
        setMessages((prev)=>[
                ...prev,
                userMsg
            ]);
        setInputMessage("");
        setIsLoading(true);
        if (textToSend && needCategory) {}
        const abortController = new AbortController();
        abortControllerRef.current = abortController;
        const botMsgId = `bot_${Date.now()}`;
        try {
            const res = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "text/event-stream"
                },
                body: JSON.stringify({
                    sessionId,
                    message: text,
                    selectedNeed: currentNeed,
                    chatHistory: messages.map((m)=>({
                            sender: m.sender,
                            text: m.text
                        })),
                    stream: true
                }),
                signal: abortController.signal
            });
            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }
            const contentType = res.headers.get("content-type") || "";
            if (contentType.includes("text/event-stream") && res.body) {
                const reader = res.body.getReader();
                const decoder = new TextDecoder();
                let buffer = "";
                let botMessageCreated = false;
                let accumulatedText = "";
                let botMetadata = {};
                let streamErrored = false;
                setIsStreaming(true);
                while(true){
                    const { done , value  } = await reader.read();
                    if (done) break;
                    buffer += decoder.decode(value, {
                        stream: true
                    });
                    const lines = buffer.split("\n");
                    buffer = lines.pop() || "";
                    for (const line of lines){
                        const trimmed = line.trim();
                        if (!trimmed || !trimmed.startsWith("data: ")) continue;
                        const jsonStr = trimmed.slice(6).trim();
                        if (!jsonStr) continue;
                        try {
                            const event = JSON.parse(jsonStr);
                            if (event.type === "start") {
                                botMetadata = {
                                    recommendedService: event.recommendedService,
                                    sources: event.sources,
                                    isFallback: event.isFallback
                                };
                            } else if (event.type === "chunk") {
                                accumulatedText += event.text;
                                if (!botMessageCreated) {
                                    botMessageCreated = true;
                                    setIsLoading(false) // Stop "thinking" dots, typewriter has begun!
                                    ;
                                    setMessages((prev)=>[
                                            ...prev,
                                            {
                                                id: botMsgId,
                                                sender: "bot",
                                                text: accumulatedText,
                                                timestamp: new Date().toLocaleTimeString([], {
                                                    hour: "2-digit",
                                                    minute: "2-digit"
                                                }),
                                                isStreaming: true,
                                                ...botMetadata
                                            }
                                        ]);
                                } else {
                                    setMessages((prev)=>prev.map((m)=>m.id === botMsgId ? {
                                                ...m,
                                                text: accumulatedText,
                                                isStreaming: true
                                            } : m));
                                }
                            } else if (event.type === "error") {
                                streamErrored = true;
                            } else if (event.type === "done") {
                                const finalAnswer = event.fullAnswer || accumulatedText;
                                if (event.recommendedService) {}
                                const detectedPillar = canOfferDiagnostic ? detectDiagnosticPillar(event.intent || event.recommendedService || "") : null;
                                setMessages((prev)=>prev.map((m)=>m.id === botMsgId ? {
                                            ...m,
                                            text: finalAnswer,
                                            isStreaming: false,
                                            recommendedService: event.recommendedService,
                                            sources: event.sources,
                                            suggestLeadCapture: event.suggestLeadCapture,
                                            followUpQuestions: event.followUpQuestions,
                                            quickActions: event.quickActions,
                                            isFallback: event.isFallback,
                                            diagnosticPillar: detectedPillar || undefined
                                        } : m));
                            }
                        } catch (err) {
                            console.warn("Failed to parse SSE chunk:", err);
                        }
                    }
                }
                // Server-side stream failure before any text: show the standard error bubble
                if (streamErrored && !botMessageCreated) {
                    throw new Error("Chat stream error");
                }
                // Final safety check after stream ends: ensure isStreaming is marked false
                setMessages((prev)=>prev.map((m)=>m.id === botMsgId ? {
                            ...m,
                            isStreaming: false
                        } : m));
            } else {
                // Fallback for non-streaming JSON responses
                const data = await res.json();
                if (data.recommendedService) {}
                const detectedPillar = canOfferDiagnostic ? detectDiagnosticPillar(data.intent || data.recommendedService || "") : null;
                const botMsg = {
                    id: botMsgId,
                    sender: "bot",
                    text: data.answer,
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    recommendedService: data.recommendedService,
                    sources: data.sources,
                    suggestLeadCapture: data.suggestLeadCapture,
                    followUpQuestions: data.followUpQuestions,
                    quickActions: data.quickActions,
                    isFallback: data.isFallback,
                    isStreaming: false,
                    diagnosticPillar: detectedPillar || undefined
                };
                setMessages((prev)=>[
                        ...prev,
                        botMsg
                    ]);
            }
        } catch (err) {
            if (err.name === "AbortError") {
            // user stopped generation — no action needed
            } else {
                const errorMsg = {
                    id: `err_${Date.now()}`,
                    sender: "bot",
                    text: lang === "id" ? `Mohon maaf, terjadi gangguan koneksi ke server. Silakan coba kembali atau hubungi konsultan kami via WhatsApp di [${INPARTNER_CONFIG.whatsappDisplay}](${getWhatsAppUrl()}).` : lang === "ko" ? `죄송합니다. 서버 연결에 일시적인 문제가 발생했습니다. 잠시 후 다시 시도해 주시거나 공식 WhatsApp [${INPARTNER_CONFIG.whatsappDisplay}](${getWhatsAppUrl()})로 직접 문의해 주십시오.` : `We apologize, but a connection error occurred while reaching the server. Please try again or reach our team directly via WhatsApp at [${INPARTNER_CONFIG.whatsappDisplay}](${getWhatsAppUrl()}).`,
                    timestamp: new Date().toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit"
                    }),
                    isFallback: true,
                    isStreaming: false
                };
                setMessages((prev)=>[
                        ...prev,
                        errorMsg
                    ]);
                setTimeout(()=>messagesEndRef.current?.scrollIntoView({
                        behavior: "smooth"
                    }), 50);
            }
        } finally{
            setIsLoading(false);
            setIsStreaming(false);
            abortControllerRef.current = null;
            setTimeout(()=>inputRef.current?.focus(), 100);
        }
    };
    const handleResetConversation = ()=>{
        if (sessionId) {
            try {
                localStorage.removeItem(`inpartner_chat_messages_${sessionId}`);
                localStorage.removeItem(`inpartner_conv_id_${sessionId}`);
                localStorage.removeItem(`inpartner_selected_need_${sessionId}`);
                localStorage.removeItem(`inpartner_diagnostic_${sessionId}`);
            } catch (err) {
                console.warn("Could not clear session storage:", err);
            }
        }
        const newSess = `sess_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
        localStorage.setItem("inpartner_chat_session", newSess);
        setSessionId(newSess);
        setSelectedNeed(null);
        setActiveDiagnostic(null);
        setMessages([]);
    };
    const handleSelectDiagnosticOption = (pillarKey, stepNum, option)=>{
        const tree = getDiagnosticTree(pillarKey);
        if (!tree) return;
        const optLabel = lang === "ko" ? option.label_ko : lang === "en" ? option.label_en : option.label_id;
        if (stepNum === 1) {
            setActiveDiagnostic({
                pillarKey,
                currentStep: 2,
                step1ChoiceId: option.id,
                step1ChoiceLabel: optLabel
            });
        } else if (stepNum === 2) {
            const s1Id = activeDiagnostic?.pillarKey === pillarKey && activeDiagnostic.step1ChoiceId ? activeDiagnostic.step1ChoiceId : tree.step1.options[0].id;
            const s1Label = activeDiagnostic?.pillarKey === pillarKey && activeDiagnostic.step1ChoiceLabel ? activeDiagnostic.step1ChoiceLabel : lang === "ko" ? tree.step1.options[0].label_ko : lang === "en" ? tree.step1.options[0].label_en : tree.step1.options[0].label_id;
            const synthesis = generateScopingSummary(pillarKey, s1Id, option.id, lang);
            const completedState = {
                pillarKey,
                currentStep: "completed",
                step1ChoiceId: s1Id,
                step1ChoiceLabel: s1Label,
                step2ChoiceId: option.id,
                step2ChoiceLabel: optLabel,
                scopingSummary: synthesis.scopingSummary
            };
            setActiveDiagnostic(completedState);
            // Let the assistant respond to the visitor's choices instead of ending silently
            handleSendMessage(lang === "ko" ? `제 상황: ${s1Label} — ${optLabel}` : lang === "en" ? `My situation: ${s1Label} — ${optLabel}` : `Kebutuhan saya: ${s1Label} — ${optLabel}`);
        }
    };
    const handleDismissDiagnostic = (msgId, pillarKey)=>{
        setMessages((prev)=>prev.map((m)=>m.id === msgId ? {
                    ...m,
                    diagnosticDismissed: true
                } : m));
        setActiveDiagnostic(null);
        handleSendMessage(lang === "ko" ? "제 요구사항이 선택지에 없습니다. 직접 설명드려도 될까요?" : lang === "en" ? "My need isn't listed in those options. Can I explain it directly?" : "Kebutuhan saya belum ada di pilihan tersebut. Boleh saya jelaskan langsung?");
    };
    const handleResetDiagnostic = (pillarKey)=>{
        setActiveDiagnostic({
            pillarKey,
            currentStep: 1
        });
    };
    // The discovery card lives on the first bot reply that carries a pillar, so it
    // appears once per conversation and does not jump while the visitor fills it in.
    const diagnosticAnchorId = messages.find((m)=>m.sender === "bot" && m.diagnosticPillar)?.id;
    if (!mounted) {
        if (embeddedMode) {
            return /*#__PURE__*/ _jsx("div", {
                style: {
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#ffffff"
                },
                children: /*#__PURE__*/ _jsx("div", {
                    style: {
                        width: "24px",
                        height: "24px",
                        border: "2px solid #0070ba",
                        borderTopColor: "transparent",
                        borderRadius: "9999px",
                        animation: "spin 0.8s linear infinite"
                    }
                })
            });
        }
        return null;
    }
    return /*#__PURE__*/ _jsxs(Root, {
        id: "inpartner-chatbot-container",
        children: [
            /*#__PURE__*/ _jsx(Head, {
                children: /*#__PURE__*/ _jsx("link", {
                    href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap",
                    rel: "stylesheet"
                })
            }),
            !embeddedMode && !isOpen && /*#__PURE__*/ _jsx(LauncherWrap, {
                children: /*#__PURE__*/ _jsx(LauncherRow, {
                    children: /*#__PURE__*/ _jsxs(LauncherBtn, {
                        onClick: ()=>{
                            setIsOpen(true);
                        },
                        "aria-label": `Open ${agentConfig.name}`,
                        children: [
                            /*#__PURE__*/ _jsx(ChatbotIcon, {
                                size: "md",
                                variant: "launcher"
                            }),
                            /*#__PURE__*/ _jsx("span", {
                                className: "launcher-online-beacon"
                            })
                        ]
                    })
                })
            }),
            (isOpen || embeddedMode) && /*#__PURE__*/ _jsxs(ChatWindow, {
                embedded: embeddedMode,
                children: [
                    /*#__PURE__*/ _jsxs(ChatHeader, {
                        children: [
                            /*#__PURE__*/ _jsxs(HeaderBrand, {
                                children: [
                                    /*#__PURE__*/ _jsxs("div", {
                                        className: "header-avatar",
                                        children: [
                                            /*#__PURE__*/ _jsx(ChatbotIcon, {
                                                size: "xs"
                                            }),
                                            /*#__PURE__*/ _jsx(OnlineDot, {
                                                className: "pinned"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ _jsxs("div", {
                                        children: [
                                            /*#__PURE__*/ _jsx(HeaderTitle, {
                                                children: "INPARTNER"
                                            }),
                                            /*#__PURE__*/ _jsx(OnlineStatus, {
                                                children: t.onlineStatus
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(HeaderActions, {
                                children: [
                                    /*#__PURE__*/ _jsxs(LangSegmented, {
                                        children: [
                                            /*#__PURE__*/ _jsx(LangSegmentBtn, {
                                                type: "button",
                                                active: lang === "id",
                                                onClick: ()=>handleToggleLanguage("id"),
                                                "aria-label": "Bahasa Indonesia",
                                                title: "Bahasa Indonesia",
                                                children: "ID"
                                            }),
                                            /*#__PURE__*/ _jsx(LangSegmentBtn, {
                                                type: "button",
                                                active: lang === "en",
                                                onClick: ()=>handleToggleLanguage("en"),
                                                "aria-label": "English",
                                                title: "English",
                                                children: "EN"
                                            }),
                                            /*#__PURE__*/ _jsx(LangSegmentBtn, {
                                                type: "button",
                                                active: lang === "ko",
                                                onClick: ()=>handleToggleLanguage("ko"),
                                                "aria-label": "한국어",
                                                title: "한국어",
                                                children: "KO"
                                            })
                                        ]
                                    }),
                                    messages.length > 0 && /*#__PURE__*/ _jsx(IconBtn, {
                                        type: "button",
                                        className: "spin-on-hover",
                                        onClick: handleResetConversation,
                                        "aria-label": t.newChat,
                                        title: t.newChat,
                                        children: /*#__PURE__*/ _jsx(RotateCcw, {
                                            size: 14
                                        })
                                    }),
                                    /*#__PURE__*/ _jsx(IconBtn, {
                                        type: "button",
                                        onClick: handleCloseWidget,
                                        "aria-label": "Close Chat",
                                        title: "Close Chat",
                                        children: /*#__PURE__*/ _jsx(X, {
                                            size: 16
                                        })
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ _jsx(ChatBody, {
                        children: messages.length === 0 ? /* State 1: Clean Minimalist Welcome Screen */ /*#__PURE__*/ _jsxs(WelcomeView, {
                            children: [
                                /*#__PURE__*/ _jsx(BrandAvatarBox, {
                                    children: /*#__PURE__*/ _jsx(ChatbotIcon, {
                                        size: "lg",
                                        animated: true
                                    })
                                }),
                                /*#__PURE__*/ _jsxs(WelcomeTag, {
                                    children: [
                                        /*#__PURE__*/ _jsx(Sparkles, {
                                            size: 11
                                        }),
                                        /*#__PURE__*/ _jsx("span", {
                                            children: lang === "id" ? "Asisten Konsultasi Bisnis Resmi" : lang === "ko" ? "공식 AI 기업 전략 자문" : "Official Advisory Assistant"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx(WelcomeHeading, {
                                    children: agentConfig.title
                                }),
                                /*#__PURE__*/ _jsx(WelcomeSub, {
                                    children: agentConfig.subtitle
                                }),
                                /*#__PURE__*/ _jsxs(ActionCardList, {
                                    children: [
                                        /*#__PURE__*/ _jsxs(ActionCard, {
                                            type: "button",
                                            colorScheme: "blue",
                                            onClick: ()=>handleSendMessage(agentConfig.featured.query, agentConfig.featured.intent),
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "action-icon-box",
                                                    children: /*#__PURE__*/ _jsx(TrendingUp, {
                                                        size: 18,
                                                        strokeWidth: 2.4
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "action-content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "action-title",
                                                            children: agentConfig.featured.title
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "action-desc",
                                                            children: agentConfig.featured.desc
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(ChevronRight, {
                                                    className: "action-arrow"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs(ActionCard, {
                                            type: "button",
                                            colorScheme: "cyan",
                                            onClick: ()=>handleSendMessage(agentConfig.secondary1.query, agentConfig.secondary1.intent),
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "action-icon-box",
                                                    children: /*#__PURE__*/ _jsx(Landmark, {
                                                        size: 18,
                                                        strokeWidth: 2.2
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "action-content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "action-title",
                                                            children: agentConfig.secondary1.title
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "action-desc",
                                                            children: lang === "id" ? "Riset pasar mendalam, regulasi & ekspansi bisnis Indonesia" : lang === "ko" ? "인도네시아 시장 진입, 규제 분석 및 비즈니스 매칭" : "Market entry, regulatory intelligence & business matching"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(ChevronRight, {
                                                    className: "action-arrow"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ _jsxs(ActionCard, {
                                            type: "button",
                                            colorScheme: "emerald",
                                            onClick: ()=>handleSendMessage(agentConfig.secondary2.query, agentConfig.secondary2.intent),
                                            children: [
                                                /*#__PURE__*/ _jsx("div", {
                                                    className: "action-icon-box",
                                                    children: /*#__PURE__*/ _jsx(Compass, {
                                                        size: 18,
                                                        strokeWidth: 2.2
                                                    })
                                                }),
                                                /*#__PURE__*/ _jsxs("div", {
                                                    className: "action-content",
                                                    children: [
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "action-title",
                                                            children: agentConfig.secondary2.title
                                                        }),
                                                        /*#__PURE__*/ _jsx("div", {
                                                            className: "action-desc",
                                                            children: lang === "id" ? "Scoping interaktif menemukan advisory yang tepat" : lang === "ko" ? "기업 맞춤형 자문 필요성 대화형 진단" : "Interactive preliminary scoping for your business"
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ _jsx(ChevronRight, {
                                                    className: "action-arrow"
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        }) : /* State 2: Active Chat Thread */ /*#__PURE__*/ _jsxs(ThreadWrap, {
                            children: [
                                messages.map((msg)=>/*#__PURE__*/ _jsxs(MsgRow, {
                                        sender: msg.sender,
                                        children: [
                                            msg.sender === "bot" && /*#__PURE__*/ _jsx("div", {
                                                className: "bot-avatar-col",
                                                children: /*#__PURE__*/ _jsx(ChatbotIcon, {
                                                    size: "xs"
                                                })
                                            }),
                                            /*#__PURE__*/ _jsxs(MsgCol, {
                                                sender: msg.sender,
                                                children: [
                                                    /*#__PURE__*/ _jsxs(Bubble, {
                                                        sender: msg.sender,
                                                        children: [
                                                            msg.sender === "bot" && /*#__PURE__*/ _jsxs("div", {
                                                                className: "bot-bubble-meta",
                                                                children: [
                                                                    /*#__PURE__*/ _jsxs("span", {
                                                                        className: "bot-name-tag",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx(Sparkles, {
                                                                                size: 10
                                                                            }),
                                                                            " INPARTNER AI"
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        style: {
                                                                            fontSize: "10px",
                                                                            color: "#94a3b8"
                                                                        },
                                                                        children: msg.timestamp
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs("div", {
                                                                className: "bot-prose",
                                                                children: [
                                                                    formatBotMessage(msg.text),
                                                                    msg.isStreaming && /*#__PURE__*/ _jsx("span", {
                                                                        className: "streaming-caret"
                                                                    })
                                                                ]
                                                            }),
                                                            msg.recommendedService && !msg.isStreaming && /*#__PURE__*/ _jsxs(ServiceBadge, {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx(Sparkles, {
                                                                        size: 14
                                                                    }),
                                                                    /*#__PURE__*/ _jsxs("span", {
                                                                        children: [
                                                                            t.service,
                                                                            " ",
                                                                            msg.recommendedService
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsxs(MsgTimestamp, {
                                                                sender: msg.sender,
                                                                children: [
                                                                    msg.sender === "bot" && msg.isStreaming ? /*#__PURE__*/ _jsxs("span", {
                                                                        className: "streaming-tag",
                                                                        children: [
                                                                            /*#__PURE__*/ _jsx("span", {
                                                                                className: "tag-dot"
                                                                            }),
                                                                            t.generating
                                                                        ]
                                                                    }) : null,
                                                                    msg.sender === "bot" && !msg.isStreaming && /*#__PURE__*/ _jsx("button", {
                                                                        type: "button",
                                                                        className: `copy-btn ${copiedId === msg.id ? "copied" : ""}`,
                                                                        onClick: ()=>handleCopyMessage(msg.id, msg.text),
                                                                        "aria-label": "Salin jawaban",
                                                                        title: "Salin jawaban",
                                                                        children: copiedId === msg.id ? /*#__PURE__*/ _jsxs(_Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Check, {
                                                                                    size: 11
                                                                                }),
                                                                                " ",
                                                                                lang === "id" ? "Tersalin" : "Copied"
                                                                            ]
                                                                        }) : /*#__PURE__*/ _jsxs(_Fragment, {
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx(Copy, {
                                                                                    size: 11
                                                                                }),
                                                                                " ",
                                                                                lang === "id" ? "Salin" : "Copy"
                                                                            ]
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: msg.timestamp
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    msg.diagnosticPillar && msg.id === diagnosticAnchorId && !msg.diagnosticDismissed && !msg.isStreaming && (()=>{
                                                        const tree = getDiagnosticTree(msg.diagnosticPillar);
                                                        if (!tree) return null;
                                                        const currentDiagState = activeDiagnostic && activeDiagnostic.pillarKey === msg.diagnosticPillar ? activeDiagnostic : {
                                                            pillarKey: msg.diagnosticPillar,
                                                            currentStep: 1
                                                        };
                                                        const isCompleted = currentDiagState.currentStep === "completed";
                                                        const isStep1 = currentDiagState.currentStep === 1;
                                                        const isStep2 = currentDiagState.currentStep === 2;
                                                        const currentStepTitle = isCompleted ? t.diagnosticCompletedBadge : isStep1 ? `${t.diagnosticStep1}: ${tree.step1[`title_${lang}`]}` : `${t.diagnosticStep2}: ${tree.step2[`title_${lang}`]}`;
                                                        return /*#__PURE__*/ _jsxs(DiagModule, {
                                                            children: [
                                                                /*#__PURE__*/ _jsxs("div", {
                                                                    className: "diag-header",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "diag-badge-left",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("div", {
                                                                                    className: "diag-icon-box",
                                                                                    children: /*#__PURE__*/ _jsx(Compass, {
                                                                                        size: 16,
                                                                                        strokeWidth: 2.2
                                                                                    })
                                                                                }),
                                                                                /*#__PURE__*/ _jsxs("div", {
                                                                                    className: "diag-titles",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "diag-badge-label",
                                                                                            children: t.diagnosticBadge
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("span", {
                                                                                            className: "diag-service-name",
                                                                                            children: tree[`serviceName_${lang}`]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("span", {
                                                                            className: `diag-step-pill ${isCompleted ? "completed" : "active"}`,
                                                                            children: currentStepTitle
                                                                        })
                                                                    ]
                                                                }),
                                                                isStep1 && /*#__PURE__*/ _jsxs("div", {
                                                                    className: "diag-step-content",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "diag-question",
                                                                            children: tree.step1[`question_${lang}`]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "diag-opt-list",
                                                                            children: [
                                                                                tree.step1.options.map((opt)=>/*#__PURE__*/ _jsxs(DiagOptBtn, {
                                                                                        type: "button",
                                                                                        onClick: ()=>handleSelectDiagnosticOption(tree.pillarKey, 1, opt),
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                                className: "diag-opt-icon",
                                                                                                children: /*#__PURE__*/ _jsx(ChevronRight, {
                                                                                                    size: 14
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "diag-opt-text-wrap",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "diag-opt-title",
                                                                                                        children: opt[`label_${lang}`]
                                                                                                    }),
                                                                                                    opt[`detail_${lang}`] && /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "diag-opt-desc",
                                                                                                        children: opt[`detail_${lang}`]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }, opt.id)),
                                                                                /*#__PURE__*/ _jsxs(DiagOptBtn, {
                                                                                    type: "button",
                                                                                    onClick: ()=>handleDismissDiagnostic(msg.id, tree.pillarKey),
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "diag-opt-icon",
                                                                                            children: /*#__PURE__*/ _jsx(ChevronRight, {
                                                                                                size: 14
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "diag-opt-text-wrap",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "diag-opt-title",
                                                                                                    children: t.diagnosticOther
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "diag-opt-desc",
                                                                                                    children: t.diagnosticOtherDesc
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                isStep2 && /*#__PURE__*/ _jsxs("div", {
                                                                    className: "diag-step-content",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "diag-choice-chip",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("span", {
                                                                                    className: "chip-left",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsxs("span", {
                                                                                            className: "chip-step-label",
                                                                                            children: [
                                                                                                t.diagnosticStep1,
                                                                                                ":"
                                                                                            ]
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsx("strong", {
                                                                                            children: currentDiagState.step1ChoiceLabel
                                                                                        })
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>handleResetDiagnostic(tree.pillarKey),
                                                                                    className: "chip-reset-btn",
                                                                                    children: t.diagnosticChangeStep1
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsx("p", {
                                                                            className: "diag-question",
                                                                            children: tree.step2[`question_${lang}`]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "diag-opt-list",
                                                                            children: [
                                                                                tree.step2.options.map((opt)=>/*#__PURE__*/ _jsxs(DiagOptBtn, {
                                                                                        type: "button",
                                                                                        onClick: ()=>handleSelectDiagnosticOption(tree.pillarKey, 2, opt),
                                                                                        children: [
                                                                                            /*#__PURE__*/ _jsx("div", {
                                                                                                className: "diag-opt-icon",
                                                                                                children: /*#__PURE__*/ _jsx(ChevronRight, {
                                                                                                    size: 14
                                                                                                })
                                                                                            }),
                                                                                            /*#__PURE__*/ _jsxs("div", {
                                                                                                className: "diag-opt-text-wrap",
                                                                                                children: [
                                                                                                    /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "diag-opt-title",
                                                                                                        children: opt[`label_${lang}`]
                                                                                                    }),
                                                                                                    opt[`detail_${lang}`] && /*#__PURE__*/ _jsx("span", {
                                                                                                        className: "diag-opt-desc",
                                                                                                        children: opt[`detail_${lang}`]
                                                                                                    })
                                                                                                ]
                                                                                            })
                                                                                        ]
                                                                                    }, opt.id)),
                                                                                /*#__PURE__*/ _jsxs(DiagOptBtn, {
                                                                                    type: "button",
                                                                                    onClick: ()=>handleDismissDiagnostic(msg.id, tree.pillarKey),
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx("div", {
                                                                                            className: "diag-opt-icon",
                                                                                            children: /*#__PURE__*/ _jsx(ChevronRight, {
                                                                                                size: 14
                                                                                            })
                                                                                        }),
                                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                                            className: "diag-opt-text-wrap",
                                                                                            children: [
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "diag-opt-title",
                                                                                                    children: t.diagnosticOther
                                                                                                }),
                                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                                    className: "diag-opt-desc",
                                                                                                    children: t.diagnosticOtherDesc
                                                                                                })
                                                                                            ]
                                                                                        })
                                                                                    ]
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                }),
                                                                isCompleted && /*#__PURE__*/ _jsxs("div", {
                                                                    className: "diag-step-content",
                                                                    children: [
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "diag-summary-box",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsx("span", {
                                                                                    className: "summary-label",
                                                                                    children: lang === "id" ? "Hasil Scoping Diagnostik Awal" : lang === "ko" ? "사전 진단 요약 결과" : "Preliminary Scoping Synthesis"
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("p", {
                                                                                    className: "summary-text",
                                                                                    children: currentDiagState.scopingSummary
                                                                                })
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ _jsxs("div", {
                                                                            className: "diag-cta-row",
                                                                            children: [
                                                                                /*#__PURE__*/ _jsxs("a", {
                                                                                    href: getWhatsAppUrl(lang === "ko" ? `안녕하세요 인파트너 자문팀, 사전 진단을 완료하고 상담을 요청합니다: ${currentDiagState.scopingSummary}` : lang === "en" ? `Hello Inpartner Advisory Team, I have completed the preliminary scoping diagnostic: ${currentDiagState.scopingSummary}. Please advise on consultation booking.` : `Halo tim konsultan INPARTNER, saya telah melakukan scoping diagnostik awal: ${currentDiagState.scopingSummary}. Mohon info konsultasi lebih lanjut.`),
                                                                                    target: "_blank",
                                                                                    rel: "noopener noreferrer",
                                                                                    className: "diag-wa-btn",
                                                                                    children: [
                                                                                        /*#__PURE__*/ _jsx(Phone, {
                                                                                            size: 14
                                                                                        }),
                                                                                        " ",
                                                                                        t.diagnosticWaWithScoping
                                                                                    ]
                                                                                }),
                                                                                /*#__PURE__*/ _jsx("button", {
                                                                                    type: "button",
                                                                                    onClick: ()=>handleResetDiagnostic(tree.pillarKey),
                                                                                    className: "diag-restart-btn",
                                                                                    children: t.diagnosticRestart
                                                                                })
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        });
                                                    })(),
                                                    msg.followUpQuestions && msg.followUpQuestions.length > 0 && !msg.isStreaming && /*#__PURE__*/ _jsx(FollowupWrap, {
                                                        children: msg.followUpQuestions.map((q, idx)=>/*#__PURE__*/ _jsxs(FollowupChip, {
                                                                type: "button",
                                                                onClick: ()=>handleSendMessage(q),
                                                                children: [
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: q
                                                                    }),
                                                                    /*#__PURE__*/ _jsx(ChevronRight, {
                                                                        size: 12
                                                                    })
                                                                ]
                                                            }, idx))
                                                    }),
                                                    msg.suggestLeadCapture && !msg.isStreaming && /*#__PURE__*/ _jsxs(ConsultationCard, {
                                                        children: [
                                                            /*#__PURE__*/ _jsxs(ConsultationHeader, {
                                                                children: [
                                                                    /*#__PURE__*/ _jsx(ConsultationBadge, {
                                                                        children: /*#__PURE__*/ _jsx(Building2, {
                                                                            className: "w-5 h-5 text-white"
                                                                        })
                                                                    }),
                                                                    /*#__PURE__*/ _jsx(ConsultationTitle, {
                                                                        children: t.interestedCta
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ _jsx(ConsultationDesc, {
                                                                children: t.interestedDesc
                                                            }),
                                                            /*#__PURE__*/ _jsxs(BtnWa, {
                                                                href: getWhatsAppUrl(lang === "id" ? `Halo tim Inpartner, saya ingin berkonsultasi lebih lanjut mengenai ${msg.recommendedService || "layanan penasihat bisnis"}.` : lang === "ko" ? `안녕하세요 인파트너 팀, ${msg.recommendedService || "비즈니스 자문 서비스"} 관련 상담을 요청합니다.` : `Hello Inpartner team, I would like to consult further regarding ${msg.recommendedService || "business advisory services"}.`),
                                                                target: "_blank",
                                                                rel: "noopener noreferrer",
                                                                children: [
                                                                    /*#__PURE__*/ _jsx(Phone, {
                                                                        size: 15
                                                                    }),
                                                                    /*#__PURE__*/ _jsx("span", {
                                                                        children: lang === "id" ? "Konsultasi via WhatsApp Resmi" : lang === "ko" ? "WhatsApp 공식 상담 연결" : "Consult via Official WhatsApp"
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }, msg.id)),
                                isLoading && !messages.some((m)=>m.isStreaming) && /*#__PURE__*/ _jsxs(TypingRow, {
                                    children: [
                                        /*#__PURE__*/ _jsx("div", {
                                            className: "bot-avatar-col",
                                            children: /*#__PURE__*/ _jsx(ChatbotIcon, {
                                                size: "xs",
                                                state: "thinking"
                                            })
                                        }),
                                        /*#__PURE__*/ _jsxs(TypingBubble, {
                                            children: [
                                                /*#__PURE__*/ _jsx(TypingDot, {}),
                                                /*#__PURE__*/ _jsx(TypingDot, {
                                                    delay: "0.2s"
                                                }),
                                                /*#__PURE__*/ _jsx(TypingDot, {
                                                    delay: "0.4s"
                                                }),
                                                /*#__PURE__*/ _jsx("span", {
                                                    style: {
                                                        fontSize: "12px",
                                                        color: "#64748b",
                                                        fontWeight: 500,
                                                        marginLeft: "4px"
                                                    },
                                                    children: t.sending
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ _jsx("div", {
                                    ref: messagesEndRef
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ _jsxs(ChatFooter, {
                        children: [
                            /*#__PURE__*/ _jsxs(InputForm, {
                                onSubmit: (e)=>{
                                    e.preventDefault();
                                    handleSendMessage();
                                },
                                children: [
                                    /*#__PURE__*/ _jsx(ChatInput, {
                                        ref: inputRef,
                                        id: "chat-input-message",
                                        name: "chatMessage",
                                        type: "text",
                                        autoComplete: "off",
                                        value: inputMessage,
                                        onChange: (e)=>setInputMessage(e.target.value),
                                        placeholder: agentConfig.inputPlaceholder,
                                        disabled: isLoading || isStreaming,
                                        maxLength: 2000
                                    }),
                                    isLoading || isStreaming ? /*#__PURE__*/ _jsx(SendBtn, {
                                        isStop: true,
                                        type: "button",
                                        onClick: handleStopGeneration,
                                        "aria-label": t.stopGenerating,
                                        title: t.stopGenerating,
                                        children: /*#__PURE__*/ _jsx(Square, {
                                            size: 13,
                                            style: {
                                                fill: "#e11d48"
                                            }
                                        })
                                    }) : /*#__PURE__*/ _jsx(SendBtn, {
                                        type: "submit",
                                        disabled: !inputMessage.trim(),
                                        "aria-label": "Send message",
                                        children: /*#__PURE__*/ _jsx(ArrowUp, {
                                            size: 16,
                                            strokeWidth: 2.6
                                        })
                                    })
                                ]
                            }),
                            /*#__PURE__*/ _jsxs(DisclaimerText, {
                                children: [
                                    /*#__PURE__*/ _jsx(ShieldCheck, {
                                        size: 11,
                                        style: {
                                            color: "#0070ba",
                                            flexShrink: 0
                                        }
                                    }),
                                    /*#__PURE__*/ _jsx("span", {
                                        children: t.disclaimer
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
// Clean Helper to format bot responses cleanly without raw markdown symbols (###, ---, *, etc.)
function formatBotMessage(text) {
    if (!text) return null;
    // Pre-normalize text so headings and dividers have proper line breaks
    const normalized = text.replace(/\r\n/g, "\n").replace(/([^\n])\s*(#{1,4}\s+)/g, "$1\n\n$2").replace(/([^\n])\s*(\-{3,}|\*{3,}|_{3,})\s*/g, "$1\n\n$2\n\n");
    // Split text by newlines into logical lines
    const lines = normalized.split("\n");
    return lines.map((line, lineIndex)=>{
        const trimmed = line.trim();
        // 1. Horizontal rules (--- or ***) -> render clean subtle divider
        if (/^(\-{3,}|\*{3,}|_{3,})$/.test(trimmed)) {
            return /*#__PURE__*/ _jsx("hr", {}, `hr-${lineIndex}`);
        }
        // 2. Headings (### Title or ## Title) -> render clean bold subheader without ### symbols
        const headingMatch = trimmed.match(/^#{1,4}\s+(.+)$/);
        if (headingMatch) {
            return /*#__PURE__*/ _jsx("div", {
                className: "bot-heading",
                children: renderInlineElements(headingMatch[1])
            }, `h-${lineIndex}`);
        }
        // 3. Bullet points (* item, - item, • item) -> render clean bullet dot without raw asterisk
        const bulletMatch = trimmed.match(/^[\*\-\•]\s+(.+)$/);
        if (bulletMatch) {
            return /*#__PURE__*/ _jsxs("div", {
                className: "bot-bullet-row",
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "bullet-dot",
                        children: "•"
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "bullet-text",
                        children: renderInlineElements(bulletMatch[1])
                    })
                ]
            }, `b-${lineIndex}`);
        }
        // 4. Numbered list (1. item, 2. item)
        const numMatch = trimmed.match(/^(\d+[\.\)])\s+(.+)$/);
        if (numMatch) {
            return /*#__PURE__*/ _jsxs("div", {
                className: "bot-num-row",
                children: [
                    /*#__PURE__*/ _jsx("span", {
                        className: "num-prefix",
                        children: numMatch[1]
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "num-text",
                        children: renderInlineElements(numMatch[2])
                    })
                ]
            }, `num-${lineIndex}`);
        }
        // 5. Empty line -> clean spacing
        if (!trimmed) {
            return /*#__PURE__*/ _jsx("div", {
                style: {
                    height: "6px"
                }
            }, `empty-${lineIndex}`);
        }
        // 6. Regular paragraph text
        return /*#__PURE__*/ _jsx("div", {
            className: "bot-paragraph",
            children: renderInlineElements(line)
        }, `p-${lineIndex}`);
    });
}
// Inline renderer for bold, italic, and links without leaking raw asterisks
function renderInlineElements(content) {
    // Matches **bold**, *italic*, and [link](url)
    const regex = /(\*\*.*?\*\*|\*[^\*]+?\*|\[.*?\]\(.*?\))/g;
    const parts = content.split(regex);
    return parts.map((part, index)=>{
        if (!part) return null;
        // Bold: **text**
        if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
            return /*#__PURE__*/ _jsx("strong", {
                style: {
                    fontWeight: 700,
                    color: "#0f172a"
                },
                children: part.slice(2, -2)
            }, index);
        }
        // Italic: *text* (clean up the asterisks so no raw symbol is shown)
        if (part.startsWith("*") && part.endsWith("*") && part.length > 2 && !part.includes("**")) {
            return /*#__PURE__*/ _jsx("span", {
                style: {
                    fontStyle: "italic",
                    color: "#334155"
                },
                children: part.slice(1, -1)
            }, index);
        }
        // Link: [label](url)
        const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
        // Model output is untrusted: only allow safe URL schemes (blocks javascript:, data:, etc.)
        if (linkMatch && !/^(https?:|mailto:|tel:)/i.test(linkMatch[2].trim())) {
            return linkMatch[1];
        }
        if (linkMatch) {
            return /*#__PURE__*/ _jsx("a", {
                href: linkMatch[2],
                target: "_blank",
                rel: "noopener noreferrer",
                style: {
                    color: "#0070ba",
                    fontWeight: 600,
                    textDecoration: "underline",
                    textUnderlineOffset: "2px"
                },
                children: linkMatch[1]
            }, index);
        }
        // Clean any stray single asterisk or hashes from text
        const cleaned = part.replace(/#{1,4}\s*/g, "").replace(/[\*\_]/g, "");
        return cleaned;
    });
}

;// CONCATENATED MODULE: ./src/components/Chatbot/index.ts
/**
 * Inpartner AI Advisory Assistant
 * Component Entrypoint for Host Integration
 */ 



/* harmony default export */ const Chatbot = ((/* unused pure expression or super */ null && (ChatbotMount)));

;// CONCATENATED MODULE: ./src/pages/_app.tsx









function MyApp({ Component , pageProps  }) {
    const router = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
        const handleRouteChange = (url)=>{
            // Google Analytics (UA) page view tracking
            if (typeof window.gtag === "function") {
                window.gtag("config", "UA-248151888-1", {
                    page_path: url
                });
            }
            // Google Tag Manager (GTM) page view tracking
            if (typeof window.gtag === "function") {
                window.gtag("config", "G-70DY47TGF7", {
                    page_path: url
                });
            }
        };
        router.events.on("routeChangeComplete", handleRouteChange);
        return ()=>{
            router.events.off("routeChangeComplete", handleRouteChange);
        };
    }, [
        router.events
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)((SSRProvider_default()), {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "INPARTNER CONSULTANT"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Global, {
                styles: [
                    GlobalStyle/* globalStyles */.W0
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(ChatbotMount_ChatbotMount, {})
        ]
    });
}
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 4352:
/***/ (() => {



/***/ }),

/***/ 2805:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react");

/***/ }),

/***/ 5193:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/react/jsx-runtime");

/***/ }),

/***/ 1480:
/***/ ((module) => {

"use strict";
module.exports = require("@emotion/styled");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [735,965,920], () => (__webpack_exec__(1365)));
module.exports = __webpack_exports__;

})();