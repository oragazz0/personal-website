import React from "react";

import styles from "@/styles/Footer.module.scss";

import BehanceIcon from "@/assets/social/icon_behance.svg";
import InstagramIcon from "@/assets/social/icon_instagram.svg";
import RedditIcon from "@/assets/social/icon_reddit.svg";
import TwitterIcon from "@/assets/social/icon_twitter.svg";

import Link from "next/link";

export default function Footer() {
  return (
    <div className={[styles.footerWrapper, "d-none d-lg-flex"].join(" ")}>
      <div className={[styles.socialContainer].join(" ")}>
        <div className={styles.socialGroup}>
          <Link
            className={styles.socialMedia}
            href="https://www.instagram.com/oragazz0"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramIcon className={styles.socialBadge} />
            <p className={styles.socialText}>@oragazz0</p>
          </Link>
          <Link
            className={styles.socialMedia}
            href="https://twitter.com/sRagazz0"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon className={styles.socialBadge} />
            <p className={styles.socialText}>@sRagazz0</p>
          </Link>
        </div>

        <div className={styles.socialGroup}>
          <Link
            className={styles.socialMedia}
            href="https://www.reddit.com/user/xRagazz0"
            target="_blank"
            rel="noreferrer"
          >
            <RedditIcon className={styles.socialBadge} />
            <p className={styles.socialText}>@xRagazz0</p>
          </Link>
          <Link
            className={styles.socialMedia}
            href="https://www.behance.net/oragazz0"
            target="_blank"
            rel="noreferrer"
          >
            <BehanceIcon className={styles.socialBadge} />
            <p className={styles.socialText}>/oragazz0</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
