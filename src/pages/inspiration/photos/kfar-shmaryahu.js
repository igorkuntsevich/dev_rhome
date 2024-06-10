import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const KfarShmaryahu = () => (
  <Layout>
    <Seo 
      title={"Дом Kfar Shmaryahu - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/kfar-shmaryahu"}
      image={"https://rhome.by/images/inspiration/photos/kfar-shmaryahu/01_kfar-shmaryahu.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом Kfar Shmaryahu</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/01_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/01_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/02_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/02_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/03_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/03_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/04_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/04_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/05_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/05_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/06_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/06_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/07_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/07_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/08_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/08_kfar-shmaryahu.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/09_kfar-shmaryahu.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/kfar-shmaryahu/09_kfar-shmaryahu.jpg"
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

export default KfarShmaryahu