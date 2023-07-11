import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KvartiraNabaze = () => (
  <Layout>
    <Seo 
      title={"Квартира на базе старого склада в Сиднее - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kvartira-na-baze"}
      image={"https://rhome.by/images/inspiration/photos/kvartira-na-baze/01_kvartira-na-baze.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Квартира на базе старого склада в Сиднее</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-na-baze/01_kvartira-na-baze.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-na-baze/01_kvartira-na-baze.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-na-baze/02_kvartira-na-baze.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-na-baze/02_kvartira-na-baze.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>

          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-na-baze/03_kvartira-na-baze.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-na-baze/03_kvartira-na-baze.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-na-baze/04_kvartira-na-baze.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-na-baze/04_kvartira-na-baze.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-na-baze/05_kvartira-na-baze.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-na-baze/05_kvartira-na-baze.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-na-baze/06_kvartira-na-baze.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-na-baze/06_kvartira-na-baze.jpg"
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

export default KvartiraNabaze