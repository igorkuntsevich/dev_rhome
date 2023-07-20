import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const IntererBryusselsovremennyj = () => (
  <Layout>
    <Seo 
      title={" Разработка дизайн-проекта современного интерьера квартиры в Брюсселе. Студия RНome"} description={"Современный стиль отличается утонченным минимализмом, осознанным использовании интересных фактур и четких линий. В таких интерьерах главным становится само пространство, а не вещи в нем."}
      location={"https://rhome.by/portfolio/apartment/interer-bryussel-sovremennyj"}
      image={"https://rhome.by/images/portfolio/interer-bryussel-sovremennyj/01_interer-bryussel-sovremennyj.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Современный интерьер в Брюсселе"
          leader="Сергей Рассеко"
          architector="Ян Пашковский"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="98"
          building="6 месяцев"
          budget={styles.project_intro_item_cost2}
        />
        <StaticImage
          src="../../../images/portfolio/interer-bryussel-sovremennyj/01_interer-bryussel-sovremennyj.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/interer-bryussel-sovremennyj/00_interer-bryussel-sovremennyj.jpg"
          className={styles.project_intro_image_mob}
          alt=""
        />
      </div>
      </div>
      <PhotoCollage
        amount={collageStyles.photocollage_five_images}
      >
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/01_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/02_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/03_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/04_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/cut/05_cut_dom-berezino.jpg"
          alt=""
          className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
        />
      </PhotoCollage>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default IntererBryusselsovremennyj