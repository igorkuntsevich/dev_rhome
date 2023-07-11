import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const DomBruni = () => (
  <Layout>
    <Seo 
      title={"Дом для отдыха на острове Бруни - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-bruni"}
      image={"https://rhome.by/images/inspiration/photos/dom-bruni/01_dom-bruni.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом для отдыха на острове Бруни</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/01_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/01_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/03_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/03_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/02_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/02_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/04_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/04_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/06_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/06_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/05_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/05_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/07_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/07_dom-bruni.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-bruni/08_dom-bruni.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-bruni/08_dom-bruni.jpg"
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

export default DomBruni