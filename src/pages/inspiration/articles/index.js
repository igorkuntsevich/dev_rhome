import React from 'react'
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { BreadcrumbsAbout } from "../../../subitems/breadcrumbs/about"
import { InspirationArticlePage } from "../../../subitems/inspiration/inspiration-articles-page"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"


import * as styles from "../../../components/styles/about/inspiration.module.scss"

const Articles = () => (
  <Layout>
    <Seo 
      title={"Полезные статьи и лучшие интерьеры для вдохновения - RHOME"} description={"Посмотрите проекты, которыми мы вдохновляемся, почитайте полезные советы и идеи по обустройству дома"}
      location={"https://rhome.by/inspiration/"}
      image={"https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/01_vintovaya-lestnitsa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro + " " + styles.inspiration_intro_index}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.inspiration_intro_title}>Вдохновение</h1>
        </div>
        <div className={styles.inspiration_intro_list}>
          <Link to="/inspiration" className={styles.inspiration_intro_link}>Все сразу</Link>
          <Link to="/inspiration/articles" className={styles.inspiration_intro_link} activeClassName={styles.inspiration_intro_active_link}>Статьи
          <div className={styles.animline}></div>
          </Link>
          <Link to="/inspiration/photos" className={styles.inspiration_intro_link}>Фотографии</Link>
        </div>
      </div>
      <div className={styles.inspiration_content}>
        <InspirationArticlePage
          url="/inspiration/articles/trend-kuhni/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/trend-kuhni/00_trend-kuhni.jpg"
          title="Новый тренд в интерьере кухни-гостиной"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/gira/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/gira/00_gira.jpg"
          title="Что нового появилось на рынке розеток?"
          chapter="Технологии"
        />
        <InspirationArticlePage
          url="/inspiration/articles/d3-i-olimpik-park-v-minske/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/d3-i-olimpik-park-v-minske/00_d3-i-olimpik-park-v-minske.jpg"
          title="5 дизайн-проектов интерьера квартир в ЖК D3 и Олимпик Парк"
          chapter="Дизайн интерьера"
        />
        <InspirationArticlePage
          url="/inspiration/articles/zhk-mayak-minska/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/zhk-mayak-minska/00_zhk-mayak-minska.jpg"
          title="Дизайн интерьера квартир в ЖК “Маяк Минска”"
          chapter="Дизайн интерьера"
        />
        <InspirationArticlePage
          url="/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/00_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
          title="Дизайн интерьера квартир в Новой Боровой, Пирсе и Зеленой Гавани"
          chapter="Дизайн интерьера"
        />
        <InspirationArticlePage
          url="/inspiration/articles/2-1varianta/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/2-1varianta/00_2-1varianta.jpg"
          title="Два варианта одной ванны"
          chapter="Дизайн интерьера"
        />
        <InspirationArticlePage
          url="/inspiration/articles/shower-only/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/shower-only/00_shower-only.jpg"
          title="Душевая вместо ванной – кому подойдет?"
          chapter="Полезные советы"
        />
        <InspirationArticlePage
          url="/inspiration/articles/krupnoformatnaya-plitka/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/krupnoformatnaya-plitka/00_krupnoformatnaya-plitka.jpg"
          title="Крупноформатная плитка в интерьере"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/arhitektura-helsinki/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/arhitektura-helsinki/00_arhitektura-helsinki.jpg"
          title="Современная архитектура: 5 важных зданий Хельсинки"
          chapter="Интересное"
        />
        <InspirationArticlePage
          url="/inspiration/articles/oformleniya-detskoj/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/oformleniya-detskoj/00_oformleniya-detskoj.jpg"
          title="Идеи для оформления детской"
          chapter="Полезные советы"
        />
        <InspirationArticlePage
          url="/inspiration/articles/dizajn-odnokomnatnoj-kvartiry/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/dizajn-odnokomnatnoj-kvartiry/00_dizajn-odnokomnatnoj-kvartiry.jpg"
          title="Дизайн однокомнатной квартиры"
          chapter="Дизайн интерьера"
        />
        <InspirationArticlePage
          url="/inspiration/articles/ar-deko/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/ar-deko/00_ar-deko.jpg"
          title="Ар-деко"
          chapter="Стили в интерьере"
        />
        <InspirationArticlePage
          url="/inspiration/articles/komnatny-rastenija/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/komnatny-rastenija/00_komnatny-rastenija.jpg"
          title="Топ популярных комнатных растений, которые не требуют особого ухода"
          chapter="Интересное"
        />
        <InspirationArticlePage
          url="/inspiration/articles/trendy-2019/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/trendy-2019/00_trendy-2019.jpg"
          title="Тренды 2019: что будет модно в дизайне интерьера в этом году"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/minimalizm/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/minimalizm/00_minimalizm.jpg"
          title="Минимализм"
          chapter="Стили в интерьере"
        />
        <InspirationArticlePage
          url="/inspiration/articles/mezhkomnatnye-dveri/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/mezhkomnatnye-dveri/00_mezhkomnatnye-dveri.jpg"
          title="Какие межкомнатные двери выбрать, чтобы быть в тренде"
          chapter="Полезные советы"
        />
        <InspirationArticlePage
          url="/inspiration/articles/botanicheskij-print/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/botanicheskij-print/00_botanicheskij-print.jpg"
          title="Ботанический принт в интерьере: как использовать"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/modern/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/modern/00_modern.jpg"
          title="Модерн"
          chapter="Стили в интерьере"
        />
        <InspirationArticlePage
          url="/inspiration/articles/predmetni-dizajn/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/predmetni-dizajn/00_predmetni-dizajn.jpg"
          title="Самые узнаваемые шедевры предметного дизайна"
          chapter="Интересное"
        />
        <InspirationArticlePage
          url="/inspiration/articles/skandinavskij-stil/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/skandinavskij-stil/00_skandinavskij-stil.jpg"
          title="Скандинавский стиль"
          chapter="Стили в интерьере"
        />
        <InspirationArticlePage
          url="/inspiration/articles/zonirovanie/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/zonirovanie/00_zonirovanie.jpg"
          title="Зонирование пространства в интерьере: 5 самых популярных приемов"
          chapter="Полезные советы"
        />
        <InspirationArticlePage
          url="/inspiration/articles/modnye-tsveta/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/modnye-tsveta/00_modnye-tsveta.jpg"
          title="Модные цвета в интерьере: как их использовать"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/avtonomnye-doma/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/avtonomnye-doma/00_avtonomnye-doma.jpg"
          title="Лучшие автономные дома мира"
          chapter="Технологии"
        />
        <InspirationArticlePage
          url="/inspiration/articles/dorogoj-interer/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/dorogoj-interer/00_dorogoj-interer.jpg"
          title="Как создать «дорогой» интерьер: 5 советов от наших дизайнеров"
          chapter="Полезные советы"
        />
        <InspirationArticlePage
          url="/inspiration/articles/trendy-2018/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/trendy-2018/00_trendy-2018.jpg"
          title="Что актуально в дизайне интерьера в 2018"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/mebeli-ikea/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/mebeli-ikea/00_mebeli-ikea.jpg"
          title="Пять ключевых предметов мебели IKEA, не теряющих свою актуальность"
          chapter="Интересное"
        />
        <InspirationArticlePage
          url="/inspiration/articles/ofis-v-kvartire/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/ofis-v-kvartire/00_ofis-v-kvartire.jpg"
          title="Как организовать домашний офис в небольшой квартире"
          chapter="Полезные советы"
        />
        <InspirationArticlePage
          url="/inspiration/articles/clever-house/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/clever-house/00_clever-house.jpg"
          title="Все о системе «умный дом»"
          chapter="Технологии"
        />
        <InspirationArticlePage
          url="/inspiration/articles/tendentsii-oboev/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/tendentsii-oboev/00_tendentsii-oboev.jpg"
          title="Модные тенденции обоев 2018 года"
          chapter="Тенденции"
        />
        <InspirationArticlePage
          url="/inspiration/articles/about-ventilyatsiya/"
          backgroundImageUrl="https://rhome.by/images/inspiration/articles/about-ventilyatsiya/00_about-ventilyatsiya.jpg"
          title="Кому нужна вентиляция и как ее выбрать"
          chapter="Полезные советы"
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)
export default Articles