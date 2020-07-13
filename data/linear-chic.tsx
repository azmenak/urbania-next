import { GRADES } from "../constants";

export const description = (
  <>
    <p>
      From concept to execution the Urbania Linear Chic Collection was curated
      to offer the end user a product produced to meet an impeccable quality
      standard in combination with finishing options that would appeal to all
      regions of the world, our ideal customer is one who appreciates the
      R&amp;Q grain structure and the tone diversity which is an inherent
      property of an authentic hardwood floor.
    </p>
  </>
);

export const dimensions = {
  length: {
    metric: "400mm - 2200mm",
    imperial: '16" - 87"',
  },
  width: {
    metric: "152mm or 127mm",
    imperial: '6" or 5"',
  },
  thickness: {
    metric: "15mm",
    imperial: '⅝"',
  },
};

export const construction = {
  top: "4mm wear dry sawn American Rift &amp; Quartersawn White Oak",
  core: "11mm Baltic Birch Plywood",
};

export const installation = [
  "Full spread glue down",
  "Glue assist nail down",
  "T&G perimeter glue — float",
];

export const technical = {
  moisture: "6-9%",
  assembly: "Precision tongue & groove",
  packaging: [
    {
      label: '5"',
      metric: 3.05,
      imperial: 32.81,
    },
    {
      label: '6"',
      metric: 2.68,
      imperial: 28.83,
    },
  ],
};

export const skus = [
  {
    id: "pur-oak",
    name: "PUR Oak",
    description: `High-grade natural white oak brightened to bring it closer to the appearance of unfinished oak.`,
  },
  {
    id: "pale-cream-oak",
    name: "Pale Cream Oak",
    description: `High-grade oak crafted to achieve the look of a Scandinavian White Wash without compromising the grain transparency, we aim to make the grain structure of the floor a subtle but important component of the modern style.`,
  },
  {
    id: "barn-oak",
    name: "Barn Oak",
    description: `medium tone brown crafted to achieve the “reclaim” look, there are multiple warm brown undertones present in this floor. The transparency is spectacular, this floor has the appearance of aged barnwood.`,
  },
  {
    id: "burnished-bronze",
    name: "Burnished Bronze Oak",
    description: `Dark brown with a warm grey undertone, this floor features distinctive grain patterns, enhanced wood character and pleasing color variation.`,
  },
  {
    id: "tawny-oak",
    name: "Tawny Oak",
    description: `Lighter version of Greige it is produced on a Select Grade veneer, which includes some wood character plus a pleasing but muted amount of color variation.`,
  },
  {
    id: "tailored-taupe",
    name: "Tailored Taupe Oak",
    description: `Medium tone Greige, also produced on a Select Grade Veneer, a higher degree color variation is a feature.`,
  },
];
