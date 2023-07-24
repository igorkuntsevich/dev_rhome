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

const DomPodmoskove = () => (
  <Layout>
    <Seo 
      title={"Дом в Подмосковье - RHOME"} description={"Дом в Подмосковье дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/facade/dom-podmoskove"}
      image={"https://rhome.by/images/portfolio/dom-podmoskove/01_dom-podmoskove.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Дом в Подмосковье"
          leader="Алексей Сергеев"
          architector="Алексей Сергеев, Евгений Сиваков"
          manager=""
          data="ноябрь 2022"
          metr="350"
          building=""
          budget={styles.project_intro_item_cost2}
        />
        <StaticImage
          src="../../../images/portfolio/dom-podmoskove/01_dom-podmoskove.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-podmoskove/00_dom-podmoskove.jpg"
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
        taskText="Оформить фасад дома, подобрать отделочные материалы, посчитать бюджет."
        wishText="У меня есть архитектурный проект, сейчас по нему возводят коробку. В процессе строительства я понял, что решение по фасаду совсем сырое, не разработаны узлы и элементы фасада, нет проекта для лицевой части забора и ворот, не подобраны отделочные материалы. Все это требует решений уже сегодня, плюс примерный бюджет хотелось бы понять."
      />
      <FooterConsultationDmitry />
      </div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      
  </Layout>
)
export default DomPodmoskove