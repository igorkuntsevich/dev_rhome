import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartnerNarrow } from "../../../subitems/project/project-partner-narrow"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey'

const FasadBorovlyany = () => {
  return (
    <Layout>
      <Seo 
        title={"Фасад дома в Боровлянах - RHOME"} description={"Фасад дома в Боровлянах дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/facade/fasad-borovlyany"}
        image={"https://rhome.by/images/portfolio/fasad-borovlyany/01_fasad-borovlyany.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Фасад дома в Боровлянах"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="450"
                building="3 месяца"
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-borovlyany/01_fasad-borovlyany.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-borovlyany/00_fasad-borovlyany.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/fasad-borovlyany/cut/08_fasad-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/fasad-borovlyany/cut/04_fasad-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/fasad-borovlyany/cut/06_fasad-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/fasad-borovlyany/cut/02_fasad-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/fasad-borovlyany/cut/05_fasad-borovlyany.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Оформить фасад недостроенного дома."
              wishText="Я несколько лет самостоятельно занимался строительством этого дома, но застрял на этапе “коробки”. Я понимаю, что проект неплохой и из него можно выжать максимум. Но сейчас я пришел к выводу, что сам не смогу сделать из него дом своей мечты, поэтому обращаюсь к вам. Мне нравятся неброские фасады, которые сочетаются с интерьером дома и приусадебным участком."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Владелец дома построил неплохую "коробку", но оставалось самое сложное – красиво оформить экстерьер здания и грамотно вписать его в существующую коттеджную застройку. Фасад – это не просто отделка стен – здесь важно продумать оформление входной группы, въезд в гараж, разработать конструктивные узлы и подобрать финишные материалы. Кроме этого мы сделали и дизайн-проект интерьера для этого дома.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/fasad-borovlyany/09_fasad-borovlyany.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/fasad-borovlyany/09_fasad-borovlyany.jpg"
                alt=""
                className={styles.project__one_image}
            />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/11_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/11_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/12_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/12_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Экстерьер этого дома – отсылка одновременно к неоклассицизму и архитектуре модерна</h2>
              <div>
                <p className={styles.project__p}>Фасад дома мы решили сделать сдержанным – строгим и легким одновременно. Для отделки использовали молочные и графитовые оттенки – цветовая гамма монохромная, но при этом неконтрастная и мягкая. На наш взгляд, такой сдержанный стиль отлично подходит для коттеджей в Беларуси. Такие дома гармонируют с местной природой и культурно-историческим наследием страны.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/04_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/04_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/05_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/05_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/08_fasad-borovlyanye.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/08_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/02_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/02_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/03_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/03_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationAlexey
                text="Проектируя фасад дома, всегда обдумывайте, как он впишется в окружающий ландшафт. Если ваш дом стоит неподалеку от соседских, то стоит обратить внимание, будет ли он гармонировать с их домами. Ведь вклад в красоту всей улицы – дело каждого."
            />
                      <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Цокольный этаж</h2>
              <div>
                <p className={styles.project__p}>Цокольный этаж дома довольно высокий, мы решили, что лучшим вариантом будет немного скрыть лестницу, ведущую в дом за насыпным холмом. Такой прием помог объединить ландшафт участка с постройкой.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/06_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/06_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-borovlyany/07_fasad-borovlyany.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-borovlyany/07_fasad-borovlyany.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>

        </div>
        <div className="wrapper">
          <ProjectPartnerNarrow
            items={
            <>
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/alutex.jpg"
                  alt=""
                  />
                }
                text="Алюминиевые профильные системы" 
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
export default FasadBorovlyany