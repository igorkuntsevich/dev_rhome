import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KvartiraSbibliotekoj = () => (
  <Layout>
    <Seo 
      title={"Квартира с огромной библиотекой в старинном доме - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kvartira-s-bibliotekoj"}
      image={"https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/01_kvartira-s-bibliotekoj.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Квартира с огромной библиотекой в старинном доме</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/01_kvartira-s-bibliotekoj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-s-bibliotekoj/01_kvartira-s-bibliotekoj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/02_kvartira-s-bibliotekoj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-s-bibliotekoj/02_kvartira-s-bibliotekoj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/03_kvartira-s-bibliotekoj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-s-bibliotekoj/03_kvartira-s-bibliotekoj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/05_kvartira-s-bibliotekoj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-s-bibliotekoj/05_kvartira-s-bibliotekoj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/06_kvartira-s-bibliotekoj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-s-bibliotekoj/06_kvartira-s-bibliotekoj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/04_kvartira-s-bibliotekoj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-s-bibliotekoj/04_kvartira-s-bibliotekoj.jpg"
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

export default KvartiraSbibliotekoj