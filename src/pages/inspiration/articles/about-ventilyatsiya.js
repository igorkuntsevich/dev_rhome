import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const AboutVentilyatsiya = () => (
  <Layout>
    <Seo 
      title={"Кому нужна вентиляция и как ее выбрать? Рассказывает дизайн студия Rhome"} description={"Собрали 12 факторов которые надо учесть при устновке вентиляции"}
      location={"https://rhome.by/articles/about-ventilyatsiya"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Кому нужна вентиляция и как ее выбрать?</h1>
          <StaticImage
            src="../../../images/inspiration/articles/about-ventilyatsiya/01_about-ventilyatsiya.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/about-ventilyatsiya/00_about-ventilyatsiya.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Вентиляция — постоянный и контролируемый воздухообмен в нормативных количествах. Проще говоря, это процесс обновления воздуха в вашем доме или квартире: в жилые помещения поступает очищенный воздух, а из кухни, санузлов и прихожей удаляется «грязный».</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Почему вентиляция жизненно необходима?</h2>
          <div>
          <p className={styles.articles__p}>Вместе со свежим воздухом в дом поступает кислород, который жизненно необходим любому человеку. При недостаточном его количестве могут возникать головные боли и другие недуги. Даже если дом или квартира находятся около парка или массива леса, где много растительности и деревьев, они не сильно повлияют на вентиляцию в помещениях. Такое расположение является лишь плюсом.</p>
            <p className={styles.articles__p}>При правильной работе системы вентиляции свежий воздух вытесняет застоявшийся, а вместе с ним улетучиваются запахи из кухни, пыль, и частицы бытовой химии. Хорошая вентиляция предотвращает появление сырости, а значит, грибка и плесени не испортит жизнь своим присутствием.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Какой бывает вентиляция?</h2>
          <div>
          <p className={styles.articles__p}>Естественная — работает на физических свойствах воздуха, проще говоря, разница давления снаружи и внутри дома осуществляет воздухообмен. Холодный воздух, поступающий из окон, дверей или во время простого проветривания, вытесняет теплый в вентканалы на кухне и других помещениях. Искусственная — система принудительного нагнетания и отвода воздуха. Такой вид вентиляции более эффективен, поскольку поступающий воздух может быть очищен от пыли, отрегулированы температура и влажность.</p>
          </div>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Зачем нужна искусственная вентиляция, если есть естественная?</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Часто в многоквартирных домах, особенно старых, вентиляционный канал не справляется со своей задачей. Попросту нет нужной тяги, чтобы выгнать старый воздух.</li>
              <li className={styles.articles__li}>Ваш дом расположен у дороги или в неблагоприятном районе с множеством производств. В таком случае настоятельно рекомендуется очищать воздух.</li>
              <li className={styles.articles__li}>Стеклопакеты вообще не пропускают воздух! Если забывать ставить их в режим проветривания, новый воздух долгое время не будет поступать в помещение.</li>
              <li className={styles.articles__li}>В санузлах более 5 м.кв. в любом случае придется установить принудительную вентиляцию, чтобы в помещении гарантированно было сухо.</li>
              <li className={styles.articles__li}>В каркасных домах с применением гидро- и пароизоляционных мембран и в домах из СИП-панелей без приточно-вытяжной системы практически невозможно создать комфортные условия для жизни, потому что дом полностью запечатывается и не дышит.</li>
              <li className={styles.articles__li}>Что еще делает искусственная вентиляция? Вентиляционные системы могут быть дополнительными функциями фильтрации, подогрева, увлажнения, осушения или обеззараживания воздуха.</li>
            </ul>
          </div>
        </div>

        <div className={styles.articles_video + " " + styles.articles__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/PC6ZfBBMGB8?si=U3XwCp7RKSIhtfft" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>


        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Что учесть при организации вентиляции в помещении?</h2>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Движению свежего воздуха ничто не должно мешать</h2>
          <div>
          <p className={styles.articles__p}>Например, плотно закрытые двери и пороги. Часто полотно подрезают снизу на пару сантиметров. Если у вас уже установлены дорогостоящие двери из ценных пород, рядом с ними в стене нужно проделать отверстие и закрыть его решеткой. К счастью, выбор решеток огромен и всегда можно подобрать элегантный вариант, который не испортит интерьер.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Необходимо правильно организовать движение воздуха</h2>
          <div>
          <p className={styles.articles__p}>Например, если гардеробная находится между кухней и спальней, отверстие в стене для свежего воздуха нужно делать в смежной со спальней стене, а для отвода воздуха — вверху в смежной с кухней стене. Так кухонные запахи не пропитают рубашки и платья, а свежий воздух, поступая из окна, будет проходить через помещение с одеждой.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Обратиться к профессионалам</h2>
          <div>
          <p className={styles.articles__p}>На сегодняшний день установка приточно-вытяжной вентиляции уже не роскошь. В стандартной трешке она может стоить от 1,5 до 2 тыс. у.е. При этом все тонкости вашей планировки будут учтены профессионалами на стадии разработки проекта, а в доме всегда будет свежий воздух.</p>
          </div>
        </div>

        <div className={styles.articles_video + " " + styles.articles__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Uyl8Lkp4MAc?si=nerxVxbrL5cKwvs6" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Как все рассчитать и что нужно учесть?</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Скорость воздухообмена измеряется в кубических метрах в час. Чтобы приблизительно представить, какой нужен воздухообмен, нужно площадь умножить на высоту помещения.</li>
              <li className={styles.articles__li}>Производительность системы должна учитывать высоту помещения и количество проживающих. От этого будет зависеть сечение воздуховодов.</li>
              <li className={styles.articles__li}>Учтите, что все воздуховоды будут установлены прямо на потолке, поэтому дизайн проект должен сразу учитывать их расположение и диаметр.</li>
              <li className={styles.articles__li}>Лучше выбрать прямоугольные воздуховоды, которые, по сравнению с круглыми, занимают под потолком заметно меньше места.</li>
              <li className={styles.articles__li}>Проконтролируйте, чтобы гибкие воздуховоды не пережались профилем потолка из ГК. Иначе это приведет к появлению шума и свиста.</li>
              <li className={styles.articles__li}>По возможности лучше вообще не использовать гибкие воздуховоды, т.к. гладкая труба имеет меньшее сопротивление воздушному потоку.</li>
              <li className={styles.articles__li}>Теплоизоляция на притоке металлических воздуховодов — обязательна! Иначе появится конденсат.</li>
              <li className={styles.articles__li}>Объединять кухонную и санузловую вытяжку запрещено.</li>
              <li className={styles.articles__li}>Кухонная вытяжка работает эффективнее, если доработать ее канальным вентилятором. При этом родной вентилятор просто удаляется.</li>
              <li className={styles.articles__li}>Повороты в 90° лучше делать два раза по 45°.</li>
            </ul>
          </div>
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

export default AboutVentilyatsiya