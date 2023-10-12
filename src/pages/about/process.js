import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsAbout } from "../../subitems/breadcrumbs/about"

import video from "../../video/how_we_work.mp4"
import videoMob from "../../video/how_we_work_mob.mp4"
import { ProjectConsultationSergey } from '../../subitems/project/consultation/project-consultation-sergey'
import { ProjectConsultationAlexey } from '../../subitems/project/consultation/project-consultation-alexey'

import { FooterConsultationDmitry } from "../../subitems/footer-consultation-dmitry"
import * as styles from "../../components/styles/about/process.module.scss"


const About = () => (
  <Layout>
    <Seo 
      title={""} description={""}
      location={"https://rhome.by/about/process"}
      image={""}
    />
    <div className="wrapper">
      <div className={styles.process}>
        <div className={styles.process_intro}>
          <div>
            <BreadcrumbsAbout />
            <h1 className={styles.process_intro_title}>Этапы работы над дизайн-проектом</h1>
          </div>
          <div>
            <video className={styles.process_intro_video_desk} width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
              <source src={video} type="video/mp4"/>
            </video>
            <video className={styles.process_intro_video_mob} width="100%" height="100%" muted={true} playsInline={true} autoPlay={true} loop={true} type="video/mp4">
              <source src={videoMob} type="video/mp4"/>
            </video>
          </div>
        </div>
        <div className={styles.process_intro_text}>
          <p className={styles.process_intro_text_p}>Создание дизайн-проекта включает в&nbsp;себя 7&nbsp;этапов. Мы&nbsp;хотим подробно рассказать о&nbsp;каждом из&nbsp;них, чтобы вы&nbsp;могли заранее узнать, что стоит за&nbsp;созданием интерьера.</p>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Шаг&nbsp;1. Составляем техзадание и&nbsp;узнаем о&nbsp;предпочтениях.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>Техзадание&nbsp;&mdash; отправная точка в&nbsp;разработке дизайн-проекта. На&nbsp;этом этапе рождается концепция будущего интерьера. Задача этого этапа&nbsp;&mdash; познакомиться с&nbsp;заказчиком: узнать как можно больше о&nbsp;вкусах, интересах, предпочтениях. Мы&nbsp;собираем эту информацию в&nbsp;процессе личной встречи у&nbsp;нас в&nbsp;студии. Важно убедиться, что ничего не&nbsp;упущено, поэтому мы&nbsp;просим клиентов заполнить анкету, куда входят вопросы о&nbsp;составе семьи, сценариях жизни в&nbsp;доме или квартире и&nbsp;обязательных пожеланиях к&nbsp;интерьеру.</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_1.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__text}>
          <p className={styles.process__text_p}>Визуальная информация тоже важна, поэтому мы&nbsp;просим клиентов показать примеры интерьеров, которые им&nbsp;по&nbsp;душе. Это могут быть вырезки из&nbsp;журналов, фото или картинки из&nbsp;интернета. Если таких картинок нет, мы&nbsp;предложим вам нашу подборку интерьеров в&nbsp;разных стилистических решениях и&nbsp;поможем определиться с&nbsp;выбором при необходимости.</p>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Шаг&nbsp;2. Делаем замеры.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>Прежде чем начать, нужно ознакомиться с&nbsp;архитектурными и&nbsp;стилистическими особенностями помещения и&nbsp;местности. Поэтому после обсуждения с&nbsp;заказчиком, мы&nbsp;выезжаем на&nbsp;объект.</p>
              <p className={styles.process__lefttitle_righttext__text_span}>Это важный момент для создания планировочного решения и&nbsp;выбора цветовой гаммы. Дизайнеру нужно понимать, где и&nbsp;когда солнце освещает помещения, и&nbsp;как это можно использовать в&nbsp;делении пространства на&nbsp;зоны.</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_2.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__text}>
          <p className={styles.process__text_p}>Измеряем стены и&nbsp;несущие конструкции, высоту потолка, отмечаем привязку коммуникаций. На&nbsp;основе этих данных создается план обмера. Благодаря точным измерениям, мы&nbsp;рассчитываем объем необходимых материалов и&nbsp;избегаем лишних расходов.</p>
        </div>
        <div className={styles.process__numbers_block}>
          <div className={styles.process__numbers_block_left}>
            <p className={styles.process__numbers_block_left_p}>В&nbsp;среднем замер занимает 1-2 часа в&nbsp;зависимости от&nbsp;площади объекта.</p>
          </div>
          <div className={styles.process__numbers_block_right}>
            <p className={styles.process__numbers_block_right_p}>примерно 1-2 часа</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Шаг 3. Разрабатываем планировочное решение.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>Создание планировки&nbsp;&mdash; это, возможно, самый важный этап. К&nbsp;ее&nbsp;разработке мы&nbsp;подходим максимально внимательно: учитываем все пожелания заказчика, а&nbsp;также нюансы системы инженерных коммуникаций (вентиляция, кондиционирование, отопительное оборудование и&nbsp;т.д.).</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_3.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__bigmargin}>
          <ProjectConsultationSergey
            text="Разрабатывая планировочное решение, как правило, мы&nbsp;предлагаем 2-3&nbsp;варианта, но&nbsp;при необходимости сделаем столько, сколько потребуется, понимая всю важность этого этапа. Для нас главное, чтобы у&nbsp;заказчика была возможность выбрать идеально подходящее решение."
          />
        </div>
        <div className={styles.process__numbers_block}>
          <div className={styles.process__numbers_block_left}>
            <p className={styles.process__numbers_block_left_p}>После того как вы&nbsp;остановились на&nbsp;одном из&nbsp;предложенных вариантов, планировка проходит юридическую проверку на&nbsp;предмет согласования. Результат данного этапа&nbsp;&mdash; планировочное решение объекта. Срок&nbsp;реализации &mdash; 3-4 рабочих дня.</p>
          </div>
          <div className={styles.process__numbers_block_right}>
            <p className={styles.process__numbers_block_right_p}>от&nbsp;3&nbsp;до <br />4 рабочих дней</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Шаг&nbsp;4. Создаем концепт-проект и&nbsp;подбираем материалы.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>На&nbsp;этом этапе мы&nbsp;получили всю необходимую информацию. Время переходить непосредственно к&nbsp;разработке детального концепт-проекта.</p>
              <p className={styles.process__lefttitle_righttext__text_span}>Концепт-проект&nbsp;&mdash; это планировочное решение с&nbsp;разделением объекта по&nbsp;зонам, расстановкой мебели и&nbsp;оборудования, которое учитывает основные геометрические характеристики применяемого оборудования, конструкций и&nbsp;элементов интерьера.</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_4.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__text}>
          <p className={styles.process__text_p}>Концепт-проект разрабатывается максимально эргономично с&nbsp;учетом строительных требований и&nbsp;норм белорусского законодательства и&nbsp;отражает пожелания заказчика. Согласованный концепт-проект&nbsp;&mdash; это основание для дальнейшего проектирования и&nbsp;работ по&nbsp;проекту.</p>
          <p className={styles.process__text_p}>Затем дизайнер, основываясь на&nbsp;анкете и&nbsp;информации собранной во&nbsp;время подготовительных работ, подбирает материалы отделки, предметы мебели и&nbsp;декора. При необходимости вместе с&nbsp;заказчиком мы&nbsp;выезжаем в&nbsp;салоны, чтобы своими глазами увидеть материалы, которые будут использованы при дальнейшей разработке 3D-визуализации.</p>
        </div>
        <div className={styles.process__numbers_block}>
          <div className={styles.process__numbers_block_left}>
            <p className={styles.process__numbers_block_left_p}>Результат данного этапа&nbsp;&mdash; концепт-проект. Срок реализации&nbsp;&mdash; 3-5 рабочих дней.</p>
          </div>
          <div className={styles.process__numbers_block_right}>
            <p className={styles.process__numbers_block_right_p}>от&nbsp;3&nbsp;до <br />5 рабочих дней</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Шаг&nbsp;5. Создаем 3D-визуализацию.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>На&nbsp;этом этапе работы разрабатывается 3D-модель дизайн-проекта&nbsp;&mdash; фотореалистичные изображения будущего интерьера, выполненные в&nbsp;программе 3D&nbsp;MAX. Визуализации почти неотличимы от&nbsp;фотографий интерьера. На&nbsp;них можно увидеть, как будут смотреться цвета и&nbsp;фактуры стен, пола и&nbsp;потолка, текстиль, мебель и&nbsp;аксессуары, даже как будет падать свет из&nbsp;окон и&nbsp;от&nbsp;светильников.</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_5.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__bigmargin}>
          <ProjectConsultationAlexey
            text="Мы&nbsp;не&nbsp;рекомендуем начинать ремонт без визуализации, даже если вы&nbsp;уверены в&nbsp;своих силах. На&nbsp;3D-модели вы&nbsp;сможете обратить внимание на&nbsp;самые мелкие детали, о&nbsp;которых наверняка даже не&nbsp;задумывались. Например, убедиться, что корпуса мебели сочетаются с&nbsp;фасадами или насколько подходит по&nbsp;стилю выбранная фурнитура."
          />
        </div>
        <div className={styles.process__text}>
          <p className={styles.process__text_p}>3D-визуализация дает возможность увидеть именно тот интерьер, который вы&nbsp;получите в&nbsp;итоге!</p>
          <p className={styles.process__text_p}>Все, что вы&nbsp;увидите на&nbsp;визуализации, существует в&nbsp;реальности. Мы&nbsp;используем те&nbsp;материалы и&nbsp;предметы мебели, которые можно купить в&nbsp;нашем регионе, и&nbsp;предоставляем список всех позиций. Поэтому 3D-проект максимально приближен к&nbsp;действительности.</p>
        </div>
        <div className={styles.process__numbers_block}>
          <div className={styles.process__numbers_block_left}>
            <p className={styles.process__numbers_block_left_p}>Результат данного этапа&nbsp;&mdash; наглядная визуализация дизайна объекта. Срок реализации&nbsp;&mdash; 12-15 рабочих дней.</p>
          </div>
          <div className={styles.process__numbers_block_right}>
            <p className={styles.process__numbers_block_right_p}>от&nbsp;12&nbsp;до <br />15 рабочих дней</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Шаг&nbsp;6. Разрабатываем техническую документацию.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>Рабочие чертежи делаются на&nbsp;основе эскизных решений или 3D-визуализации при совместной работе инженера и&nbsp;дизайнера. Мы&nbsp;анализируем и&nbsp;предлагаем оптимальные решения, оставляя за&nbsp;вами право окончательного выбора.</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_7.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__text}>
          <p className={styles.process__text_p}>Дизайнер передает информацию по&nbsp;использованным предметам и&nbsp;материалам инженеру, который сводит в&nbsp;ведомость все необходимые артикулы и&nbsp;количества, а&nbsp;также отмечает на&nbsp;развёртках места монтажа или нанесения конкретных позиций.</p>
        </div>
        <div className={styles.process__bigmargin}>
          <ProjectConsultationSergey
            text="Мы&nbsp;сотрудничаем с&nbsp;большинством крупных салонов поставщиков и&nbsp;поможем подобрать вам качественные материалы, мебель и&nbsp;оборудование на&nbsp;самых выгодных условиях. Вы&nbsp;сами определяете бюджет, а&nbsp;мы, согласовывая все затраты, рассчитаем полную стоимость реализации проекта."
          />
        </div>
        <div className={styles.process__numbers_block}>
          <div className={styles.process__numbers_block_left}>
            <p className={styles.process__numbers_block_left_p}>Результат данного этапа&nbsp;&mdash; комплект технической документации. Срок реализации&nbsp;&mdash; 10-12 рабочих дней.</p>
          </div>
          <div className={styles.process__numbers_block_right}>
            <p className={styles.process__numbers_block_right_p}>от&nbsp;12&nbsp;до <br />15 рабочих дней</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>По&nbsp;окончании работ вы&nbsp;получите пакет документов&nbsp;&mdash; гид по&nbsp;вашему будущему интерьеру.</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <p className={styles.process__lefttitle_righttext__text_title}>Он&nbsp;включает в&nbsp;себя:</p>
            <ul>
              <li className={styles.process__lefttitle_righttext__text_li}>Несколько вариантов планировки</li>
              <li className={styles.process__lefttitle_righttext__text_li}>4-6 ракурсов 3D-визуализации каждой комнаты</li>
              <li className={styles.process__lefttitle_righttext__text_li}>25&nbsp;листов чертежей, подробно иллюстрирующих все технические моменты: от&nbsp;электрики до&nbsp;развёртки стен</li>
              <li className={styles.process__lefttitle_righttext__text_li}>Полный перечень материалов, которые понадобятся для ремонтных работ</li>
              <li className={styles.process__lefttitle_righttext__text_li}>Расчет бюджета проекта</li>
              <li className={styles.process__lefttitle_righttext__text_li}>Смету на&nbsp;ремонтно-отделочные работы</li>
            </ul>
          </div>
        </div>
        <div className={styles.process_dp}>
          <p className={styles.process_dp_p}>Сопровождаем проект на&nbsp;всех этапах строительства, осуществляем авторский надзор. Наша задача&nbsp;&mdash; сэкономить ваше время, нервы, деньги.</p>
        </div>
        <div className={styles.process_darkblock}>
          <div className={styles.process_darkblock_left}>
            <h3 className={styles.process_darkblock_title}>Теперь задача&nbsp;&mdash; сделать ремонт! Проводим ремонтно-строительные работы</h3>
            <p className={styles.process_darkblock_p}>Мы&nbsp;сопровождаем проект на&nbsp;всех этапах строительства и&nbsp;уже много лет работаем с&nbsp;проверенной командой строителей. А&nbsp;это значит, что вам не&nbsp;придется искать подрядчиков и&nbsp;поставщиков самостоятельно. У&nbsp;RHome есть все необходимые лицензии и&nbsp;сертификаты, чтобы заниматься ремонтно-строительными работами. Мы&nbsp;делаем смету и&nbsp;составляем график работ еще в&nbsp;самом начале&nbsp;&mdash; так вы&nbsp;можете видеть, что все процессы идут по&nbsp;плану и&nbsp;когда нужно оплачивать работы и&nbsp;материалы.</p>
          </div>
          <div className={styles.process_darkblock_right}>
            <StaticImage
              src="../../images/process/process_8.jpg"
              alt=""
              className={styles.process_darkblock_right_img}
            />
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_9.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__text}>
          <p className={styles.process__text_p}>После этого переходим к&nbsp;ремонтным работам. Обычно на&nbsp;них уходит от&nbsp;5&nbsp;до&nbsp;9&nbsp;месяцев в&nbsp;зависимости от&nbsp;метража квартиры. За&nbsp;этот срок делаются подготовительные работы, малярные работы и&nbsp;облицовка плиткой и&nbsp;финишная отделка.</p>
          <p className={styles.process__text_p}>Ваше включение в&nbsp;процесс может быть минимальным. Специалисты RHome сами занимаются вопросами поставки строительных и&nbsp;отделочных материалов. Кроме того, мы&nbsp;проверяем их&nbsp;качество и&nbsp;следим за&nbsp;добросовестным выполнением работ подрядчиками (установка окон и&nbsp;дверей, охранной сигнализации и&nbsp;т.д.)</p>
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Проверяем качество и&nbsp;соответствие результата дизайн-проекту</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>Каждая стадия строительства принимается аттестованным инженером. Его задача&nbsp;&mdash; осуществлять контроль качества, то&nbsp;есть проверять, чтобы все было выполнены в&nbsp;соответствии с&nbsp;технологическими нормами. Такой контроль позволяет убедится в&nbsp;отсутствии ошибок на&nbsp;каждом этапе работы. В&nbsp;итоге это экономит ваше время и&nbsp;помогает избежать переделок по&nbsp;завершении ремонта.</p>
              <p className={styles.process__lefttitle_righttext__text_span}>А&nbsp;чтобы убедиться, что все сделано не&nbsp;только качественно, но&nbsp;и&nbsp;полностью соответствует изначальной концепции, мы&nbsp;предлагаем услугу авторский надзор.Услуга гарантирует, что реализованный проект будет в&nbsp;точности соответствовать плану. Архитектор проекта берёт на&nbsp;себя ответственность за&nbsp;результат стройки и&nbsp;каждый этап процесса.</p>
            </div>
          </div>
        </div>
        <div className={styles.process__bigmargin}>
          <ProjectConsultationAlexey
            text="Очень сложно добиться от&nbsp;строителей точного воплощения дизайн-проекта, если архитектор не&nbsp;вовлечен в&nbsp;проект на&nbsp;этапе стройки. Авторский надзор дает возможность команде строителей консультироваться с&nbsp;архитектором по&nbsp;особенностям монтажа конструкций. А&nbsp;также дизайнер включен в&nbsp;работу с&nbsp;поставщиками и&nbsp;контролирует соответствие ремонтно-отделочных работ дизайн-проекту во&nbsp;время их&nbsp;выполнения. Авторский надзор&nbsp;&mdash; гарантия того, что все получится как на&nbsp;визуализации."
          />
        </div>
        <div className="line"></div>
        <div className={styles.process__lefttitle_righttext + " " + styles.process__lefttitle_righttext__bigmargin}>
          <h2 className={styles.process__lefttitle_righttext__title}>Последние штрихи</h2>
          <div className={styles.process__lefttitle_righttext__text}>
            <div>
              <p className={styles.process__lefttitle_righttext__text_span}>После того как все сделано, мы&nbsp;приглашаем клинеров, чтобы подготовить дом к&nbsp;вашему переезду. Осталось только сделать фото готового проекта и&nbsp;дом полностью готов для комфортной и&nbsp;красивой жизни.</p>
            </div>
          </div>
        </div>
        <StaticImage
          src="../../images/process/process_10.jpg"
          alt=""
          className={styles.process_img}
        />
        <div className={styles.process__numbers_block}>
          <div className={styles.process__numbers_block_left}>
            <p className={styles.process__numbers_block_left_p}>Весь процесс от&nbsp;первой встречи c&nbsp;дизайнером до&nbsp;переезда занимает от&nbsp;8&nbsp;до&nbsp;12&nbsp;месяцев.</p>
          </div>
          <div className={styles.process__numbers_block_right}>
            <p className={styles.process__numbers_block_right_p}>от&nbsp;8&nbsp;до <br />12 месяцев</p>
          </div>
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default About