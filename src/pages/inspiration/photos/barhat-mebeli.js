import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const BarhatMebeli = () => (
  <Layout>
    <Seo 
      title={"Бархат в новых коллекциях дизайнерской мебели - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/barhat-mebeli"}
      image={"https://rhome.by/images/inspiration/photos/barhat-mebeli/01_barhat-mebeli.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Бархат в&nbsp;новых коллекциях дизайнерской мебели</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/01_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/01_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/02_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/02_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/03_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/03_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/04_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/04_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/05_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/05_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/06_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/06_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/07_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/07_barhat-mebeli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/barhat-mebeli/08_barhat-mebeli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/barhat-mebeli/08_barhat-mebeli.jpg"
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

export default BarhatMebeli