import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const StelazhzhiFittings = () => (
  <Layout>
    <Seo 
      title={"Стеллажи из арматуры - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/stelazhzhi-fittings"}
      image={"https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/01_stelazhzhi-fittings.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Стеллажи из&nbsp;арматуры</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/02_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/02_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/03_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/03_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/04_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/04_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/05_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/05_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/08_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/08_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/01_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/01_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/06_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/06_stelazhzhi-fittings.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/08_stelazhzhi-fittings.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/stelazhzhi-fittings/08_stelazhzhi-fittings.jpg"
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

export default StelazhzhiFittings