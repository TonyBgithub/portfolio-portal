import React from 'react';
// import _ from 'lodash';

function AsideMenu(props) {
    const navItems = props.asideLinks;

    return (
      <aside className="aside-nav">
        <div className="aside-nav__title is-size-h5">In the article</div>
        {navItems.map(el => {
            const {
              id,
              textNode,
            } = el;
            let classes = `doc-header ${el.tagName}`;

            return <a key={id} className={classes} href={`#${id}`}>{textNode}</a>;
        })}
      </aside>
    );
}

export default AsideMenu;