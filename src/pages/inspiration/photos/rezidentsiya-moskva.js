import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const RezidentsiyaMoskva = () => (
  <Layout>
    <Seo 
      title={"Резиденция площадью 157 кв.м. в Москве - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/rezidentsiya-moskva"}
      image={"https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/01_rezidentsiya-moskva.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Резиденция площадью 157 кв.м. в Москве</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/07_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/07_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/01_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/01_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/02_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/02_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/03_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/03_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/04_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/04_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/05_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/05_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/06_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/06_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/08_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/08_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/09_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/09_rezidentsiya-moskva.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/10_rezidentsiya-moskva.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/rezidentsiya-moskva/10_rezidentsiya-moskva.jpg"
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

export default RezidentsiyaMoskva