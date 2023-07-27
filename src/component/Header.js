import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="site_inner">
          <div className="logo">
            <h2>Logo</h2>
          </div>
          <div className="menu">
            <ul>
              <li>
                <Link to="">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/todo">TodoMobX</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
