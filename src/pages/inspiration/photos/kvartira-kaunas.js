import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KvartiraKaunas = () => (
  <Layout>
    <Seo 
      title={"Бетонная квартира в Каунасе - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kvartira-kaunas"}
      image={"https://rhome.by/images/inspiration/photos/kvartira-kaunas/01_kvartira-kaunas.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Бетонная квартира в Каунасе</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/01_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/01_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/02_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/02_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/03_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/03_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/04_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/04_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/05_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/05_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/06_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/06_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/07_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/07_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/08_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/08_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/09_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/09_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/10_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/10_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/11_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/11_kvartira-kaunas.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-kaunas/12_kvartira-kaunas.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-kaunas/12_kvartira-kaunas.jpg"
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

export default KvartiraKaunas