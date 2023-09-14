import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"




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
          <p className={styles.articles_intro_p}>В рамках гида по стилям от студии R-home (предыдущие статьи можно посмотреть здесь ) продолжаем знакомить вас с самыми популярными стилями в дизайне интерьеров. На очереди — минимализм — четкий, функциональный и выверенный до миллиметра. Это стиль для тех, кто устал от сложных форм и готов отказаться от всего лишнего, оставив только самое необходимое для жизни.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>История</h2>
          <div>
          <p className={styles.articles__p}>Сам термин происходит от латинского слова minimus, что значит «наименьший». Пожалуй, это слово и есть отражение сути всей стилистики минимализма — отрицание избыточности. Элементов должно быть как можно меньше, а свободного места как можно больше. Соответственно, самый важный этап в создании подобного интерьера — грамотная организация пространства, формирование объема помещения при минимальном декоре.</p>
            <p className={styles.articles__p}>Мода на минималистичные интерьеры появилась в Америке еще в середине 1960-х, но прообразы этого стиля можно встретить еще раньше – в конструктивизме и традиционной японской культуре. Благодаря техническому прогрессу произошла переоценка существующих традиций оформления интерьеров и строительства, стали использоваться в основном натуральные промышленные материалы, простые геометрические формы и нейтральные цвета. Сегодня этот стиль многие считают дизайном будущего, когда отпадет необходимость в лишнем декорировании, ведь человеку очень важно дома прежде всего отдыхать и проводить время с близкими, а не любоваться милыми безделушками, которые только отвлекают от сути и предназначения интерьера.</p>
          </div>
        </div>


        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/01_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Со временем минимализм как стиль в интерьере занял особое место, и это прежде всего заслуга немецкой и голландской школ дизайна. Немцы привнесли в него такие принципы, как лаконичные формы и цвета, функциональность и комфорт. Голландцы же пропагандировали свой цвет для каждой плоскости и прямоугольные формы. По сей день азбукой минимализма считается работа немецкого дизайнера Дитера Рамса «Принципы хорошего дизайна». Согласно его версии, хороший дизайн связан с инновациями, эстетичен, экологичен, функционален и продуман. Но самое главное — он содержит как можно меньше дизайна, то есть ненужных деталей и декора.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/02_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Очень важно понимать, что минимализм — это не просто стиль в интерьере, это, скорее, философия жизни, которая предлагает отказаться от многих привычных нашему менталитету вещей и наполнить свой дом только самым необходимым. Что еще несет в себе минимализм и как оформить свое жилище в этом стиле грамотно и нескучно – объясняем и показываем на примерах, а практические советы дизайнеров студии R-home помогут понять, подойдет ли такой интерьер для жизни именно вам.</p>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>В целом, если говорить об основных чертах стиля, можно выделить 4 базовых идеи минимализма:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>чистота пространства;</li>
              <li className={styles.articles__li}>натуральная гамма;</li>
              <li className={styles.articles__li}>инновационные фактуры;</li>
              <li className={styles.articles__li}>функциональная мебель.</li>
            </ul>
          </div>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Материалы</h2>
          <div>
          <p className={styles.articles__p}>Минимализм тяготеет к аскетичности, но не к дешевизне. Поэтому здесь предполагается активное использование в первую очередь качественных натуральных материалов, таких как стекло, зеркало, камень, дерево, полированный цемент. При этом поверхности должны быть хорошо обработаны, возможно, покрыты лаком для придания глянцевого эффекта.</p>
            <p className={styles.articles__p}>Минималистичные интерьеры требуют просторных и открытых помещений. В этом смысле зеркала — идеальный материал для визуального расширения небольшого пространства. В качестве напольного покрытия в минимализме приветствуется использование широкоформатных плит, которые придают комнате бесшовный внешний вид. В отделке стен желательно использовать краску или однотонные текстурные обои, можно c мелким несложным принтом.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/03_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>В минимализме есть место не только природным, но и полученным промышленным путем современным высокотехнологичным материалам, но тут крайне важно их качество, безопасность и экологичность. Вопреки расхожему мнению, минималистичный интерьер далеко не бюджетный и требует исключительно качественных, недешевых материалов.</p>
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Интересный прием в отделке стен — вставки панелей из натурального или искусственного материала, например, нержавеющей стали, полированного и фактурного дерева, камня с природными текстурами. Выглядит современно и нескучно."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Цветовая палитра</h2>
          <div>
          <p className={styles.articles__p}>В интерьере обычно не используют больше одного-двух цветов, чаще всего это оттенки одной гаммы. Такая монохромность многим может показаться скучной и холодной. Чтобы избежать этого эффекта, в рамках одного цвета лучше использовать разные, но не очень активные текстуры. Чередуйте матовое с глянцевым, шероховатое с абсолютно гладким. И вы удивитесь, насколько выразительным и ярким может стать монохромный интерьер.</p>
            <p className={styles.articles__p}>Большинство дизайнеров для создания минималистичного интерьера советуют придерживаться натуральной гаммы: белый, черный, бежевый, серый, цвет натурального дерева, оттенки охры и хаки. Однако, если такая палитра кажется вам слишком скучной, можно обратиться к мексиканскому варианту минимализма и выкрасить все помещение (стены, пол и потолок) яркой цветной штукатуркой.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/04_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Свет</h2>
          <div>
          <p className={styles.articles__p}>Освещению отводится едва ли не самая главная роль в оформлении минималистичного интерьера. Основная часть света должна поступать из окон. Окна обязательно должны быть большими, ведь их основная функция — насыщать пространство воздухом и соединять жилье с внешним миром, делая окружающую действительность частью интерьера. Отсюда главное правило: забудьте о шторах и портьерах, в минималистичных интерьерах они неуместны. Но если все же хочется как-то оформить окна и защитить себя от солнечных лучей, лучше использовать горизонтальные жалюзи или роллеты.</p>
          <p className={styles.articles__p}>Искусственный свет в минимализме часто используется как декор. Тут речь идет не о светильниках самих по себе (они должны быть простыми и геометричными), а об освещении разного спектра, которому под силу скорректировать и преобразить интерьер. При необходимости создать рабочую атмосферу используют яркий дневной свет. Для проведения вечеринок и приема гостей – более мягкие расслабляющие источники. Разнообразная подсветка и направляемый технический свет – все это весомый элемент декорирования в минимализме.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/05_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Чтобы усилить декоративный эффект от искусственного света, в минимализме активно используются отражающие (глянцевые) поверхности мебели, стекло и даже глянцевые наливные полы."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мебель</h2>
          <div>
          <p className={styles.articles__p}>Основная задача минимализма — создать интерьер с ощущением незагруженного пространства. Отсюда и главный принцип выбора мебели: ее должно быть немного, она должна быть функциональной и лаконичной. Дизайнеры при проектировании минималистичных интерьеров часто используют принцип 20-80, где мебель в помещении занимает 20%, а остальная часть остается свободной.</p>

          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/06_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Чтобы поддержать чистоту стиля, обязательно заранее тщательно продумать системы хранения. Для этих целей лучше использовать встроенные конструкции. Шкафы, вмонтированные в стену, – удачное решение. В целом, мобильная мебель, которую легко спрятать, в приоритете. Мягкая мебель имеет строгую геометрию форм, она лишена декора и витиеватостей, а самой важной характеристикой любого предмета является его функциональность. Обязательный must-have – металлические каркасы, тонкие прямые ножки, лаконичная дизайнерская мебель, прямоугольные и квадратные конструкции.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/09_minimalizm.gif"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Декор</h2>
          <div>
          <p className={styles.articles__p}>Как уже отмечалось, аксессуаров в минималистичном интерьере должно быть минимум. Здесь нет места милым безделушкам, редко используемым предметам и приятных глазу мелочей. Все, что присутствует в помещении, функционально и выполняет свое предназначение.</p>

          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/07_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Конечно же, полностью отказываться от аксессуаров и других интересных деталей не стоит. Правильно подобранный декор может качественно дополнить интерьер, стать частью продуманного и красивого пространства. Главное – не переборщить. Например, вместо картины в шикарной раме лучше подобрать простой современный постер.</p>
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Минимализм предпочитает крупные формы в декоре: выбирая вазы и скульптуры, выбирайте размеры L, XL. А при выборе искусства предпочтение лучше отдать крупным фигурам вместо мелкого коллажа."
              />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кому подойдет интерьер в стиле минимализм</h2>
          <div>
          <p className={styles.articles__p}>Минимализм – это течение для современных деловых людей, предпочитающих во всем и везде порядок. Здесь неуместен хаос, поэтому этот стиль больше всего подходит людям педантичным, скрупулезным. Минимализм подходит личностям рациональным, в какой-то степени перфекционистам, с легкостью готовым отказаться от многих привычных, комфортных, но бесполезных в жизни вещей в пользу чистого сбалансированного пространства.</p>

          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/minimalizm/08_minimalizm.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h3 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Посмотреть примеры интерьеров в стиле минимализм от студии дизайна R-home можно тут:</h3>
        </div>


        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/dom-terassa/04_dom-terassa.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/facade/dom-terassa/"
          title="Дом с открытой террасой"
          metr="450"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-terassa/00_dom-terassa.jpg"
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