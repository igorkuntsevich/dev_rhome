import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const ApartamentySad = () => (
  <Layout>
    <Seo 
      title={"Апартаменты с выходом в сад - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/apartamenty-sad"}
      image={"https://rhome.by/images/inspiration/photos/apartamenty-sad/01_apartamenty-sad.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Апартаменты с выходом в сад</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
        <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/01_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/01_apartamenty-sad.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/02_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/02_apartamenty-sad.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/04_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/04_apartamenty-sad.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/05_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/05_apartamenty-sad.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/03_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/03_apartamenty-sad.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/06_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/06_apartamenty-sad.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/apartamenty-sad/07_apartamenty-sad.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/apartamenty-sad/07_apartamenty-sad.jpg"
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

export default ApartamentySad