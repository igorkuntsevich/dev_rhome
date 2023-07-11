import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const TaunhausHanoe = () => (
  <Layout>
    <Seo 
      title={"Современный таунхаус в Ханое - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/taunhaus-hanoe"}
      image={"https://rhome.by/images/inspiration/photos/taunhaus-hanoe/01_taunhaus-hanoe.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Современный таунхаус в Ханое</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/03_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/03_taunhaus-hanoe.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/04_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/04_taunhaus-hanoe.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/01_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/01_taunhaus-hanoe.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/02_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/02_taunhaus-hanoe.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/05_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/05_taunhaus-hanoe.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/06_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/06_taunhaus-hanoe.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/07_taunhaus-hanoe.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-hanoe/07_taunhaus-hanoe.jpg"
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

export default TaunhausHanoe