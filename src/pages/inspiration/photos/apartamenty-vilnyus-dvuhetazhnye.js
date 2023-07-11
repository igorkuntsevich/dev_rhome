import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const ApartamentyVilnyusdvuhetazhnye = () => (
  <Layout>
    <Seo 
      title={"Двухэтажные апартаменты в Вильнюсе - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye"}
      image={"https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/01_apartamenty-vilnyus-dvuhetazhnye.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Двухэтажные апартаменты в Вильнюсе</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/01_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/01_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/02_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/02_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/03_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/03_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/05_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/05_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/06_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/06_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/09_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/09_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/04_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/04_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/07_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/07_apartamenty-vilnyus-dvuhetazhnye.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/08_apartamenty-vilnyus-dvuhetazhnye.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/08_apartamenty-vilnyus-dvuhetazhnye.jpg"
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

export default ApartamentyVilnyusdvuhetazhnye