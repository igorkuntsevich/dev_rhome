import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const OfisNetrivialnyj = () => (
  <Layout>
    <Seo 
      title={"Нетривиальный офис - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/ofis-netrivialnyj"}
      image={"https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/01_ofis-netrivialnyj.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Нетривиальный офис</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/02_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/02_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/08_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/08_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/01_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/01_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/03_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/03_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/04_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/04_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/05_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/05_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/06_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/06_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/07_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/07_ofis-netrivialnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/09_ofis-netrivialnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/ofis-netrivialnyj/09_ofis-netrivialnyj.jpg"
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

export default OfisNetrivialnyj