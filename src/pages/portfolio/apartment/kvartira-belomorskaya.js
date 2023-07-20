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

const KvartiraBelomorskaya = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Квартира на ул. Беломорская"} description={"Квартира на ул. Беломорская дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-belomorskaya"}
      image={"https://rhome.by/images/portfolio/kvartira-belomorskaya/01_kvartira-belomorskaya.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Квартира на ул. Беломорская"
          leader="Сергей Рассеко"
          architector="Дмитрий Вашкевич, Валерия Чернявская"
          manager="Дмитрий Разумейчик"
          data="октябрь 2017"
          metr="104"
          building=""
          budget={styles.project_intro_item_cost2}
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-belomorskaya/01_kvartira-belomorskaya.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-belomorskaya/00_kvartira-belomorskaya.jpg"
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
export default KvartiraBelomorskaya