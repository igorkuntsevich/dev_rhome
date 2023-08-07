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
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'

const KvartiraTimiryazeva = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира с камином на Тимирязева"} description={"Квартира с камином на Тимирязева дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-timiryazeva"}
        image={"https://rhome.by/images/portfolio/kvartira-timiryazeva/01_kvartira-timiryazeva.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира с камином на Тимирязева"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="октябрь 2018"
                metr="89"
                building="7 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/01_kvartira-timiryazeva.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/00_kvartira-timiryazeva.jpg"
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
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="В нашей новой квартире мы хотим увидеть светлый, солнечный интерьер с современными решениями и актуальными материалами. В планировке обязательно предусмотрите отдельную спальню для нас и детскую для ребенка, гостиную можно совместить с кухней, нам нравится такой прием."
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
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений"
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
                text="Салон обоевй"
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
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
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
export default KvartiraTimiryazeva