"use client";

import { Content } from "@prismicio/client";
import Link from "next/link";
import { PrismicNextLink } from "@prismicio/next";
import styles from "./styles/Header.module.css";
import ButtonLink from "./ButtonLink";
import WordMark from "./WordMark";

type NavbarProps = {
  settings: Content.SettingsDocument;
};

const Navbar = ({ settings }: NavbarProps) => {
  return (
    <nav className={styles.navbarContainer} aria-label="Main">
      <div className={`${styles.navbarWrapper}`}>
        <Link href="/">
          <WordMark />
          <span className="sr-only md:flex-row">Glisten.ai Home Page</span>
        </Link>
        <ul className={styles.navList}>
          {settings.data.navigation.map((item) => {
            if (item.cta_button) {
              return (
                <li key={item.label}>
                  <ButtonLink field={item.link}>{item.label}</ButtonLink>
                </li>
              );
            }
            return (
              <li key={item.label}>
                <PrismicNextLink className={styles.navLinks} field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
