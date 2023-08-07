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

const KvartiraMoskva = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в Москве"} description={"Светлый и праздничный интерьер квартиры в Москве."}
        location={"https://rhome.by/portfolio/apartment/kvartira-moskva"}
        image={"https://rhome.by/images/portfolio/kvartira-moskva/01_kvartira-moskva.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в Москве"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Cветлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2019"
                metr="200"
                building="14 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/01_kvartira-moskva.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/00_kvartira-moskva.jpg"
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
              taskText="Создать концепцию интерьера для просторной квартиры."
              wishText="Я давно мечтала о светлой просторной квартире, чтобы она ощущалась «воздушной». Хочется найти способ совместить светлые тона интерьера с «люксовостью» дизайна. В первую очередь для меня важно, чтобы моя квартира отражала мою индивидуальность. Я люблю устраивать домашние вечеринки, поэтому нужно сделать так, чтобы в гостиной могли бы собираться гости."
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
                  src="../../../images/partners/rimadesio.jpg"
                  alt=""
                  />
                }
                text="Межкомнатные перегородки"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/lualdi.jpg"
                  alt=""
                  />
                }
                text="Итальянские двери" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/kahrs.jpg"
                  alt=""
                  />
                }
                text="Паркет"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/imola.jpg"
                  alt=""
                  />
                }
                text="Итальянская плитка" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/artemide.jpg"
                  alt=""
                  />
                }
                text="Освещение" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/gessi.jpg"
                  alt=""
                  />
                }
                text="Итальянская сантехника" 
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
export default KvartiraMoskva