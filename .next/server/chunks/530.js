"use strict";
exports.id = 530;
exports.ids = [530];
exports.modules = {

/***/ 4530:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U$": () => (/* binding */ organizationSchema),
/* harmony export */   "Zl": () => (/* binding */ contactFaqSchema),
/* harmony export */   "oG": () => (/* binding */ servicesSchema)
/* harmony export */ });
const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ConsultingBusiness",
    "@id": "https://inpartner.id/#organization",
    name: "Inpartner",
    legalName: "PT Inpartner Optima Integra",
    url: "https://inpartner.id/",
    logo: "https://inpartner.id/images/logo.png",
    foundingDate: "2009",
    description: "PT Inpartner Optima Integra (Inpartner) is a premier management consulting and investment advisory firm in Indonesia, serving middle and large corporations across infrastructure, energy, and corporate strategy.",
    address: [
        {
            "@type": "PostalAddress",
            streetAddress: "Pakuwon Tower 10th Floor, Jl. Raya Casablanca Kav. 88",
            addressLocality: "South Jakarta",
            addressRegion: "DKI Jakarta",
            postalCode: "12870",
            addressCountry: "ID"
        },
        {
            "@type": "PostalAddress",
            streetAddress: "Jemur Sari Street V No. 10",
            addressLocality: "Surabaya",
            addressRegion: "East Java",
            postalCode: "60237",
            addressCountry: "ID"
        }
    ],
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+62-896-2831-0192",
        contactType: "corporate inquiries",
        email: "corporatesecretary@inpartner.id",
        availableLanguage: [
            "English",
            "Indonesian",
            "Korean"
        ]
    },
    sameAs: [
        "https://www.linkedin.com/company/inpartner",
        "https://www.instagram.com/inpartnerconsulting",
        "https://www.facebook.com/profile.php?id=100092037564577"
    ],
    knowsAbout: [
        "Management Consulting",
        "Investment Advisory",
        "Feasibility Studies (FS)",
        "Indonesia Market Entry Strategy",
        "Corporate Valuation",
        "ESG Policy Frameworks"
    ]
};
const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Management Consulting & Investment Advisory",
    provider: {
        "@id": "https://inpartner.id/#organization"
    },
    areaServed: {
        "@type": "Country",
        name: "Indonesia"
    },
    hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Inpartner Core Advisory Practice",
        itemListElement: [
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Business and Management Consulting",
                    description: "Strategic corporate planning, operational process optimization, market research, and competitive intelligence for enterprises in Indonesia."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Investment Advisory and Feasibility Studies",
                    description: "Financial modeling, project valuation, comprehensive bankable feasibility studies (FS), and private equity investment teasers."
                }
            },
            {
                "@type": "Offer",
                itemOffered: {
                    "@type": "Service",
                    name: "Executive Capacity Building",
                    description: "Customized C-suite coaching, workforce productivity enhancement, and corporate governance training programs."
                }
            }
        ]
    }
};
const contactFaqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
        {
            "@type": "Question",
            name: "What consulting services does Inpartner provide in Indonesia?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Inpartner provides strategic business and management consulting, investment advisory, market entry feasibility studies, corporate valuation, ESG frameworks, and executive capacity building across Indonesia."
            }
        },
        {
            "@type": "Question",
            name: "Where are Inpartner's corporate offices located?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Inpartner operates offices in South Jakarta (Pakuwon Tower, 10th Floor, Casablanca) and Surabaya (Jemur Sari V No. 10, East Java)."
            }
        },
        {
            "@type": "Question",
            name: "Does Inpartner handle public infrastructure and feasibility studies?",
            acceptedAnswer: {
                "@type": "Answer",
                text: "Yes, Inpartner has delivered major feasibility reviews, financial projections, and real sector evaluations for toll road authorities (BUJT), regional rapid transit (BRT), and renewable energy ventures."
            }
        }
    ]
};


/***/ })

};
;