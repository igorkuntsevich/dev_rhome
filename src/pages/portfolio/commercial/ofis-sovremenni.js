import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const OfisSovremenni = () => (
  <Layout>
    <Seo 
      title={"Интерьер офиса в современном стиле - Rhome.by"} description={"Интерьер офисов в современном стиле. Было/стало, чертежи, 3D проекты."}
      location={"https://rhome.by/portfolio/commercial/ofis-sovremenni"}
      image={"https://rhome.by/images/portfolio/ofis-sovremenni/01_ofis-sovremenni.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Интерьер офисов в современном стиле"
          leader="Сергей Рассеко"
          architector="Тимур Саракуца, Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="май 2017"
          metr="179"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/ofis-sovremenni/01_ofis-sovremenni.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/ofis-sovremenni/00_ofis-sovremenni.jpg"
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
        taskText="Разработать дизайн-проект интерьера офисных помещений торгового центра в современном стиле."
        wishText="Нам нужно оформление офисных помещений торгового центра для 15-17 сотрудников. Плюс ресепшн, удобная переговорная и кабинет директора. Все помещения должны выглядеть респектабельно и по-европейски."
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
              src="../../../images/partners/sofaclub.jpg"
              alt=""
              />
            }
            text="Салон мебели" 
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
export default OfisSovremenni