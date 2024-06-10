import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const OneKleomenous = () => (
  <Layout>
    <Seo 
      title={"Проект One Kleomenous - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/one-kleomenous"}
      image={"https://rhome.by/images/inspiration/photos/one-kleomenous/01_one-kleomenous.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Проект One Kleomenous</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/one-kleomenous/01_one-kleomenous.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/one-kleomenous/01_one-kleomenous.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/one-kleomenous/02_one-kleomenous.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/one-kleomenous/02_one-kleomenous.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/one-kleomenous/03_one-kleomenous.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/one-kleomenous/03_one-kleomenous.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/one-kleomenous/04_one-kleomenous.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/one-kleomenous/04_one-kleomenous.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/one-kleomenous/05_one-kleomenous.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/one-kleomenous/05_one-kleomenous.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/one-kleomenous/06_one-kleomenous.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/one-kleomenous/06_one-kleomenous.jpg"
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

export default OneKleomenous