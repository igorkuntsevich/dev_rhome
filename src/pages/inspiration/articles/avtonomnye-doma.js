import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const AvtonomnyeDoma = () => (
  <Layout>
    <Seo 
      title={"Лучшие автономные дома мира от архитекторов - RHOME"} description={"Собрали коллекцию автономных домов со всего света"}
      location={"https://rhome.by/articles/avtonomnye-doma"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Лучшие автономные дома мира</h1>
          <StaticImage
            src="../../../images/inspiration/articles/avtonomnye-doma/09_avtonomnye-doma.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/avtonomnye-doma/00_avtonomnye-doma.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Автономные дома уже давно пользуются популярностью в развитых странах. «Живые дома», как их еще называют, характеризуются тем, что не зависят от электроснабжения, водоснабжения, газовых магистралей и других коммуникаций. </p>
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Идея независимого жилья</h2>
          <div>
          <p className={styles.articles__p}>Разумеется, мы говорим о современном доме со всеми удобствами, а не об избушке без необходимых благ цивилизации в глуши. О доме, для нормального функционирования которого достаточно возобновляемых источников: энергии солнца, ветра, природных вод.</p>
            <p className={styles.articles__p}>Безусловно, у автономного дома есть свои плюсы и минусы, однако идея такого независимого жилья в современном мире становится все более и более актуальной из-за глобального истощения энергоресурсов на планете и естественного желания человека жить в гармонии с природой. Итак, смотрим на лучшие автономные дома мира и вдохновляемся!</p>
          </div>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Shipping Container House, Колорадо, США</h2>
          <div>
          <p className={styles.articles__p}>Дом построен среди дикой природы в штате Колорадо из двух грузовых контейнеров. На участке нет электроэнергии, поэтому при проектировании и строительстве были использованы так называемые «зеленые» технологии: солнечные батареи, пассивное охлаждение и печное отопление с использованием гранул. Внутри — стильный лофтовый интерьер площадью более 140 квадратных метров.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/01_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Ларвик, Норвегия</h2>
          <div>
          <p className={styles.articles__p}>Норвежская строительная компания Snøhetta совместно с центром исследования по созданию зданий с нулевым выбросом спроектировали и построили жилой дом, который не просто обеспечивает себя электроэнергией, а вырабатывает ее практически в три раза больше, чем требуется для функционирования здания. На большой крыше располагаются своеобразные «плантации», которые накапливают солнечную энергию и преобразуют ее в электричество. В доме также есть наружный бассейн, вода в котором нагревается за счет лишнего тепла. В ближайшее время авторы проекта планируют построить в Норвегии большое количество подобных зданий.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/02_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Soleta zeroEnergy, Румыния</h2>
          <div>
          <p className={styles.articles__p}>Этот энергоэффективный модульный дом, разработанный Фондом изобретений и зеленых технологий, на 97% создан из переработанных отходов. Он полностью экологичен и может функционировать за счет возобновляемых источников энергии, однако по желанию тут могут быть подключены все современные удобства, включая воду и электричество. Каждый блок дома построен на модульной основе, что означает наличие возможности расширения пространства при помощи добавления дополнительных модулей к существующей постройке. Такая конструкция позволяет использовать пространство максимально разумно.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/03_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Stamp House, Квинсленд, Австралия</h2>
          <div>
          <p className={styles.articles__p}>Пожалуй, самое «знаменитое» здание в нашем списке. Этот необычный дом построен на берегу живописного озера в северном Квинсленде. Шестиконечная конструкция из сборного монолитного бетона способна выдержать самые мощные циклоны, обрушивающиеся периодически на этот регион. Однако владельцы дома вовсе не переживают по поводу разгула стихий, так как здание энергетически самодостаточное и способно функционировать автономно: на крыше установлены солнечные батареи, а также оборудована мощная система сбора и очистки дождевой воды и другие прогрессивные эко-системы.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/04_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Fab Lab House, Испания</h2>
          <div>
          <p className={styles.articles__p}>Необычный проект Fab lab House был спроектирован архитекторами Каталонского института прогрессивной архитектуры специально для стран с жарким климатом. Крыша покрыта фотогальваническими панелями, которые аккумулируют энергию солнца и могут отдавать ее на различные внутренние нужды. Также применяется система накопления дождевой воды. Такая непривычная глазу округлая форма здания обусловлена желанием достичь максимального внутреннего объема при минимальной внешней поверхности, а конструкция дома на трех ногах-опорах предоставляет своим обитателям дополнительную площадь для отдыха на свежем воздухе в тени дома.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/05_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Ark Shelter, Бельгия</h2>
          <div>
          <p className={styles.articles__p}>Небольшой мобильный дом был разработан группой студентов-архитекторов из Гента с целью показать человечеству, что комфортно можно жить и в союзе с природой. Ark Shelter экологичен, не наносит вред окружающей среде и позволяет его владельцу почувствовать себя частью окружающего мира благодаря панорамному остеклению. Вся конструкция дома, внешняя и внутренняя отделка, а так же вся мебель, выполнены из натурального дерева. Возобновляемые ресурсы от солнечных батарей, ветрогенератора и сбора дождевой воды делают его полностью независимым, а для установки не требуется даже фундамент — достаточно нескольких опорных блоков.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/06_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>ZeroHouse, США</h2>
          <div>
          <p className={styles.articles__p}>Проект дизайнера Спекта Харпмана представляет собой, пожалуй, самый надежный из всех перечисленных выше автономных домов. ZeroHouse способен противостоять ветру до 90 км/ч и гарантирует полную безопасность даже при подъёме воды до 3 метров. Он сам генерирует себе необходимую энергию с помощью солнечных батарей и аккумуляторов: при полном их заряде дом может спокойно функционировать в течение недели вообще без света. Вода, стекающая по его поверхностям, запасается в цистерне, а органические отходы отправляются в компост, который можно использовать для удобрения почвы.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/07_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Плавающий дом DD16, Россия</h2>
          <div>
          <p className={styles.articles__p}>Архитекторы студии BIO-architects разработали прототип не просто модульного дома, а плавающего дома. Конструкция уже опробована на одном из подмосковных озер. DD16, такое название он получил, держится на воде благодаря понтонам, которые можно снимать во время транспортировки. Сами модули сделаны из ламинированной древесины, а фасады обшиты алюминиевыми панелями. Дом рассчитан на эксплуатацию в течение всего года благодаря автономным системам: электроэнергия вырабатывается с помощью фотоэлектрических панелей, а пресная вода, прошедшая специальную очистку, доставляется прямо из озера.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/avtonomnye-doma/08_avtonomnye-doma.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Cюжет из фильма про будущее</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Глядя на все эти удивительные жилища становится ясно, что автономный дом — это вовсе не избушка отшельника и не фантастический сюжет из фильма про будущее, а реальное, современное и высокотехнологичное решение для комфортной жизни без вреда природе. Архитекторы студии R-Home помогут воплотить мечту в реальность и спроектируют для Вас благоустроенный и экологичный дом с учетом всех самых передовых технологий.</p>
            </div>
          </div>
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

export default AvtonomnyeDoma