import React from 'react';
import { Link } from "gatsby";
import './NavMain.scss';


function NavMain() {
// const [showMenu, setShowMenu] = useState(false);


return (
    <nav className="nav-main">
      <Link className="nav-main__logo" to="/">
      </Link>
      <span className="nav-main__help-center">Doc Portal</span>
    <div className="nav-center">
      <div className="nav-item"><a className="nav-main__plain" href ="/">Home</a></div>
      <div className="nav-item"><a className="nav-main__plain" href ="/api-documentation">APIs</a></div>
      <div className="nav-item"><a className="nav-main__plain" href ="/bio/about-me/">About</a></div>
    </div>

    <div className="nav-right">
      <div className="nav-item">
        <a className="nav-secondary__link" href ="https://github.com/TonyBgithub/portfolio-portal">Edit on GitHub</a>
      </div>
      <div className="nav-item nav-item--btn">
        <a className="nav-main__login" href ="https://github.com/TonyBgithub/portfolio-portal/issues">Report Issue</a>
      </div>
    </div>
</nav>)
}

export default NavMain;