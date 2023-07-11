import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const PenthausKorsa = () => (
  <Layout>
    <Seo 
      title={"Пентхаус дизайнера Майкла Корса - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/penthaus-korsa"}
      image={"https://rhome.by/images/inspiration/photos/penthaus-korsa/01_penthaus-korsa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Пентхаус дизайнера Майкла Корса</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/01_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/01_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/04_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/04_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/02_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/02_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/03_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/03_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/07_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/07_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/05_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/05_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/06_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/06_penthaus-korsa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/penthaus-korsa/08_penthaus-korsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/penthaus-korsa/08_penthaus-korsa.jpg"
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

export default PenthausKorsa