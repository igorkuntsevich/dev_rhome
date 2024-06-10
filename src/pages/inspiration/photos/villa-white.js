import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const VillaWhite = () => (
  <Layout>
    <Seo 
      title={"Вилла V3 - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/villa-white"}
      image={"https://rhome.by/images/inspiration/photos/villa-white/01_villa-white.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Вилла V3</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/01_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/01_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/02_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/02_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/03_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/03_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/04_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/04_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/05_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/05_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/06_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/06_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/07_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/07_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/08_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/08_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/09_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/09_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/10_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/10_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/11_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/11_villa-white.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-white/12_villa-white.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-white/12_villa-white.jpg"
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

export default VillaWhite