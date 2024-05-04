import type { StaticImageData } from "next/image";
import u47Fet from "@/images/gear/u47-fet.png";
import neumannTlm102 from "@/images/gear/neumann-tlm102.png";
import sennheiserMd421 from "@/images/gear/sennheiser-md421-II.png";
import beyerdynamicsM88 from "@/images/gear/beyerdynamics-m88.png";

export type GearElement = {
  name: string;
  image: StaticImageData;
  titleBackgroundColor: `#${string}`;
  description?: string;
};

export const microphones: GearElement[] = [
  {
    name: "U47 FET",
    image: u47Fet,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Neumann TLM 102 (x2)",
    image: neumannTlm102,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Sennheiser MD421-II (x3)",
    image: sennheiserMd421,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Beyerdynamics M88 (x2)",
    image: beyerdynamicsM88,
    titleBackgroundColor: "#C3D8FF",
  },
];

export const snareDrums: GearElement[] = [
  {
    name: "U47 FET",
    image: u47Fet,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Neumann TLM 102 (x2)",
    image: neumannTlm102,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Sennheiser MD421-II (x3)",
    image: sennheiserMd421,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Beyerdynamics M88 (x2)",
    image: beyerdynamicsM88,
    titleBackgroundColor: "#BCC6FF",
  },
];

export const cymbales: GearElement[] = [
  {
    name: "U47 FET",
    image: u47Fet,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: "Neumann TLM 102 (x2)",
    image: neumannTlm102,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: "Sennheiser MD421-II (x3)",
    image: sennheiserMd421,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: "Beyerdynamics M88 (x2)",
    image: beyerdynamicsM88,
    titleBackgroundColor: "#C6BDFF",
  },
];

export const instruments: GearElement[] = [
  {
    name: "U47 FET",
    image: u47Fet,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Neumann TLM 102 (x2)",
    image: neumannTlm102,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Sennheiser MD421-II (x3)",
    image: sennheiserMd421,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Beyerdynamics M88 (x2)",
    image: beyerdynamicsM88,
    titleBackgroundColor: "#DDC1FF",
  },
];

export const others: GearElement[] = [
  {
    name: "U47 FET",
    image: u47Fet,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Neumann TLM 102 (x2)",
    image: neumannTlm102,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Sennheiser MD421-II (x3)",
    image: sennheiserMd421,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Beyerdynamics M88 (x2)",
    image: beyerdynamicsM88,
    titleBackgroundColor: "#C3D8FF",
  },
];
