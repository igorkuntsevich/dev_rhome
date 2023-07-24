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
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraDlyasemi = () => (
  <Layout>
    <Seo 
      title={"Интерьер квартиры для семьи - RHOME"} description={"Интерьер квартиры для семьи дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-dlya-semi"}
      image={"https://rhome.by/images/portfolio/kvartira-dlya-semi/01_kvartira-dlya-semi.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Интерьер квартиры для семьи"
          leader="Сергей Рассеко"
          architector="Евгений Ковалевский, Светлана Рожкова"
          manager="Павел Ермакович"
          data="2021"
          metr="80"
          building="10 месяцев"
          budget={styles.project_intro_item_cost3}
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-dlya-semi/01_kvartira-dlya-semi.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-dlya-semi/00_kvartira-dlya-semi.jpg"
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
      <ProjectTaskSvetlana
        taskText="Создать интерьер квартиры для семьи из 4 человек"
        wishText="Мы готовимся переезжать в новую квартиру. Хочется, чтобы все хлопоты по ремонту, задачи по созданию планировки и подбору качественных материалов на себя взяли специалисты. Но при этом важно, чтобы внимательно отнеслись к нашим пожеланиям. Нам хочется спокойный, уютный и современный дизайн интерьера, в котором будет комфортно каждому члену нашей семьи."
      />
      <div className="line"></div>
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
              src="../../../images/partners/openini.jpg"
              alt=""
              />
            }
            text="Салон напольных покрытий и дверей"
          />
          <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/asteya.jpg"
              alt=""
              />
            }
            text="Современные электроустановочные изделия" 
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
export default KvartiraDlyasemi