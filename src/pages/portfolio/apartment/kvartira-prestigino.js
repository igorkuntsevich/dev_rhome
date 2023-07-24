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

const KvartiraPrestigino = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Квартира в ЖК «Престижино»"} description={"Чтобы увеличить количество спальных комнат, мы переделали просторную кухню в гостинно-кухонное пространство. Здесь отлично разместилась даже большая столовая зона"}
      location={"https://rhome.by/portfolio/apartment/kvartira-prestigino"}
      image={"https://rhome.by/images/portfolio/kvartira-prestigino/01_kvartira-prestigino.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Квартира в ЖК «Престижино»"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев, Тимур Саракуца"
          manager="Дмитрий Разумейчик"
          data="2019"
          metr="96"
          building="7 месяцев"
          budget={styles.project_intro_item_cost1}
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-prestigino/01_kvartira-prestigino.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-prestigino/00_kvartira-prestigino.jpg"
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
        taskText="Разработать современный дизайн без излишеств с возможностью изменения функционала комнат."
        wishText="В этой квартире мы будем жить вдвоем с мамой, но в ближайшее время я планирую завести семью, поэтому нужно сделать так, чтобы в одну из комнат можно было бы переоборудовать в детскую. Нам не нравятся интерьеры с обилием дизайнерских элементов. Хотелось бы жить в просторной светлой квартире."
      />
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
export default KvartiraPrestigino