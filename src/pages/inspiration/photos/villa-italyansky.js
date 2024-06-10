import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const VillaItalyansky = () => (
  <Layout>
    <Seo 
      title={"Современное переосмысление итальянской виллы - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/villa-italyansky"}
      image={"https://rhome.by/images/inspiration/photos/villa-italyansky/01_villa-italyansky.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Современное переосмысление итальянской виллы</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/03_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/03_villa-italyansky.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/02_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/02_villa-italyansky.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/01_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/01_villa-italyansky.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/04_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/04_villa-italyansky.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/05_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/05_villa-italyansky.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/06_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/06_villa-italyansky.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/villa-italyansky/07_villa-italyansky.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/villa-italyansky/07_villa-italyansky.jpg"
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

export default VillaItalyansky