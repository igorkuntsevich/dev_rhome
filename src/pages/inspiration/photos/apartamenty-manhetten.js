import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const ApartamentyManhetten = () => (
  <Layout>
    <Seo 
      title={"Гламурные апартаменты дизайнера на Манхэттене - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/apartamenty-manhetten"}
      image={"https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Гламурные апартаменты дизайнера на Манхэттене</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/04_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/04_apartamenty-manhetten.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/06_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/06_apartamenty-manhetten.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/02_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/02_apartamenty-manhetten.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/03_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/03_apartamenty-manhetten.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/05_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/05_apartamenty-manhetten.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/07_apartamenty-manhetten.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-manhetten/07_apartamenty-manhetten.jpg"
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

export default ApartamentyManhetten