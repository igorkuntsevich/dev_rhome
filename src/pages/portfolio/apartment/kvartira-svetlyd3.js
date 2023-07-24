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
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraSvetlyd3 = () => (
  <Layout>
    <Seo 
      title={"Дизайн-проект квартиры в ЖК D3"} description={"Дизайн интерьера трехкомнатной квартиры в Минске"}
      location={"https://rhome.by/portfolio/apartment/kvartira-svetlyd3"}
      image={"https://rhome.by/images/portfolio/kvartira-svetlyd3/01_kvartira-svetlyd3.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Светлый интерьер квартиры в ЖК D3"
          leader="Сергей Рассеко"
          architector="Татьяна Бебко"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="80"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-svetlyd3/01_kvartira-svetlyd3.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-svetlyd3/00_kvartira-svetlyd3.jpg"
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
        taskText="Разработать дизайн-проект квартиры для двух мужчин."
        wishText="В этой квартире мы будем жить с взрослым сыном. Нам важно иметь просторную гостиную с интересным дизайном интерьера, где бы мы могли проводить время вместе и принимать гостей. Но также важно иметь автономное пространство для каждого из нас. Нам нравятся светлые оттенки и необычные текстуры."
      />  
      <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default KvartiraSvetlyd3