import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const PredmetniDizajn = () => (
  <Layout>
    <Seo 
      title={"Самые узнаваемые шедевры предметного дизайна - RHOME"} description={"Каждый год на различных выставках именитые дизайнеры представляют новые и все более оригинальные предметы интерьера."}
      location={"https://rhome.by/articles/predmetni-dizajn"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Самые узнаваемые шедевры предметного дизайна</h1>
          <StaticImage
            src="../../../images/inspiration/articles/predmetni-dizajn/09_predmetni-dizajn.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/predmetni-dizajn/00_predmetni-dizajn.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Каждый год на различных выставках именитые дизайнеры представляют новые и все более оригинальные предметы интерьера. Большинство из них популярны здесь и сейчас и, скорее всего, выйдут из моды через пару лет. Впрочем, есть в мире предметного дизайна и свои иконы стиля, которые с честью пережили испытание временем и не утратили своей актуальности и по сей день. В этой статье мы расскажем о 8 самых популярных предметах интерьера, ставших классикой, которые вы, вероятно, не раз видели в кино, на страницах интерьерных журналов и, конечно, в проектах студии R-home.</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кресло Grand Confort</h2>
          <div>
          <p className={styles.articles__p}>Трудно поверить, но впервые это кресло было представлено в Париже в 1929 году, однако даже спустя почти 90 лет оно все еще выглядит современно и актуально. Создателями данного предмета мебели считаются сразу несколько именитых дизайнеров и архитекторов: Ле Корбюзье, Пьер Жаннере и Шарлотта Перьен. Так как изначально кресло предназначалось для одного из проектов, над которым работал уже известный в то время Ле Корбюзье, то в историю эта модель вошла именно под его авторством.</p>
          <p className={styles.articles__p}>Grand Confort LC2 Club Chair (так звучит полное название модели) выполнено из гнутых стальных трубок и матовой черной кожи и идеально подходит для интерьеров в стиле лофт. Однако в последние годы появились разноцветные вариации этого кресла, что сделало модель еще более универсальной.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/03_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Торшер Arco Flos</h2>
          <div>
          <p className={styles.articles__p}>Несомненно, вы не раз видели этот необычный светильник на страницах журналов, в фильмах и современных интерьерах. Этот знаменитый торшер в 1962 году специально для бренда Flos создал известный итальянский дизайнер Акилле Кастильони, который заметил, что выход под люстру в его столовой находится в центре потолка, а вот сам обеденный стол располагается в стороне, поэтому осветить его сложно. В итоге Кастильони подарил миру безупречный напольный светильник, который с легкостью может заменить потолочный.</p>
          <p className={styles.articles__p}>Arco Flos — это беспроигрышное решение для гостиной, столовой и зоны отдыха. Стальная дуга торшера состоит из подвижных элементов, благодаря чему можно легко регулировать ее длину, высоту и направление света, а стильный утяжелитель из белого каррарского мрамора отлично впишется практически в любой интерьер. И, кстати, за пятьдесят шесть лет своего существования дизайн Arco не поменялся ни на йоту.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/08_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__lefttitle_righttext}>
        <p className={styles.articles__p}>Посмотреть торшер Arco Flos в интерьере можно в проекте студии R-home Квартира на ул. Сторожевская.</p>
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-storozhevskaya/03_kvartira-storozhevskaya.jpg"
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



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Стул Louis Ghost</h2>
          <div>
          <p className={styles.articles__p}>Стул Louis Ghost (или «Призрак Людовика») — результат творческого союза популярного современного дизайнера Филиппа Старка и итальянской мебельной фабрики Kartell. Впервые он был продемонстрирован публике в 2002 году и представлял собой современную версию классического кресла короля Луи XVI, выполненного из прозрачного пластика. Этот уникальный объект соединяет в себе элементы классицизма и инновационный актуальный дизайн и потому одинаково уместно смотрится как в классических интерьерах, так и в современных.</p>
          <p className={styles.articles__p}>Стул изготовлен из прочного пластика и, несмотря на свою визуальную хрупкость, выдерживает вес больше 100 килограмм. Он не отвлекает на себя внимание, полностью сливается с интерьером и не загромождает пространство. Louis Ghost на данный момент, пожалуй, самый тиражируемый объект из дизайнерских предметов мебели благодаря своей универсальности и сравнительно небольшой цене.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/05_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кресло Egg Chair</h2>
          <div>
          <p className={styles.articles__p}>В 1958 году датский архитектор и дизайнер Арне Якобсен работал над проектом Radisson Blu Royal Hotel в Копенгагене. Специально для этого отеля он создал кресло, похожее на скорлупу яйца, которое впоследствии стало одним из самых легендарных его творений.</p>
          <p className={styles.articles__p}>Egg Chair — функциональное и комфортное кресло в стиле модерн в свое время произвело настоящий фурор среди ценителей дизайнерской мебели, однако не потеряло своей актуальности до сих пор. Оригинальная конструкция кресла не только эффектно выглядит, но и обладает звукоизоляционным эффектом, позволяет по-настоящему расслабиться, почувствовать себя в уединении, словно в «скорлупе».</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/02_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Светильник Artichoke</h2>
          <div>
          <p className={styles.articles__p}>Настоящая классика предметного дизайна — светильник Artichoke, разработанный в 1958 году специально для ресторана Langelinie Pavillonen в Копенгагене. Его автор, датский дизайнер Поуль Хеннингсен, вдохновился причудливой формой растения артишок и придумал необычную конструкцию светильника, которая на протяжении вот уже 60 лет остается без изменений.</p>
          <p className={styles.articles__p}>Artichoke состоит из двенадцати стальных обручей, на которых расположены 72 медных листа в шахматном порядке. Такая конструкция обеспечивает равномерное освещение и позволяет не слепить глаза ярким светом. Выпускает этот светильник датская фабрика Louis Poulsen в трех цветах (медь, нержавеющая сталь, белый) и в четырех разных размерах (от 48 до 84 см в диаметре). Однако имейте в виду: люстра Artichoke весит от 25 кг и для ее удержания необходим очень крепкий потолочный крюк.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/07_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__lefttitle_righttext}>
        <p className={styles.articles__p}>Посмотреть светильник Artichoke в интерьере можно в проекте студии R-home Интерьер дома в Гомеле.</p>
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/interer-gomel/15_interer-gomel.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/house/interer-gomel/"
          title="Интерьер дома в Гомеле"
          metr="450"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/interer-gomel/00_interer-gomel.jpg"
              alt=""
            />
          }
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кресло Barcelona</h2>
          <div>
          <p className={styles.articles__p}>Это легендарное кресло было спроектировано в 1929 году специально для Международной выставки искусств в Барселоне архитектором-модернистом Людвигом Мисван дер Роэ. Выставку посетили и король Алфонсо VIII с королевой Викторией Евгенией, которые обратили свое внимание на этот необычный для того времени предмет интерьера, после чего кресло Barcelona пресса тут же окрестила «примером дизайна, достойного королей».</p>
          <p className={styles.articles__p}>Серийно производить кресло начали в 1953 году, и очень быстро эта модель завоевала статус чуть ли не главного атрибута жизни успешного человека. Строгость линий наряду с естественным изяществом и удобством сделали кресло Barcelona украшением каждого второго современного интерьера, символизируя о высоком вкусе и статусе владельца.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/01_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Стол Tulip</h2>
          <div>
          <p className={styles.articles__p}>Tulip — это еще один образец вневременной классики, который впервые был представлен общественности в далеком 1940 году американским дизайнером финского происхождения Ээро Саариненом. Этот необычный обеденный стол стал результатом экспериментов дизайнера со стеклопластиком, а форма его была вдохновлена каплей вязкой жидкости, медленно падающей и растекающейся по полу. В 1940-х идея мебели на одной ножке была поистине революционной, а футуристичный дизайн быстро сделал его любимцем не одного поколения дизайнеров.</p>
          <p className={styles.articles__p}>Сейчас Tulip представлен в нескольких вариациях — от компактного придиванного столика до большого обеденного — и имеет множество модификаций столешницы и цветовых решений. Такой стол вполне может стать ярким акцентом в помещении и гармонично вписаться как в классический, так и современный интерьер.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/04_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Стул Wishbone</h2>
          <div>
          <p className={styles.articles__p}>В 1949 году Ханс Вегнер, один из главных модернистов скандинавского дизайна, разработал для датской фабрики Carl Hansen & Søn оригинальный стул, который в итоге стал одним из самых выдающихся творений дизайнера. Спинка этого стула напоминает вилочковую кость курицы, которую по традиции ломают «на счастье», отсюда и название — Wishbone.</p>
          <p className={styles.articles__p}>Благодаря элегантным тонким ножкам и перекладинам из гнутого дерева стул весит совсем немного, а эргономичная спинка обеспечивает надежную поддержку позвоночника сидящего. В целом дизайн отличается лаконичностью и преобладанием простых, чистых линий. Модель была запущена в массовое производство в 1950 году и бесперебойно выпускается и по сей день, а палитра стульев регулярно пополняется новыми цветами и оттенками, что делает стул Wishbone универсальным и подходящим для любого стиля.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/predmetni-dizajn/06_predmetni-dizajn.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__lefttitle_righttext}>
        <p className={styles.articles__p}>Посмотреть стул Wishbone в интерьере можно в проекте студии R-home Современная квартира с нотками скандинавского стиля.</p>
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

export default PredmetniDizajn