import logo from './assets/logo.svg';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Header = () => {
  return (
    <div className="navbar">
      <div className="container">
        <Link to={'/'}>
          <img src={logo} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
