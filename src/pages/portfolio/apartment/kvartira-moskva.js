import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraMoskva = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Квартира в Москве"} description={"Светлый и праздничный интерьер квартиры в Москве."}
      location={"https://rhome.by/portfolio/apartment/kvartira-moskva"}
      image={"https://rhome.by/images/portfolio/kvartira-moskva/01_kvartira-moskva.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Квартира в Москве"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев, Cветлана Рожкова"
          manager="Дмитрий Разумейчик"
          data="2019"
          metr="200"
          building="14 месяцев"
          budget={styles.project_intro_item_cost3}
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-moskva/01_kvartira-moskva.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-moskva/00_kvartira-moskva.jpg"
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
export default KvartiraMoskva