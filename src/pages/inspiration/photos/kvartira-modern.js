import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KvartiraModern = () => (
  <Layout>
    <Seo 
      title={"Квартира в стиле mid-century modern - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kvartira-modern"}
      image={"https://rhome.by/images/inspiration/photos/kvartira-modern/01_kvartira-modern.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Квартира в стиле mid-century modern</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-modern/01_kvartira-modern.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-modern/01_kvartira-modern.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-modern/03_kvartira-modern.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-modern/03_kvartira-modern.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-modern/02_kvartira-modern.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-modern/02_kvartira-modern.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-modern/04_kvartira-modern.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-modern/04_kvartira-modern.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-modern/05_kvartira-modern.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-modern/05_kvartira-modern.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-modern/06_kvartira-modern.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-modern/06_kvartira-modern.jpg"
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

export default KvartiraModern