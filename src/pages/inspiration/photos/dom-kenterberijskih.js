import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const DomKenterberijskih = () => (
  <Layout>
    <Seo 
      title={"Дом посреди Кентерберийских равнин - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-kenterberijskih"}
      image={"https://rhome.by/images/inspiration/photos/dom-kenterberijskih/01_dom-kenterberijskih.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом посреди Кентерберийских равнин</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/01_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/01_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/02_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/02_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/03_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/03_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/04_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/04_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/05_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/05_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/06_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/06_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/07_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/07_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/08_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/08_dom-kenterberijskih.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/09_dom-kenterberijskih.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-kenterberijskih/09_dom-kenterberijskih.jpg"
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

export default DomKenterberijskih