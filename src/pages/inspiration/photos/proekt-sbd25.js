import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const ProektSbd25 = () => (
  <Layout>
    <Seo 
      title={"Проект SBD25 - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/proekt-sbd25"}
      image={"https://rhome.by/images/inspiration/photos/proekt-sbd25/01_proekt-sbd25.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Проект SBD25</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/01_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/proekt-sbd25/01_proekt-sbd25.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/02_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/proekt-sbd25/02_proekt-sbd25.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/03_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/proekt-sbd25/03_proekt-sbd25.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/04_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/proekt-sbd25/04_proekt-sbd25.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/05_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/proekt-sbd25/05_proekt-sbd25.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/06_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/proekt-sbd25/06_proekt-sbd25.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/proekt-sbd25/07_proekt-sbd25.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos//proekt-sbd25/07_proekt-sbd25.jpg"
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

export default ProektSbd25