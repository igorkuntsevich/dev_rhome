import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const OtelOklend = () => (
  <Layout>
    <Seo 
      title={"Изысканный интерьер отеля в Окленде - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/otel-oklend"}
      image={"https://rhome.by/images/inspiration/photos/otel-oklend/01_otel-oklend.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Изысканный интерьер отеля в Окленде</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/01_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/01_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/02_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/02_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/03_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/03_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/04_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/04_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/05_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/05_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/06_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/06_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/07_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/07_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/08_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/08_otel-oklend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-oklend/09_otel-oklend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-oklend/09_otel-oklend.jpg"
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

export default OtelOklend