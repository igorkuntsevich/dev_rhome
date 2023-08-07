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
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const NeoklassikaD3 = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн неоклассического интерьера в ЖК D3"} description={"Неоклассика в ЖК D3 дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/neoklassika-d3"}
        image={"https://rhome.by/images/portfolio/neoklassika-d3/01_neoklassika-d3.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Неоклассика в ЖК D3"
                leader="Сергей Рассеко"
                architector="Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data=""
                metr="80"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/01_neoklassika-d3.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/neoklassika-d3/00_neoklassika-d3.jpg"
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
              taskText="Создать дизайн-проект квартиры в неоклассическом стиле."
              wishText="Я хочу стильную и эффектную квартиру, но в то же время, чтобы она не была требовательной в быту. Мне нравятся яркие дизайнерские светильники, а от мелкого декора хотелось бы уйти – в моем доме не должно быть пылесборников. В гостиной обязательно должно быть место для Рождественской елки."
            />
          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default NeoklassikaD3