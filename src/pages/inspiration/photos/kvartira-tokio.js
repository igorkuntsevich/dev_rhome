import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KvartiraTokio = () => (
  <Layout>
    <Seo 
      title={"Квартира в Токио - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kvartira-tokio"}
      image={"https://rhome.by/images/inspiration/photos/kvartira-tokio/01_kvartira-tokio.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Квартира в Токио</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-tokio/01_kvartira-tokio.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-tokio/01_kvartira-tokio.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-tokio/02_kvartira-tokio.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-tokio/02_kvartira-tokio.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-tokio/03_kvartira-tokio.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-tokio/03_kvartira-tokio.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-tokio/04_kvartira-tokio.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-tokio/04_kvartira-tokio.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-tokio/05_kvartira-tokio.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-tokio/05_kvartira-tokio.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-tokio/06_kvartira-tokio.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-tokio/06_kvartira-tokio.jpg"
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

export default KvartiraTokio