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
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'

const IntererGomel = () => {
  return (
    <Layout>
      <Seo 
        title={"Интерьер дома в Гомеле | Дизайн студия «Rhome.by»"} description={"Интерьер дома в Гомеле от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
        location={"https://rhome.by/portfolio/house/interer-gomel"}
        image={"https://rhome.by/images/portfolio/interer-gomel/01_interer-gomel.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Интерьер дома в Гомеле"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="иентябрь 2015"
                metr="450"
                building=""
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/interer-gomel/01_interer-gomel.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-gomel/00_interer-gomel.jpg"
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
            <ProjectTaskDmitry
              taskText="Разработать интерьер частного дома в современном стиле."
              wishText="Нам бы хотелось получить современный дом в темных тонах. Материалы подберите натуральные: дерево, камень, стекло, кирпич. Кухней пользуемся не так уж часто, поэтому сделайте ее небольшой. Только обязательно спрячьте всю технику, кастрюли и прочие черпаки в шкафы. Декор — по минимуму."
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
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска"
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
                  src="../../../images/partners/orac.jpg"
                  alt=""
                  />
                }
                text="Лепной декор"
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
export default IntererGomel