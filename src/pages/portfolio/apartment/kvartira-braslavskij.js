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

const KvartiraBraslavskij = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в ЖК «Браславский»"} description={"Дизайн интерьера квартиры в современном стиле от студии Rhome. 200+ работ в портфолио"}
        location={"https://rhome.by/portfolio/apartment/kvartira-braslavskij"}
        image={"https://rhome.by/images/portfolio/kvartira-braslavskij/01_kvartira-braslavskij.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК «Браславский»"
                leader="Сергей Рассеко"
                architector="Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="апрель 2017"
                metr="120"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-braslavskij/01_kvartira-braslavskij.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-braslavskij/00_kvartira-braslavskij.jpg"
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
              taskText="Разработать типовой интерьер квартиры в современном стиле."
              wishText="Нужно комплексное, проработанное решение по оформлению интерьера квартиры в современном стиле. Гостиную, кухню и столовую зону можно объединить в единое пространство, а вот спальню и детскую хочется видеть изолированными. Предусмотрите побольше мест для хранения и организуйте отдельную гардеробную, так как вещей у нас много."
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
                  src="../../../images/partners/domani.jpg"
                  alt=""
                  />
                }
                text="Центр интерьерных решений"
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
export default KvartiraBraslavskij