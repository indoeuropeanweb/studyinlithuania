
export const homeSchema = [
    {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://www.studyinlithuania.in/#organization",
        name: "Study in Lithuania",
        alternateName: "Study in Lithuania Center",
        url: "https://www.studyinlithuania.in/",
        logo:
          "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
        description:
          "Study in Lithuania provides expert study abroad guidance for Indian students, including university selection, admission support, visa guidance, scholarships, and consultation for studying in Lithuania.",
        telephone: "+91 96501 33355",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "First Floor, Double Storey, 18/1-A, II, near Metro Station Tilak Nagar, above Sona Bakers, Prem Nagar, Tihar Village",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110058",
          addressCountry: "IN",
        },
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.studyinlithuania.in/#localbusiness",
        name: "Study in Lithuania Center",
        image:
          "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
        url: "https://www.studyinlithuania.in/",
        telephone: "+91 96501 33355",
        priceRange: "$$",
        description:
          "Study abroad consultancy in Delhi offering Lithuania university admission, visa guidance, course selection, scholarships, and education loan support for Indian students.",
        address: {
          "@type": "PostalAddress",
          streetAddress:
            "First Floor, Double Storey, 18/1-A, II, near Metro Station Tilak Nagar, above Sona Bakers, Prem Nagar, Tihar Village",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110058",
          addressCountry: "IN",
        },
        areaServed: {
          "@type": "Country",
          name: "India",
        },
        sameAs: ["https://www.studyinlithuania.in/"],
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://www.studyinlithuania.in/#breadcrumb",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://www.studyinlithuania.in/",
          },
        ],
      },
      {
        "@type": "WebSite",
        "@id": "https://www.studyinlithuania.in/#website",
        url: "https://www.studyinlithuania.in/",
        name: "Study in Lithuania",
        publisher: {
          "@id": "https://www.studyinlithuania.in/#organization",
        },
      },
      {
        "@type": "WebPage",
        "@id": "https://www.studyinlithuania.in/#webpage",
        url: "https://www.studyinlithuania.in/",
        name: "Study in Lithuania for Indian Students | Admission, Visa & Universities",
        description:
          "Get expert guidance to study in Lithuania from India. Explore top universities, English-taught courses, admission support, visa guidance, scholarships, and free consultation.",
        isPartOf: {
          "@id": "https://www.studyinlithuania.in/#website",
        },
        about: {
          "@id": "https://www.studyinlithuania.in/#organization",
        },
        breadcrumb: {
          "@id": "https://www.studyinlithuania.in/#breadcrumb",
        },
      },
    ],
  }
]


export const coursesSchema = [
  {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      "@id": "https://www.studyinlithuania.in/courses/#webpage",
      "url": "https://www.studyinlithuania.in/courses/",
      "name": "Study in Lithuania Courses for Indian Students | UG & PG Programs",
      "description": "Explore top undergraduate and postgraduate courses in Lithuania for Indian students. Find affordable programs in business, IT, engineering, health sciences, and more with expert admission guidance.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/courses/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/courses/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Courses",
          "item": "https://www.studyinlithuania.in/courses/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]

export const admissionSchema = [
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlithuania.in/admission/#webpage",
      "url": "https://www.studyinlithuania.in/admission/",
      "name": "Lithuania Admission for Indian Students | Study in Lithuania Admission Process",
      "description": "Apply for admission in top Lithuania universities with expert guidance. Get complete support for application, documentation, eligibility, visa process, and university admission in Lithuania for Indian students.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/admission/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/admission/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Admission",
          "item": "https://www.studyinlithuania.in/admission/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]

export const workingSchema = [
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlithuania.in/working/#webpage",
      "url": "https://www.studyinlithuania.in/working/",
      "name": "Work Opportunities in Lithuania for Indian Students | Study & Work in Lithuania",
      "description": "Explore part-time work opportunities in Lithuania for Indian students while studying. Learn about student work permits, job options, salary, post-study work opportunities, and career benefits in Lithuania.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/working/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/working/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Working",
          "item": "https://www.studyinlithuania.in/working/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]

export const visaandpermitSchema = [
  {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlithuania.in/visa-and-residence-permit/#webpage",
      "url": "https://www.studyinlithuania.in/visa-and-residence-permit/",
      "name": "Lithuania Student Visa & Residence Permit for Indian Students",
      "description": "Get complete guidance for Lithuania student visa and residence permit process for Indian students. Learn about visa requirements, documents, application steps, fees, and residence permit approval support.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/visa-and-residence-permit/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/visa-and-residence-permit/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Visa and Residence Permit",
          "item": "https://www.studyinlithuania.in/visa-and-residence-permit/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp"
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]

export const aboutSchema = [
  {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.studyinlithuania.in/about/#webpage",
      "url": "https://www.studyinlithuania.in/about/",
      "name": "About Study in Lithuania | Trusted Lithuania Education Consultant in India",
      "description": "Learn about Study in Lithuania, a trusted education consultancy helping Indian students with Lithuania university admissions, student visas, career guidance, and study abroad support.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/about/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/about/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "About",
          "item": "https://www.studyinlithuania.in/about/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
      "description": "Trusted Lithuania education consultancy helping Indian students with university admissions, visa guidance, and study abroad support."
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.studyinlithuania.in/#localbusiness",
      "name": "Study in Lithuania",
      "image": "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
      "url": "https://www.studyinlithuania.in/",
      "telephone": "+91 96501 33355",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Double Storey, 18/1-A, II, near Metro Station Tilak Nagar, above Sona Bakers, Prem Nagar, Tihar Village",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110058",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]

export const servicesSchema = [
  {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      "@id": "https://www.studyinlithuania.in/services/#service",
      "name": "Lithuania Study Abroad Services",
      "serviceType": "Study Abroad Consultancy",
      "provider": {
        "@id": "https://www.studyinlithuania.in/#organization"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      },
      "url": "https://www.studyinlithuania.in/services/",
      "description": "Professional Lithuania study abroad services for Indian students including university admission, visa assistance, documentation, scholarships, counseling, and pre-departure support."
    },
    {
      "@type": "WebPage",
      "@id": "https://www.studyinlithuania.in/services/#webpage",
      "url": "https://www.studyinlithuania.in/services/",
      "name": "Lithuania Study Abroad Services for Indian Students | Admission & Visa Support",
      "description": "Explore professional Lithuania study abroad services for Indian students including university admission, visa assistance, documentation, career counseling, scholarships, and pre-departure support.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/services/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/services/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://www.studyinlithuania.in/services/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
      "description": "Trusted Lithuania education consultancy helping Indian students with admissions, visa guidance, and study abroad services."
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]

export const contactSchema = [
  {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ContactPage",
      "@id": "https://www.studyinlithuania.in/contact/#webpage",
      "url": "https://www.studyinlithuania.in/contact/",
      "name": "Contact Study in Lithuania | Lithuania Education Consultant in India",
      "description": "Contact Study in Lithuania for expert guidance on university admissions, student visas, scholarships, and study abroad opportunities in Lithuania for Indian students.",
      "inLanguage": "en-IN",
      "isPartOf": {
        "@id": "https://www.studyinlithuania.in/#website"
      },
      "breadcrumb": {
        "@id": "https://www.studyinlithuania.in/contact/#breadcrumb"
      }
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://www.studyinlithuania.in/contact/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.studyinlithuania.in/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Contact",
          "item": "https://www.studyinlithuania.in/contact/"
        }
      ]
    },
    {
      "@type": "Organization",
      "@id": "https://www.studyinlithuania.in/#organization",
      "name": "Study in Lithuania",
      "url": "https://www.studyinlithuania.in/",
      "logo": "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91 96501 33355",
        "contactType": "customer support",
        "areaServed": "IN",
        "availableLanguage": ["English", "Hindi"]
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://www.studyinlithuania.in/#localbusiness",
      "name": "Study in Lithuania",
      "image": "https://www.studyinlithuania.in/assets/images/logos/logo.webp",
      "url": "https://www.studyinlithuania.in/",
      "telephone": "+91 96501 33355",
      "email": "info@studyinlithuania.in",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "First Floor, Double Storey, 18/1-A, II, near Metro Station Tilak Nagar, above Sona Bakers, Prem Nagar, Tihar Village",
        "addressLocality": "New Delhi",
        "addressRegion": "Delhi",
        "postalCode": "110058",
        "addressCountry": "IN"
      },
      "areaServed": {
        "@type": "Country",
        "name": "India"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.studyinlithuania.in/#website",
      "url": "https://www.studyinlithuania.in/",
      "name": "Study in Lithuania",
      "publisher": {
        "@id": "https://www.studyinlithuania.in/#organization"
      }
    }
  ]
}
]