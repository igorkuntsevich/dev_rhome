import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const DomVyuzhnoiafrike = () => (
  <Layout>
    <Seo 
      title={"Дом в Южной Африке - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-v-yuzhnoi-afrike"}
      image={"https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/01_dom-v-yuzhnoi-afrike.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом в&nbsp;Южной Африке</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/01_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/01_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/02_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/02_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/03_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/03_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/04_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/04_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/05_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/05_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/06_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/06_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/07_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/07_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/08_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/08_dom-v-yuzhnoi-afrike.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/09_dom-v-yuzhnoi-afrike.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-v-yuzhnoi-afrike/09_dom-v-yuzhnoi-afrike.jpg"
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

export default DomVyuzhnoiafrike