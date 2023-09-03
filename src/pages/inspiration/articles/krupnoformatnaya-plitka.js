import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

import * as styles from "../../../components/styles/about/inspiration.module.scss"




const KrupnoformatnayaPlitka = () => (
  <Layout>
    <Seo 
      title={"Крупноформатная плитка в интерьере - RHOME"} description={"Рассмотрим соверменный тренд в дизайне интерьера"}
      location={"https://rhome.by/articles/2-1varianta"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Крупноформатная плитка в интерьере</h1>
          <StaticImage
            src="../../../images/inspiration/articles/krupnoformatnaya-plitka/07_krupnoformatnaya-plitka.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/krupnoformatnaya-plitka/00_krupnoformatnaya-plitka.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Показываем некоторые проекты RHome с использованием плитки в крупном размере – например, 120х260 см. Архитектор студии Иван Лобачевский рассказывает, почему этот и подобные форматы сейчас в фаворе.
</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Преимущества крупноформатной плитки</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Дело в том, что уже несколько лет мы наблюдаем обостренный запрос на натуральные текстуры – в основном, дерево и камень. Натуральный камень – это очень дорого, но есть выход – керамогранит с печатью, повторяющей срез каменной породы. Крупный размер плитки здесь необходимость: нельзя сделать имитацию текстуры натурального камня с помощью плиток 15х15 см – это будет больше похоже на мозаику.</li>
              <li className={styles.articles__li}>Монтировать крупный формат проще и быстрее, чем обычную плитку: меньше моментов, где плиточник может допустить ошибку.</li>
              <li className={styles.articles__li}>Кроме того, в Беларуси крупноформатная плитка все еще не сильно распространена. Это дает шанс создать интерьер, который смотрится интересно и свежо сейчас, и будет оставаться таковым долго.</li>
            </ul>
          </div>
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Так крупноформатная плитка смотрится в ванных комнатах</h2>

        </div>
        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/krupnoformatnaya-plitka/02_krupnoformatnaya-plitka.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/krupnoformatnaya-plitka/03_krupnoformatnaya-plitka.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>
            <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/krupnoformatnaya-plitka/05_krupnoformatnaya-plitka.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/krupnoformatnaya-plitka/06_krupnoformatnaya-plitka.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>А так ее можно использовать в гостиной или столовой</h2>
          <div>
            <p className={styles.articles__p}>Крупноформатная плитка сейчас набирает популярность по всей Европе. Более того, достаточно часто такой плиткой облицовывают не только санузлы, но и стены в жилых комнатах. Можно связывать популярность крупноформатной плитки с модой, но такие веяния, конечно, не приходят из ниоткуда.</p>
          </div>
        </div>

        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/krupnoformatnaya-plitka/01_krupnoformatnaya-plitka.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/krupnoformatnaya-plitka/04_krupnoformatnaya-plitka.jpg"
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

export default KrupnoformatnayaPlitka