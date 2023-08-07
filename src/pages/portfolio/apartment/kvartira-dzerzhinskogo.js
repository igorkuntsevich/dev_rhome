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

const KvartiraDzerzhinskogo = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера. Просторная и светлая квартира - RHOME"} description={"Просторный и светлый интерьер трехкомнатной квартиры"}
        location={"https://rhome.by/portfolio/apartment/kvartira-dzerzhinskogo"}
        image={"https://rhome.by/images/portfolio/kvartira-dzerzhinskogo/01_kvartira-dzerzhinskogo.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира на Дзержинского 19"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2019"
                metr="87"
                building="8 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-dzerzhinskogo/01_kvartira-dzerzhinskogo.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-dzerzhinskogo/00_kvartira-dzerzhinskogo.jpg"
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
              taskText="Спроектировать интерьер для квартиры-студии."
              wishText="Я хочу современный и в то же время роскошный дизайн интерьера, в котором бы использовались нестандартные дизайнерские решения. В результате я бы хотела получить квартиру-студию, в которой можно было бы отдохнуть от напряженного рабочего графика, получая эстетическое удовольствие."
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
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/svarokmaster.jpg"
                  alt=""
                  />
                }
                text="Изделия из натурального камня" 
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
export default KvartiraDzerzhinskogo