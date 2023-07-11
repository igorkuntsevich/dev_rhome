import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const LoftTipografii = () => (
  <Layout>
    <Seo 
      title={"Лофт в бывшей типографии - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/loft-tipografii"}
      image={"https://rhome.by/images/inspiration/photos/loft-tipografii/01_loft-tipografii.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Лофт в бывшей типографии</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/01_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/01_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/04_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/04_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/02_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/02_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/03_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/03_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/07_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/07_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/05_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/05_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/06_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/06_loft-tipografii.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-tipografii/08_loft-tipografii.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-tipografii/08_loft-tipografii.jpg"
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

export default LoftTipografii