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
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraDvuhurovnevaya = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Двухуровневая квартира на Васнецова"} description={"Двухуровневая квартира на Васнецова дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-dvuhurovnevaya"}
      image={"https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/01_kvartira-dvuhurovnevaya.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Двухуровневая квартира на Васнецова"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="февраль 2019"
          metr="152"
          building="11 месяцев"
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-dvuhurovnevaya/01_kvartira-dvuhurovnevaya.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-dvuhurovnevaya/00_kvartira-dvuhurovnevaya.jpg"
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
      <ProjectTaskSergey
        taskText="Разработать дизайн интерьера в современном стиле."
        wishText="Нам нравятся яркие современные интерьеры, в которых много свободного пространства и света. Любимого стиля у нас нет, нравятся отдельные элементы совершенно разных направлений: от лофта до модерна. Главное, чтобы в квартире было светло и уютно! Во всем остальном готовы полностью довериться профессионалам."
      />
            <ProjectPartner
        items={
        <>
           <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/domani.jpg"
              alt=""
              />
            }
            text="Центр интерьерных решений"
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/skvirel.jpg"
              alt=""
              />
            }
            text="Салон интерьеров" 
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/lazio.jpg"
              alt=""
              />
            }
            text="Салон дверей"
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/mega.jpg"
              alt=""
              />
            }
            text="Салон интерьерных решений" 
          />
         <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/oikos.jpg"
              alt=""
              />
            }
            text="Декоративная штукатурка и краска" 
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/stonetech.jpg"
              alt=""
              />
            }
            text="Мастерская камня" 
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/austrialight.jpg"
              alt=""
              />
            }
            text="Салон светильников" 
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/daskitchen.jpg"
              alt=""
              />
            }
            text="Салон немецкой мебели"
          />
                    <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/artmadestyle.jpg"
              alt=""
              />
            }
            text="Салон текстиля" 
          />

        </>
      }
      />
        <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default KvartiraDvuhurovnevaya