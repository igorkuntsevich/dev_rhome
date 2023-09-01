import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import * as projectStyles from "../../../components/styles/portfolio/portfolio.module.scss"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

import * as styles from "../../../components/styles/about/inspiration.module.scss"




const ArticleGira = () => (
  <Layout>
    <Seo 
      title={"Что нового появилось на рынке розеток - RHOME"} description={"Рассмотрим ассортимент немецкого бренда Gira в Беларуси"}
      location={"https://rhome.by/articles/gira"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Что нового появилось на&nbsp;рынке розеток?</h1>
          <StaticImage
            src="../../../images/inspiration/articles/gira/02_gira.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/gira/00_gira.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>
        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Работая над дизайн-проектом, мы&nbsp;создаем не&nbsp;только стиль интерьера и&nbsp;планировку&nbsp;&mdash; подробно прописывается и&nbsp;вся техническая часть, включая электрику. Специалисты дизайн-студии RHome плотно работают с&nbsp;немецким производителем электрики GIRA, чтобы всегда быть в&nbsp;курсе новых разработок. Мы&nbsp;решили не&nbsp;оставлять все за&nbsp;кулисами рабочего процесса и&nbsp;поговорить с&nbsp;Еленой, менеджером GIRA, в&nbsp;формате интервью, чтобы обсудить новинки и&nbsp;поделиться услышанным.</p>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Начнем, пожалуй, с&nbsp;розеток. Они в&nbsp;наших домах без малого уже столетие&nbsp;&mdash; вещь привычная и&nbsp;мало меняющаяся. Что нового появилось на&nbsp;рынке в&nbsp;последнее время, на&nbsp;что стоит обратить внимание?</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Прогресс не&nbsp;стоит на&nbsp;месте и&nbsp;постоянно появляется что-то новенькое! Например, сейчас популярны USB-розетки, предусмотренные для питания мобильных устройств без блока питания. Внутрь таких розеток сразу встроен трансформатор&nbsp;&mdash; он&nbsp;переводит ток с&nbsp;напряжением 220V&nbsp;на 5V&nbsp;и&nbsp;на&nbsp;пониженную силу тока. У&nbsp;Gira такие розетки с&nbsp;двумя выходами, с&nbsp;силой тока 3000&nbsp;mA. Это достаточно шустрая зарядочка! Существует несколько видов&nbsp;&mdash; стандартный разъем USB, а&nbsp;также одно из&nbsp;новшеств&nbsp;&mdash; USB и&nbsp;разъем Type-C. Такая комбинация позволяет заряжать устройства с&nbsp;разными разъемами одновременно.</p>
            <p className={styles.articles__p}>Многие не&nbsp;знают о&nbsp;розетках с&nbsp;дополнительным защитным эффектом, хотя существуют они довольно давно. В&nbsp;таких розетках предусмотрены защитные шторки&nbsp;&mdash; затворы в&nbsp;отверстиях для электровилки. В&nbsp;обычном состоянии они закрыты&nbsp;&mdash; открываются эти шторки только когда вилка вставляется в&nbsp;розетку. Этот механизм ограничивает попадание внутрь розетки посторонних предметов и&nbsp;мусора.</p>
          </div>
        </div>
        <div className={styles.articles__leftimg_righttext_with_bcg}>
          <StaticImage
            src="../../../images/inspiration/articles/gira/01_gira.jpg"
            loading="eager"
            alt=""
            className={styles.articles__leftimg_righttext__img}
          />
          <div className={styles.articles__leftimg_righttext__text} style={{"backgroundColor" : "#1D2129"}}>
            <p className={styles.articles__p}>Еще есть розетки с&nbsp;подсветкой. Их&nbsp;обычно устанавливают в&nbsp;проходных зонах, чтобы ночью проходя по&nbsp;коридору, не&nbsp;оказаться в&nbsp;полной темноте. Особенно актуальны они, опять&nbsp;же, если в&nbsp;доме есть дети. Встав ночью в&nbsp;туалет ребенок не&nbsp;испугается темноты. Розетка дает минимальное освещение с&nbsp;помощью LED. Свет неяркий, но&nbsp;его достаточно, чтобы сориентироваться.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;А&nbsp;еще&nbsp;же есть слаботочные розетки. Зачем они нужны?</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Слаботочные розетки нужны для передачи слаботочных информационных сигналов: телевизионных, сетевых, акустических и&nbsp;т.&nbsp;д. Обычные розетки на&nbsp;220&nbsp;V тут не&nbsp;годятся. В&nbsp;зависимости от&nbsp;типа передаваемого сигнала, слаботочные розетки оснащаются нужными разъемами: TV, TV-SAT, RJ-45, HDMI, VGA и&nbsp;другими. К&nbsp;розетке подключается слаботочный кабель, который можно соединить с&nbsp;соответствующим устройством: телевизором, проигрывателем, компьютером, телефоном. Слаботочными могут быть и&nbsp;USB-розетки. Их&nbsp;используют для доступа к&nbsp;серверу или передаче информации от&nbsp;носителя к&nbsp;проектору, компьютеру. Наиболее актуальны слаботочные розетки для офисов.</p>
          </div>
        </div>



        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-dlya-dvoih/05_kvartira-dlya-dvoih.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
          <PortfolioItem
            url="/portfolio/apartment/kvartira-dlya-dvoih"
            title="Квартира в ЖК «D3»"
            metr="109"
            building="10 месяцев"
            budget={projectStyles.portfolio_item_cost2}
            image={
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/00_kvartira-dlya-dvoih.jpg"
                alt=""
              />
            }
          />
        </div>






        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Сейчас появились самовозвратные выключатели? Почему они стали популярными? В&nbsp;чем их&nbsp;эстетическое и&nbsp;технологическое преимущество? Или это просто мода?</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Они существуют уже давно, но&nbsp;мода на&nbsp;них пришла недавно. В&nbsp;целом, они не&nbsp;сильно отличаются от&nbsp;выключателей обычного хода, к&nbsp;которым мы&nbsp;привыкли. Главное отличие&nbsp;&mdash; клавиша всегда находится в&nbsp;одном положение, вне зависимости от&nbsp;того, включен&nbsp;ли свет. Чаще всего их&nbsp;устанавливают в&nbsp;проходных зонах, где один и&nbsp;тот&nbsp;же светильник включается-выключается из&nbsp;разных мест. Так выключатели, расположенные поодаль, но&nbsp;на&nbsp;одной стене, всегда выглядят симметрично. Для многих это важно с&nbsp;эстетической точки зрения!</p>
            <ul>
              <li className={styles.articles__li}>Несколько вариантов планировки</li>
              <li className={styles.articles__li}>4-6 ракурсов 3D-визуализации каждой комнаты</li>
              <li className={styles.articles__li}>25&nbsp;листов чертежей, подробно иллюстрирующих все технические моменты: от&nbsp;электрики до&nbsp;развёртки стен</li>
              <li className={styles.articles__li}>Полный перечень материалов, которые понадобятся для ремонтных работ</li>
              <li className={styles.articles__li}>Расчет бюджета проекта</li>
              <li className={styles.articles__li}>Смету на&nbsp;ремонтно-отделочные работы</li>
            </ul>
          </div>
        </div>
        <StaticImage
          src="../../../images/inspiration/articles/gira/02_gira.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <div className="line"></div>
        <div className={styles.articles__mirror}>
          <div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>&mdash;&nbsp;Что такое диммер? В&nbsp;каких комнатах или зонах стоит его установить и&nbsp;зачем?</h2>
              <div>
                <p className={styles.articles__p}>&mdash;&nbsp;Диммер&nbsp;&mdash; устройство, предназначенное для изменения яркости светильников. Установить его можно на&nbsp;любой осветительный прибор, в&nbsp;котором предусмотрена такая функция: люстры, точечные, подвесные, встроенные, треки, LED-ленты. Чаще всего диммеры устанавливают в&nbsp;гостиных, спальнях, кабинетах. В&nbsp;тех зонах, в&nbsp;которых предполагаются разные сценарии освещения. Когда приходят гости, хочется сделать свет ярче, а&nbsp;когда смотришь телевизор в&nbsp;одиночестве&nbsp;&mdash; наоборот приглушить. Такую вариативность можно организовать с&nbsp;помощью диммера.</p>
              </div>
            </div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>&mdash;&nbsp;А&nbsp;диммеры можно добавить уже после окончания ремонта?</h2>
              <div>
                <p className={styles.articles__p}>&mdash;&nbsp;Существуют разные протоколы диммирования: TRIAC, 1-10V, DALI. К&nbsp;каждому из&nbsp;этих протоколов подбирается определенный диммер, который работает по&nbsp;своей схеме. Для его подключения провода должны соответствовать определенным требованием. Поэтому установку диммера желательно предусмотреть заранее, чтобы проложить необходимые провода. Тогда все будет корректно работать. Если попробовать добавить диммер позже, то&nbsp;нужных проводов может просто не&nbsp;хватить.</p>
              </div>
            </div>
          </div>
          <StaticImage
            src="../../../images/inspiration/articles/gira/03_gira.jpg"
            alt=""
            className={styles.articles__one_image}
          />
        </div>
        <div className={styles.articles__mirror}>
          <StaticImage
            src="../../../images/inspiration/articles/gira/04_gira.jpg"
            alt=""
            className={styles.articles__one_image}
          />
          <div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>&mdash;&nbsp;Датчики движения во&nbsp;дворах домов и&nbsp;подъездах стали чем-то обыденным. Где их&nbsp;имеет смысл установить?</h2>
              <div>
                <p className={styles.articles__p}>&mdash;&nbsp;Датчики движения достаточно часто устанавливают и&nbsp;в&nbsp;домах, и&nbsp;квартирах. В&nbsp;основном в&nbsp;коридорах, лестницах, прихожих. Принцип работы понятен&nbsp;&mdash; проходишь, свет включается, как только датчик теряет человека из&nbsp;вида&nbsp;&mdash; выключается.</p>
              </div>
            </div>
            <div className={styles.articles__mirror_text_item}>
              <h2 className={styles.articles__mirror_text__title}>&mdash;&nbsp;Многих раздражает, что свет часто автоматически выключается, пока человек стоит неподвижно. Можно&nbsp;ли как-то обойти эту проблему?</h2>
              <div>
                <p className={styles.articles__p}>&mdash;&nbsp;Чтобы этого избежать используют датчики присутствия. Они реагируют на&nbsp;инфракрасное излучение от&nbsp;тела человека, то&nbsp;есть на&nbsp;тепло. Даже если замереть датчик все равно &laquo;видит&raquo; человека и&nbsp;не&nbsp;дает свету выключаться.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Как датчики присутствия/движения реагируют на&nbsp;домашних питомцев?</h2>
          <div>
            <p className={styles.articles__p}>Домашних животных и&nbsp;датчики движения, и&nbsp;датчики присутствия распознают. Но&nbsp;это зависит от&nbsp;размера животного. У&nbsp;некоторых датчиков чувствительность достаточно высокая и&nbsp;они могут срабатывать даже на&nbsp;маленьких питомцев. Обойти это можно, либо установив датчик на&nbsp;зону, в&nbsp;которой домашнее животное не&nbsp;появляется, либо отключив датчик движения.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Еще хотим поговорить об&nbsp;утопленном монтаже. Расскажите, что это такое и&nbsp;чем отличается от&nbsp;обычной установки.</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Утопленный монтаж&nbsp;&mdash; это одна из&nbsp;новинок в&nbsp;сфере электроустановочных изделий. Стандартная установка розеток и&nbsp;выключателей в&nbsp;круглый подрозетник&nbsp;&mdash; это классика. Прогресс, все&nbsp;же не&nbsp;стоит на&nbsp;месте, захотелось придумать что-то новенькое. И&nbsp;производители выпустили коллекцию Gira E2&nbsp;монтаж заподлицо. Особенность этой коллекции&nbsp;&mdash; установка в&nbsp;квадратный, более глубокий подрозетник, в&nbsp;котором часть рамки также утапливается. За&nbsp;счет этого рамка над поверхностью стены почти не&nbsp;выступает: буквально на&nbsp;3&nbsp;мм, а&nbsp;розетки совсем плоские. Это эстетично и&nbsp;подходит в&nbsp;любой интерьер.</p>
          </div>
        </div>
        <StaticImage
          src="../../../images/inspiration/articles/gira/05_gira.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Можно&nbsp;ли установить утопленные розетки и&nbsp;выключатели уже после окончания ремонта?</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Сейчас на&nbsp;утопленный монтаж большой спрос. Но&nbsp;не&nbsp;все знают, что такие розетки и&nbsp;выключатели устанавливаются только в&nbsp;квадратный подрозетник, и&nbsp;приходят к&nbsp;нам покупать такие розетки на&nbsp;финальной стадии, когда уже установлены круглые подрозетники, закончена штукатурка, поклеены обои и&nbsp;уже поздно что-то менять. Их&nbsp;крайне затруднительно установить на&nbsp;финальном этапе, когда все уже подготовлено под стандартную установку. Мы&nbsp;со&nbsp;своей стороны стараемся как можно больше об&nbsp;этом информировать, но&nbsp;не&nbsp;всегда получается предусмотреть такое заранее.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Да&nbsp;уж, еще одно напоминание, как важно иметь дизайн-проект. Они довольно незаметные, но&nbsp;не&nbsp;будут&nbsp;ли они сильно отличаться от&nbsp;стены по&nbsp;цвету?</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Вариации цветов коллекции довольно много&nbsp;&mdash; можно подобрать под любой интерьер.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Сейчас много говорят о&nbsp;System 3000 от&nbsp;Gira. Как она работает?</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;Сейчас на&nbsp;утопленный монтаж большой спрос. Но&nbsp;не&nbsp;все знают, что такие розетки и&nbsp;выключатели устанавливаются только в&nbsp;квадратный подрозетник, и&nbsp;приходят к&nbsp;нам покупать такие розетки на&nbsp;финальной стадии, когда уже установлены круглые подрозетники, закончена штукатурка, поклеены обои и&nbsp;уже поздно что-то менять. Их&nbsp;крайне затруднительно установить на&nbsp;финальном этапе, когда все уже подготовлено под стандартную установку. Мы&nbsp;со&nbsp;своей стороны стараемся как можно больше об&nbsp;этом информировать, но&nbsp;не&nbsp;всегда получается предусмотреть такое заранее.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>&mdash;&nbsp;Можно&nbsp;ли сделать выключатели с&nbsp;индивидуальной гравировкой, например, для детской. Или нанести пиктограммы приборов, которые они включают.</h2>
          <div>
            <p className={styles.articles__p}>&mdash;&nbsp;В&nbsp;целом, такое можно сделать. Но&nbsp;для System 3000 это не&nbsp;совсем актуально, потому что все девайсы идут уже с&nbsp;условными пиктограммами, по&nbsp;которым понятно, чем мы&nbsp;управляем. В&nbsp;мобильном приложении, соответственно, каждый светильник или термостат подписаны.</p>
          </div>
        </div>
        <StaticImage
          src="../../../images/inspiration/articles/gira/06_gira.jpg"
          alt=""
          className={styles.articles__one_image}
        />
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

export default ArticleGira