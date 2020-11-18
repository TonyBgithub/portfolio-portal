import React from "react"
import NavMain from "../NavMain"
import SubNav from '../NavSub';
import Footer from '../Footer';
import '../../scss/style-guide.scss';

function MainLayout(props) {
  const { children, subNav } = props

  //If SubNav is true, insert a SubNav component and pass it the props. 
  // Prevents error from Breadcrumbs trying to access index page pathname if you just insert SubNav component.
  // We don't want the SubNav to appear on homepage, since we'll be using CARDS.
  return (
    <div className = "docs-wrap">
      <div className={subNav ? 'nav-wrap has-sub-nav' : 'nav-wrap'}>
        <NavMain />
        {subNav && <SubNav {...props} />}
      </div>
      <div className="layout-content">{children}</div>
      <Footer />
    </div>
  )
}

export default MainLayout