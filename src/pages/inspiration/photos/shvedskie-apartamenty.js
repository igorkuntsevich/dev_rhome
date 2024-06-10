import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const ShvedskieApartamenty = () => (
  <Layout>
    <Seo 
      title={"Шведские апартаменты - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/shvedskie-apartamenty"}
      image={"https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/01_shvedskie-apartamenty.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Шведские апартаменты</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>

          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/01_shvedskie-apartamenty.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shvedskie-apartamenty/01_shvedskie-apartamenty.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/02_shvedskie-apartamenty.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shvedskie-apartamenty/02_shvedskie-apartamenty.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/03_shvedskie-apartamenty.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shvedskie-apartamenty/03_shvedskie-apartamenty.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/04_shvedskie-apartamenty.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shvedskie-apartamenty/04_shvedskie-apartamenty.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/05_shvedskie-apartamenty.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shvedskie-apartamenty/05_shvedskie-apartamenty.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/06_shvedskie-apartamenty.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/shvedskie-apartamenty/06_shvedskie-apartamenty.jpg"
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

export default ShvedskieApartamenty