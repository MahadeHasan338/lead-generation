import { Didact_Gothic, Barlow } from "next/font/google";

export const didact_gothic = Didact_Gothic({
  subsets: ["latin"],
  weight: ["400"],
});

export const barlow = Barlow({
  subsets: ["latin"],
  weight: ["400", "500", "600", "800"],
});
