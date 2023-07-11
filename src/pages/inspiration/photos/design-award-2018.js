import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const DesignAward2018 = () => (
  <Layout>
    <Seo 
      title={"Дом-победитель German Design Award 2018 - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/design-award-2018"}
      image={"https://rhome.by/images/inspiration/photos/design-award-2018/01_design-award-2018.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Дом-победитель German Design Award 2018</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/design-award-2018/01_design-award-2018.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/design-award-2018/01_design-award-2018.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/design-award-2018/02_design-award-2018.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/design-award-2018/02_design-award-2018.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/design-award-2018/03_design-award-2018.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/design-award-2018/03_design-award-2018.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/design-award-2018/04_design-award-2018.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/design-award-2018/04_design-award-2018.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/design-award-2018/05_design-award-2018.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/design-award-2018/05_design-award-2018.jpg"
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

export default DesignAward2018