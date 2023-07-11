import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const MoerkensheideBy = () => (
  <Layout>
    <Seo 
      title={"Вилла Moerkensheide из кирпича в Бельгии - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/moerkensheide-by"}
      image={"https://rhome.by/images/inspiration/photos/moerkensheide-by/01_moerkensheide-by.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Вилла Moerkensheide by&nbsp;Dieter De&nbsp;Vos Architecten</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/01_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/01_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/02_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/02_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/03_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/03_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/05_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/05_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/06_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/06_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/04_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/04_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/07_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/07_moerkensheide-by.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/moerkensheide-by/08_moerkensheide-by.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/moerkensheide-by/08_moerkensheide-by.jpg"
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

export default MoerkensheideBy