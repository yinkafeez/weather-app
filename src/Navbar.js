import img from "./img/weatherLogo.png";
export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="nav-web-name-ul">
        <li className="nav-web-name-li">
          <img src={img} alt="img" height={55} width={60} />
          <p>
            Weather<em>whisperer</em>
          </p>
        </li>
      </ul>
    </div>
  );
}
