import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const TsentrPortlend = () => (
  <Layout>
    <Seo 
      title={"Культурный центр в Портленде - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/tsentr-portlend"}
      image={"https://rhome.by/images/inspiration/photos/tsentr-portlend/01_tsentr-portlend.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Культурный центр в Портленде</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/01_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/01_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/02_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/02_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/04_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/04_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/05_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/05_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/07_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/07_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/03_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/03_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/06_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/06_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/08_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/08_tsentr-portlend.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/tsentr-portlend/09_tsentr-portlend.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/tsentr-portlend/09_tsentr-portlend.jpg"
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

export default TsentrPortlend