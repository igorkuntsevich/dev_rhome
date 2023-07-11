import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const DomOtdyha = () => (
  <Layout>
    <Seo 
      title={"Дом отдыха в Нью-Йорке - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-otdyha"}
      image={"https://rhome.by/images/inspiration/photos/dom-otdyha/01_dom-otdyha.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом отдыха в Нью-Йорке</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/01_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/01_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/02_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/02_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/04_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/04_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/07_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/07_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/09_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/09_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/11_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/11_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/10_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/10_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/03_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/03_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/05_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/05_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/06_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/06_dom-otdyha.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-otdyha/08_dom-otdyha.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-otdyha/08_dom-otdyha.jpg"
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

export default DomOtdyha