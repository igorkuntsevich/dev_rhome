import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { ProjectConsultationSergey } from "../../../subitems/project/consultation/project-consultation-sergey"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"





const ZhkMyak = () => (
  <Layout>
    <Seo 
      title={"Проекты дизайна интерьера квартир в ЖК «Маяк Минска» - RHOME"} description={"Архитектурное бюро RHome успешно создает и реализует оригинальные проекты дизайна интерьера квартир в ЖК «Маяк Минска»"}
      location={"https://rhome.by/articles/zhk-mayak-minska"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Дизайн интерьера квартир в ЖК “Маяк Минска”</h1>
          <StaticImage
            src="../../../images/inspiration/articles/zhk-mayak-minska/07_zhk-mayak-minska.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/zhk-mayak-minska/00_zhk-mayak-minska.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Маяк Минска — один из самых ярких районов столицы, живущий в динамичном ритме. Это воплощение концепции «город в городе», где встречаются разные стили. </p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>За годы существования ЖК мы сделали несколько проектов в этих домах:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Мы хорошо знакомы с конструктивными особенностями домов</li>
              <li className={styles.articles__li}>Имеем представление о возможностях и ограничениях изначальных планировок квартир</li>
              <li className={styles.articles__li}>У нас налажен контакт с товариществом собственников</li>
            </ul>
          </div>
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSergey
                text="Наша миссия — создавать интерьеры, соответствующие духу времени, желаниям заказчика и принципам современного дизайна. Мы делаем «проекты под ключ» от разработки дизайн-проекта до проведения ремонтно-строительных работ."
              />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Две квартиры для одной семьи в ЖК "Маяк Минска"</h2>
          <div>
          <p className={styles.articles__p}>Главная задача в работе над дизайн-проектом интерьера этой квартиры — объединить пространство двух квартир, чтобы стилистически они смотрелись единым целым. Интерьер этих квартир сдержанный и лаконичный, без большого количества декора. Основной акцент в дизайне этой квартиры сделан на архитектурную составляющую. Несмотря на изначально большую совокупную площадь двух квартир, при создании планировки квартиры мы старались использовать пространство максимально эффективно. Для этого мы объединили лоджии с жилым пространством. Так мы не только увеличили метраж, но и впустили больше солнечного света — панорамные окна Маяка Минска теперь выходят прямо в комнаты.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link + " " + styles.articles__bigmargin + " " + styles.articles__narrow_block}>
        <StaticImage
          src="../../../images/inspiration/articles/zhk-mayak-minska/06_zhk-mayak-minska.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartiry-dve/03_kvartiry-dve.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image + " " + styles.articles__bigmargin}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartiry-dve"
          title="Две квартиры для одной семьи"
          metr="100"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartiry-dve/00_kvartiry-dve.jpg"
              alt=""
            />
          }
        />
        </div>





        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Классический интерьер квартиры в Маяке Минска</h2>
          <div>
          <p className={styles.articles__p}>Дизайн этой квартиры мы создавали, когда Маяк Минска ещё только начинали заселять — в 2012 году. Однако такой интерьер морально не стареет, он актуален и сейчас. Хозяйка квартиры хотела уютный классический интерьер, который напоминал бы европейские загородные дома. Такой схожести мы добились, выбрав для оформления интерьера тёплые оттенки, мебельные фасады с филёнками, потолочные карнизы молдинги. Планировку квартиры мы не изменяли.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link + " " + styles.articles__bigmargin + " " + styles.articles__narrow_block}>
        <StaticImage
          src="../../../images/inspiration/articles/zhk-mayak-minska/04_zhk-mayak-minska.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-traditsionnaya/03_kvartira-traditsionnaya.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-traditsionnaya"
          title="Квартира в традиционном стиле"
          metr="70"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-traditsionnaya/00_kvartira-traditsionnaya.jpg"
              alt=""
            />
          }
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Монохромная квартира в Маяке Минска</h2>
          <div>
          <p className={styles.articles__p}>Эта 48-метровая квартира задумывалась по проекту как квартира-студия, но для нашего заказчика принципиально важно было иметь обособленную спальню. Поэтому нашей первостепенной задачей стало продумать распределение пространства между комнатами. Цветовая гамма этой квартиры монохромная, дизайн минималистичный, почти аскетичный. В таком интерьере каждая деталь на виду, ничто не утопает в обилии декора, поэтому крайне важна грамотная реализация проекта. Чтобы убедиться, что проект будет реализован в точности с задумкой дизайнера, следует заказать услугу авторский надзор.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link + " " + styles.articles__bigmargin + " " + styles.articles__narrow_block}>
        <StaticImage
          src="../../../images/inspiration/articles/zhk-mayak-minska/05_zhk-mayak-minska.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/zhk-mayak-minska/02_zhk-mayak-minska.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/zhk-mayak-minska/08_zhk-mayak-minska.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>

      </div>
    </div>
    
    <div className="wrapper">
      <div className={styles.last_articles}>
        <h2 className={styles.last_articles_title}>Последние статьи</h2>
        <div className={styles.inspiration_content}>
          <InspirationArticle
            url="/inspiration/articles/trend-kuhni/"
            backgroundColor="#FAF0BC"
            title="Новый тренд в интерьере кухни-гостиной"
            chapter="Тенденции"
          />
          <InspirationArticle
            url="/inspiration/articles/d3-i-olimpik-park-v-minske/"
            backgroundColor="#B1C8DD"
            title="5 дизайн-проектов интерьера квартир в ЖК D3 и Олимпик Парк"
            chapter="Дизайн интерьера"
          />
          <InspirationArticle
            url="/inspiration/articles/zhk-mayak-minska/"
            backgroundColor="#FFD7C8"
            title="Дизайн интерьера квартир в ЖК “Маяк Минска”"
            chapter="Дизайн интерьера"
          />
          <InspirationArticle
            url="/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/"
            backgroundColor="#FAF0BC"
            title="Дизайн интерьера квартир в Новой Боровой, Пирсе и Зеленой Гавани"
            chapter="Дизайн интерьера"
          />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ZhkMyak