import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const ShtabMuuto = () => (
  <Layout>
    <Seo 
      title={"Штаб-квартира бренда Muuto в Копенгагене - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/shtab-muuto"}
      image={"https://rhome.by/images/inspiration/photos/shtab-muuto/01_shtab-muuto.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Штаб-квартира бренда Muuto в Копенгагене</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/02_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/02_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/03_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/03_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/04_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/04_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/05_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/05_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/01_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/01_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/06_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/06_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/07_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/07_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/08_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/08_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/09_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/09_shtab-muuto.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shtab-muuto/10_shtab-muuto.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shtab-muuto/10_shtab-muuto.jpg"
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

export default ShtabMuuto