import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
// import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const PolskijProekt = () => (
  <Layout>
    <Seo 
      title={"Польский проект | Дизайн студия «Rhome.by»"} description={"Польский проект от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
      location={"https://rhome.by/portfolio/facade/polskij-proekt"}
      image={"https://rhome.by/images/portfolio/polskij-proekt/01_polskij-proekt.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Польский проект"
          leader="Алексей Сергеев"
          architector="Алексей Сергеев"
          manager="Дмитрий Разумейчик"
          data="январь 2017"
          metr="280"
          building=""
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/polskij-proekt/01_polskij-proekt.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/polskij-proekt/00_polskij-proekt.jpg"
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
        taskText="Доработать внешний вид дома, подобрать отделочные материалы, разработать техническую документацию для строителей."
        wishText="Первоначальный проект мне в принципе нравится, но есть моменты которые можно улучшить. Так же в проекте нет ни слова о материалах, которые использовали польские архитекторы в отделке фасада, их необходимо подобрать."
      />
      <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default PolskijProekt