import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const KryshaizDosok = () => (
  <Layout>
    <Seo 
      title={"Крыша из досок - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/krysha-iz-dosok"}
      image={"https://rhome.by/images/inspiration/photos/krysha-iz-dosok/01_krysha-iz-dosok.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Крыша из досок</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/02_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/02_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/04_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/04_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/01_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/01_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/03_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/03_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/05_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/05_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/06_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/06_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/07_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/07_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/08_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/08_krysha-iz-dosok.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/09_krysha-iz-dosok.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/krysha-iz-dosok/09_krysha-iz-dosok.jpg"
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

export default KryshaizDosok