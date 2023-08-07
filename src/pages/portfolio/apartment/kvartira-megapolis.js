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

const KvartiraMegapolis = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в светлых тонах в ЖК «Мегаполис»"} description={"Квартира в светлых тонах в ЖК «Мегаполис» дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-megapolis"}
        image={"https://rhome.by/images/portfolio/kvartira-megapolis/01_kvartira-megapolis.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в светлых тонах в ЖК «Мегаполис»"
                leader="Сергей Рассеко"
                architector="Наталья Коростик, Ксения Ледохович"
                manager="Дмитрий Разумейчик"
                data="август 2018"
                metr="120"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-megapolis/01_kvartira-megapolis.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-megapolis/00_kvartira-megapolis.jpg"
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
              taskText="Разработать дизайн интерьера квартиры в современном стиле."
              wishText="Нам нравятся светлые интерьеры с белыми стенами. Что касается планировки, то тут несколько важных пожеланий. Во-первых, мы хотим просторную гостиную, объединенную с кухней и столовой. Во-вторых, по максимуму использовать панорамные окна на лоджии в кухне. В-третьих, сделать в спальне свою гардеробную и изолированный санузел."
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
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы"
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
export default KvartiraMegapolis