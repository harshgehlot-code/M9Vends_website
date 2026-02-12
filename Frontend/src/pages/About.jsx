import AboutBanner from "../components/about/AboutBanner";
import AboutStory from "../components/about/AboutStory";
import MissionVision from "../components/about/MissionVision";
import Values from "../components/about/Values";
import FounderTimeline from "../components/about/FounderTimeline";

export default function About() {
  return (
    <div>
      <AboutBanner />
      <AboutStory />
      <MissionVision />
      <Values />
      <FounderTimeline />
    </div>
  );
}
