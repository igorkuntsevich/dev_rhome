import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-commercial"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const LaunzhBar = () => {
  return (
    <Layout>
      <Seo 
        title={"Лаунж-бар от дизайнеров студии RHome"} description={"Лаунж-бар дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/commercial/launzh-bar"}
        image={"https://rhome.by/images/portfolio/launzh-bar/01_launzh-bar.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F7EDE4"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Лаунж-бар"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2019"
                metr="200"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/launzh-bar/01_launzh-bar.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/launzh-bar/00_launzh-bar.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать дизайн многофункционального бара."
              wishText="Мы хотим создать круглосуточное заведение, где днем можно выпить кофе и пообедать, а вечером прийти с друзьями на коктейль. К бару примыкает просторная открытая терраса – нужно, чтобы гости могли свободно перемещаться по всему лаунж-бару. Общее пожелание по атмосфере – люксовая, но уютная."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
              <div>
              
              <p className={styles.project__p}>Концепция этого лаунж-бара планировалась исходя из того, что он будет находиться в торгово-развлекательном центре. Поэтому его интерьер должен быть довольно универсальным, чтобы разные категории посетителей чувствовали себя здесь уютно. Это круглосуточное заведение, так что нужно было создать универсальный, но в то же время праздничный интерьер, в которым было приятно выпить чашку утреннего кофе или прийти на вечернее мероприятие.</p>
              <p className={styles.project__p}>В этом помещении окна довольно большие и доходят практически до пола. Чтобы сделать дневной свет более приглушённым и отделить пространство бара от городского пейзажа, дизайнеры запроектировали речные конструкции на окнах, которые рассеивают дневной свет и служат своеобразной заменой портьерам.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/launzh-bar/02_launzh-bar.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/launzh-bar/02_launzh-bar.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/launzh-bar/03_launzh-bar.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/launzh-bar/03_launzh-bar.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__leftimage_righttext}>
              <a href="https://rhome.by/images/portfolio/launzh-bar/06_launzh-bar.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/launzh-bar/06_launzh-bar.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Дизайнеры использовали тёмные цвета и золотистые оттенки. Они выигрышно смотрятся и днём, и ночью, к тому же создают камерную и праздничную атмосферу. Центральный акцент лаунж-бара — люстры Mooi Richmond, напоминающие светящиеся звёздные шары.</p>
              </div>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>К лаунж-бару примыкает большая терраса, на которую могут выходить гости заведения</h2>
              <div>
              <p className={styles.project__p}>Поэтому одной из задач было спланировать пространство таким образом, чтобы не было гостям не было проблематично курсировать между открытой террасой и барной зоной и не мешать при этом гостям, сидящим за столиками.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/launzh-bar/04_launzh-bar.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/launzh-bar/04_launzh-bar.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/launzh-bar/05_launzh-bar.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/launzh-bar/05_launzh-bar.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default LaunzhBar