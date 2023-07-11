import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const DomKelli = () => (
  <Layout>
    <Seo 
      title={"Дом ведущего дизайнера Великобритании Келли Хоппен - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-kelli"}
      image={"https://rhome.by/images/inspiration/photos/dom-kelli/01_dom-kelli.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом ведущего дизайнера Великобритании Келли Хоппен</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/02_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/02_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/03_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/03_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>

          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/01_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/01_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/04_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/04_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/05_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/05_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/06_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/06_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/07_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/07_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/08_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/08_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/09_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/09_dom-kelli.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kelli/10_dom-kelli.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kelli/10_dom-kelli.jpg"
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

export default DomKelli