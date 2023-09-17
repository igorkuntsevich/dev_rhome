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




const Zonirovanie = () => (
  <Layout>
    <Seo 
      title={"Зонирование пространства в интерьере - RHOME"} description={"Вместе с дизайнерами студии RHome сравним популярные методы"}
      location={"https://rhome.by/articles/zonirovanie"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Зонирование пространства в интерьере: 5 самых популярных приемов</h1>
          <StaticImage
            src="../../../images/inspiration/articles/zonirovanie/06_zonirovanie.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/zonirovanie/00_zonirovanie.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>В последние годы квартиры студийного типа приобрели особую популярность. И это неудивительно: невысокая цена, свободная планировка, доступность и комфорт — немаловажные факторы, влияющие на выбор жилища. Такие квартиры имеют общее пространство, которое при ремонте необходимо разделить на несколько обязательных зон — гостиную, кухню, спальню, а иногда даже детскую.</p>
        </div>

        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Варианты зонирования</h2>
            <div className={styles.articles__greyblock_text}>
            <p className={styles.articles__p}>Однако зонирование — актуальная тема для помещений любых размеров. Счастливые обладатели просторных жилищ все чаще хотят избавиться от перегородок в пользу ощущения легкости, но зачастую не знают, как грамотно организовать open space так, чтобы не только сохранить целостность квартиры, но и при необходимости создать ощущение приватности для ее жителей.</p>
            <p className={styles.articles__p}>Конечно, вариантов зонирования помещения масса, нужно лишь ответственно подойти к этому вопросу и спланировать все заранее, в момент разработки проекта. А в этой статье мы расскажем о самых актуальных на данный момент приемах, которые чаще всего используют в своих проектах дизайнеры студии R-home.</p>
            </div>
          </div>
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Реечная конструкция</h2>
          <div>
          <p className={styles.articles__p}>Конструкция из деревянных реек от пола до потолка — это, пожалуй, самый популярный среди дизайнеров на данный момент способ зонирования. Такой вариант выглядит современно, визуально очень хорошо разделяет помещения и к тому же позволяет свободно проходить свету. Чтобы добиться целостности интерьера, такой же прием можно использовать еще и на потолке или на стенах.</p>
            <p className={styles.articles__p}>Расстояние между рейками может варьироваться в зависимости от требований. Если вы хотите сделать светлую зону и впустить свет, оставляйте между деталями больше пространства. А если в приоритете более интимная обстановка (например, для спальной зоны) — зазоры должны быть минимальными.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/zonirovanie/01_zonirovanie.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Сейчас многие дизайнеры применяют также подвижные вертикальные перегородки, которые работают по принципу жалюзи. Они могут превращаться в своеобразную стену, за которой ничего не будет видно и, наоборот, образовывать щели, благодаря чему в помещение будет поступать свет из смежной зоны. Часто такие перегородки оснащают подсветкой, в итоге получается функциональный и оригинальный элемент интерьера. Посмотреть пример такого способа зонирования можно в проекте студии R-home Квартира ЖК «Новая Боровая».</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мебель</h2>
          <div>
          <p className={styles.articles__p}>Ещё одним не менее популярным способом зонирования является применение для этих целей мебели и элементов интерьера помещения. В качестве визуального разделения комнаты можно использовать практически любой предмет мебели. Например, вы можете просто поставить диван посреди комнаты, где он будет использоваться и по назначению, и исполнять роль своеобразного разграничителя.</p>
            <p className={styles.articles__p}>Барная стойка — незаменимая вещь для студий или квартир с открытой планировкой. Как правило, ее устанавливают на границе кухни и гостиной. Удобно, практично и современно. Открытые высокие стеллажи со сквозными полками также могут выполнять сразу несколько важных функций: служат местом для хранения мелочей, не загромождают пространство и отлично зонируют. Использование мебели для отделения различных зон, пожалуй, самый легкодоступный и наименее рискованный прием.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/zonirovanie/02_zonirovanie.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Разноуровневый потолок</h2>
          <div>
          <p className={styles.articles__p}>Делить одно пространство на зоны можно также с помощью создания разноуровневого потолка. Правда, такой способ подходит только для просторных квартир с высокими потолками.</p>
            <p className={styles.articles__p}>Например, возьмем совмещенное пространство кухни, столовой и гостиной. Если позволяет высота помещения, можно опустить потолок над одной из зон — так мы добьемся визуального отделения одной части комнаты от остальных. Кстати, как правило, короба и опуски потолка делаются на кухне из-за технической необходимости, например, чтобы пустить воздуховод и вытяжку.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/zonirovanie/03_zonirovanie.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Стеклянная перегородка</h2>
          <div>
          <p className={styles.articles__p}>Перегородки из стекла за счет своей прозрачности практически не имеют веса в пространстве и прекрасно справляются с функцией зонирования. Они особенно актуальны в санузлах, кухнях и спальнях, позволяя разделить два небольших помещения не уменьшая их размеров.</p>
            <p className={styles.articles__p}>Если брать, например, кухню, то при наличии газовой плиты отделение кухонной зоны от гостиной глухой стеной просто необходимо по нормам. Но если все же хочется объединить эти два пространства, то в этом случае стеклянная перегородка может стать отличным решением. Стекло останавливает распространение запахов и звуков, но не препятствуют свету и не уменьшает размеры помещения.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/zonirovanie/04_zonirovanie.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Чтобы стеклянная перегородка не выглядела как стенка аквариума, используйте в ее оформлении оконную раскладку. Особенно популярен сейчас такой вариант с рамой из черного металла."
              />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Стеклянная перегородка смотрится легко, современно и уместно в любом стиле: как в брутальном лофтовом интерьере, так и в спокойной городской классике. К тому же стекло — это очень экологично, а, благодаря современным технологиям обработки, еще и необычайно прочно. Единственный минус этого материала в том, что он требует определенных усилий при уходе. Как видим, разнообразие строительных материалов и готовых решений сейчас позволяет без особых сложностей реализовать самые смелые дизайнерские решения. А на каком из вариантов остановиться — выбор только за вами!</p>
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

export default Zonirovanie