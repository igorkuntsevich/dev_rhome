import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const UniversitetPrava = () => (
  <Layout>
    <Seo 
      title={"Здание Университета права в Новой Зеландии - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/universitet-pravaa"}
      image={"https://rhome.by/images/inspiration/photos/universitet-prava/01_universitet-prava.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Здание Университета права в Новой Зеландии</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/01_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/01_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/02_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/02_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/03_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/03_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/04_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/04_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/05_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/05_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/06_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/06_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/07_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/07_universitet-prava.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/universitet-prava/08_universitet-prava.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/universitet-prava/08_universitet-prava.jpg"
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

export default UniversitetPrava