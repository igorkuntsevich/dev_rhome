import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomTerassa = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн фасада дома - RHOME"} description={"Дизайн фасада дома с открытой террасой от студии Rhome. Было/стало, чертежи, 3D проекты"}
        location={"https://rhome.by/portfolio/facade/dom-terassa"}
        image={"https://rhome.by/images/portfolio/dom-terassa/01_dom-terassa.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом с открытой террасой"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="июнь 2016"
                metr="450"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-terassa/01_dom-terassa.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-terassa/00_dom-terassa.jpg"
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
              taskText="Оформить фасад дома и подчеркнуть современную архитектуру."
              wishText="Мы строим дом для для себя и хотим, чтобы все было максимально качественно. Современная лаконичная архитектура нам очень нравится, поэтому не переборщите с декором. К дому нужно пристроить крыльцо и разработать лицевую часть забора."
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
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
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
                  src="../../../images/partners/alutex.jpg"
                  alt=""
                  />
                }
                text="Алюминиевые профильные системы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/vandersanden.jpg"
                  alt=""
                  />
                }
                text="Кирпич ручной формовки" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/hormann.jpg"
                  alt=""
                  />
                }
                text="Двери и ворота" 
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
export default DomTerassa