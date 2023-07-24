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
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const KvartiraSkandinavsk = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера Современная квартира с нотками скандинавского стиля"} description={"Современная квартира с нотками скандинавского стиля дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/apartment/kvartira-skandinavsk"}
      image={"https://rhome.by/images/portfolio/kvartira-skandinavsk/01_kvartira-skandinavsk.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Современная квартира с нотками скандинавского стиля"
          leader="Сергей Рассеко"
          architector="Антон Захаров, Светлана Рожкова"
          manager="Дмитрий Разумейчик"
          data="июнь 2018"
          metr="113"
          building=""
          budget={styles.project_intro_item_cost2}
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-skandinavsk/01_kvartira-skandinavsk.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/kvartira-skandinavsk/00_kvartira-skandinavsk.jpg"
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
        wishText="Нам нужен светлый современный интерьер с элементами скандинавского стиля. Очень нравится белый цвет, дерево и мебель из слэбов. Также принципиально важно максимально сохранить вид из окна и впустить в помещение как можно больше природы и света."
      />
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
              src="../../../images/partners/lazio.jpg"
              alt=""
              />
            }
            text="Салон дверей"
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
              src="../../../images/partners/cosmorelax.jpg"
              alt=""
              />
            }
            text="Магазин дизайнерских предметов"
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
export default KvartiraSkandinavsk