import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const VariantyLestnits = () => (
  <Layout>
    <Seo 
      title={"Варианты лестниц для вдохновения - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/varianty-lestnits"}
      image={"https://rhome.by/images/inspiration/photos/varianty-lestnits/01_varianty-lestnits.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Варианты лестниц</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/varianty-lestnits/01_varianty-lestnits.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/varianty-lestnits/01_varianty-lestnits.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/varianty-lestnits/02_varianty-lestnits.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/varianty-lestnits/02_varianty-lestnits.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/varianty-lestnits/04_varianty-lestnits.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/varianty-lestnits/04_varianty-lestnits.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/varianty-lestnits/03_varianty-lestnits.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/varianty-lestnits/03_varianty-lestnits.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/varianty-lestnits/05_varianty-lestnits.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/varianty-lestnits/05_varianty-lestnits.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/varianty-lestnits/06_varianty-lestnits.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/varianty-lestnits/06_varianty-lestnits.jpg"
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

export default VariantyLestnits