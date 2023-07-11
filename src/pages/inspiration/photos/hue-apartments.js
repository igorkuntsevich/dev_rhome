import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const HueApartments = () => (
  <Layout>
    <Seo 
      title={"Апартаменты Hue Apartments - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/hue-apartments"}
      image={"https://rhome.by/images/inspiration/photos/hue-apartments/01_hue-apartments.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Hue Apartments</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>


          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/01_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/hue-apartments/01_hue-apartments.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/02_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/hue-apartments/04_hue-apartments.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/04_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/vintovaya-lestnitsa/03_vintovaya-lestnitsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/03_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/hue-apartments/03_hue-apartments.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/05_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/hue-apartments/05_hue-apartments.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/06_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/hue-apartments/06_hue-apartments.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/hue-apartments/07_hue-apartments.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/hue-apartments/07_hue-apartments.jpg"
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

export default HueApartments