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

const OfisLogisticheskojkompanii = () => (
  <Layout>
    <Seo 
      title={"Офис логистической компании - RHOME"} description={"Офис логистической компании дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/commercial/ofis-logisticheskoj-kompanii"}
      image={"https://rhome.by/images/portfolio/ofis-logisticheskoj-kompanii/01_ofis-logisticheskoj-kompanii.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Офис логистической компании"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="152"
          building=""
          budget={styles.project_intro_item_cost1}
        />
        <StaticImage
          src="../../../images/portfolio/ofis-logisticheskoj-kompanii/01_ofis-logisticheskoj-kompanii.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/ofis-logisticheskoj-kompanii/00_ofis-logisticheskoj-kompanii.jpg"
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
        taskText="Создать офис, отражающий дух и миссию компании."
        wishText="Мы хотим офис без излишеств, но с интересными деталями — в частности мы хотели бы, чтобы нашлось место для большого аквариума. Мы современная компания и ждем от интерьера соответствия нашему духу. Тем более, что офис — это лицо нашей организации."
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
              src="../../../images/partners/austrialight.jpg"
              alt=""
              />
            }
            text="Салон светильников" 
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
           <ProjectPartnerItem
            image={
              <StaticImage
              src="../../../images/partners/cosmorelax.jpg"
              alt=""
              />
            }
            text="Магазин дизайнерских предметов" 
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
              src="../../../images/partners/armstrong.jpg"
              alt=""
              />
            }
            text="Подвесные потолки" 
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
export default OfisLogisticheskojkompanii