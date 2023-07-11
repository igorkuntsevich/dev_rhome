import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const OtelBobbi = () => (
  <Layout>
    <Seo 
      title={"Отель визажиста Bobbi Brown в традиционном английском стиле - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/otel-bobbi"}
      image={"https://rhome.by/images/inspiration/photos/otel-bobbi/01_otel-bobbi.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Отель визажиста Bobbi Brown в традиционном английском стиле</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/01_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/01_otel-bobbi.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/03_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/03_otel-bobbi.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/02_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/02_otel-bobbi.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/04_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/04_otel-bobbi.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/07_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/07_otel-bobbi.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/05_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/05_otel-bobbi.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-bobbi/06_otel-bobbi.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-bobbi/06_otel-bobbi.jpg"
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

export default OtelBobbi