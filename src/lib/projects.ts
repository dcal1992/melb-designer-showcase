import solitudeGallery from "@/assets/projects/solitude-gallery.jpg";
import solitudeGalleryDetail from "@/assets/projects/solitude-gallery-detail.jpg";
import solitudeGallery2 from "@/assets/projects/solitude-gallery-2.jpg";
import solitudeGallery3 from "@/assets/projects/solitude-gallery-3.jpg";
import solitudeGallery4 from "@/assets/projects/solitude-gallery-4.jpg";
import aeonSkincare from "@/assets/projects/aeon-skincare.jpg";
import aeonSkincareDetail from "@/assets/projects/aeon-skincare-detail.jpg";
import aeonSkincare2 from "@/assets/projects/aeon-skincare-2.jpg";
import aeonSkincare3 from "@/assets/projects/aeon-skincare-3.jpg";
import aeonSkincare4 from "@/assets/projects/aeon-skincare-4.jpg";
import meridianCoffee from "@/assets/projects/meridian-coffee.jpg";
import meridianCoffeeDetail from "@/assets/projects/meridian-coffee-detail.jpg";
import meridianCoffee2 from "@/assets/projects/meridian-coffee-2.jpg";
import meridianCoffee3 from "@/assets/projects/meridian-coffee-3.jpg";
import meridianCoffee4 from "@/assets/projects/meridian-coffee-4.jpg";
import northlineJournal from "@/assets/projects/northline-journal.jpg";
import northlineJournalDetail from "@/assets/projects/northline-journal-detail.jpg";
import northlineJournal2 from "@/assets/projects/northline-journal-2.jpg";
import northlineJournal3 from "@/assets/projects/northline-journal-3.jpg";
import northlineJournal4 from "@/assets/projects/northline-journal-4.jpg";
import cobaltStudio from "@/assets/projects/cobalt-studio.jpg";
import cobaltStudioDetail from "@/assets/projects/cobalt-studio-detail.jpg";
import cobaltStudio2 from "@/assets/projects/cobalt-studio-2.jpg";
import cobaltStudio3 from "@/assets/projects/cobalt-studio-3.jpg";
import cobaltStudio4 from "@/assets/projects/cobalt-studio-4.jpg";
import formaBiennale from "@/assets/projects/forma-biennale.jpg";
import formaBiennaleDetail from "@/assets/projects/forma-biennale-detail.jpg";
import formaBiennale2 from "@/assets/projects/forma-biennale-2.jpg";
import formaBiennale3 from "@/assets/projects/forma-biennale-3.jpg";
import formaBiennale4 from "@/assets/projects/forma-biennale-4.jpg";

export type GalleryImage = {
  src: string;
  width: number;
  height: number;
  caption: string;
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  client: string;
  scope: string;
  types: string[];
  summary: string;
  description: string;
  cover: string;
  coverWidth: number;
  coverHeight: number;
  detail: string;
  gallery: GalleryImage[];
};

export const projects: Project[] = [
  {
    slug: "solitude-gallery",
    title: "Solitude Gallery",
    category: "Branding",
    year: "2024",
    client: "Solitude Gallery",
    scope: "Identity system, exhibition graphics",
    types: ["Branding", "Print", "Wayfinding"],
    summary:
      "An identity for a contemporary photography museum built on quiet negative space and a single, considered typeface.",
    description:
      "Solitude Gallery needed an identity that could hold its own beside the photography it exhibits — never competing, always framing. The system leans on generous margins, a single grotesk, and a warm paper palette that shifts across exhibition signage, catalogues, and digital surfaces.",
    cover: solitudeGallery,
    coverWidth: 1024,
    coverHeight: 1280,
    detail: solitudeGalleryDetail,
    gallery: [
      {
        src: solitudeGalleryDetail,
        width: 1024,
        height: 1024,
        caption: "Identity detail — mark and margin study",
      },
      {
        src: solitudeGallery2,
        width: 1200,
        height: 900,
        caption: "Exhibition catalogue spread",
      },
      {
        src: solitudeGallery3,
        width: 900,
        height: 1100,
        caption: "Gallery wayfinding, level one",
      },
      {
        src: solitudeGallery4,
        width: 1200,
        height: 900,
        caption: "Stationery and collateral set",
      },
    ],
  },
  {
    slug: "aeon-skincare",
    title: "Aeon Skincare",
    category: "Visual Identity",
    year: "2023",
    client: "Aeon",
    scope: "Brand identity, packaging",
    types: ["Visual Identity", "Packaging"],
    summary:
      "A matte, minimal identity for a luxury skincare label — restraint as the signature.",
    description:
      "Aeon's identity is an exercise in subtraction. The packaging system uses frosted glass, a hairline wordmark, and a deliberately quiet label architecture so the product itself remains the hero. The result feels clinical and warm at once — a balance the founders wanted for their clinical-meets-craft positioning.",
    cover: aeonSkincare,
    coverWidth: 1024,
    coverHeight: 1280,
    detail: aeonSkincareDetail,
    gallery: [
      {
        src: aeonSkincareDetail,
        width: 1024,
        height: 1024,
        caption: "Primary packaging study",
      },
      {
        src: aeonSkincare2,
        width: 1200,
        height: 900,
        caption: "Full product range line-up",
      },
      {
        src: aeonSkincare3,
        width: 900,
        height: 1100,
        caption: "Label typography, macro detail",
      },
      {
        src: aeonSkincare4,
        width: 1200,
        height: 900,
        caption: "Secondary packaging and unboxing",
      },
    ],
  },
  {
    slug: "meridian-coffee",
    title: "Meridian Coffee",
    category: "Packaging",
    year: "2024",
    client: "Meridian Coffee Co.",
    scope: "Identity, retail packaging",
    types: ["Packaging", "Branding", "Print"],
    summary:
      "A modular label system for a specialty roaster, built on a strict baseline grid.",
    description:
      "Meridian needed a label system that could scale across single-origin bags, retail merchandising, and storefront signage without losing its typographic discipline. The solution is a modular grid: each origin occupies the same architecture with only the data changing, so the range reads as a coherent family while staying honest about what's inside each bag.",
    cover: meridianCoffee,
    coverWidth: 1024,
    coverHeight: 1280,
    detail: meridianCoffeeDetail,
    gallery: [
      {
        src: meridianCoffeeDetail,
        width: 1024,
        height: 1024,
        caption: "Single-origin label system",
      },
      {
        src: meridianCoffee2,
        width: 1200,
        height: 900,
        caption: "Retail range across five origins",
      },
      {
        src: meridianCoffee3,
        width: 900,
        height: 1100,
        caption: "Label grid, printed detail",
      },
      {
        src: meridianCoffee4,
        width: 1200,
        height: 900,
        caption: "In-store menu and signage",
      },
    ],
  },
  {
    slug: "northline-journal",
    title: "Northline Journal",
    category: "Website Design",
    year: "2023",
    client: "Northline",
    scope: "Digital editorial, art direction",
    types: ["Website Design", "Art Direction"],
    summary:
      "A digital editorial platform with oversized headlines and an asymmetric reading grid.",
    description:
      "Northline is an independent journal of long-form writing. The site treats the article as the unit of design: oversized headlines, an asymmetric column grid that breathes between sections, and a monochrome palette that lets photography and type carry the weight. Every page was art-directed to read like a printed spread.",
    cover: northlineJournal,
    coverWidth: 1280,
    coverHeight: 1024,
    detail: northlineJournalDetail,
    gallery: [
      {
        src: northlineJournalDetail,
        width: 1024,
        height: 1024,
        caption: "Article template, art-directed spread",
      },
      {
        src: northlineJournal2,
        width: 1200,
        height: 900,
        caption: "Home index on desktop",
      },
      {
        src: northlineJournal3,
        width: 900,
        height: 1100,
        caption: "Mobile reading experience",
      },
      {
        src: northlineJournal4,
        width: 1200,
        height: 900,
        caption: "Typographic style guide",
      },
    ],
  },
  {
    slug: "cobalt-studio",
    title: "Cobalt Studio",
    category: "Logo Design",
    year: "2022",
    client: "Cobalt Studio",
    scope: "Mark and identity system",
    types: ["Logo Design", "Branding"],
    summary:
      "A geometric wordmark and construction system for a design studio that wanted to show its working.",
    description:
      "Cobalt Studio asked for a mark that doubled as a demonstration of its own discipline. The wordmark is built on an exposed geometric grid, and the identity ships with the construction lines visible — a system that's confident enough to show the scaffolding. The result is a logo that behaves at 8mm on a business card and 8 metres on a studio wall.",
    cover: cobaltStudio,
    coverWidth: 1280,
    coverHeight: 1024,
    detail: cobaltStudioDetail,
    gallery: [
      {
        src: cobaltStudioDetail,
        width: 1024,
        height: 1024,
        caption: "Mark construction detail",
      },
      {
        src: cobaltStudio2,
        width: 1200,
        height: 900,
        caption: "Geometric grid sheet",
      },
      {
        src: cobaltStudio3,
        width: 900,
        height: 1100,
        caption: "Blind-embossed business card",
      },
      {
        src: cobaltStudio4,
        width: 1200,
        height: 900,
        caption: "Studio wall signage at scale",
      },
    ],
  },
  {
    slug: "forma-biennale",
    title: "Forma Biennale",
    category: "Print & Editorial",
    year: "2025",
    client: "Forma Biennale",
    scope: "Exhibition identity, wayfinding",
    types: ["Print & Editorial", "Wayfinding", "Branding"],
    summary:
      "A bold typographic identity and wayfinding system for an international design biennale.",
    description:
      "Forma Biennale required an identity that could carry across a sprawling exhibition site — posters, signage, programmes, and catalogue. The system uses an oversized display typeface cut against a strict wayfinding grid, so the biennale announces itself from across the hall and then guides you calmly once you're inside.",
    cover: formaBiennale,
    coverWidth: 1280,
    coverHeight: 1024,
    detail: formaBiennaleDetail,
    gallery: [
      {
        src: formaBiennaleDetail,
        width: 1024,
        height: 1024,
        caption: "Display type specimen",
      },
      {
        src: formaBiennale2,
        width: 1200,
        height: 900,
        caption: "Poster series, exterior site",
      },
      {
        src: formaBiennale3,
        width: 900,
        height: 1100,
        caption: "Wayfinding totem, main hall",
      },
      {
        src: formaBiennale4,
        width: 1200,
        height: 900,
        caption: "Programme and catalogue",
      },
    ],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
