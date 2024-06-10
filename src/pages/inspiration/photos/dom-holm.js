import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const DomHolm = () => (
  <Layout>
    <Seo 
      title={"Дом на зеленых холмах - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-holm"}
      image={"https://rhome.by/images/inspiration/photos/dom-holm/01_dom-holm.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом на зеленых холмах</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/01_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/01_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>

          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/02_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/02_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/03_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/03_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/05_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/05_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>

          <div className={styles.inspiration_photos_5}>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/04_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/04_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/06_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/06_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/07_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/07_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/08_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/08_dom-holm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-holm/09_dom-holm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-holm/09_dom-holm.jpg"
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

export default DomHolm