import type { StaticImageData } from "next/image";
import u47Fet from "@/images/gear/microphones/u47-fet.jpg";
import neumannTlm102 from "@/images/gear/microphones/neumann-tlm102.jpg";
import sennheiserMd421 from "@/images/gear/microphones/sennheiser-md421-II.jpg";
import beyerdynamicsM88 from "@/images/gear/microphones/beyerdynamics-m88.jpg";
import audioTechnica from "@/images/gear/microphones/audio-technica-atm-450.jpg";
import shureBeta91a from "@/images/gear/microphones/shure-beta-91a.jpg";
import shureBeta52a from "@/images/gear/microphones/shure-beta-52a.jpg";
import shureSm57 from "@/images/gear/microphones/shure-sm-57.jpg";

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
  {
    name: "Audio Technica ATM 450",
    image: audioTechnica,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Shure Beta 91A",
    image: shureBeta91a,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Shure Beta 52A",
    image: shureBeta52a,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Shure SM57",
    image: shureSm57,
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
