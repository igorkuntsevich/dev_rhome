import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const LoftShvetsiya = () => (
  <Layout>
    <Seo 
      title={"Белый лофт в Швеции - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/loft-shvetsiya"}
      image={"https://rhome.by/images/inspiration/photos/loft-shvetsiya/01_loft-shvetsiya.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Белый лофт в Швеции</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
        <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/01_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/01_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/02_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/02_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/04_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/04_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/03_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/03_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/06_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/06_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/05_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/05_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/07_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/07_loft-shvetsiya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/loft-shvetsiya/08_loft-shvetsiya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/loft-shvetsiya/08_loft-shvetsiya.jpg"
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

export default LoftShvetsiya