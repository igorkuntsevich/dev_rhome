import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const OtelAfini = () => (
  <Layout>
    <Seo 
      title={"Неомодернистский интерьер отеля в Афинах - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/otel-afini"}
      image={"https://rhome.by/images/inspiration/photos/otel-afini/01_otel-afini.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Неомодернистский интерьер отеля в Афинах</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/01_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/01_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/02_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/02_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/04_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/04_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/03_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/03_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/06_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/06_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/05_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/05_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/07_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/07_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/09_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/09_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/10_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/10_otel-afini.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/otel-afini/11_otel-afini.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/otel-afini/11_otel-afini.jpg"
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

export default OtelAfini