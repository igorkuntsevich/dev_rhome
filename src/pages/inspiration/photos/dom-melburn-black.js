import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const DomMelburnblack = () => (
  <Layout>
    <Seo 
      title={"Дом в Мельбурне - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-melburn-black"}
      image={"https://rhome.by/images/inspiration/photos/dom-melburn-black/01_dom-melburn-black.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом в Мельбурне</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/02_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/02_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/03_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/03_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/01_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/01_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/04_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/04_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/05_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/05_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/06_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/06_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/10_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/10_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/07_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/07_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/08_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/08_dom-melburn-black.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-melburn-black/09_dom-melburn-black.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-melburn-black/09_dom-melburn-black.jpg"
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

export default DomMelburnblack