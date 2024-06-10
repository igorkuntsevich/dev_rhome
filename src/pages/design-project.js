import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/styles/design-project.module.scss"
import { BreadcrumbsAbout } from "../subitems/breadcrumbs/about"
import { DecisionZNDP } from "../subitems/decision/decisionZNDP"
import { ServicesCost } from "../subitems/services-cost"


import { FooterConsultationDmitry } from "../subitems/footer-consultation-dmitry"





const DesignProject = () => (
  <Layout>
    <Seo 
      title={"7 фактов: Почему стоит заказать дизайн-проект интерьера?"} description={"Мы расскажем, зачем нужен дизайн проект и почему вам станет с ним проще жить. Кратко и с картинками. Дизайн студия «Rhome»."}
      location={"https://rhome.by/design-project"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.zndp_intro}>
        <BreadcrumbsAbout />
        <h1 className={styles.zndp_intro_title}>Зачем нужен дизайн-проект?</h1>
      </div>
      <div className={styles.zndp_intro_text}>
        <p className={styles.zndp_intro_text_p}>Дизайн-проект&nbsp;&mdash; это концепция будущего интерьера с&nbsp;подробной технической информацией по&nbsp;его реализации, в&nbsp;соответствии с&nbsp;индивидуальными требованиями клиента.</p>
        <span className={styles.zndp_intro_text_span}>В&nbsp;результате вы&nbsp;получите пакет из&nbsp;18&nbsp;документов, который поможет строителям воплотить наши идеи в&nbsp;жизнь, максимально точно и&nbsp;без заминок.</span>
      </div>
    </div>
    <div className="wrapper">
      <div className={styles.zndp_term}>
        <div className={styles.zndp_term_head}>
          <h2 className={styles.zndp_term_title}>Этапы работы над дизайн-проектом</h2>
        </div>
        <div className={styles.zndp_term_body}>
          <div className={styles.zndp_term_items}>
            <div className={styles.zndp_term_item}>
              <h3 className={styles.zndp_term_item_title}>1. Сбор информации</h3>
              <p className={styles.zndp_term_item_p}>Делаем замер и&nbsp;фотосессию проекта, выясняем ваши предпочтения, разрабатываем планировочные решения, знакомим с&nbsp;отделочными материалами и&nbsp;их&nbsp;особенностями.</p>
            </div>
            <div className={styles.zndp_term_item}>
              <h3 className={styles.zndp_term_item_title}>2. Визуализация</h3>
              <p className={styles.zndp_term_item_p}>Подбираем идеи в&nbsp;интерьере и&nbsp;разрабатываем реалистичную 3d-визуализацию дизайн-проекта. Несколько ракурсов каждого помещения.</p>
            </div>
            <div className={styles.zndp_term_item}>
              <h3 className={styles.zndp_term_item_title}>3. Строительные чертежи и&nbsp;коммерческое предложение</h3>
              <p className={styles.zndp_term_item_p}>Готовим чертежи для строителей и&nbsp;коммерческие предложения от&nbsp;партнеров, калькулируем итоговый бюджет каждого этапа ремонтных работ.</p>
            </div>
            <Link to="/" className={styles.zndp_term_link}>Пример документации pdf</Link>
          </div>
        </div>
      </div>
      <div className={styles.zndp_ideas}>
        <div className={styles.zndp_ideas_left}>
          <h2 className={styles.zndp_ideas_title}>Всегда новые идеи</h2>
          <div>
            <p className={styles.zndp_ideas_text_p}>Наши дизайнеры ежегодно посещают международные выставки: Salone del mobile в&nbsp;Италии, и&nbsp;другие мероприятия в&nbsp;Европе и&nbsp;СНГ. Проходят обучение на&nbsp;зарубежных фабриках Hansgrohe в&nbsp;Германии, Masiero в&nbsp;Италии и&nbsp;внедряют новейшие идеи и&nbsp;разработки в&nbsp;проекты.</p>
            <p className={styles.zndp_ideas_text_p}>Накопленный за&nbsp;10&nbsp;лет опыт работы позволяет проектировать как современные интерьеры, так и&nbsp;бессмертную классику. Мы&nbsp;подскажем лучшие решения и&nbsp;поделимся бесценным опытом реализации проектов.</p>
          </div>
        </div>
        <StaticImage
          src="../images/design-project/zndp_ideas.jpg"
          loading="eager"
          alt=""
          className={styles.zndp_ideas_img}
        />
      </div>
      <div className={styles.zndp_style}>
        <div className={styles.zndp_style_top}>
          <h2 className={styles.zndp_style_title}>Стильно и удобно</h2>
          <div className={styles.zndp_style_text}>
            <p className={styles.zndp_style_text_p}>Интерьер может быть современным, классическим, обладать каким-то посылом или подчеркивать статус владельца, но&nbsp;при этом он&nbsp;всегда должен быть удобным. Мы&nbsp;разработаем планировку и&nbsp;функционал исходя из&nbsp;ваших конкретных потребностей и&nbsp;привычек.</p>
            <p className={styles.zndp_style_text_p}>Стильный и&nbsp;комфортный интерьер&nbsp;&mdash; это&nbsp;то, что отличает нашу работу от&nbsp;бюджетных решений, которые обычно основываются только на&nbsp;визуальной составляющей, не&nbsp;задумываясь, что там будут жить настоящие люди.</p>
          </div>
        </div>
        <div className={styles.zndp_style_gallery}>
          <div className={styles.zndp_style_gallery_item}>
            <div className={styles.zndp_style_gallery_item_body}>
              <StaticImage
                src="../images/design-project/01_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Создавая интерьер для дома с&nbsp;историей, мы&nbsp;стараемся интегрировать оригинальные элементы декора.</p>
            </div>
            <div className={styles.zndp_style_gallery_item_body}>
              <StaticImage
                src="../images/design-project/02_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Зонировать пространство можно за&nbsp;счет уровней потолка.</p>
            </div>
            <div className={styles.zndp_style_gallery_item_body + " " + styles.zndp_style_gallery_item_body_hidden}>
              <StaticImage
                src="../images/design-project/05_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Неоклассика&nbsp;&mdash; стиль для тех, кто любит сочетание креатива и&nbsp;элегантности.</p>
            </div>
          </div>
          <div className={styles.zndp_style_gallery_item + " " + styles.zndp_style_gallery_item_hidden}>
            <div className={styles.zndp_style_gallery_item_body}>
              <StaticImage
                src="../images/design-project/05_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Неоклассика&nbsp;&mdash; стиль для тех, кто любит сочетание креатива и&nbsp;элегантности.</p>
            </div>
            <div className={styles.zndp_style_gallery_item_body}>
              <StaticImage
                src="../images/design-project/04_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Нестандартный материал для кухонной столешницы и&nbsp;стола-острова&nbsp;&mdash; архитектурный бетон.</p>
            </div>
          </div>
          <div className={styles.zndp_style_gallery_item}>
            <div className={styles.zndp_style_gallery_item_body}>
              <StaticImage
                src="../images/design-project/03_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Винный шкаф можно встроить в&nbsp;стол-остров. Выглядит атмосферно и&nbsp;удобно пользоваться.</p>
            </div>
            <div className={styles.zndp_style_gallery_item_body + " " + styles.zndp_style_gallery_item_body_hidden}>
              <StaticImage
                src="../images/design-project/04_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Нестандартный материал для кухонной столешницы и&nbsp;стола-острова&nbsp;&mdash; архитектурный бетон.</p>
            </div>
            <div className={styles.zndp_style_gallery_item_body}>
              <StaticImage
                src="../images/design-project/06_zndp_style.jpg"
                alt=""
              />
              <p className={styles.zndp_style_gallery_item_p}>Главная задача при создании объединенного пространства&nbsp;&mdash; убедиться, что все элементы смотрятся как единое целое.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="line"></div>
      <div className={styles.zndp__lefttitle_righttext}>
        <h2 className={styles.zndp__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Экономия не&nbsp;только времени, но&nbsp;и&nbsp;денег</h2>
        <div>
          <p className={styles.zndp__lefttitle_righttext__text_span}>Дизайн-проект интерьера&nbsp;&mdash; это чёткий план действий, который поможет сэкономить много времени на&nbsp;закупке материалов, мебели, элементов декора, а&nbsp;так&nbsp;же на&nbsp;всех вопросах, связанных со&nbsp;строительством. Он&nbsp;убережёт Вас от&nbsp;ненужных трат по&nbsp;ремонту, сохранит нервы и&nbsp;хорошее настроение.</p>
          <p className={styles.zndp__lefttitle_righttext__text_span}>Команда RHome создаёт профессиональные чертежи и&nbsp;ведомости, которые помогают рассчитать точное количество плитки и&nbsp;обоев, определить конфигурацию и&nbsp;габариты встроенной мебели и&nbsp;кухни. Вы&nbsp;без труда сможете подсчитать бюджет ремонтно-строительных работ, спланировать и&nbsp;оптимизировать расходы.</p>
        </div>
      </div>
      <DecisionZNDP />
      <div className="line"></div>
      <div className={styles.zndp__lefttitle_righttext}>
        <h2 className={styles.zndp__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Результат до&nbsp;начала ремонта</h2>
        <div>
          <p className={styles.zndp__lefttitle_righttext__text_span}>Если вы&nbsp;заказываете дизайн-проект и&nbsp;строительные работы, т.&nbsp;е. ремонт квартиры с&nbsp;дизайном интерьера под ключ, то&nbsp;конечный результат будет на&nbsp;100% совпадать с&nbsp;задуманным на&nbsp;эскизах и&nbsp;визуализации. Трёхмерная визуализация позволяет &laquo;примерить&raquo; на&nbsp;помещение выбранные отделочные материалы, посмотреть на&nbsp;сочетание цветов, оценить расстановку мебели.</p>
          <p className={styles.zndp__lefttitle_righttext__text_span}>На&nbsp;основании замеров дизайнеры Rhome создают несколько вариантов планировки с&nbsp;размещением мебели и&nbsp;освещения, кухонного оборудования и&nbsp;сантехники. В&nbsp;результате, дизайн-проект максимально соответствует вашим ожиданиям.</p>
        </div>
      </div>
      <div className="line"></div>
      <div className={styles.zndp__lefttitle_righttext}>
        <h2 className={styles.zndp__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Официальный договор гарантирует результат</h2>
        <div>
          <p className={styles.zndp__lefttitle_righttext__text_span}>Мы&nbsp;работаем по&nbsp;договору и&nbsp;строго соблюдаем его условия. У&nbsp;нас четкий график производственных работ и&nbsp;точно подсчитанные сметы, без сюрпризов. Если вы&nbsp;заказываете у&nbsp;нас дизайн-проект и&nbsp;ремонт под ключ, то&nbsp;конечный результат будет на&nbsp;100% совпадать с&nbsp;3д-визуализацией.</p>
        </div>
      </div>
      <ServicesCost
        title="Сколько стоит дизайн-проект?"
      />
      <div className={styles.zndp__lefttitle_righttext}>
        <h2 className={styles.zndp__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Чтобы довести ремонт до конца, нужно:</h2>
        <ul>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Сделать проект в&nbsp;рамках конкретного бюджета.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Разработать точные планы и&nbsp;чертежи.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Подобрать необходимые материалы.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Рассчитать и&nbsp;распланировать бюджет.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Нанять квалифицированных строителей.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Закупить все строительные материалы.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Провести надзор за&nbsp;реализацией проекта (осуществить тех. поддержку).</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Согласовать проект с&nbsp;БТИ (если потребуется).</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Закупить мебель, технику и&nbsp;элементы интерьера.</li>
          <li className={styles.zndp__lefttitle_righttext__text_li}>Запустить кота и&nbsp;выпить шампанского.</li>
        </ul>
      </div>
      <div className="line"></div>
      <div className={styles.zndp__lefttitle_righttext}>
        <h2 className={styles.zndp__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>У нас нет одинаковых интерьеров</h2>
        <div>
          <p className={styles.zndp__lefttitle_righttext__text_span}>При создании наших интерьеров мы&nbsp;всегда закладываем в&nbsp;них определенную фишку. Где-то она сразу бросается в&nbsp;глаза, а&nbsp;где-то она видна только для своих хозяев.</p>
          <p className={styles.zndp__lefttitle_righttext__text_span}>Работая над проектом, мы&nbsp;учитываем пожелания клиента, и&nbsp;если у&nbsp;него есть смелая и&nbsp;реализуемая идея, мы&nbsp;всегда стараемся внедрить ее&nbsp;в&nbsp;проект.</p>
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default DesignProject