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

const KvartiraSlavyanskom = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Трехкомнатная квартира в Славянском Квартале"} description={"Трехкомнатная квартира в Славянском Квартале дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-slavyanskom"}
        image={"https://rhome.by/images/portfolio/kvartira-slavyanskom/01_kvartira-slavyanskom.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Трехкомнатная квартира в Славянском Квартале"
                leader="Сергей Рассеко"
                architector="Татьяна Семенюк"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="117"
                building="10 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/01_kvartira-slavyanskom.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/00_kvartira-slavyanskom.jpg"
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
              taskText="Создать стильный дизайн интерьера в приглушенных тонах."
              wishText="Мы живем во Франции, но часто бываем в Минске. Нам хочется иметь тут свою гавань, где нам было бы комфортно принимать гостей, работать и отдыхать. Из предпочтений – в интерьере нам по душе светлые, кремовые тона."
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
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений"
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
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
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
export default KvartiraSlavyanskom