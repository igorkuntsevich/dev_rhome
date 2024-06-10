import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const OfisGoodman = () => (
  <Layout>
    <Seo 
      title={"«Зеленый» офис компании Goodman - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/ofis-goodman"}
      image={"https://rhome.by/images/inspiration/photos/ofis-goodman/01_ofis-goodman.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>«Зеленый» офис компании Goodman</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/02_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/02_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/05_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/05_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/01_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/01_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/03_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/03_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/04_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/04_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/06_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/06_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/07_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/07_ofis-goodman.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-goodman/08_ofis-goodman.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-goodman/08_ofis-goodman.jpg"
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

export default OfisGoodman