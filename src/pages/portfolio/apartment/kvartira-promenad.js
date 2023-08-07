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

const KvartiraPromenad = () => {
  return (
    <Layout>
      <Seo 
        title={"Квартира в ЖК “Променад” - RHOME"} description={"Квартира в ЖК “Променад” дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-promenad"}
        image={"https://rhome.by/images/portfolio/kvartira-promenad/01_kvartira-promenad.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК “Променад”"
                leader="Сергей Рассеко"
                architector="Евгений Ковалевский, Анастасия Стороженко"
                manager="Дмитрий Разумейчик"
                data="2021"
                metr="122"
                building="8 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/01_kvartira-promenad.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/00_kvartira-promenad.jpg"
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
              taskText="Создать светлый и минималистичный дизайн интерьера."
              wishText="В нашей новой квартире окна в пол, хотелось бы сохранить чувство, что свет буквально пронизывает все пространство. Будем рады видеть больше светлых красок — ничего мрачного. Нам по душе современные минималистичные интерьеры. Но все же это квартира для семьи с ребенком, поэтому не стоит слишком уходить в “хай-тек” – домашний уют для нас очень важен."
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
                  src="../../../images/partners/antrano.jpg"
                  alt=""
                  />
                }
                text="Фабрика эксклюзивной мебели"
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
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/svet.jpg"
                  alt=""
                  />
                }
                text="Лаконичное освещение" 
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
export default KvartiraPromenad