import * as React from "react";
import { Cv } from "./components/Cv"
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import './App.scss';

library.add(fab, faAngleRight);

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      <Cv />
    </div>
  );
};

export default App;
