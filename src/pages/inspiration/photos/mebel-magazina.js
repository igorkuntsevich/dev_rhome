import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const MebelMagazina = () => (
  <Layout>
    <Seo 
      title={"Мебель для магазина - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/mebel-magazina"}
      image={"https://rhome.by/images/inspiration/photos/mebel-magazina/01_mebel-magazina.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Мебель для магазина</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/mebel-magazina/01_mebel-magazina.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mebel-magazina/01_mebel-magazina.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mebel-magazina/02_mebel-magazina.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mebel-magazina/02_mebel-magazina.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/mebel-magazina/03_mebel-magazina.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mebel-magazina/03_mebel-magazina.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/mebel-magazina/04_mebel-magazina.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/mebel-magazina/04_mebel-magazina.jpg"
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

export default MebelMagazina