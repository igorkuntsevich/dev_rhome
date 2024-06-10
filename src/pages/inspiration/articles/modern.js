import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { ProjectConsultationAlexey } from "../../../subitems/project/consultation/project-consultation-alexey"



const Modern = () => (
  <Layout>
    <Seo 
      title={"Разберем основые особенности стиля модерн - RHOME"} description={""}
      location={"https://rhome.by/articles/modern"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Модерн</h1>
          <StaticImage
            src="../../../images/inspiration/articles/modern/03_modern.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/modern/00_modern.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>При упоминании словосочетания «модерн в интерьере», в подавляющем большинстве случаев мы сразу же рисуем в своем воображении замысловатый ар-нуво начала XX века с обилием лепнины, изогнутых линий и витражных светильников.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>История</h2>
          <div>
          <p className={styles.articles__p}>Однако не будем забывать, что само слово «модерн» переводится как «современный», потому в нынешнем понимании достаточно далек от классического ар-нуво и является отражением популярной интерьерной моды текущего времени. Модерн XXI века скорее близок к минимализму и подразумевает под собой вовсе не нарядную роскошь, а простоту и безупречность композиции. Этот стиль отражает утонченный современный дизайн с использованием дорогостоящих материалов, создает эстетически приятные, но в то же время очень практичные и функциональные интерьеры.</p>
            <p className={styles.articles__p}>В современном мире высоких технологий и бешеного ритма жизни при выборе дизайна для дома или квартиры все большее количество заказчиков отдает свое предпочтение стилю модерн благодаря его главной характеристике – красоте в сочетании с практичностью. Изящный, но выстроенный по законам эргономики, этот стиль похож во многом на контемпорари, однако отличается использованием более дорогих материалов и декора.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/01_modern.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Кстати, в последние несколько лет особой популярностью пользуется так называемый mid-century modern, который обращается к ретро-стилистике середины прошлого века и пропагандирует в первую очередь простые формы, комфорт и функциональность. Этот стиль, появившийся в послевоенные годы, обрел новое дыхание сегодня, а многие из наиболее значимых шедевров предметного дизайна XX века, созданные именно в этот период, как никогда ранее актуальны в современных интерьерах.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/02_modern.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>В целом, если говорить об основных чертах стиля модерн, можно выделить следующие моменты:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>акцент на композицию, единство всех предметов интерьера;</li>
              <li className={styles.articles__li}>простота форм и практичность;</li>
              <li className={styles.articles__li}>использование качественных натуральных материалов;</li>
              <li className={styles.articles__li}>минимальный декор без излишеств.</li>
              <li className={styles.articles__li}>применение самых современных технических решений (откатные перегородки, двери с невидимой коробкой, умный дом);</li>
            </ul>
          </div>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Материалы в интерьере в стиле модерн</h2>
          <div>
          <p className={styles.articles__p}>Модерн можно отнести к элитным стилям, так как невозможно представить в таком интерьере использование дешевых искусственных материалов. В отделке тут используют преимущественно натуральные материалы: мрамор, стекло, камень и, конечно же, дерево.</p>
            <p className={styles.articles__p}>Дерево в интерьере может быть представлено в самых разных вариациях: на полу, на стенах, в мебели и декоре. Предпочтительны деревянные элементы с выразительной структурой и мебель из твердых пород. Деревянное обрамление также могут иметь торшеры и другие осветительные приборы. Для отделки стен отлично подойдет однотонный материал, так как в модерне стены играют роль фона, который не должен акцентировать на себе внимание. Самым разумным вариантом в данном случае будет покраска или использование обоев спокойных оттенков.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/04_modern.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Полы в интерьере в стиле модерн чаще всего отделываются паркетом, паркетной доской или натуральным камнем. Также возможно использование качественной керамической плитки или керамогранита с текстурой природного материала. И запомните: никакого линолеума!"
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Цветовая палитра в интерьере в стиле модерн</h2>
          <div>
          <p className={styles.articles__p}>Для интерьера в стиле модерн характерны приглушенные цвета и отсутствие резких контрастов, тут вряд ли возможно встретить яркие кричащие стены или элементы декора. Такие неброские оттенки и полутона создают в помещении спокойную, богемную ауру, и в то же время прекрасно подчеркивают плавность линий, визуально расширяя границы помещения.</p>
            <p className={styles.articles__p}>Выбирая цветовую гамму для интерьера в стиле модерн, следует отдавать предпочтение в первую очередь натуральной, природной палитре – бежевый, светло-зеленый, песочный, серый, жемчужный, белый. Из темного – шоколадный, черный и коричневый – подойдут как нельзя кстати. В почете также цвет благородных металлов: очень красиво в интерьере будут смотреться золотые и бронзовые элементы.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/05_modern.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationAlexey
                text="Самое главное цветовое решение стиля – сложные, неоднозначные оттенки. Никаких простых и скучных цветов! Если это коричневый – то серовато-кофейный, если бежевый – то пыльно-пастельный, а если зеленый – то непременно глубокий малахитовый."
              />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Свет в интерьере в стиле модерн</h2>
          <div>
          <p className={styles.articles__p}>Так как модерн призван создать атмосферу уюта и гармонии, его характерной особенностью является приглушенное, неяркое освещение. С этой задачей прекрасно справятся декоративные светильники с матовым или цветным стеклом. Основания светильников могут быть выполнены из металла либо дерева, главное – все это должно гармонично сочетаться с другими элементами интерьера, а не контрастировать с ними.</p>
            <p className={styles.articles__p}>В модерне могут присутствовать как практичные, так и декоративные осветительные приборы. К первым можно отнести точечные светильники, люстры. Декоративную же функцию выполняют стильные бра, торшеры и разнообразные настольные светильники, в задачу которых входит освещение затемненных уголков помещения. Такие декоративные светильники могут быть необычной формы, изогнутые, слегка причудливые, ведь нестандартный подход позволяет сделать помещение оригинальным и подчеркнуть индивидуальность жильцов.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/06_modern.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мебель и декор в стиле модерн</h2>
          <div>
          <p className={styles.articles__p}>Все детали для интерьера нужно выбирать с учетом главного правила оформления: никаких пестрых деталей, все должно быть элегантно и выдержано в единой стилистике. Мебель подбирается в основном функциональная и стилизованная. Тут приветствуются такие материалы, как дерево, стекло и металлическая фурнитура. Добавить целостности интерьеру в стиле модерн поможет уютная мягкая мебель, особенно модульная. В отличие от классической, она легко трансформируется, свободно перемещается и наиболее практична. Главное условие при выборе мягкой мебели — все ее линии должны быть плавные, изящные, а обивка – качественной и недешевой.</p>
            <p className={styles.articles__p}>Дизайн интерьера в стиле модерн подразумевает минимальный или вообще отсутствующий декор. Мелкие декоративные элементы и аксессуары используются в небольшом количестве и являются лишь завершающим звеном для создания целостного образа. Текстиль находит применение в очень ограниченном количестве и только по его функциональному назначению (шторы, обивка мебели и диванные подушки).</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/07_modern.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Одной из главных особенностей модерна является то, что помещение воспринимается как единое целое. Все предметы мебели и аксессуары должны быть тесно связаны между собой, а зонирование – не иметь четких границ."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кому подойдет интерьер в стиле модерн</h2>
          <div>
          <p className={styles.articles__p}>Модерн идеально подходит для создания интерьеров просторных квартир с минимумом стен и перегородок внутри, в том числе и популярных сейчас квартир-студий. В целом, модерн отвечает за создание гармоничного, актуального и технологичного пространства для жизни. Так что этот стиль подойдет каждому, кто желает видеть свое жилище изящным, эстетичным, но в то же время уютным и современным.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modern/08_modern.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h3 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Посмотреть примеры интерьеров в стиле модерн от студии дизайна R-home можно тут:</h3>
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/dom-raubichy/03_dom-raubichy.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/house/dom-raubichy/"
          title="Дом в Раубичах"
          metr="500"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/00_dom-raubichy.jpg"
              alt=""
            />
          }
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-borisov/03_kvartira-borisov.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-borisov/"
          title="Квартира в Борисове в темных тонах"
          metr="146"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-borisov/00_kvartira-borisov.jpg"
              alt=""
            />
          }
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-storozhevskaya/04_kvartira-storozhevskaya.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-storozhevskaya/"
          title="Квартира на ул. Сторожевская"
          metr="270"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/00_kvartira-storozhevskaya.jpg"
              alt=""
            />
          }
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

export default Modern