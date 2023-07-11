import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const PereoborudovannayaPivovarnya = () => (
  <Layout>
    <Seo 
      title={"Переоборудованная пивоварня - RHOME"} description={"E"}
      location={"https://rhome.by/inspiration/photos/vintovaya-lestnitsa"}
      image={"https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/01_pereoborudovannaya-pivovarnya.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Переоборудованная пивоварня</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/01_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/01_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/03_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/03_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/05_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/05_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/06_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/06_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_4}>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/02_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/02_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/04_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/04_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/07_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/07_pereoborudovannaya-pivovarnya.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/pereoborudovannaya-pivovarnya/08_pereoborudovannaya-pivovarnya.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/pereoborudovannaya-pivovarnya/08_pereoborudovannaya-pivovarnya.jpg"
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

export default PereoborudovannayaPivovarnya