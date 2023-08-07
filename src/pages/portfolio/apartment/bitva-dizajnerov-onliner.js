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

const BitvaDizajnerovonliner = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера в рестро стиле 50х - RHOME"} description={"Дизайн интерьера в рестро стиле 50х для «Битвы дизайнеров onliner.by» от студии Rhome. 200+ работ в портфолио"}
        location={"https://rhome.by/portfolio/apartment/bitva-dizajnerov-onliner"}
        image={"https://rhome.by/images/portfolio/bitva-dizajnerov-onliner/01_bitva-dizajnerov-onliner.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="«Битва дизайнеров» для Onliner"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="март 2016"
                metr="52"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/bitva-dizajnerov-onliner/01_bitva-dizajnerov-onliner.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/bitva-dizajnerov-onliner/00_bitva-dizajnerov-onliner.jpg"
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
              taskText="Разработать дизайн интерьера в ретро стиле 50-x."
              wishText="Хочется побольше красного, можно немного бархата, паттернов и контрастных цветов. И чтобы вместе с мебелью получилось не больше 25 000$. А то я вас, дизайнеров, знаю!"
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
export default BitvaDizajnerovonliner