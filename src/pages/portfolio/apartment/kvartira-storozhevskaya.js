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

const KvartiraStorozhevskaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира на ул. Сторожевская"} description={"Квартира на ул. Сторожевская дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-storozhevskaya"}
        image={"https://rhome.by/images/portfolio/kvartira-storozhevskaya/01_kvartira-storozhevskaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира на ул. Сторожевская"
                leader="Сергей Рассеко"
                architector="Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="май 2018"
                metr="270"
                building="13 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/01_kvartira-storozhevskaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/00_kvartira-storozhevskaya.jpg"
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
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Хочется увидеть в итоге современную городскую квартиру, стильную и элегантную, но не перегруженную деталями. По цветовой гамме предпочитаю благородные коньячные оттенки. Пространство оставьте максимально просторным, но не забудьте про системы хранения, в том числе организацию хозблока и нескольких гардеробных."
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
              />
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
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
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
export default KvartiraStorozhevskaya