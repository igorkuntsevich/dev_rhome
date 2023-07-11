import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const VillaBrazil = () => (
  <Layout>
    <Seo 
      title={"Вилла в Бразилии - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/villa-brazil"}
      image={"https://rhome.by/images/inspiration/photos/villa-brazil/01_villa-brazil.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Вилла в Бразилии</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/01_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/01_villa-brazil.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/02_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/02_villa-brazil.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/03_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/03_villa-brazil.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/04_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/04_villa-brazil.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/05_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/05_villa-brazil.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/06_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/06_villa-brazil.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-brazil/07_villa-brazil.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-brazil/07_villa-brazil.jpg"
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

export default VillaBrazil