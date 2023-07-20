import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { useInView } from "react-intersection-observer"
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

const HouseBerezino = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  const [ref2, inView2] = useInView({
    triggerOnce: true,
  });
  return (
  <Layout>
    <Seo 
      title={"Дом на Березине - RHOME"} description={"Дом на Березине дизайн от студии RHome"}
      location={"https://rhome.by/portfolio/house/dom-berezino"}
      image={"https://rhome.by/images/portfolio/dom-berezino/01_dom-berezino.jpg"}
    />
    <div className="wrapper">
      <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
        <ProjectIntro
          breadcrumbs={<BreadcrumbsProject />}
          title="Дом на&nbsp;Березине"
          leader="Сергей Рассеко"
          architector="Алексей Сергеев, Светлана Рожкова"
          manager="Дмитрий Разумейчик"
          data="2020"
          metr="260"
          building="18 месяцев"
          budget=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/01_dom-berezino.jpg"
          className={styles.project_intro_image}
          alt=""
        />
        <StaticImage
          src="../../../images/portfolio/dom-berezino/00_dom-berezino.jpg"
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
      <div className={styles.project_task}>
        {/* <div className={styles.project_task_bcg}></div> */}
        <div className={styles.project_task_person}>
          <StaticImage
            src="../../../images/personal/project_svetlana.jpg"
            alt=""
            className={styles.project_task_person_img}
          />
          <p className={styles.project_task_person_status}>Светлана, архитектор</p>
        </div>
        <p ref={ref} className={styles.project_task_ref1}></p>
        <p ref={ref2} className={styles.project_task_ref2}></p>
        <div className={styles.project_task_text}>
          <div className={styles.project_task_text1 + " " + (inView? `${styles.active}` : "")}>
            <p className={styles.project_task_text_title}>Задача:</p>
            <p className={styles.project_task_text_p}>Спроектировать дом и&nbsp;баню. Разработать дизайн интерьера загородного дома в&nbsp;современном стиле.</p>
          </div>
          <div className={styles.project_task_text2 + " " + (inView2? `${styles.active}` : "")}>
            <p className={styles.project_task_text_title}>Пожелания клиента</p>
            <p className={styles.project_task_text_p}>&mdash;&nbsp;Мы&nbsp;решили обзавестись загородным домом, куда можно было&nbsp;бы приезжать не&nbsp;просто на&nbsp;выходные, а&nbsp;жить с&nbsp;комфортом продолжительное время. Очень важно сохранить комфорт городской жизни.</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      {/* <Fancybox>
        <div className={styles.project}>

        </div>
      </Fancybox> */}
      <FooterConsultationDmitry />
    </div>
      
  </Layout>
  )
}
export default HouseBerezino