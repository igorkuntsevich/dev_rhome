import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const RestoranRetro = () => (
  <Layout>
    <Seo 
      title={"Интерьер лондонского ресторана в стиле ретро - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/restoran-retroa"}
      image={"https://rhome.by/images/inspiration/photos/restoran-retro/01_restoran-retro.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Интерьер лондонского ресторана в стиле ретро</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>


          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/01_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/01_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/03_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/03_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/04_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/04_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/05_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/05_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/06_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/06_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/07_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/07_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/02_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/02_restoran-retro.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/restoran-retro/08_restoran-retro.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/restoran-retro/08_restoran-retro.jpg"
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

export default RestoranRetro