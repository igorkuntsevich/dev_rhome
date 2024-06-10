import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const MebeliIkea = () => (
  <Layout>
    <Seo 
      title={"Пять ключевых предметов мебели IKEA от дизайн студии Rhome"} description={"В связи с трагической новостью о смерти основателя популярной шведской мебельной компании IKEA Ингвара Кампрада, мы решили вспомнить пять наиболее важных предметов мебели"}
      location={"https://rhome.by/articles/mebeli-ikea"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Пять ключевых предметов мебели IKEA, не теряющих свою актуальность</h1>
          <StaticImage
            src="../../../images/inspiration/articles/mebeli-ikea/06_mebeli-ikea.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/mebeli-ikea/00_mebeli-ikea.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>В связи с трагической новостью о смерти основателя популярной шведской мебельной компании IKEA Ингвара Кампрада, мы решили вспомнить пять наиболее важных предметов мебели, которые он подарил миру.</p>
        </div>

        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Кампраду было всего 17 лет, когда он основал IKEA в 1943 году. Он возглавлял компанию на протяжении 70 лет, превратив ее в крупнейшую и наиболее влиятельную мебельную сеть в мире. Шведская компания стала популярна благодаря своей недорогой модульной мебели, которая продавалась в разобранном виде, благодаря чему покупателям стало гораздо удобнее забирать покупки из магазина.</p>
            </div>
          </div>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Журнальный стол Lövet, 1956</h2>
          <div>
          <p className={styles.articles__p}>Этот трехногий стол со столешницей в виде листа стал настоящей революцией в мире сборной мебели. Согласно легенде, идея упаковывать продукцию в плоские коробки, пришла Кампраду еще в 50-е годы, когда он увидел, как дизайнер компании Гиллис Лундгрен, транспортировавший мебель на фотосессию, просто открутил ножки у стола, чтобы тот смог поместиться в его машину.</p>
            <p className={styles.articles__p}>Этот журнальный стол был доработан и вновь включен в коллекцию IKEA в 2013 году под новым названием Lövbacken. Его столешница изготовлена ​​из шпона тополя, а отсоединяемые ножки из бука имеют роскошные золотые акценты.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mebeli-ikea/01_mebeli-ikea.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Система хранения Ivar, 1968</h2>
          <div>
          <p className={styles.articles__p}>Модульная система хранения Ivar — это стеллаж из массива сосны, доступный в различных формах и размерах. Его можно использовать как часть системы хранения, добавив такие элементы, как полки, шкафы или выдвижные ящики, или как отдельно стоящий предмет мебели. Вот уже более 50 лет мебель для хранения Ivar отлично справляется со своими обязанностями в любых помещениях — будь то спальня, гостиная, кладовая или ванная комната.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mebeli-ikea/02_mebeli-ikea.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кресло-качалка, 1976</h2>
          <div>
          <p className={styles.articles__p}>В 1970-х годах японский дизайнер Нобору Накамура приехал в Швецию, чтобы узнать больше о скандинавской мебели. Объединив свои знания и шведские стандарты, он разработал гибкий стул с консольным сиденьем и изогнутой спинкой. Более 40 лет назад он придумал особую U-образную конструкцию, ставшую образцом функциональности и удобства.</p>
          <p className={styles.articles__p}>Изначально стул выпускался со стальной рамой, однако позже каркас стали делать из прочного износостойкого и экологичного материала — древесины бука, а модель переименовали в Poäng. Сегодня это кресло поставляется в самых разнообразных вариантах обивки, а также доступно в версии кресла-качалки.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mebeli-ikea/03_mebeli-ikea.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Книжный шкаф Billy, 1978</h2>
          <div>
          <p className={styles.articles__p}>Книжный шкаф Billy является одним из самых продаваемых продуктов в истории IKEA, и его универсальность, безусловно, служит ключом к успеху. Еще один дизайн от Гиллиса Лундгрена, концепция которого была впервые прописана на салфетке более 40 лет назад. Сегодня более 60 миллионов шкафов этой серии проданы по всему миру, и, по статистике, IKEA делает еще 15 таких каждую минуту.</p>
          <p className={styles.articles__p}>Конструкция доступна в разных размерах, цветах и стилях, с регулируемыми полками и возможностью добавления стеклянных дверей.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mebeli-ikea/04_mebeli-ikea.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Диван Klippan, 1980</h2>
          <div>
          <p className={styles.articles__p}>Этот недорогой современный диван с низкой спинкой имеет строгую, лаконичную форму. Он очень удобен и благодаря своей простоте впишется практически в любой интерьер. Вся конструкция установлена на четыре стальные ножки, а обивку можно выбрать как из натуральной или искусственной кожи, так и на тканой основе.</p>
          <p className={styles.articles__p}>Кстати, эта модель оказалась настолько популярной, что IKEA недавно выпустила мини-версию этого дивана, предназначенную для домашних животных.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mebeli-ikea/05_mebeli-ikea.jpg"
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

export default MebeliIkea