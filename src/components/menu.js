import React from 'react'
import { Link } from 'gatsby'

const Menu = () => (


    <div className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="navbar collapse navbar-collapse navbar-expand-lg effect-main" id="navbarSupportedContent">

        <ul className="navbar-nav ml-auto navbar-right">
            <li className="nav-item">
                <Link to="/#how-it-works" className="nav-link js-scroll-trigger">How it Works</Link>
            </li>
            <li className="nav-item">
                <Link to="/#features" className="nav-link js-scroll-trigger">Features</Link>
            </li>
            <li className="nav-item">
                <Link to="/blog" className="nav-link js-scroll-trigger">Blog</Link>
            </li>
            <li className="nav-item">
                <Link to="/#pricing" className="btn-cta nav-link js-scroll-trigger">Sign Up</Link>
            </li>
        </ul>
    </div>
</div>
    
)

export default Menu;