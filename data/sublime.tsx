import { GRADES } from "../constants";

export const description = (
  <>
    <p>
      At Urbania Flooring, urban style is our identity we embrace it and are
      guided by the zeitgeist of all that it means to be “Urban” in today’s
      modern world.
    </p>
    <p>
      We strive to create a product that will resonate within the design
      community; professionals as well as those with the talent and creativity
      to create their own beautiful spaces. The Sublime Collection features 8
      unique floors, from the rich brown tones of double smoked White Oak to the
      luxurious surface textures created by manually scrapping and distressing
      one plank at a time, we are confident that the Urbania Sublime collection
      can be that indispensable resource at the heart of your design
      inspirations.
    </p>
    <p>
      The Sublime Collection stands alone in the market as a ¾″ thick, 6 foot
      long and 7.5 inch wide engineered plank, we feature a ⅙″ dry sawn wear
      layer &amp; an exceptional length average, 80% full length planks. that
      will stand the test of time. You will enjoy the beauty of an elegant
      hardwood floor, with a construction designed to stand the test of time.
      element with the stability only possible with the “Engineered in Germany”
      dry sawn cross grain construction.
    </p>
  </>
);

export const dimensions = {
  length: {
    metric: "1900mm",
    imperial: "6'3\"",
  },
  width: {
    metric: "190mm",
    imperial: '7 ½"',
  },
  thickness: {
    metric: "19mm",
    imperial: '¾"',
  },
};

export const construction = {
  top: "3.5mm wear dry sawn hardwood",
  core: "15.5mm Siberian Larch Plywood",
};

export const installation = [
  "Full spread glue down",
  "Glue assist nail down",
  "T&G perimeter glue — float",
];

export const technical = {
  moisture: "6-9%",
  assembly: "Precision tongue & groove",
  packaging: {
    metric: 2.166,
    imperial: 23.33,
  },
};

export const skus = [
  {
    id: "naked-oak",
    name: "Naked Oak",
    brightness: 0.9,
    grade: GRADES.AB,
    description: `"Invisible finish", designed to appear unfinished and natural with full performance finish.`,
  },
  {
    id: "ivory-clay",
    name: "Ivory and Clay",
    brightness: 0.6,
    grade: GRADES.AB,
    description: `Brushed two tone taupe over white grain`,
  },
  {
    id: "calico-lacquer",
    name: "Calico Brown",
    brightness: 0.7,
    grade: GRADES.AB,
    description: `Mid-light brown finish, subtle grain pattern.`,
  },
  {
    id: "platinum-lacquer",
    name: "Platinum Gray",
    brightness: 0.5,
    grade: GRADES.AB,
    description: `Modern gray finish over subtle contrasting white tones.`,
  },
  {
    id: "dun-taupe",
    name: "Dun Taupe",
    brightness: 0.5,
    grade: GRADES.AB,
    description: `Brushed light brown taupe`,
  },
  {
    id: "ebony-brown",
    name: "Ebony Brown Oak",
    brightness: 0.3,
    grade: GRADES.AB,
    description: `Coffee brown over dark brown grain, subtle contrast.`,
  },
];
