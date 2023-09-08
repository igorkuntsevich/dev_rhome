import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const MezhkomnatnyeDveri = () => (
  <Layout>
    <Seo 
      title={"Какие межкомнатные двери выбрать, чтобы быть в тренде - RHOME"} description={"Продумывая проект своего нового дома или приступая к ремонту старого, нередко мы уделяем межкомнатным дверям не так много внимания."}
      location={"https://rhome.by/articles/mezhkomnatnye-dveri"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Какие межкомнатные двери выбрать, чтобы быть в тренде</h1>
          <StaticImage
            src="../../../images/inspiration/articles/mezhkomnatnye-dveri/09_mezhkomnatnye-dveri.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/mezhkomnatnye-dveri/00_mezhkomnatnye-dveri.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Продумывая проект своего нового дома или приступая к ремонту старого, нередко мы уделяем межкомнатным дверям не так много внимания. И напрасно: ведь грамотно подобранные двери способны преобразить любое помещение и стать важной составляющей дизайна всего вашего жилища. А вот неподходящая, некачественная дверь может испортить весь интерьер, поэтому так важно заранее продумать и подобрать необходимую форму, цвет и материал двери.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/01_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Рынок строительных материалов сейчас пестрит множеством моделей на любой вкус, имеющих самые разные механизмы открывания и эстетические особенности. Популярные новинки – скрытые, амбарные и высокие двери до потолка, которые позволяют совершенно по-другому взглянуть на организацию пространства. Дизайнеры с удовольствием подхватили эти тренды, а известные производители уж представили линейки самых ультрамодных моделей. Именно о них и пойдет речь в этой статье.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Скрытые двери в интерьере</h2>
          <div>
          <p className={styles.articles__p}>Скрытые двери — это двери, короб которых изготавливается из специального вида алюминиевого профиля. Такие двери не имеют наличника и видимых петель, а полотно идет вровень с дверным коробом, что позволяет добиться эффекта невидимости на фоне стены (поэтому второе их название – двери-невидимки). Так как конструкцию – коробку со скрытым шарнирным механизмом для открывания – необходимо спрятать во внутренней части стены, монтаж таких дверей происходит на ранних стадиях ремонта, до отделочных работ. Поэтому, если вы не предусмотрели и не подготовили стены заранее, то, скорее всего, уже не сможете установить скрытые двери. Или же придется менять всю отделку. Это и есть главный (и, пожалуй, единственный) минус скрытых дверей.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/02_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Дверное полотно скрытого монтажа может изготавливаться как под отделку (они поставляются уже грунтованными и готовыми под покраску в цвет основных стен), так и в таком же исполнении, как давно знакомые нам стандартные двери — покраска, шпон, стекло или зеркало. Узнать подробнее обо всех нюансах и подобрать самый оптимальный вариант для своего дома можно на сайте нашего надежного партнера – салона дверей Lazio.</p>
        </div>
        <div className={styles.articles__bigmargin}>
          <ProjectConsultationSergey
            text="Обратите внимание: размеры проема должны строго соответствовать требованиям производителя. Поэтому еще до начала ремонта следует определиться с видом двери и поставщиком, чтобы правильно рассчитать и подготовить проем."
          />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Стилевое решение скрытых дверей может быть абсолютно разным, их можно использовать практически в любом интерьере (кроме, пожалуй, классики, где двери-невидимки будут уместны только в случае наличия основной, классической двери), но лучше всего они впишутся в современные минималистичные интерьеры.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/03_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>








        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Амбарные двери в интерьере</h2>
          <div>
          <p className={styles.articles__p}>Современный тренд, который пришел из Америки и постепенно набирает популярность и у нас, – амбарные двери. Они представляют собой массивные, фактурные дверные полотна, закрепленные на горизонтальных рельсах. А получили они свое название благодаря тому, что на Западе откатные двери похожей конструкции традиционно устанавливают в амбарах и других хозяйственных постройках — везде, где требуется широкий проход. В городских квартирах такие двери прекрасно прижились по нескольким причинам: они отлично экономят место, удобны для проходных помещений и выглядят очень эффектно.

Амбарные двери в интерьере</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/04_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Привлекательность амбарных дверей во многом определяется используемой фурнитурой. Двери такого типа подвешивают к металлической направляющей и перемещают с помощью кареток и роликов, а все элементы крепления у них на виду. Чем массивнее крепления, тем брутальнее будет характер всей конструкции. Так что если хотите что-то более легкое, выбирайте хромированную или утонченную стальную фурнитуру.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/05_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Само дверное полотно не обязательно должно быть из дерева, оно может быть выполнено из любого материала: МДФ, пластика, закаленного стекла, нержавеющей стали. Так что можно подобрать подходящий вариант под любой стиль, в том числе и минимализм. Ну а что касается классических деревянных амбарных дверей, то они, безусловно, идеально впишутся в интерьеры в стиле лофт, кантри и прованс.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Высокие двери до потолка</h2>
          <div>
          <p className={styles.articles__p}>Еще одна модная тенденция в современном дизайне – высокие двери до потолка, которые простираются вверх на 3-4 м и занимают все пространство от верхнего до нижнего перекрытия. Эти двери снискали особую популярность среди дизайнеров благодаря их уникальной способности «поднимать» потолок, делать помещение более высоким.</p>
          </div>
        </div>


        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/06_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Конструкция высоких дверей отличается от стандартных межкомнатных особой технологией изготовления. Тут используются специальные прочные струны (интегрированные в полотно для сохранения идеального вертикального положения), особо износостойкая фурнитура (а зачастую еще и дополнительные петли) и коробки из высокопрочного, но обладающего небольшим весом алюминия. В целом, двери до потолка, как правило, представляют собой гладкое полотно без отягощающих элементов, а большинство моделей не предполагают установку наличников, являя собой по сути одну из вариаций скрытых дверей.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/07_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Подбирая высокие двери для своего жилища, вы практически не ограничены в выборе материалов и моделей. Самая популярная сейчас вариация – остекленные или полностью стеклянные двери, которые предложил миру известный итальянский производитель Rimadesio. Главное достоинство таких светопрозрачных решений состоит в том, что даже при очень больших габаритах они позволяют достичь максимальной освещенности помещения и сохраняют воздушность, исключая риск перегрузки комнаты деталями. В современных интерьерах гармонично выглядят как полностью прозрачные модели, так и варианты, подвергшиеся матированию, тонированию и даже окрашиванию. В Беларуси стеклянные двери до потолка, подобные итальянскому производителю, можно найти у торговой марки Lazio.</p>
        </div>
        <div className={styles.articles__bigmargin}>
          <ProjectConsultationSergey
            text="При выборе дверей старайтесь сильно не экономить, потому что это изделие будет долгие годы служить вашему дому. И если устаревшие обои можно легко сменить с минимальными затратами, то замена дверей станет финансово невыгодной."
          />
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/mezhkomnatnye-dveri/08_mezhkomnatnye-dveri.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Любая из описанных выше моделей дверей – свежий и нестандартный продукт, объединяющий безупречную функциональность с интересными возможностями декорирования. Какую дверь выбрать – зависит только от ваших вкусовых предпочтений и финансовых возможностей. Главное: не бойтесь, экспериментируйте и воплощайте свои идеи!</p>
        </div>









        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h3 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Посмотреть, как выглядят в интерьере современные варианты дверей, можно в проектах:</h3>
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
          title="Дом с открытой террасой"
          metr="500"
          building="18 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/dom-raubichy/00_dom-raubichy.jpg"
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

export default MezhkomnatnyeDveri