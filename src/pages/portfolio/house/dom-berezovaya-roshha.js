import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomBerezovayaroshha = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера дома в Березовой роще - RHOME"} description={"Дизайн интерьера дома в современном стиле в Березовой роще от студии Rhome. Было/стало, чертежи, 3D проекты"}
        location={"https://rhome.by/portfolio/house/dom-berezovaya-roshha"}
        image={"https://rhome.by/images/portfolio/dom-berezovaya-roshha/01_dom-berezovaya-roshha.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в Березовой роще"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="июль 2017"
                metr="250"
                building="14 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/dom-berezovaya-roshha/01_dom-berezovaya-roshha.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-berezovaya-roshha/00_dom-berezovaya-roshha.jpg"
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
              wishText="Мы только что построили дом и хотим получить дизайн-проект интерьера в духе современной архитектуры. В принципе, ограничений не так много. Главное — чтобы стены не были белыми, как у нас в офисе. Не хотелось бы ощущать себя на работе круглые сутки."
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
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/sofaclub.jpg"
                  alt=""
                  />
                }
                text="Салон мебели" 
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
export default DomBerezovayaroshha