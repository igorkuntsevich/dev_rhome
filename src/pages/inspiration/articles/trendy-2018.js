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




const Trendy2018 = () => (
  <Layout>
    <Seo 
      title={"Что актуально в дизайне интерьера в 2018 - RHOME"} description={"Разберем какие цвета будут актуальные и новый тренд гармонии с природой"}
      location={"https://rhome.by/articles/trendy-2018"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Тренды 2018: что актуально в дизайне интерьера в этом году</h1>
          <StaticImage
            src="../../../images/inspiration/articles/trendy-2018/09_trendy-2018.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/trendy-2018/00_trendy-2018.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>

        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Дом — это важнейшее место в жизни любого человека. Здесь мы отдыхаем, работаем, набираемся сил, проводим время с близкими и растим своих детей. Конечно, при обустройстве столь значимого пространства прежде всего следует руководствоваться своими вкусами и предпочтениями. Однако если вы так же, как и мы, вдохновляетесь красивыми вещами, любите перемены и готовы к ним — добро пожаловать. Чтобы облегчить вам задачу в создании идеального интерьера, собрали воедино все модные тенденции 2018 года.</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>В гармонии с природой</h2>
          <div>
            <p className={styles.articles__p}>Уже который год натуральные материалы не теряют свою актуальность. Дерево, стекло, камень и металл по-прежнему вытесняют из интерьеров неэкологичный пластик, а синтетические ткани в обивке и декоре заменяют на натуральные. Особенно популярны в этом сезоне деревянные поверхности из неокрашенной древесины, фактура камня, живые растения, керамика и плетеная мебель.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/01_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>


        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Декоративные элементы и принты тоже тяготеют к природе. Изображения животных, птиц, листьев и цветов все чаще появляются в современных городских интерьерах. Безусловным хитом 2017 стали яркие тропические мотивы и интенсивный флористический принт, которые не собираются покидать стены и элементы декора и в текущем году.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/02_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Власть цвета</h2>
          <div>
          <p className={styles.articles__p}>Одна из главных тенденций в цвете — это акцент на яркие палитры и сочные краски в дизайне мебели, светильников, аксессуаров. Пастельные оттенки, навеянные скандинавской стилистикой, уходят на второй план. Недаром институт цвета Pantone выбрал главным цветом 2018 года Ultra Violet.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/03_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>


        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Фиолетовый — это сложный, доминирующий цвет, который вряд ли станет массовым, так как носит скорее богемный характер. Для любителей более сдержанных тонов в интерьере также есть рекомендации по актуальным цветам текущего года: пудрово-розовый, терракотовый, медово-желтый, горчичный, зеленый и цвет Oceanside (или сине-серо-зеленый).</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/04_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Все грани металла</h2>
          <div>
          <p className={styles.articles__p}>Металл в интерьере — не только практичный, но и стильный прием. Если раньше этот материал встречался преимущественно в ванной и на кухне, то теперь его используют повсюду. «Теплые» металлы вроде латуни, бронзы и меди по-прежнему очень популярны среди дизайнеров. Металлические светильники отлично сочетаются с мрамором, стеклом и бетоном, а журнальные столики и подстолья будут выгодно смотреться в окружении бархатной мебели и темно-коричневого дерева.</p>
            <p className={styles.articles__p}>Также в моду стремительно входят всевозможные металлические покрытия черного цвета. Строгий и элегантный, этот цвет прекрасно впишется в любой интерьер и придаст помещению скульптурную графичность.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/05_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Фактурные стены</h2>
          <div>
          <p className={styles.articles__p}>Еще одна распространенная тенденция в дизайне квартир — усложнение внутренней архитектуры стен дополнительными элементами. Обои и декоративная штукатурка уступают место дорогой тканевой обивке. Также на пике популярности остаются разнообразные стеновые панели, особенно из ценных пород дерева. Их фактурная поверхность напоминает о близости к природе и создает в помещении дополнительную тепло- и звукоизоляцию.</p>

          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/06_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Очарование роскоши</h2>
          <div>
          <p className={styles.articles__p}>Так называемый современный стиль в интерьере постепенно видоизменяется. Тренды 2018 года отсылают нас к элегантной роскоши с элементами ар-деко 20-х годов прошлого века. Второе дыхание обретают отдельные элементы стиля: симметричная организация пространства, позолоченные детали, благородные цвета, обилие зеркал. Изысканность 20-х годов комфортно уживается с классикой, прекрасно контрастирует с минимализмом скандинавского стиля и выгодно подчеркивает брутальность лофта.</p>
            <p className={styles.articles__p}>Снова на пике популярности дорогие ткани, мрамор, ценные породы дерева и металлы. Что касается обивки, то тут бесспорное лидерство за бархатом. Многие дизайнеры мебели в этом сезоне включили бархатную обивку в свои топы, особенно в цвете драгоценных камней, таких как сапфир, цитрин, изумруд и аметист. Отсюда и новый виток моды на винтажную мебель.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/07_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Курс на индивидуализацию</h2>
          <div>
          <p className={styles.articles__p}>Как ни странно, но самая главная тенденция 2018 года в дизайне призывает как раз игнорировать эти самые тенденции, персонализировать пространство и подстраивать интерьер в первую очередь под себя. В таком индивидуальном подходе к дизайну сконцентрировано все, что дорого жильцам, учитываются их интересы и вкусы. Интерьер больше не ограничен рамками одного стиля, а следует в первую очередь потребностям и предпочтениями владельцев.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2018/08_trendy-2018.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>В свете этого курса на индивидуализацию все большую популярность приобретает дизайнерская мебель. Знаменитые fashion-дизайнеры, художники и скульпторы становятся авторами кресел, диванов и ковров. Коллаборации выходят небольшими сериями, подчеркивая элитарность и уникальность продукта. Но даже если у вас нет возможности приобретать уникальную дизайнерскую мебель и элементы декора, масс-маркет сейчас также стремится производить изделия, которые легко можно настроить под себя, всего лишь поменяв, например, расположение ламп, полок, модулей. Но самое главное — не забывайте: интерьер должен быть комфортным пространством для своих обитателей, даже когда их понятия о красоте идут в разрез с модными тенденциями.</p>
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

export default Trendy2018