import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const KvartiraSlavyanskom = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Трехкомнатная квартира в Славянском Квартале"} description={"Трехкомнатная квартира в Славянском Квартале дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-slavyanskom"}
        image={"https://rhome.by/images/portfolio/kvartira-slavyanskom/01_kvartira-slavyanskom.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#EADDD0"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Трехкомнатная квартира в Славянском Квартале"
                leader="Сергей Рассеко"
                architector="Татьяна Семенюк"
                manager="Дмитрий Разумейчик"
                data="2020"
                metr="117"
                building="10 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/01_kvartira-slavyanskom.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/00_kvartira-slavyanskom.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать стильный дизайн интерьера в приглушенных тонах."
              wishText="Мы живем во Франции, но часто бываем в Минске. Нам хочется иметь тут свою гавань, где нам было бы комфортно принимать гостей, работать и отдыхать. Из предпочтений – в интерьере нам по душе светлые, кремовые тона."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Попадая в квартиру, мы видим у зеркала пуф расцветки гусиная лапка, на правой части изображения –деревянные поворотные рейки. Пуф с обивкой «гусиная лапка» — контрастный элемент светлого интерьера. Этот узор актуален и в одежде, и в дизайне интерьера квартиры. От гостиной прихожая отделена шпонированными поворотными рейками из МДФ. Такой вариант подходит, когда нет желание «рубить» пространство глухой стеной, а обозначить границу функциональной зоны все же хочется. Пол в коридоре вымощен плиткой Imola Ceramica Azuma AG Silver, а по левую руку от входа туалетный столик с большим зеркалом.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/02_kvartira-slavyanskom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/02_kvartira-slavyanskom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/08_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/08_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/11_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/11_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/12_kvartira-slavyanskom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/12_kvartira-slavyanskom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Объединенное пространство гостиной</h2>
                <div>
                <p className={styles.project__p}>Гостиная просторная — это единое пространство, в котором находятся зона отдыха, столовая, и кухня. Остров отгораживает гостиную от кухни. Здесь можно разместиться с ноутбуком, чтобы поработать.  Ее можно использовать как аналог барной стойки во время приема гостей.  Один край выполнен в форме ступеней — так создается более мягкий переход между зонами, пространство не рубится резко. К тому же, у изголовья дивана появляется удобная полочка.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/13_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/13_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/14_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/14_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>У окна стоит шпонированный дубом обеденный стол. Акцент в этой зоне — светильник над столом, напоминающий ветряные колокольчики. Тумба под телевизор с черной каменной столешницей – Vicostone Nero Marquina. расположен электрический камин Dimplex Cassete 1000. С помощью подсветки и пара он создает очень реалистичную имитацию открытого огня. Камин и ковер с восточным узором добавляют современному интерьеру мягкости. Белая кухня с барной стойкой и высокими стульями</p>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/15_kvartira-slavyanskom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/15_kvartira-slavyanskom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/06_kvartira-slavyanskom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/06_kvartira-slavyanskom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

          <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="При проектировании электрики в этой квартире экран видеофона ближе к гостиной. Так удобнее открыть дверь к гостям. Такие небольшие, но значительные, детали важно продумать еще на этапе создания дизайн-проекта."
              />
          </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн двух спален квартиры</h2>
                <div>
                <p className={styles.project__p}>В этой квартире две спальни — хозяйская и гостевая. Обе выполнены в той же гамме, что и весь интерьер квартиры. В хозяйской спальне использовано много текстиля, смягчающего современную стилистику интерьера. Для этой комнаты продуманы несколько сценариев освещения, поэтому для этой комнаты выбрали и спотовые и накладные потолочные светильники, и прикроватную лампу для чтения, и лампу над изголовьем кровати, и диодную подсветку у карниза, и подвесной светильник у туалетного столика. Разные сценарии освещения преображают интерьер. Выбирая комбинацию светильников, можно варьировать освещенность комнаты, меняя атмосферу в ней.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/03_kvartira-slavyanskom.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-slavyanskom/03_kvartira-slavyanskom.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Гостевая спальная оформлена в той же цветовой гамме, что и остальные комнаты. Здесь мы расположили дополнительное место хранения распашной шкаф с П-образными черными ручками и зеркальным полотном на одной из дверей.и</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/09_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/09_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/07_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/07_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Кабинет расположен в комнате необычной  формы. Для жилой комнаты такое пространство было бы не очень удобным. Но для кабинета главное — расположить рабочий стол. Поэтому для создания рабочего «угла» необычная геометрия комнаты не помеха.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/04_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/04_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/10_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/10_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__leftimage_righttext}>
              <a href="https://rhome.by/images/portfolio/kvartira-slavyanskom/05_kvartira-slavyanskom.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-slavyanskom/05_kvartira-slavyanskom.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Кабинет расположен в комнате необычной  формы. Для жилой комнаты такое пространство было бы не очень удобным. Но для кабинета главное — расположить рабочий стол. Поэтому для создания рабочего «угла» необычная геометрия комнаты не помеха.</p>
              </div>
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
              />
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
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
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
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
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
export default KvartiraSlavyanskom