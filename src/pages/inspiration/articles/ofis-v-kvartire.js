import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const OfisVkvartire = () => (
  <Layout>
    <Seo 
      title={"Как организовать домашний офис в небольшой квартире - RHOME"} description={"Собрали полезные советы как организовать офис на удаленке"}
      location={"https://rhome.by/articles/ofis-v-kvartire"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Как организовать домашний офис в небольшой квартире</h1>
          <StaticImage
            src="../../../images/inspiration/articles/ofis-v-kvartire/06_ofis-v-kvartire.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/ofis-v-kvartire/00_ofis-v-kvartire.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>В настоящее время все больше людей предпочитают уютный рабочий уголок дома многолюдному, пусть и самому современному, офису. Конечно, в такой организации труда есть как плюсы, так и минусы. Работать дома комфортно, но в то же время там есть много факторов, которые могут отвлекать. Но если вы все же решились на такой шаг — вот парочка советов, как и где лучше всего организовать домашний офис.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ofis-v-kvartire/02_ofis-v-kvartire.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Многие психологи утверждают, что от того, насколько комфортно и практично обустроено рабочее место, зависит плодотворность вашей работы. Согласитесь, лежа в кровати с ноутбуком работать приятно, но крайне непродуктивно, так как сосредоточиться на 100% вряд ли получится. К сожалению, далеко не в каждой квартире есть достаточное количество свободных квадратных метров, чтобы выделить отдельную комнату под рабочий кабинет. Так что рассмотрим несколько идей, как органично вписать рабочее пространство в интерьер даже небольшой квартиры.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Решение № 1: офис на балконе</h2>
          <div>
          <p className={styles.articles__p}>Начнем с самого популярного места — лоджии. Многие недооценивают этот уголок в квартире и заваливают его всевозможным хламом. Но даже на самом маленьком утепленном балконе можно организовать мини-кабинет. Тут много света, он изолирован от всей остальной части квартиры и не отнимает у жилого пространства драгоценные квадратные метры.</p>
           
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ofis-v-kvartire/01_ofis-v-kvartire.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Решение № 2: офис на подоконнике</h2>
          <div>
          <p className={styles.articles__p}>Чтобы превратить подоконник в удобную рабочую зону, нужно всего лишь заменить стандартное полотно из ПВХ на широкую и прочную столешницу. Минимальная глубина в данном случае — 50 см (именно столько места нужно для ноутбука и настольной лампы). Наиболее выгодно такой вариант смотрится в скандинавском интерьере.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ofis-v-kvartire/03_ofis-v-kvartire.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Решение № 3: офис в углу</h2>
          <div>
          <p className={styles.articles__p}>Такой вариант поможет использовать даже самый укромный уголок в квартире в качестве компактного рабочего места. Тут можно поставить стул и небольшой угловой столик или же функциональный стол-трансформер, который крепится на стену. Он занимает минимум места и визуально не перегружает пространство. Если вы работаете не каждый день и рабочее место вам нужно не постоянно, можно воспользоваться моделью с откидной крышкой.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ofis-v-kvartire/04_ofis-v-kvartire.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Решение № 4: офис в свободной нише/шкафу</h2>
          <div>
          <p className={styles.articles__p}>Практически в любой планировке встречается ниша, которую сложно задействовать в интерьере. Такая ниша может быть реорганизована в домашний офис достаточно простым набором предметов мебели: несколько навесных полок, столешница, стул, лампа. Также это может быть конструкция в виде шкафа. Одно из преимуществ такого варианта — возможность скрыть рабочее место просто закрыв дверцы.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ofis-v-kvartire/05_ofis-v-kvartire.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles_video + " " + styles.articles__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/TSokseLrd78?si=4QEURE8o5OddsQ-P" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Советы дизайнера:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>При планировании места для домашнего офиса, обязательно позаботьтесь о том, чтобы оно было в достаточной мере освещено. Если нет возможности расположить стол около окна, обязательно предусмотрите настольную лампу или торшер.</li>
              <li className={styles.articles__li}>Обратите особое внимание на подбор мебели. Рабочий стул должен быть максимально удобным, а стол — вмещать все необходимое для работы. При выборе стола учитывайте, чтобы он подходил вам по росту. И, конечно, не экономьте на офисном стуле — боли в спине вряд ли поспособствуют продуктивной работе.</li>
              <li className={styles.articles__li}>Если в интерьере всей квартиры имеется определенная стилистика, нарушать ее не стоит. Выделить рабочее место можно деталями, характерными элементами и цветом, который будет отделять рабочую площадь, но в то же время существовать в гармонии с общим пространством.</li>
              <li className={styles.articles__li}>Важно, чтобы те вещи, которые вы используете для работы, всегда были под рукой, и их не приходилось долго искать. Для этого пускайте в ход все возможное пространство стены, стеллажей и шкафов.</li>
              <li className={styles.articles__li}>Украсьте рабочую зону по вашему личному вкусу и увлечениям. Работа станет более продуктивной, если вас будут окружать предметы, которые вдохновляют.</li>
            </ul>
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

export default OfisVkvartire