import logo from './assets/logo.svg';
import './Header.css';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
          <a href="/">
            <img src={logo} />
          </a>
          <a href="/">
            <img src={logo} />
          </a>
      </div>
    </div>
  );
};

export default Header;
