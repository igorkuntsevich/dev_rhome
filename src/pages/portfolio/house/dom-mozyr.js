import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const DomMozyr = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера дома в Мозыре - RHOME"} description={"Современный дизайн интерьера дома в Мозыре от студии Rhome. Было/стало, чертежи, 3D проекты"}
      location={"https://rhome.by/portfolio/house/dom-mozyr"}
      image={"https://rhome.by/images/portfolio/dom-mozyr/01_dom-mozyr.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Современный интерьер дома в Мозыре"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="сентябрь 2016"
          metr="250"
          building="14 месяцев"
          budget={styles.project_intro_item_cost2}
        />
        <StaticImage
          src="../../../images/portfolio/dom-mozyr/01_dom-mozyr.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-mozyr/00_dom-mozyr.jpg"
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
        taskText="Разработать интерьер дома в современном стиле."
        wishText="Нужен дизайн дома площадью 250 кв.м. в современном стиле. Материалы нравятся благородные и натуральные: дерево, стекло, металл. 
        Бюджет: 100 000 — 120 000 $. Главное и единственное жесткое условие — «парящая» лестница. В остальном полностью доверяю профессионалам."
      />
      <ProjectPartner
        items={
        <>
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/gira.jpg"
              alt=""
              />
            }
            text="Розетки и выключатели"
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
              src="../../../images/partners/caparol.jpg"
              alt=""
              />
            }
            text="Отделочные материалы" 
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
              src="../../../images/partners/antrano.jpg"
              alt=""
              />
            }
            text="Фабрика эксклюзивной мебели" 
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
export default DomMozyr