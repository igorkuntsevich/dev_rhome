import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'

const DomSkandinavskshale = () => (
  <Layout>
    <Seo 
      title={"Загородный дом по мотивам скандинавских шале - RHOME"} description={"Загородный дом по мотивам скандинавских шале дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/house/dom-skandinavsk-shale"}
      image={"https://rhome.by/images/portfolio/dom-skandinavsk-shale/01_dom-skandinavsk-shale.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Загородный дом по мотивам скандинавских шале"
          leader="Сергей Рассеко"
          architector="Антон Захаров, Алексей Сергеев, Светлана Рожкова"
          manager="Дмитрий Разумейчик"
          data="ноябрь 2018"
          metr="180"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-skandinavsk-shale/01_dom-skandinavsk-shale.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-skandinavsk-shale/00_dom-skandinavsk-shale.jpg"
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
        taskText="Разработать дизайн интерьера дома в стиле скандинавского шале."
        wishText="Мы часто путешествуем и зачастую отелям предпочитаем апартаменты, которые сдают местные жители. Поэтому в нашем доме у озера мы планируем сделать качественный ремонт, чтобы в дальнейшем сдавать его в аренду.
        Очень хочется по максимуму сохранить аутентичность постройки и дерево внутри, но в то же время интерьер должен выглядеть солидно и уютно."
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
              src="../../../images/partners/stonetech.jpg"
              alt=""
              />
            }
            text="Мастерская камня"
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
              src="../../../images/partners/viridian.jpg"
              alt=""
              />
            }
            text="Студия интерьеров" 
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
export default DomSkandinavskshale