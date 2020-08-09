import * as React from "react";
import foto from "../../assets/foto.jpg";
import "./style.scss";

interface IProps {

}
const Header: React.FC<IProps> = (IProps) => {
  return (
    <div className="header">
      <div className="picture">
        <img src={foto} alt="André Teixeira"/>
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
