import solitudeGallery from "@/assets/projects/solitude-gallery.jpg";
import solitudeGalleryDetail from "@/assets/projects/solitude-gallery-detail.jpg";
import aeonSkincare from "@/assets/projects/aeon-skincare.jpg";
import aeonSkincareDetail from "@/assets/projects/aeon-skincare-detail.jpg";
import meridianCoffee from "@/assets/projects/meridian-coffee.jpg";
import meridianCoffeeDetail from "@/assets/projects/meridian-coffee-detail.jpg";
import northlineJournal from "@/assets/projects/northline-journal.jpg";
import northlineJournalDetail from "@/assets/projects/northline-journal-detail.jpg";
import cobaltStudio from "@/assets/projects/cobalt-studio.jpg";
import cobaltStudioDetail from "@/assets/projects/cobalt-studio-detail.jpg";
import formaBiennale from "@/assets/projects/forma-biennale.jpg";
import formaBiennaleDetail from "@/assets/projects/forma-biennale-detail.jpg";

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
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
