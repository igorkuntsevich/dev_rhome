import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const TaunhausBruklin = () => (
  <Layout>
    <Seo 
      title={"Современный таунхаус в Бруклине - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/taunhaus-bruklin"}
      image={"https://rhome.by/images/inspiration/photos/taunhaus-bruklin/01_taunhaus-bruklin.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Современный таунхаус в Бруклине</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>


          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/01_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/01_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/03_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/03_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/04_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/04_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/02_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/02_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/06_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/06_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/07_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/07_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/05_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/05_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/09_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/09_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/08_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/08_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/10_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/10_taunhaus-bruklin.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/11_taunhaus-bruklin.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/taunhaus-bruklin/11_taunhaus-bruklin.jpg"
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

export default TaunhausBruklin