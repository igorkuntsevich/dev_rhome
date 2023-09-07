import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../../components/styles/services.module.scss"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Fancybox from "../../components/fancybox.js";
import { BreadcrumbsServices } from "../../subitems/breadcrumbs/services"
import { ServicesInterests } from "../../subitems/services-cost/services-interests"
import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"






const ServicesBuilding = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/services/building"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.services_intro + " " + styles.services_intro_building}>
        <BreadcrumbsServices />
        <h1 className={styles.services_intro_title}>Строительные работы</h1>
      </div>
      <div className={styles.services_intro_text + " " + styles.services_intro_building_text}>
        <p className={styles.services_intro_text_p}>Предлагаем не&nbsp;только разработку дизайн-проекта, но&nbsp;и&nbsp;сопровождаем проект на&nbsp;всех этапах строительства.</p>
        <span className={styles.services_intro_text_span}>Мы&nbsp;работаем с&nbsp;проверенной командой строителей. Вам не&nbsp;нужно искать подрядчиков и&nbsp;поставщиков&nbsp;&mdash; мы&nbsp;ведем проекты от&nbsp;идеи до&nbsp;сдачи под ключ.</span>
      </div>
      <div className={styles.services__estimate}>
        <div className={styles.services__estimate_left}>
          <h3 className={styles.services__estimate_title}>Смета</h3>
          <div>
            <p className={styles.services__estimate_p}>Мы&nbsp;разрабатываем и&nbsp;презентуем подробные сметы на&nbsp;ремонтно-отделочные работы и&nbsp;материалы. Еще до&nbsp;начала строительных работы вы&nbsp;увидите, сколько будет стоить каждый этап работы и&nbsp;общую стоимость проекта.</p>
            <p className={styles.services__estimate_p}>На&nbsp;основе готового дизайн-проекта мы&nbsp;составляем подробную смету. На&nbsp;стоимость строительных работ влияет площадь объекта, сложность работ и&nbsp;цена используемых материалов.</p>
          </div>
        </div>
        <div className={styles.services__estimate_right}>
          <div className={styles.services__estimate_right_text}>
            <p className={styles.services__estimate_right_text_p}>Стоимость квадратного метра</p>
            <p className={styles.services__estimate_right_text_cost}>&asymp; 200&nbsp;$</p>
          </div>
        </div>
      </div>
      <div className={styles.services_term}>
        <h2 className={styles.services_term_title}>Сроки и&nbsp;виды работ</h2>
        <p className={styles.services_term_text}>Выберите из&nbsp;примеров то&nbsp;что наиболее похоже на&nbsp;ваш проект</p>
        <div className={styles.services_term_wrap}>
          <SimpleBar forceVisible="y" autoHide={false}>
            <div className={styles.services_term_head}>
              <p className={styles.services_term_head_item}>50-80м<sup>2</sup></p>
              <p className={styles.services_term_head_item + " " + styles.active}>80-100м<sup>2</sup></p>
              <p className={styles.services_term_head_item}>100-150м<sup>2</sup></p>
              <p className={styles.services_term_head_item}>150-200м<sup>2</sup></p>
              <p className={styles.services_term_head_item}>200-250м<sup>2</sup></p>
            </div>
          </SimpleBar>
        </div>
        <div className={styles.services_term_body}>
          <div>
            <p className={styles.services_term_body_item_title}>5 месяцев <span className={styles.services_term_body_item_title_span}>(ориентировочные сроки)</span></p>
            <div className={styles.services_term_line}></div>
            <div className={styles.services_term_body_grid}>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Подготовительные работы</p>
                <p className={styles.services_term_body_grid_item_p}>Проводим демонтаж старых и&nbsp;монтаж новых перегородок, заливаем стяжку, делаем электромонтажные и&nbsp;сантехнические работы, монтируем гипсокартонные конструкции и&nbsp;штукатурим.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Малярные работы и&nbsp;облицовка плиткой</p>
                <p className={styles.services_term_body_grid_item_p}>Подготавливаем стены под покраску, обои, декоративную штукатурку, укладываем плитку и&nbsp;красим потолки.</p>
              </div>
              <div>
                <p className={styles.services_term_body_grid_item_title}>Финишная отделка</p>
                <p className={styles.services_term_body_grid_item_p}>Укладываем паркет и&nbsp;монтируем плинтуса, устанавливаем сантехнику и&nbsp;электрику (розетки, выключатели и&nbsp;светильники), клеим обои.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.services_schedule}>
        <h3 className={styles.services_schedule_title}>Графики работ, оплат и&nbsp;поставок</h3>
        <p className={styles.services_schedule_text}>Предоставляем графики работ, оплат и&nbsp;поставок материалов. Графики нужны для того, чтобы отладить и&nbsp;сделать прозрачными все процессы. Вы&nbsp;заранее будете знать, когда и&nbsp;кем будут выполняться работы и&nbsp;когда нужно вносить оплату. Кроме того, раннее планирование позволяет избежать простоев и&nbsp;сократить время строительных работ.</p>
      </div>
      <ServicesInterests />
      <Fancybox>
        <div className={styles.services_gallery}>
          <SimpleBar forceVisible="y" autoHide={false}>
            <div className={styles.services_gallery_flex}>
              <div className={styles.services_gallery_grid1}>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_3.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_2.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_11.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_5.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_9.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_10.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_17.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a><a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_14.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_19.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
              </div>
              <div className={styles.services_gallery_grid2}>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_4.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_8.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_1.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_15.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_12.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_7.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_16.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_18.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_13.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
                <a href="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/01_apartamenty-manhetten.jpg"
                  data-fancybox="gallery">
                  <StaticImage
                    src="../../images/services/building/building_6.jpg"
                    alt=""
                    loading="eager"
                    className={styles.services_gallery_img}
                  />
                </a>
              </div>
            </div>
          </SimpleBar>
        </div>
      </Fancybox>
      <div className="line"></div>
      <div className={styles.services__lefttitle_righttext}>
        <h2 className={styles.services__lefttitle_righttext__title}>Инженер по&nbsp;качеству на&nbsp;проекте</h2>
        <div className={styles.services__lefttitle_righttext__text}>
          <div>
            <p className={styles.services__lefttitle_righttext__text_span}>Каждая стадия строительства принимается аттестованным инженером. Его задача&nbsp;&mdash; проверять, чтобы все было выполнены в&nbsp;соответствии с&nbsp;технологическими нормами. Это позволяет перейти к&nbsp;новому этапу работ, убедившись, что не&nbsp;было допущено никаких ошибок. Контроль инженера по&nbsp;качеству экономит время и&nbsp;помогает избежать переделок по&nbsp;завершении ремонта.</p>
            <p className={styles.services__lefttitle_righttext__text_span}>Наши подрядчики имеют сертификаты, мы&nbsp;официально проводим оплаты и&nbsp;даем гарантию качества.</p>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className={styles.services__lefttitle_righttext + " " + styles.services__lefttitle_righttext__bigmargin}>
        <h2 className={styles.services__lefttitle_righttext__title}>Официальные документы</h2>
        <div className={styles.services__lefttitle_righttext__text}>
          <div>
            <p className={styles.services__lefttitle_righttext__text_span}>У&nbsp;нас есть все официальные документы на&nbsp;любые виды строительных работ от&nbsp;заливки фундамента до&nbsp;укладки кровли. Работаем с&nbsp;объектами разных масштабов от&nbsp;квартир до&nbsp;торговых центров. Гарантируем качество строительных работ, ведь мы&nbsp;работаем с&nbsp;аттестованными специалистами.</p>
            <p className={styles.services__lefttitle_righttext__text_span}>Наши подрядчики имеют сертификаты. Официально проводим оплаты и&nbsp;даем гарантию 5&nbsp;лет.</p>
          </div>
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ServicesBuilding