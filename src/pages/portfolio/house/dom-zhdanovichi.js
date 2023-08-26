import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const DomZhdanovichi = () => {
  return (
    <Layout>
      <Seo 
        title={"Элегантный дом в Ждановичах - RHOME"} description={"Элегантный дом в Ждановичах дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/dom-zhdanovichi"}
        image={"https://rhome.by/images/portfolio/dom-zhdanovichi/01_dom-zhdanovichi.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Элегантный дом в Ждановичах"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2021"
                metr="310"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-zhdanovichi/01_dom-zhdanovichi.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-zhdanovichi/00_dom-zhdanovichi.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-zhdanovichi/cut/18_dom-zhdanovichi.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/dom-zhdanovichi/cut/04_dom-zhdanovichi.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-zhdanovichi/cut/17_dom-zhdanovichi.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/dom-zhdanovichi/cut/09_dom-zhdanovichi.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-zhdanovichi/cut/06_dom-zhdanovichi.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать дизайн интерьера для семейного дома."
              wishText="Хотим переделать наш семейный дом, в котором мы живем уже около 20 лет. Мы любим свой дом, но некоторые вещи за столь долгий срок морально устарели – хотелось бы жить в красивом и современном интерьере, но все же полностью уходить от классики не готовы."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Этот дом строился под руководством главы семьи больше 20 лет назад из панелей. Как и в многоквартирных панельных домах, это привносит ограничения при перепланировке. Мы внесли небольшие изменения в изначальную планировку, сохранив функционал жилых комнат. Самые серьезные преобразования произошли с цокольным этажом. А также мы переоборудовали лоджии и спроектировали реконструкцию веранды.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__narrow_block + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/02_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/02_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/24_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/24_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер холла загородного дома</h2>
                <div>
                <p className={styles.project__p}>В декоре дома в Ждановичах присутствуют классические элементы – потолочный молдинг, двери с расстекловкой, перила на лестнице. Как и хотели того хозяева – полностью от классики не отказываемся. В просторном загородном доме у нас была возможность поиграть с объемами, не опасаясь, что крупные акценты будут смотреться чрезмерно громоздко и нарушать визуальный баланс. Так в холле появилась грандиозная люстра, спускающаяся со второго этажа.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/03_dom-zhdanovichi.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-zhdanovichi/03_dom-zhdanovichi.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/23_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/23_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/04_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/04_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/05_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/05_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн интерьера в стиле “джапанди”</h2>
                <div>
                <p className={styles.project__p}>В дизайне интерьера гостиной этого семейного дома мы сделали ставку на сочетание нейтральных тонов и лаконичной мебели. Интерьер дома в Ждановичах довольно эклектичный, но из-за мягкой цветовой гаммы это не столь очевидно. Наиболее сильное влияние на интерьер оказал стиль “джапанди”. Основная идея создать пространство, не перегруженное декором, но и не аскетичное. Название тренда интерьерного дизайна japandi складывается из двух частей japan + scandi. То есть гибридное применение стилистики скандинавских и восточных интерьеров, объединенных стремлением к минимализму и практичности.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/06_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/06_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/07_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/07_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В интерьере кухни также воплощены принципы минимализма в сочетании с природными текстурами и мягкой цветовой гаммой.</p>
            </div>

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/08_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/08_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/09_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/09_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/10_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/10_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
            <ProjectConsultationSergey
                text="Сделать пространство уютным и теплым, но одновременно с этим минималистичным, можно с помощью фактурных поверхностей. Основной материал в гостиной дома в Ждановичах – дерево, которое мы использовали даже в отделке стен."
            />
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реконструированный цокольный этаж</h2>
                <div>
                <p className={styles.project__p}>На цокольном этаже нашлось место для комнаты отдыха с винным шкафом. Закругленные своды и декоративная кирпичная кладка – отсылка к традиционным винным погребам. Здесь также расположена еще одна комната – через нее осуществляется вход в домашнюю СПА-зону и сауну.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/11_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/11_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/12_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/12_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьеры спальных комнат</h2>
                <div>
                <p className={styles.project__p}>Мы создавали интерьер семейного дома, в котором личное пространство каждого человека должно найти отражение в декоративных элементах. И если общие комнат оформлены в единой стилистике, то у каждой спальни свой характер: в интерьерах появляются узоры на стенах и текстиле, более насыщенные цвета.</p>
              </div>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/13_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/13_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/14_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/14_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/22_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/22_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/20_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/20_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/21_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/21_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/15_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/15_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/16_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/16_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/17_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/17_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Здесь нет ярких цветовых акцентов – помещение визуально чистое, но эффектным благодаря использованию широкоформатной плитки, повторяющей срез натуральной породы камня. Идеально четкие линии сбалансированы чарующим несовершенством природных узоров.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/18_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/18_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-zhdanovichi/19_dom-zhdanovichi.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-zhdanovichi/19_dom-zhdanovichi.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
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
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/asteya.jpg"
                  alt=""
                  />
                }
                text="Современные электроустановочные изделия"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/glivi.jpg"
                  alt=""
                  />
                }
                text="Интерьерные изделия из камня" 
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
export default DomZhdanovichi