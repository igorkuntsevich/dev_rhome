import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { ProjectConsultationSergey } from "../../../subitems/project/consultation/project-consultation-sergey"




const DorogojInterer = () => (
  <Layout>
    <Seo 
      title={"Как создать «дорогой» интерьер - RHOME"} description={"Что делает интерьер дорогим? Рассмотрим подробнее"}
      location={"https://rhome.by/articles/dorogoj-interer"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Как создать «дорогой» интерьер: 5 советов от наших дизайнеров</h1>
          <StaticImage
            src="../../../images/inspiration/articles/dorogoj-interer/07_dorogoj-interer.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/dorogoj-interer/00_dorogoj-interer.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>В современном мире понятие «дорогой» интерьер вовсе не подразумевает под собой дорогостоящий ремонт и наличие в помещении ценной дизайнерской мебели. На смену дворцовой роскоши и избыточной вычурности пришли спокойные благородные интерьеры, которые благодаря нехитрым декораторским приемам производят впечатление статусного жилища.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dorogoj-interer/01_dorogoj-interer.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Существует множество способов заставить вашу квартиру (дом) выглядеть дороже, не вкладывая в ремонт целое состояние. Вооружившись советами дизайнеров студии R-Home, вы легко сможете превратить даже небольшую квартиру в панельке в роскошные апартаменты.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Освободите пространство и «поднимите» потолки</h2>
          <div>
          <p className={styles.articles__p}>Безусловно, синонимом дорогого интерьера является просторное помещение, в котором много воздуха и света. Захламленная комната всегда выглядит дешево. Но даже если площадь вашего жилища весьма скромная, есть множество приемов, помогающих хотя бы визуально расширить пространство. Тщательно продумайте системы хранения, уберите с глаз долой ненужные мелочи, освободите стеллажи и столики от лишних вещей и сувениров, оставив только действительно выразительный декор. Один из любимых трюков — закрепить длинные шторы под самым потолком: чем выше будут подвешены шторы, тем выше будут казаться потолки.</p>
          </div>
        </div>


        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dorogoj-interer/02_dorogoj-interer.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSergey
                text="Высокие потолки всегда обогащают интерьер и расширяют пространство. Если в квартире высота потолков стандартная, ее можно увеличить за счет оптических приемов: низкая мебель, вертикальные полосы на стенах, подсветка по контуру потолка."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Создайте симметрию</h2>
          <div>
          <p className={styles.articles__p}>Симметрия — один из основных принципов классического дизайна. Симметричные интерьеры приятны глазу, выглядят уравновешенно и величественно, дарят ощущение гармонии и баланса. Даже недорогие бюджетные аксессуары, расставленные по обеим сторонам от композиционного центра, заиграют новыми красками. Причем эти предметы могут быть не полностью идентичными, а просто похожими по силуэту. Так вы добьетесь симметрии, и это не будет выглядеть скучно.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dorogoj-interer/03_dorogoj-interer.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Для того, чтобы интерьер выглядел гармоничным и завершенным, не обязательно создавать полностью зеркальную композицию. Симметрия строится на размещении парных предметов на одинаковом расстоянии по отношению к визуальной оси (ей может стать любой объект, не обязательно находящийся в центре помещения)."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Добавьте немного искусства</h2>
          <div>
          <p className={styles.articles__p}>Различные арт-объекты гарантированно делают интерьер визуально «дороже». Картины, скульптуры, фигурные подсвечники, гипсовые бюсты, зеркала в оригинальных рамах — все, что ассоциируется с историей, придает интерьеру налет богемности и статусности. Оригинальные арт-объекты можно за небольшие деньги приобрести на выставках молодых художников и блошиных рынках. Любая небанальная деталь может стать ярким акцентом всего помещения и отвлечь от скромного дизайна.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dorogoj-interer/04_dorogoj-interer.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSvetlana
                text="Лучше приобрести интересное полотно начинающего художника, чем украшать квартиру репродукциями всемирно известных шедевров. Главное — не забывайте учитывать масштабы помещения: небольшая по размеру картина на большой стене будет выглядеть плохо и уныло. Идеальная высота для полотна — уровень взгляда человека среднего роста (145-150 см от пола)."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Сделайте акцент на одной дорогой детали</h2>
          <div>
          <p className={styles.articles__p}>Чтобы создать впечатление «состоятельного» интерьера, совсем не обязательно обставлять всю комнату дорогой мебелью. Достаточно акцентировать внимание на одной, но эффектной детали. Это может быть что угодно: антикварный стол, кресло от известного дизайнера, впечатляющая люстра или зеркало в оригинальной раме. Этот способ прост и необыкновенно эффективен, поэтому дизайнеры с удовольствием используют его в своей практике.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dorogoj-interer/05_dorogoj-interer.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSergey
                text="Например, культовое кресло Арне Якобсена всегда привлекает внимание и способно в одиночку увеличить ценность всего интерьера. Даже если у вас нет возможности приобрести оригинал, сейчас существует огромное количество производителей, выпускающих качественные реплики известных дизайнерских предметов интерьера по бюджетным ценам."
              />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Решитесь на насыщенные и темные цвета</h2>
          <div>
          <p className={styles.articles__p}>Если хотите, чтобы квартира выглядела по-настоящему дорого, используйте насыщенную и темную цветовую гамму в отделке, декоре. Например, глубокие оттенки синего, бордового, зеленого и серого всегда смотрятся впечатляюще и придают обстановке эффект торжественности. И помните главное: в погоне за «дорогим» интерьером не стоит забывать о сохранении правильного баланса между здравым смыслом, стилем и функциональностью.

</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dorogoj-interer/06_dorogoj-interer.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSergey
                text="Покрасьте стены в глубокий оттенок синего или серого цвета и подберите мебель в тон. Матовая краска в сочетании с бархатной обивкой придадут помещению величественный вид. Еще один классический дуэт — черный и золото. Однако в этом случае важно не переборщить с золотыми акцентами, которые можно добавлять в интерьер очень дозированно."
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

export default DorogojInterer