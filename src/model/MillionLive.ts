import { Album } from "../types/Album.ts";
import MillionRadio from "./millionlive/MillionRadio.ts";
import LiveTheaterPerformance from "./millionlive/LiveTheaterPerformance.ts";
import LiveTheaterForward from "./millionlive/LiveTheaterForward.ts";
import MillionTheaterWave from "./millionlive/MillionTheaterWave.ts";
import MasterSparkle2 from "./millionlive/MasterSparkle2.ts";
import MillionTheaterGeneration from "./millionlive/MillionTheaterGeneration.ts";
import MillionTheaterSeason from "./millionlive/MillionTheaterSeason.ts";
import MillionTheaterVariety from "./millionlive/MillionTheaterVariety.ts";
import TheaterActivities from "./millionlive/TheaterActivities.ts";
import TheaterBoost from "./millionlive/TheaterBoost.ts";
import TheaterChallenge from "./millionlive/TheaterChallenge.ts";
import Other from "./millionlive/Other.ts";

const Albums: Array<Album> = [];

const MillionLive: Array<Album> = Albums.concat(
  LiveTheaterPerformance,
  LiveTheaterForward,
  MillionRadio,
  MillionTheaterGeneration,
  MillionTheaterWave,
  MillionTheaterSeason,
  MillionTheaterVariety,
  MasterSparkle2,
  TheaterActivities,
  TheaterBoost,
  TheaterChallenge,
  Other,
);

export default MillionLive;
