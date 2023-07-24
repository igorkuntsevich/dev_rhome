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

const DomRaubichy = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера дома в Раубичах - RHOME"} description={"Мы купили дом, в котором хотим сделать хороший ремонт и современный дизайн. Также нам нужен проект бассейна и ландшафтный дизайн."}
      location={"https://rhome.by/portfolio/house/dom-raubichy"}
      image={"https://rhome.by/images/portfolio/dom-raubichy/01_dom-raubichy.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Дом в Раубичах"
          leader="Сергей Рассеко"
          architector="Тимур Саракуца"
          manager="Дмитрий Разумейчик"
          data="август 2017"
          metr="500"
          building="18 месяцев"
          budget={styles.project_intro_item_cost3}
        />
        <StaticImage
          src="../../../images/portfolio/dom-raubichy/01_dom-raubichy.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-raubichy/00_dom-raubichy.jpg"
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
        wishText="Мы купили дом, в котором хотим сделать хороший ремонт в современном стиле. Обязательно предусмотрите несколько гостевых спален, поскольку к нам часто будут приезжать гости. Еще нужен рабочий кабинет и кинотеатр. Также предусмотрите фоновую подсветку во всех помещениях."
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
              src="../../../images/partners/gira.jpg"
              alt=""
              />
            }
            text="Розетки и выключатели"
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
              src="../../../images/partners/openini.jpg"
              alt=""
              />
            }
            text="Салон напольных покрытий и дверей"
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
              src="../../../images/partners/mexo.jpg"
              alt=""
              />
            }
            text="Мягкая мебель" 
          />
           <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/fmg.jpg"
              alt=""
              />
            }
            text="Керамическая плитка" 
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
export default DomRaubichy