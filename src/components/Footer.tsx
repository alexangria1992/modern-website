import React from "react";
import WordMark from "./WordMark";
import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import styles from "./styles/Footer.module.css";
const Footer = async () => {
  const client = createClient();
  const settings = await client.getSingle("settings");
  return (
    <footer className={styles.footerSection}>
      <Link href="/">
        <WordMark />
        <span className="sr-only md:flex-row">Glisten.ai Home Page</span>
      </Link>
      <nav aria-label="Footer">
        <ul className={styles.navList}>
          {settings.data.navigation.map((item) => (
            <li key={item.label}>
              <PrismicNextLink className={styles.navLinks} field={item.link}>
                {item.label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;
