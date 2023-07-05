import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Link } from "gatsby"
// import { StaticImage } from "gatsby-plugin-image"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';


import * as styles from "../../components/styles/about/about.module.scss"


const About = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/about"}
      image={""}
    />
    <div className="wrapper">
      {/* <StaticImage
        src="../images/example.png"
        loading="eager"
        width={64}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginBottom: `var(--space-3)` }}
      /> */}
      <div className={styles.about_intro}>
        <h1 className={styles.about_intro_title}>О студии</h1>
      </div>
      <div className={styles.about_intro_text + " " + styles.about_intro_index_text}>
        <p className={styles.about_intro_text_p}>RHome&nbsp;&mdash; это архитектурное проектирование, дизайн интерьера жилых и&nbsp;коммерческих объектов, дизайн ландшафта и&nbsp;реконструкция<br />объектов.</p>
        <span className={styles.about_intro_text_span}>Студия дизайна RHome основана в&nbsp;2008 году в&nbsp;Минске. Мы&nbsp;любим современный европейский дизайн и&nbsp;постоянно учимся, чтобы понимать тренды, узнавать о&nbsp;новых материалах, технологиях и&nbsp;объектах предметного дизайна.</span>
      </div>
      <div className={styles.about_intro_numbers}>
        <div className={styles.about_intro_number_item}>
          <span className={styles.about_intro_number_item_span}>14</span>
          <p className={styles.about_intro_number_item_p}>14 лет опыта</p>
        </div>
        <div className={styles.about_intro_number_item}>
          <span className={styles.about_intro_number_item_span}>40.</span>
          <p className={styles.about_intro_number_item_p}>40.000 м<sup>2</sup> дизайна</p>
        </div>
        <div className={styles.about_intro_number_item}>
          <span className={styles.about_intro_number_item_span}>250</span>
          <p className={styles.about_intro_number_item_p}>более 250 реализованных проектов</p>
        </div>
      </div>
      <div className="line"></div>
    </div>
    <div className="wrapper">
      <div className={styles.about_philosophy}>
        <h2 className={styles.about_philosophy_title}>Философия</h2>
        <div className={styles.about_philosophy_simplbar}>
          <SimpleBar forceVisible="y" autoHide={false}>
            <div className={styles.about_philosophy_items}>
              <div className={styles.about_philosophy_item}>
                <h3 className={styles.about_philosophy_item_title}>Улучшать жизнь людей</h3>
                <p className={styles.about_philosophy_item_p}>Нам нравится помогать людям менять их&nbsp;жизнь к&nbsp;лучшему. Каждое преображение пространства&nbsp;&mdash; это шаг к&nbsp;более красивому и&nbsp;удобному миру вокруг нас.</p>
              </div>
              <div className={styles.about_philosophy_item}>
                <h3 className={styles.about_philosophy_item_title}>Использовать надёжные технологии</h3>
                <p className={styles.about_philosophy_item_p}>Мы&nbsp;достаточно зрелые, чтобы предлагать только те&nbsp;технические решения в&nbsp;дизайне и&nbsp;строительстве, которые сами проверили и&nbsp;в&nbsp;эффективности которых убедились.</p>
              </div>
              <div className={styles.about_philosophy_item}>
                <h3 className={styles.about_philosophy_item_title}>Безопасность&nbsp;&mdash; во&nbsp;главу угла</h3>
                <p className={styles.about_philosophy_item_p}>Мы&nbsp;внимательно следим за&nbsp;безопасностью материалов, отслеживаем их&nbsp;происхождение до&nbsp;первой точки добычи сырья и&nbsp;работаем с&nbsp;теми производителями, которые бережно относятся к&nbsp;здоровью людей и&nbsp;к&nbsp;окружающей среде.</p>
              </div>
              <div className={styles.about_philosophy_item}>
                <h3 className={styles.about_philosophy_item_title}>Экспертиза полного цикла</h3>
                <p className={styles.about_philosophy_item_p}>Мы&nbsp;отвечаем за&nbsp;качество каждого этапа, поэтому все работы делаем in-house, от&nbsp;проектирования и&nbsp;отделочных работ до&nbsp;комплектации пространства предметами интерьера и&nbsp;объектами искусства.</p>
              </div>
            </div>
          </SimpleBar>
        </div>
      </div>
      <div className={styles.about_schedule}>
        <div className={styles.about_schedule_text}>
          <h2 className={styles.about_schedule_text_title}>Развитие и&nbsp;поиск вдохновения</h2>
          <p className={styles.about_schedule_text_p}>Предоставляем графики работ, оплат и&nbsp;поставок материалов. Графики нужны для того, чтобы отладить и&nbsp;сделать прозрачными все процессы. Вы&nbsp;заранее будете знать, когда и&nbsp;кем будут выполняться работы и&nbsp;когда нужно вносить оплату. Кроме того, раннее планирование позволяет избежать простоев и&nbsp;сократить время строительных работ.</p>
        </div>
        <div className={styles.about_schedule_links}>
          <Link to="/" className={styles.about_schedule_link}>Портфолио</Link>
          <Link to="/" className={styles.about_schedule_link}>Вдохновение</Link>
          <Link to="/" className={styles.about_schedule_link}>Отзывы</Link>
        </div>
      </div>
      <div className={styles.about_personal}>
        <p className={styles.about_personal_title}>Руководители студии</p>
        <div className={styles.about_personal_flex}>
          <div className={styles.about_personal_item + " " + styles.about_personal_item1}>
            <div className={styles.about_personal_image + " " + styles.about_personal_image_sergey}></div>
            <div className={styles.about_personal_text}>
              <p className={styles.about_personal_text_head_p}>Сергей Рассеко</p>
              <p className={styles.about_personal_text_p}>СЕО, руководитель студии, отвечает за&nbsp;стратегическое управление и&nbsp;работу с&nbsp;клиентами. Образование: Окончил БНТУ, по&nbsp;специальности инженер</p>
            </div>
            <div className={styles.about_personal_quote + " " + styles.about_personal_quote1}>
              <p className={styles.about_personal_quote_p}>Меня вдохновляет современная прибалтийская и&nbsp;скандинавская архитектура. Много энергии и&nbsp;вдохновения в&nbsp;северной природе, мне нравится природное разнообразие умеренного климата: скалы, море, леса, озёра. Люблю природу Беларуси.</p>
            </div>
          </div>
          <div className={styles.about_personal_item + " " + styles.about_personal_item2}>
            <div className={styles.about_personal_image + " " + styles.about_personal_image_dmitry}></div>
            <div className={styles.about_personal_text}>
              <p className={styles.about_personal_text_head_p}>Дмитрий Разумейчик</p>
              <p className={styles.about_personal_text_p}>Руководитель проектов, отвечает за&nbsp;проектную работу студии и&nbsp;команду. Образование: Окончил БНТУ, по&nbsp;специальности управление персоналом</p>
            </div>
            <div className={styles.about_personal_quote + " " + styles.about_personal_quote2}>
              <p className={styles.about_personal_quote_p}>Главная задача, которую архитектор должен решить для заказчика&nbsp;&mdash; помочь ему жить удобно. Мне доставляет удовольствие наблюдать за&nbsp;превращением 3D-проектов в&nbsp;настоящее пространство.</p>
              <p className={styles.about_personal_quote_p}>В&nbsp;архитектуре и&nbsp;дизайне мне нравится, когда что-то старинное, имеющее историю, сохраняют и&nbsp;сочетают с&nbsp;современными материалами, дают им&nbsp;новую жизнь, новое звучание.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default About