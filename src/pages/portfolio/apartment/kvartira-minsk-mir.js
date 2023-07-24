import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraMinskmir = () => (
  <Layout>
    <Seo 
      title={"Трехкомнатная квартира в ЖК Минск Мир - RHOME"} description={"Дизайн-проект интерьера квартиры в ЖК Минск Мир от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-minsk-mir"}
      image={"https://rhome.by/images/portfolio/kvartira-minsk-mir/01_kvartira-minsk-mir.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Трехкомнатная квартира в ЖК Минск Мир"
          leader="Сергей Рассеко"
          architector="Евгений Ковалевский, Анастасия Стороженко"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="90"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-minsk-mir/01_kvartira-minsk-mir.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-minsk-mir/00_kvartira-minsk-mir.jpg"
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
        taskText="Создать современный минималистичный интерьер в темной гамме."
        wishText="Мне хотелось бы видеть городскую квартиру, довольно минималистичную и современную, но не сто́ит уходить в индустриальный стиль или делать лофт-пространство. Я отдаю предпочтения темным цветам и контрастным сочетаниям, но интерьер квартиры не должен смотреться слишком мрачно."
      />
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
              src="../../../images/partners/terra.jpg"
              alt=""
              />
            }
            text="Салон плитки и сантехники" 
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
              src="../../../images/partners/antrano.jpg"
              alt=""
              />
            }
            text="Фабрика эксклюзивной мебели"
          />
        </>
      }
      />
      <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default KvartiraMinskmir