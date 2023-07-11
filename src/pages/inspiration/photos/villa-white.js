import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const VillaWhite = () => (
  <Layout>
    <Seo 
      title={"Вилла V3 - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/villa-whitea"}
      image={"https://rhome.by/images/inspiration/photos/villa-white/01_villa-whitea.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Вилла V3</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/01_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/01_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/02_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/02_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/03_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/03_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/04_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/04_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/05_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/05_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/06_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/06_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/07_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/07_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/08_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/08_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/09_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/09_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/10_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/10_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/11_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/11_villa-whitea.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/12_villa-whitea.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/12_villa-whitea.jpg"
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

export default VillaWhite