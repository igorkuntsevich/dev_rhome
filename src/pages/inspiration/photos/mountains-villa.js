import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const MountainsVilla = () => (
  <Layout>
    <Seo 
      title={"Дом на скале в Испании - RHOME"} description={"Фотографии виллы на берегу моря. Белые тона, строгие формы, сложная геометрия"}
      location={"https://rhome.by/inspiration/photos/mountains-villa"}
      image={"https://rhome.by/images/inspiration/photos/mountains-villa/01_mountains-villa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Вилла в&nbsp;Испании</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/01_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/01_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/03_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/03_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/02_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/02_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/08_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/08_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/04_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/04_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/05_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/05_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/06_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/06_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/07_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/07_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/09_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/09_mountains-villa.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mountains-villa/10_mountains-villa.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mountains-villa/10_mountains-villa.jpg"
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

export default MountainsVilla