import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

import * as styles from "../../components/styles/contacts.module.scss"
import ScrollContainer from 'react-indiana-drag-scroll'


export const ContactsGallery = () => {
  return (
    <Fancybox>
      <ScrollContainer className={styles.contacts_gallery + " " + "scroll-container"}>
        <a href="https://rhome.by/images/office/office_gallery_1.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_1.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_2.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_2.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_3.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_3.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_4.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_4.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_5.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_5.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_6.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_6.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_7.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_7.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_8.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_8.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_9.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_9.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
        <a href="https://rhome.by/images/office/office_gallery_10.webp"
          data-fancybox="gallery">
          <StaticImage
            src="../../images/office/office_gallery_10.jpg"
            alt=""
            loading="lazy"
            className={styles.contacts_gallery_img}
          />
        </a>
      </ScrollContainer>
    </Fancybox>
  )
}