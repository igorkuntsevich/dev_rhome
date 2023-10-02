import * as React from "react"
import * as styles from "../../components/styles/services.module.scss"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../components/fancybox.js";

import ScrollContainer from 'react-indiana-drag-scroll'


export const BuildingGallery = () => {
  return (
    <Fancybox>
      <ScrollContainer className={styles.services_gallery + " " + "scroll-container"}>
        <div className={styles.services_gallery_flex}>
          <div className={styles.services_gallery_grid1}>
            <a href="https://rhome.by/images/services/building/building_3.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_3.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_2.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_2.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_11.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_11.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_5.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_5.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_9.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_9.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_10.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_10.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_17.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_17.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a><a href="https://rhome.by/images/services/building/building_14.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_14.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_19.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_19.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
          </div>
          <div className={styles.services_gallery_grid2}>
            <a href="https://rhome.by/images/services/building/building_4.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_4.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_8.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_8.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_1.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_1.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_15.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_15.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_12.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_12.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_7.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_7.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_16.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_16.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_18.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_18.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_13.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_13.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
            <a href="https://rhome.by/images/services/building/building_6.webp"
              data-fancybox="gallery">
              <StaticImage
                src="../../images/services/building/building_6.jpg"
                alt=""
                loading="lazy"
                className={styles.services_gallery_img}
              />
            </a>
          </div>
        </div>
      </ScrollContainer>
    </Fancybox>
  )
}