import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const OldmillBelgrade = () => (
  <Layout>
    <Seo 
      title={"Отель Old Mill Belgrade - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/old-mill-belgrade"}
      image={"https://rhome.by/images/inspiration/photos/old-mill-belgrade/01_old-mill-belgrade.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Отель Old Mill Belgrade</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/01_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/01_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/02_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/02_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/04_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/04_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/03_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/03_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/05_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/05_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/06_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/06_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/07_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/07_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/old-mill-belgrade/08_old-mill-belgrade.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/old-mill-belgrade/08_old-mill-belgrade.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
        </div>
      </Fancybox>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default OldmillBelgrade