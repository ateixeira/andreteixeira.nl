import * as React from "react";
import { Cv } from "./components/Cv";
// import { Game } from "./components/Game";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faAddressCard,
  faAngleRight,
  faBuilding,
  faCertificate,
  faCodeBranch,
  faEnvelope,
  faGraduationCap,
  faHammer,
  faIcons,
  faMapMarkerAlt,
  faPhone,
  faPlus,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import './App.scss';

library.add(faAngleRight);
library.add(faUser);
library.add(faAddressCard);
library.add(faUserPlus);
library.add(faCodeBranch);
library.add(faHammer);
library.add(faGraduationCap);
library.add(faIcons);
library.add(faPhone);
library.add(faEnvelope);
library.add(faLinkedin);
library.add(faMapMarkerAlt);
library.add(faBuilding);
library.add(faPlus);
library.add(faCertificate);

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Cv />
      {/* <Game /> */}
    </div>
  );
};

export default App;
