import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationPhotos } from "../../../subitems/breadcrumbs/inspiration_photos"
import Fancybox from "../../../components/fancybox.js";

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


const DomnyuJorkodnoetazhnyj = () => (
  <Layout>
    <Seo 
      title={"Одноэтажный дом в Нью-Йорке - RHOME"} description={""}
      location={"https://rhome.by/inspiration/photos/dom-nyu-jork-odnoetazhnyj"}
      image={"https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/01_dom-nyu-jork-odnoetazhnyj.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro}>
        <BreadcrumbsInspirationPhotos />
        <h1 className={styles.inspiration_intro_title}>Одноэтажный дом в Нью-Йорке</h1>
      </div>
      <Fancybox>
        <div className={styles.inspiration_photos_content}>
          <div className={styles.inspiration_photos_1}>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/02_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/02_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_2}>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/01_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/01_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/04_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/04_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/03_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/03_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/07_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/07_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/09_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/09_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
          </div>
          <div className={styles.inspiration_photos_3}>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/05_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/05_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/06_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/06_dom-nyu-jork-odnoetazhnyj.jpg"
                alt=""
                className={styles.inspiration_photos_img}
              />
            </a>
            <a href="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/08_dom-nyu-jork-odnoetazhnyj.jpg"
              data-fancybox="gallery">
              <StaticImage
                src="../../../images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/08_dom-nyu-jork-odnoetazhnyj.jpg"
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

export default DomnyuJorkodnoetazhnyj