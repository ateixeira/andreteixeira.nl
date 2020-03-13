import * as React from "react";
import { Cv } from "./components/Cv"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight, faGraduationCap, faUser, faHammer, faIcons, faCodeBranch, faAddressCard, faUserPlus, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import './App.scss';

library.add(fab, faAngleRight);
library.add(fab, faUser);
library.add(fab, faAddressCard);
library.add(fab, faUserPlus);
library.add(fab, faCodeBranch);
library.add(fab, faHammer);
library.add(fab, faGraduationCap);
library.add(fab, faIcons);
library.add(fab, faPhone);
library.add(fab, faEnvelope);



const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Cv />
    </div>
  );
};

export default App;
