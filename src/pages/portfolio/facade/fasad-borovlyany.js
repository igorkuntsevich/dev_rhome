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

const FasadBorovlyany = () => {
  return (
    <Layout>
      <Seo 
        title={"Фасад дома в Боровлянах - RHOME"} description={"Фасад дома в Боровлянах дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/fasad-borovlyany"}
        image={"https://rhome.by/images/portfolio/fasad-borovlyany/01_fasad-borovlyany.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Фасад дома в Боровлянах"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="450"
                building="3 месяца"
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-borovlyany/01_fasad-borovlyany.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-borovlyany/00_fasad-borovlyany.jpg"
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
              taskText="Оформить фасад недостроенного дома."
              wishText="Я несколько лет самостоятельно занимался строительством этого дома, но застрял на этапе “коробки”. Я понимаю, что проект неплохой и из него можно выжать максимум. Но сейчас я пришел к выводу, что сам не смогу сделать из него дом своей мечты, поэтому обращаюсь к вам. Мне нравятся неброские фасады, которые сочетаются с интерьером дома и приусадебным участком."
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
export default FasadBorovlyany