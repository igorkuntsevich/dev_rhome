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

const IntererZelenojagavan = () => (
  <Layout>
    <Seo 
      title={"Интерьер дома в Зеленой Гавани - RHOME"} description={"Дизайн-проект интерьера дома в Зеленой Гавани от дизайн-студии RHome. "}
      location={"https://rhome.by/portfolio/house/interer-zelenoja-gavan"}
      image={"https://rhome.by/images/portfolio/interer-zelenoja-gavan/01_interer-zelenoja-gavan.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Интерьер дома в Зеленой Гавани"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="189"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/interer-zelenoja-gavan/01_interer-zelenoja-gavan.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/interer-zelenoja-gavan/00_interer-zelenoja-gavan.jpg"
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
        taskText="Разработать утонченный и современный интерьер дома."
        wishText="Мы въезжаем в новый дом в Зеленой Гавани, хочется, чтобы интерьер отражал ощущение начала новой главы жизни для нашей семьи. Здесь большие окна, поэтому нам видится что-то простоное и светлое, но в то же время изысканное и соответствующее тенденциям мировых трендов дизайна.
        "
      />
      <ProjectPartner
        items={
        <>
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
              src="../../../images/partners/atrium.jpg"
              alt=""
              />
            }
            text="Салон плитки и сантехники" 
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
              src="../../../images/partners/concetto.jpg"
              alt=""
              />
            }
            text="Салон итальянской мебели" 
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
export default IntererZelenojagavan