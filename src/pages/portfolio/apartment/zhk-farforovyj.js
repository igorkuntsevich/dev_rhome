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
import { ProjectTaskSergey2 } from '../../../subitems/project/task/project-task-sergey2'

const ZhkFarforovyj = () => {
  return (
    <Layout>
      <Seo 
        title={"ЖК Фарфоровый - RHOME"} description={"ЖК Фарфоровый дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/zhk-farforovyj"}
        image={"https://rhome.by/images/portfolio/zhk-farforovyj/01_zhk-farforovyj.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="ЖК Фарфоровый"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="октябрь 2022"
                metr="85"
                building="6 месяцев"
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/zhk-farforovyj/01_zhk-farforovyj.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/zhk-farforovyj/00_zhk-farforovyj.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/zhk-farforovyj/cut/10_zhk-farforovyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/zhk-farforovyj/cut/08_zhk-farforovyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/zhk-farforovyj/cut/06_zhk-farforovyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/zhk-farforovyj/cut/03_zhk-farforovyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/zhk-farforovyj/cut/13_zhk-farforovyj.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey2
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Очень понравился проект коттеджа в стиле Giovanni Sforza, который делала ваша студия, хотелось бы увидеть в нашей новой квартире нечто подобное. Мы предпочитаем темные интерьеры с мягкой подсветкой, итальянскую мебель и качественные натуральные материалы. По планировке основное пожелание: большая гостиная для посиделок и просторная хозяйская спальня с отдельным санузлом."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/zhk-farforovyj/02_zhk-farforovyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/zhk-farforovyj/02_zhk-farforovyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/03_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/03_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/04_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/04_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/zhk-farforovyj/06_zhk-farforovyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/zhk-farforovyj/06_zhk-farforovyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/05_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/05_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/09_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/09_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/07_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/07_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/zhk-farforovyj/08_zhk-farforovyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/zhk-farforovyj/08_zhk-farforovyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер-спальня</h2>
              <div>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/12_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/12_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/13_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/13_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Рабочий кабинет</h2>
              <div>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/10_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/10_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/11_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/11_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Санузлы</h2>
              <div>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/zhk-farforovyj/14_zhk-farforovyj.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/zhk-farforovyj/14_zhk-farforovyj.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/15_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/15_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/16_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/16_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реализация</h2>
              <div>
              </div>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/18_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/18_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/19_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/19_zhk-farforovyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhk-farforovyj/21_zhk-farforovyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhk-farforovyj/21_zhk-farforovyj.jpg"
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
export default ZhkFarforovyj