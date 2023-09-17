import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const SkandinavskijStil = () => (
  <Layout>
    <Seo 
      title={"Скандинавский стиль - RHOME"} description={"Рассмотрим особенности стиля, цвет, и сложность реализации"}
      location={"https://rhome.by/articles/skandinavskij-stil"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Скандинавский стиль</h1>
          <StaticImage
            src="../../../images/inspiration/articles/skandinavskij-stil/10_skandinavskij-stil.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/skandinavskij-stil/00_skandinavskij-stil.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Интерьер в скандинавском стиле на протяжении последних лет пользуется исключительной популярностью у наших соотечественников, что неудивительно, ведь функциональность, простота и естественность стиля скандинавских стран притягивает внимание еще и своей доступностью в плане бюджета и дизайнерских решений.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/01_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мода на скандинавский образ жизни</h2>
          <div>
          <p className={styles.articles__p}>Необычайно популярный сегодня, он пришел к нам из Северной Европы, где достаточно суровый климат, затяжные зимы и недостаток солнечного света, и потому отлично подошел и для наших широт. Мода на скандинавский образ жизни со временем только растет, а сам стиль постепенно трансформируется. Особый всплеск интереса к северным интерьерам случился благодаря широкому распространению книги Майка Викинга «Hugge. Секрет датского счастья» и самого понятия hugge как такового. </p>
            <p className={styles.articles__p}>Эта философия основывалась на принципах создания максимального уюта в доме, где каждая деталь интерьера продумана до мелочей и поддерживает атмосферу умиротворения и спокойствия. Постепенно идея уюта по-датски сменилась шведской концепцией lagom — более рациональной и прагматичной. Основная идея этой философии заключается в умении сохранять равновесие, жить в гармонии с окружающей средой, избегать чрезмерности и не перегружать свою жизнь лишними деталями.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/02_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Безусловно, как у любого другого, у скандинавского стиля есть свои правила, особенности, плюсы и минусы, о которых вы узнаете из этой статьи, а практические советы дизайнеров студии R-home помогут понять, подойдет ли такой интерьер для жизни именно вам.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Свет в скандинавском интерьере</h2>
          <div>
          <p className={styles.articles__p}>Скандинавский стиль сформировался под влиянием северного сурового климата, где основная задача – обеспечение помещения максимальным количеством естественного света. Именно поэтому окна в скандинавских квартирах обычно крупногабаритные, а шторы либо отсутствуют вовсе, либо выполнены из легких, полупрозрачных тканей.</p>
            <p className={styles.articles__p}>К сожалению, несмотря на схожесть климата, наши застройщики не часто балуют владельцев квартир большими окнами. Конечно, расширить оконный проем можно, но это очень сложный и недешевый процесс, гораздо проще позаботиться заранее о грамотном искусственном освещении.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/03_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
              <ProjectConsultationAlexey
                text="Скандинавский интерьер любит сложные световые схемы, которые сочетают в себе разноуровневое освещение и использование различных видов осветительных приборов: от светодиодной подсветки и спотов до разнообразных торшеров и настольных ламп."
              />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Цвет в скандинавском интерьере</h2>
          <div>
          <p className={styles.articles__p}>Активное использование белого цвета в отделке также обусловлено стремлением сделать помещение более светлым и просторным. Светлые стены и потолок обеспечивают максимальное распространение света в доме – солнечные лучи отражаются от белоснежных поверхностей и распространяются по всей площади квартиры. Чтобы солнце отражалось еще лучше, поверхности могут быть не только светлыми, но и глянцевыми.</p>
            <p className={styles.articles__p}>Яркие цвета в большинстве случаев используют исключительно в качестве небольших декоративных элементов, а изначально теплые оттенки – коричневый, красный, песочный – в скандинавском интерьере транслируются обычно в максимально холодных тонах.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/04_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
              <ProjectConsultationAlexey
                text="Конечно, цветовая гамма скандинавского стиля не ограничивается только белым. Чтобы квартира не превратилась в больницу, дозированно добавляйте в интерьер зеленые, бежевые, темно-синие, вишневые, серые тона и черные контрасты."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Материалы в скандинавском интерьере</h2>
          <div>
          <p className={styles.articles__p}>Скандинавский стиль характеризуется использованием преимущественно натуральных материалов – дерево для отделки и мебели, керамика и камень для облицовки поверхностей, мех, хлопок и лен для декоративной драпировки.</p>
            <p className={styles.articles__p}>Дерево – безоговорочный фаворит в скандинавском интерьере. Оно приветствуется везде: на полу, на стенах и даже на потолке. Натуральная древесина (сосна, бук, ясень), покрытая лаком или окрашенная в белый цвет, станет лучшим выбором в качестве напольного покрытия. Но если вы все-таки решитесь использовать искусственные аналоги природных материалов, помните: они должны идеально имитировать натуральное сырье.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/05_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Так как скандинавский интерьер всегда стремится к естественности и простоте, приветствуется минимальная обработка дерева. В качестве напольных покрытий чаще всего используется не ламинат, а простой дощатый пол из светлых пород дерева или структурированный паркет с неброским рисунком."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мебель в скандинавском интерьере</h2>
          <div>
          <p className={styles.articles__p}>Универсальная, эргономичная, удобная – вот основные черты мебели в скандинавском стиле. Никаких громоздких шкафов, сложных футуристических форм и вычурных элементов. Мебель в скандинавском интерьере исключительно проста и функциональна, иногда с налетом ретро. Это лаконичные диваны-трансформеры, практичные открытые стеллажи, стильные журнальные столики, минималистичные модульные конструкции и нередко культовые предметы от популярных скандинавских дизайнеров.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/06_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Так как мы говорим о стиле, который пришел к нам с севера, неудивительно, что в нем достаточно часто встречается такой элемент, как камин: электрический, газовый или самый настоящий дровяной. В целом, даже декоративный каминный портал будет вполне уместен в скандинавской стилистике и придаст помещению ощущение тепла и уюта.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/07_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Наполняя интерьер мебелью, помните, что минималистски ориентированный скандинавский стиль не терпит нагромождения, поэтому чем меньше пространство квартиры или дома, тем проще должна быть обстановка и тем меньше в ней должно быть мебели."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Аксессуары в скандинавском интерьере</h2>
          <div>
          <p className={styles.articles__p}>Гармония, простота, функциональность как основные черты скандинавского стиля делают его комфортным для самых разных людей, а чтобы интерьер стал особенным, самобытным и приобрел свой индивидуальный почерк, стоит вспомнить об аксессуарах. Сделать помещение неповторимым помогут необычные стеклянные вазы, вешалки, зеркала, дизайнерские светильники, оригинальные картины и постеры, а также разнообразные живые растения в вязаных кашпо. Причем декоративные элементы из масс-маркета в данном случае одинаково классно сочетаются как с «бабушкиным» антиквариатом, так и с штучными арт-объектами.</p>
          <p className={styles.articles__p}>Декор по-скандинавски очень сдержанный и не терпит перенасыщения различными аксессуарами, он призван в первую очередь привнести уют и гармонию в дом, а не бросаться в глаза. Главным инструментом декорирования тут является текстиль – мягкие пледы, длинноворсовые ковры, льняные шторы, яркие подушки – интересные детали, которые делают интерьер по-настоящему уникальным.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/08_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Излюбленный прием при создании скандинавского стиля — расставлять элементы декора прямо на полу, избавляя стены от полок. Это позволяет визуально вытянуть помещение и увеличить высоту потолка."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кому подойдет скандинавский интерьер</h2>
          <div>
          <p className={styles.articles__p}>Скандинавский стиль идеально подходит тем, кто ценит в первую очередь уют и тепло домашнего очага, кто не любит пафоса и вычурности, для кого функциональность и простота является главным критерием комфорта. К тому же этот стиль отлично впишется в помещение любых размеров, будь то огромный дом с панорамными окнами посреди леса или небольшая хрущевка в спальном районе.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/skandinavskij-stil/09_skandinavskij-stil.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Посмотреть примеры интерьеров с элементами скандинавского стиля от студии дизайна R-home можно тут:</h2>
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-skandinavsk/03_kvartira-skandinavsk.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-skandinavsk/"
          title="Современная квартира с нотками скандинавского стиля"
          metr="113"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-skandinavsk/00_kvartira-skandinavsk.jpg"
              alt=""
            />
          }
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/malesuada-fames/03_malesuada-fames.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/house/malesuada-fames/"
          title="Дом в скандинавском стиле"
          metr="600"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/malesuada-fames/00_malesuada-fames.jpg"
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

export default SkandinavskijStil