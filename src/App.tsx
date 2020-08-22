import * as React from "react";
import { Cv } from "./components/Cv";
// import { Game } from "./components/Game";
import { library, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faLinkedin,
  faAws,
  faGithubAlt,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faAngleRight,
  faAward,
  faBuilding,
  faCodeBranch,
  faEnvelope,
  faGraduationCap,
  faHammer,
  faIcons,
  faMapMarkerAlt,
  faPhone,
  faPlus,
  faUser,
  faTrophy,
  faLandmark,
  faHome,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";
import "./App.scss";

library.add(faHome);
library.add(faMapMarker);
library.add(faUser);
library.add(faAddressCard);
library.add(faAngleRight);
library.add(faAward);
library.add(faAws as IconDefinition);
library.add(faGithubAlt as IconDefinition);
library.add(faStackOverflow as IconDefinition);
library.add(faBuilding);
library.add(faCodeBranch);
library.add(faEnvelope);
library.add(faGraduationCap);
library.add(faHammer);
library.add(faIcons);
library.add(faLandmark);
library.add(faLinkedin as IconDefinition);
library.add(faMapMarkerAlt);
library.add(faPhone);
library.add(faPlus);
library.add(faTrophy);
library.add(faUser);

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Cv />
      {/* <Game /> */}
    </div>
  );
};

export default App;
