import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationDmitry } from '../../../subitems/project/consultation/project-consultation-dmitry'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomProvintsialnyj = () => {
  return (
    <Layout>
      <Seo 
        title={"Провинциальный дом | Дизайн студия «Rhome.by»"} description={"Провинциальный дом от дизайн студии «Rhome.by» - качественная работа, прозрачные условия, фото портфолио, 200+ успешных проектов"}
        location={"https://rhome.by/portfolio/facade/dom-provintsialnyj"}
        image={"https://rhome.by/images/portfolio/dom-provintsialnyj/01_dom-provintsialnyj.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Провинциальный дом"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager=""
                data="январь 2017"
                metr="160"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-provintsialnyj/01_dom-provintsialnyj.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-provintsialnyj/00_dom-provintsialnyj.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Оформить фасад дома. Разработать входную группу и террасу. Подобрать отделочные материалы."
              wishText="Коробка дома уже готова. Пришло время взяться за фасад и кровлю. Решение в моем проекте мне не нравится. Хочется красивый, современный дом с темной крышей и светлым фасадом."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Устаревший внешний вид</h2>
                <div>
                <p className={styles.project__p}>Через несколько лет внешний вид дома морально устарел.Это классическая проблема, которую можно решить реконструкцией. В данном случае перемены только к лучшему! Чтобы решить эту задачу, нужно было не только поменять дизайн фасада, но и разработать новую входную группу и террасу. Для нового лица дома архитекторы RHome выбрали лаконичный европейский стиль. Дом был построен несколько лет назад. «Коробка» здания была выполнена в традиционном стиле, но наши заказчики хотели, чтобы их дом приобрел более современный вид.</p>
              </div>
            </div>
             <ProjectConsultationDmitry
                text="Обычно процесс реконструкции связан с большим объемом работ. Заказывать дизайн лучше зимой, чтобы уже к весне новый фасад подарил новую жизнь дому и всем, кто в нем живет."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Новый дизайн фасада</h2>
                <div>
                <p className={styles.project__p}>Быстро и бюджетно сделать современный фасад. Именно такая задача стояла перед нашими архитекторами. Поэтому мы использовали простые архитектурные решения и недорогие материалы, при этом решение получилось красивым и актуальным.В наружной отделке мы предложили сочетание светлой декоративной штукатурки и темного планкена. На заднем дворе построили небольшую уютную террасу из сосновой доски. Этот материал – один из самых недорогих вариантов напольного покрытия для открытых площадок. Осталось поставить кресла с пледами и пригласить хозяев.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-provintsialnyj/03_dom-provintsialnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-provintsialnyj/03_dom-provintsialnyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/dom-provintsialnyj/02_dom-provintsialnyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-provintsialnyj/02_dom-provintsialnyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default DomProvintsialnyj