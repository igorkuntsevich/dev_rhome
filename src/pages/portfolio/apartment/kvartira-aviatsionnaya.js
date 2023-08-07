import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KvartiraAviatsionnaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира на Авиационной"} description={"Квартира на ул. Авиационная от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
        location={"https://rhome.by/portfolio/apartment/kvartira-aviatsionnaya"}
        image={"https://rhome.by/images/portfolio/kvartira-aviatsionnaya/01_kvartira-aviatsionnaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира на Авиационной"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="август 2017"
                metr="80"
                building="6 месяцев"
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-aviatsionnaya/01_kvartira-aviatsionnaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-aviatsionnaya/00_kvartira-aviatsionnaya.jpg"
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
              taskText="Сделать квартиру в современном стиле."
              wishText="Хотим светлую квартиру в современном стиле. В этой квартире в основном будут жить родители, но так как мы сами будем приезжать периодически, нужно организовать две спальни: функциональную и простую — для нас, более классическую — для родителей. Также хотелось бы просторный санузел с ванной и душевой."
            />
          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
            items={
            <>
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
                  src="../../../images/partners/krea.jpg"
                  alt=""
                  />
                }
                text="Салон обоев" 
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
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default KvartiraAviatsionnaya