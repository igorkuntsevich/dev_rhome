import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const HouseBinb = () => (
  <Layout>
    <Seo 
      title={"Загородный дом House B in B - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/house-binb"}
      image={"https://rhome.by/images/inspiration/photos/house-binb/01_house-binb.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>House B in B</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/house-binb/01_house-binb.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/house-binb/01_house-binb.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/house-binb/02_house-binb.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/house-binb/02_house-binb.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/house-binb/03_house-binb.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/house-binb/03_house-binb.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/house-binb/04_house-binb.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/house-binb/04_house-binb.jpg"
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

export default HouseBinb