import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsAbout } from "../../subitems/breadcrumbs/about"

import video from "../../video/vacancy.mp4"
import videoMob from "../../video/vacancy_mob.mp4"

import * as styles from "../../components/styles/about/vacancy.module.scss"

import { VacancyItems } from "../../subitems/vacancy/vacancy"
import * as vacancyStyles from "../../subitems/vacancy/vacancy.module.scss"

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"


const Vacancy = () => (
  <Layout>
    <Seo 
      title={"Работа в дизайн-студии RHome"} description={"Вакансии, условия работы и виды сотрудничества"}
      location={"https://rhome.by/about/vacancy"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.vacancy_intro}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.vacancy_intro_title}>Наши вакансии</h1>
        </div>
        <div>
          <video className={styles.vacancy_intro_video_desk} width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
            <source src={video} type="video/mp4"/>
          </video>
          <video className={styles.vacancy_intro_video_mob} width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
            <source src={videoMob} type="video/mp4"/>
          </video>
        </div>
      </div>
      <div className={styles.vacancy_intro_text}>
        <p className={styles.vacancy_intro_text_p}>Мы&nbsp;рады сотрудничеству с&nbsp;профессионалами в&nbsp;сфере дизайна интерьеров, архитектуры и&nbsp;строительства.</p>
        <span className={styles.vacancy_intro_text_span}>Основные направления работы студии: архитектурное проектирование, дизайн интерьера жилых и&nbsp;коммерческих объектов, дизайн ландшафта и&nbsp;реконструкция объектов.</span>
      </div>
      <div className={styles.vacancy_better}>
        <div className={styles.vacancy_better_text}>
          <p className={styles.vacancy_better_text_p}>Наша работа помогать людям улучшать жизнь к&nbsp;лучшему. Мы&nbsp;любим современный европейский дизайн и&nbsp;постоянно учимся, чтобы понимать тренды, узнавать о&nbsp;новых материалах, технологиях и&nbsp;новинках предметного дизайна.</p>
          <p className={styles.vacancy_better_text_p}>В&nbsp;компании сейчас работает 15&nbsp;человек, а&nbsp;количество заказов растет, поэтому я&nbsp;ищу новых коллег в&nbsp;нашу творческую команду.</p>
        </div>
        <StaticImage
          src="../../images/vacancy/vacancy_better.jpg"
          loading="eager"
          alt=""
          className={styles.vacancy_better_img}
        />
      </div>
      <div className={styles.vacancy_formats}>
        <h2 className={styles.vacancy_formats_title}>В&nbsp;настоящее время, мы&nbsp;можем предложить формат работы:</h2>
        <div className={styles.vacancy_formats_items}>
          <div className={styles.vacancy_formats_item}>
            <div className={styles.vacancy_formats_item_text}>
              <h3 className={styles.vacancy_formats_item_title}>Оформление в&nbsp;штат компании, г. Минск</h3>
              <p className={styles.vacancy_formats_item_p}>Такая форма сотрудничества предполагает полную занятость, с&nbsp;возможностью гибридного формата работы. У&nbsp;нас красивый современный офис, обучение и&nbsp;поездки на&nbsp;европейские производства, выставки, семинары и&nbsp;мастер-классы. Мы&nbsp;вкладываемся в&nbsp;развитие наших дизайнеров, потому что знаем: они&nbsp;&mdash; наша главная сила.</p>
            </div>
            <StaticImage
              src="../../images/vacancy/vacancy_formats_1.jpg"
              loading="eager"
              alt=""
              className={styles.vacancy_formats_img}
            />
          </div>
          {/* <div className={styles.vacancy_formats_item}>
            <div className={styles.vacancy_formats_item_text}>
              <h3 className={styles.vacancy_formats_item_title}>Удаленная работа</h3>
              <p className={styles.vacancy_formats_item_p}>Мы&nbsp;работаем с&nbsp;ИП и&nbsp;самозанятыми по&nbsp;четко отлаженной системе взаимодействия. В&nbsp;таком формате мы&nbsp;работаем уже более 3х&nbsp;лет, поэтому вам будет легко встроиться. Сотрудничество может быть, как на&nbsp;постоянной основе, так и&nbsp;проектное.</p>
            </div>
            <StaticImage
              src="../../images/vacancy/vacancy_formats_2.jpg"
              loading="eager"
              alt=""
              className={styles.vacancy_formats_img}
            />
          </div> */}
        </div>
      </div>
      <div className={styles.vacancy_relax}>
        <h2 className={styles.vacancy_relax_title}>Мы&nbsp;вкладываемся в&nbsp;образование наших дизайнеров, ведь они наша главная сила</h2>
        <div className={styles.vacancy_relax_grid}>
          <div className={styles.vacancy_relax_flex}>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Посещение выставок и&nbsp;предприятий</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_1.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Обучающие семинары от&nbsp;партнеров студии</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_2.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Корпоративные мероприятия</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_3.jpg"
                loading="eager"
                alt=""
              />
            </div>
          </div>
          <div className={styles.vacancy_relax_flex}>
            <div className={styles.vacancy_relax_flex_item + " " + styles.vacancy_relax_flex_item_top}>
              <p className={styles.vacancy_relax_item_p}>Авторский надзор на&nbsp;строящихся объектах</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_4.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Посещение выставок и&nbsp;предприятий</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_5.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Обучающие семинары от&nbsp;партнеров студии</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_6.jpg"
                loading="eager"
                alt=""
              />
            </div>
          </div>
          <div className={styles.vacancy_relax_flex}>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Ежегодный сплав на&nbsp;байдарках</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_7.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Мастер классы от&nbsp;арт-директора</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_8.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item + " " + styles.vacancy_relax_flex_item_top}>
              <p className={styles.vacancy_relax_item_p}>Посещение выставок и&nbsp;предприятий</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_9.jpg"
                loading="eager"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.vacancy_relax_grid_mob}>
          <div className={styles.vacancy_relax_flex}>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Посещение выставок и&nbsp;предприятий</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_1.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Обучающие семинары от&nbsp;партнеров студии</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_2.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Мастер классы от&nbsp;арт-директора</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_8.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Обучающие семинары от&nbsp;партнеров студии</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_6.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Корпоративные мероприятия</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_3.jpg"
                loading="eager"
                alt=""
              />
            </div>
          </div>
          <div className={styles.vacancy_relax_flex}>
            <div className={styles.vacancy_relax_flex_item + " " + styles.vacancy_relax_flex_item_top}>
              <p className={styles.vacancy_relax_item_p}>Авторский надзор на&nbsp;строящихся объектах</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_4.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Ежегодный сплав на&nbsp;байдарках</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_7.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item}>
              <p className={styles.vacancy_relax_item_p}>Посещение выставок и&nbsp;предприятий</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_5.jpg"
                loading="eager"
                alt=""
              />
            </div>
            <div className={styles.vacancy_relax_flex_item + " " + styles.vacancy_relax_flex_item_top}>
              <p className={styles.vacancy_relax_item_p}>Посещение выставок и&nbsp;предприятий</p>
              <StaticImage
                src="../../images/vacancy/vacancy_relax_9.jpg"
                loading="eager"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className={styles.vacancy_relax_quote}>
          <p className={styles.vacancy_relax_quote_p}>Ожидаемые результаты:</p>
          <ul>
            <li className={styles.vacancy_relax_quote_li}>&mdash;&nbsp;Тот, кого мы&nbsp;ищем, будет работать в&nbsp;команде. Качественно и&nbsp;в&nbsp;срок выполнять свою часть работы, будь&nbsp;то проектирование интерьера, оформление рабочей документации или комплектация проекта.</li>
            <li className={styles.vacancy_relax_quote_li}>&mdash;&nbsp;Тот, кого мы&nbsp;ищем, будет разрабатывать дизайн интерьера для частных и&nbsp;общественных проектов, придумывать интересные и&nbsp;грамотные интерьерные и&nbsp;экстерьерные решения для заказчиков студии.</li>
          </ul>
        </div>
      </div>
      <div className="line"></div>
      <div className={vacancyStyles.vacancy_faq}>
        <h2 className={vacancyStyles.vacancy_faq_title}>Наши вакансии</h2>
        <div className={vacancyStyles.vacancy_faq_items}>
          <VacancyItems />
        </div>
      </div>
      
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default Vacancy