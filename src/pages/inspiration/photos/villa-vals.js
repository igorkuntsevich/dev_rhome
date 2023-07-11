import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const VillaVals = () => (
  <Layout>
    <Seo 
      title={"Вилла Vals - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/villa-vals"}
      image={"https://rhome.by/images/inspiration/photos/villa-vals/01_villa-vals.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Вилла Vals</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/01_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/01_villa-vals.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/02_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/02_villa-vals.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/03_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/03_villa-vals.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/05_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/05_villa-vals.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/04_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/04_villa-vals.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/06_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/06_villa-vals.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-vals/07_villa-vals.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-vals/07_villa-vals.jpg"
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

export default VillaVals