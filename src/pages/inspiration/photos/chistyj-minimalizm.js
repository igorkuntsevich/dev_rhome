import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const ChistyjMinimalizm = () => (
  <Layout>
    <Seo 
      title={"Чистый минимализм - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/chistyj-minimalizm"}
      image={"https://rhome.by/images/inspiration/photos/chistyj-minimalizm/01_chistyj-minimalizm.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Чистый минимализм</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/05_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/05_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/10_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/10_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/01_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/01_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/02_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/02_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/03_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/03_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/04_vintovaya-lestnitsa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/04_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/06_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/06_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/07_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/07_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/08_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/08_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/09_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/09_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/11_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/11_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/12_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/12_chistyj-minimalizm.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/13_chistyj-minimalizm.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/chistyj-minimalizm/13_chistyj-minimalizm.jpg"
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

export default ChistyjMinimalizm