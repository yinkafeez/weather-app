import img from "./img/weatherLogo.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-web-name-ul">
        <li className="nav-web-name-li">
          <img src={img} alt="img" height={55} width={60} />
          <p>
            Weather<em>Service</em>
          </p>
        </li>
      </ul>
      {/* <ul className="nav-weather-links-ul">
        <li className="nav-weather-links-li"> Current Weather </li>
        <li className="nav-weather-links-li"> Galllery </li>
        <li className="nav-weather-links-li"> Contacts </li>
      </ul> */}
    </div>
  );
}
