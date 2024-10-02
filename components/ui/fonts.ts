import { Gulzar, Poppins, Readex_Pro, Work_Sans } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const workSans = Work_Sans({
  subsets: ["latin"],
});

export const readex = Readex_Pro({
  subsets: ["latin"],
});

export const gulzar = Gulzar({ weight: ["400"], subsets: ["arabic"] });
