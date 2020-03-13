import * as React from "react";
import "./style.scss";

interface IProps {

}
const Header: React.FC<IProps> = (IProps) => {
  return (
    <div className="header">
      <div className="picture">
        <img src="https://www.linkit.nl/themes/default/assets/img/uploaded/Andre%20Texeira%201518080777.jpg" alt="André Teixeira"/>
      </div>
      <div className="name_headline">
        <div className="name">ANDRÉ TEIXEIRA</div>
        <div className="headline">
          Software Engineer
        </div>
      </div>
    </div>
  );
};

export default Header;
