import ProductOverview from "../components/projects/ProductOverview";
import TechnicalSpecs from "../components/projects/TechnicalSpecs";
import EngineeringArchitecture from "../components/projects/EngineeringArchitecture";
import CoreInnovations from "../components/projects/CoreInnovations";
import Applications from "../components/projects/Applications";
import DeploymentCTA from "../components/projects/DeploymentCTA";

import VisionBanner from "../components/projects/VisionBanner";
import SmartMachineConcept from "../components/projects/SmartMachineConcept";
import FutureArchitecture from "../components/projects/FutureArchitecture";
import Roadmap from "../components/projects/Roadmap";
import MarketOpportunity from "../components/projects/MarketOpportunity";
import PartnershipCTA from "../components/projects/PartnershipCTA";

export default function Projects() {
  return (
    <div>
      {/* CURRENT PROJECT */}
      <ProductOverview />
      <TechnicalSpecs />
      <EngineeringArchitecture />
      <CoreInnovations />
      <Applications />
      <DeploymentCTA />

      {/* UPCOMING PROJECT */}
      <VisionBanner />
      <SmartMachineConcept />
      <FutureArchitecture />
      <Roadmap />
      <MarketOpportunity />
      <PartnershipCTA />
    </div>
  );
}
