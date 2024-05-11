import type { StaticImageData } from "next/image";
import u47Fet from "@/images/gear/microphones/u47-fet.jpg";
import neumannTlm102 from "@/images/gear/microphones/neumann-tlm102.jpg";
import sennheiserMd421 from "@/images/gear/microphones/sennheiser-md421-II.jpg";
import beyerdynamicsM88 from "@/images/gear/microphones/beyerdynamics-m88.jpg";
import audioTechnica from "@/images/gear/microphones/audio-technica-atm-450.jpg";
import shureBeta91a from "@/images/gear/microphones/shure-beta-91a.jpg";
import shureBeta52a from "@/images/gear/microphones/shure-beta-52a.jpg";
import shureSm57 from "@/images/gear/microphones/shure-sm-57.jpg";

import sonor14x5Swinger from "@/images/gear/snare-drums/sonor-14x5-swinger.jpg";
import sonorArtist14x6Cottonwood from "@/images/gear/snare-drums/sonor-artist-14x6-cottonwood.jpg";
import sonor13x5ArtistEarth from "@/images/gear/snare-drums/sonor-13x5-artist-earth.jpg";
import sonor14x4Designer from "@/images/gear/snare-drums/sonor-14x4-designer.jpg";
import sonor12x5 from "@/images/gear/snare-drums/sonor-12x5.jpg";
import tikiDrum13x6 from "@/images/gear/snare-drums/tiki-drum-13x6-5.jpg";

import DualMultiTrash from "@/images/gear/cymbales/14-dual-multi-trash.jpg";
import MiniHats from "@/images/gear/cymbales/10-mini-hats.jpg";
import TradTopJazzTop from "@/images/gear/cymbales/14-trad-top-jazz-top.jpg";
import VintagePureHats from "@/images/gear/cymbales/14-vintage-pure-hats.jpg";
import DualHats from "@/images/gear/cymbales/15-dual-hats.jpg";
import DarkCrash from "@/images/gear/cymbales/18-dark-crash.jpg";
import aaxStudioHats from "@/images/gear/cymbales/aax-studio-hats.jpg";
import DualCrash from "@/images/gear/cymbales/18-dual-crash.jpg";
import VintagePureRide from "@/images/gear/cymbales/20-vintage-pure-ride.jpg";
import BigAppleDarkRide from "@/images/gear/cymbales/22-big-apple-dark-ride.jpg";
import aaxStudioRide from "@/images/gear/cymbales/aax-studio-ride.jpg";

import mesaBoogieDc5 from "@/images/gear/instruments/mesa-boogie-dc-5.jpg";
import bongosLpFiberglass from "@/images/gear/instruments/bongos-lp-fiberglass.jpg";
import rainStickGuiro from "@/images/gear/instruments/rain-stick-guiro.jpg";
import zurna from "@/images/gear/instruments/zurna.jpg";
import thelevi from "@/images/gear/instruments/thelevi.jpg";
import castagnette from "@/images/gear/instruments/castagnette.jpg";
import funkyClave from "@/images/gear/instruments/funky-clave.jpg";
import kazoo from "@/images/gear/instruments/kazoo.jpg";
import maracas from "@/images/gear/instruments/maracas.jpg";

import revoxB77TapeRecorder from "@/images/gear/others/revox-b77-tape-recorder.jpg";
import antelopeOrionStudioSc from "@/images/gear/others/antelope-orion-studio-sc.jpg";
import focalAlpha65 from "@/images/gear/others/focal-alpha-65.jpg";

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
    name: "Sonor 14x5 Swinger",
    image: sonor14x5Swinger,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Sonor Artist 14x6 Cottonwood",
    image: sonorArtist14x6Cottonwood,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Sonor 13x5 Artist Earth",
    image: sonor13x5ArtistEarth,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Sonor 14x4 Designer",
    image: sonor14x4Designer,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Sonor 12x5",
    image: sonor12x5,
    titleBackgroundColor: "#BCC6FF",
  },
  {
    name: "Tiki drum 13x6,5",
    image: tikiDrum13x6,
    titleBackgroundColor: "#BCC6FF",
  },
];

export const cymbales: GearElement[] = [
  {
    name: '14" Dual multi trash',
    image: DualMultiTrash,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '10" Mini hats',
    image: MiniHats,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '14" Trad Top/Jazz top',
    image: TradTopJazzTop,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '14" Vintage pure hats',
    image: VintagePureHats,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '15" Dual hats',
    image: DualHats,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '18" Dark Crash',
    image: DarkCrash,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: "AAX Studio hats",
    image: aaxStudioHats,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '18" Dual crash',
    image: DualCrash,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '20" Vintage Pure Ride',
    image: VintagePureRide,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: '22" Big Apple dark ride',
    image: BigAppleDarkRide,
    titleBackgroundColor: "#C6BDFF",
  },
  {
    name: "AAX Studio Ride",
    image: aaxStudioRide,
    titleBackgroundColor: "#C6BDFF",
  },
];

export const instruments: GearElement[] = [
  {
    name: "Mesa Boogie DC-5",
    image: mesaBoogieDc5,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Bongos LP Fiberglass",
    image: bongosLpFiberglass,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Rain Stick Guiro",
    image: rainStickGuiro,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Zurna",
    image: zurna,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Thelevi",
    image: thelevi,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Castagnette",
    image: castagnette,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Funky Clave",
    image: funkyClave,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Kazoo",
    image: kazoo,
    titleBackgroundColor: "#DDC1FF",
  },
  {
    name: "Maracas",
    image: maracas,
    titleBackgroundColor: "#DDC1FF",
  },
];

export const others: GearElement[] = [
  {
    name: "Revox B77 Tape Recorder",
    image: revoxB77TapeRecorder,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Antelope Orion Studio SC",
    image: antelopeOrionStudioSc,
    titleBackgroundColor: "#C3D8FF",
  },
  {
    name: "Focal Alpha 65",
    image: focalAlpha65,
    titleBackgroundColor: "#C3D8FF",
  },
];
