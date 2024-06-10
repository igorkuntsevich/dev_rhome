import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'



const CleverHouse = () => (
  <Layout>
    <Seo 
      title={"Все о системе «умный дом» - RHOME"} description={"Описали основые функции которые умеет современный умный дом"}
      location={"https://rhome.by/articles/clever-house"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Умный дом</h1>
          <StaticImage
            src="../../../images/inspiration/articles/clever-house/01_clever-house.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/clever-house/00_clever-house.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Вы купили квартиру, делаете ремонт или строите новый дом и в дополнение к этому приключению решили, что необходима автоматизация? В этой статье расскажем, на что стоит обратить внимание при выборе систем умного дома.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Бюджет</h2>
          <div>
          <p className={styles.articles__p}>Иногда стоимость системы «умный дом» отличается в разы. Но почти все предлагаемые системы стоят тех денег, которые за них просят. У каждой из компаний есть своя специализация. Кто-то лучше понимает в акустике и построении домашних кинотеатров, кто-то хорошо умеет автоматизировать инженерные системы (свет, вода, климат), у кого-то лучше квалификация в компьютерных сетях. Выбор только за вами.</p>
          </div>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Что можно заказать?</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Аудио мультирум — чтобы настраивать музыку во всем доме.</li>
              <li className={styles.articles__li}>Видео мультирум — для настройки мультимедиа.</li>
              <li className={styles.articles__li}>Управление освещением и шторами, жалюзи или ставнями.</li>
              <li className={styles.articles__li}>Управление климатом: отопление, вентиляция, кондиционирование, контроль влажности.</li>
              <li className={styles.articles__li}>Безопасность: видеонаблюдение, охранные функции.</li>
              <li className={styles.articles__li}>Компьютерная сеть и интернет-доступ.</li>
            </ul>
          </div>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Что учесть</h2>
          <div>
          <p className={styles.articles__p}>Рабочий проект системы делается до начала строительных работ, но после того, как готов дизайн-проект: чтобы точно знать, какой кабель куда пойдет, какая розетка где будет установлена и что к ней будет подключатся.</p>
          </div>
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Можно уменьшить число розеток, используя room controller и коммутационную матрицу HDBase-T, но такое решение, вероятнее всего, будет стоить дороже стоимости всей техники."
              />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Дом быстро не поумнеет</h2>
          <div>
          <p className={styles.articles__p}>Если система сложная, ее настройка — сложный и длительный процесс, занимающий более месяца. Можно несколько ускорить процесс, если заранее оплатить все оборудование и часть работы по настройке, а также дать возможность инсталлятору собрать модель будущей системы заказчика на своем тестовом стенде. Так можно произвести только 60—70% работы по настройке.</p>
          <p className={styles.articles__p}>В любом случае, чем раньше специалист сможет начать работать на реальном объекте, тем раньше система будет готова к первым тестам.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Тестовый режим</h2>
          <div>
          <p className={styles.articles__p}>Следующий этап — тестовая эксплуатация. Как бы детально ни был проработан проект, предусмотреть все особенности системы невозможно. Помочь может рендеринг интерьеров для разного времени, с разной интенсивностью и цветом световых групп. Но это предполагает плотную работу проектировщиков инсталлятора с архитектором и дизайнером интерьера.</p>
          <p className={styles.articles__p}>И помните: этапа тестовой эксплуатации не избежать. Первые несколько месяцев вам придется очень часто общаться с подрядчиками и тратить свое время на тестирование.</p>
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

export default CleverHouse