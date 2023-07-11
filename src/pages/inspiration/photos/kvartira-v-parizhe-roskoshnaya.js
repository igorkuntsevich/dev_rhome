import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KvartiraVparizheroskoshnaya = () => (
  <Layout>
    <Seo 
      title={"Роскошная квартира в Париже - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kvartira-v-parizhe-roskoshnaya"}
      image={"https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/01_kvartira-v-parizhe-roskoshnaya.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Роскошная квартира в Париже</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/01_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/01_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/02_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/02_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/03_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/03_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/04_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/04_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/05_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/05_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/06_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/06_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/07_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/07_kvartira-v-parizhe-roskoshnaya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/08_kvartira-v-parizhe-roskoshnaya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/08_kvartira-v-parizhe-roskoshnaya.jpg"
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

export default KvartiraVparizheroskoshnaya