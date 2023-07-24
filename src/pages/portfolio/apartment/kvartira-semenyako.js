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

const KvartiraSemenyako = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Трехкомнатная квартира на Семеняко 15"} description={"Интерьеры, которые мне нравятся, можно объединить под названием «упер-минимализм»"}
      location={"https://rhome.by/portfolio/apartment/kvartira-semenyako"}
      image={"https://rhome.by/images/portfolio/kvartira-semenyako/01_kvartira-semenyako.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Трехкомнатная квартира на Семеняко 15"
          leader="Сергей Рассеко"
          architector="Наталья Коростик"
          manager="Дмитрий Разумейчик"
          data=""
          metr="76,8"
          building="6 месяцев"
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-semenyako/01_kvartira-semenyako.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-semenyako/00_kvartira-semenyako.jpg"
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
        taskText="Разработать концепцию минималистичной квартиры для будущей семьи."
        wishText="Те интерьеры, которые мне нравятся, можно объединить под названием «супер-минимализм». Я планирую обзавестись семьей, поэтому хочу предусмотреть, чтобы в квартире нашлось место для детской. Спальня должна быть спальней для пары, а не для меня одного. Неплохо бы там разместить рабочую зону и туалетный столик."
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
              src="../../../images/partners/openini.jpg"
              alt=""
              />
            }
            text="Салон напольных покрытий и дверей" 
          />
         <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/atrium.jpg"
              alt=""
              />
            }
            text="Салон плитки и сантехники" 
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
              src="../../../images/partners/antrano.jpg"
              alt=""
              />
            }
            text="Фабрика эксклюзивной мебели"
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/cosmorelax.jpg"
              alt=""
              />
            }
            text="Магазин дизайнерских предметов"
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/rode.jpg"
              alt=""
              />
            }
            text="Салон штор и текстиля"
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
export default KvartiraSemenyako