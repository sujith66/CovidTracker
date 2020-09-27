import React from "react";
import styles from "./Header.module.css";
import classNames from "classnames";
function Header() {
  return (
    <React.Fragment>
      <nav
        className={classNames(styles.flex, styles.alignItems, styles.margin)}
      >
        <section className={classNames(styles.container)}>
          <div
            className={classNames(
              styles.flex,
              styles.itemsCenter,
              styles.wFull
            )}
          >
            <div>
              <img />
              <span>Corona Tracker</span>
            </div>
            <div>
              <a href="/html/">Home</a>
              <a href="/css/">Travel Alert</a>
              <a href="/js/">What is Covid-19</a>
              <a href="/python/">About</a>
            </div>
          </div>
        </section>
      </nav>
    </React.Fragment>
  );
}

export default Header;
