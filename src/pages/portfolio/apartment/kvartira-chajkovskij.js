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
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraChajkovskij = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Квартира с контрастными элементами в ЖК «Чайковский»"} description={"Квартира с контрастными элементами в ЖК «Чайковский» дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-chajkovskij"}
      image={"https://rhome.by/images/portfolio/kvartira-chajkovskij/01_kvartira-chajkovskij.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Квартира с контрастными элементами в ЖК «Чайковский»"
          leader="Сергей Рассеко"
          architector="Дмитрий Вашкевич, Светлана Рожкова"
          manager="Дмитрий Разумейчик"
          data="ноябрь 2018"
          metr="70"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-chajkovskij/01_kvartira-chajkovskij.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-chajkovskij/00_kvartira-chajkovskij.jpg"
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
        taskText="Разработать дизайн интерьера квартиры в современном стиле."
        wishText="В нашей новой квартире хотим видеть современный, воздушный интерьер, располагающий в первую очередь к отдыху. Нам нравятся светлые глянцевые поверхности в сочетании с темными контрастными элементами. Так как квартира свободной планировки, обязательно отделите спальню от всего остального пространства, а вместо кладовой было бы отлично сделать небольшую гардеробную."
      />
            <ProjectPartner
        items={
        <>
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
              src="../../../images/partners/stonetech.jpg"
              alt=""
              />
            }
            text="Мастерская камня" 
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
              src="../../../images/partners/rode.jpg"
              alt=""
              />
            }
            text="Салон штор и текстиля" 
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
export default KvartiraChajkovskij