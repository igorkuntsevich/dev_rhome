import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const DizainOfis = () => (
  <Layout>
    <Seo 
      title={"Дизайнерский офис - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dizain-ofisa"}
      image={"https://rhome.by/images/inspiration/photos/dizain-ofis/01_dizain-ofis.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дизайнерский офис</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/01_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/01_dizain-ofis.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/03_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/03_dizain-ofis.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/04_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/04_dizain-ofis.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/05_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/05_dizain-ofis.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/02_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/02_dizain-ofis.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/06_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/06_dizain-ofis.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dizain-ofis/07_dizain-ofis.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dizain-ofis/07_dizain-ofis.jpg"
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

export default DizainOfis