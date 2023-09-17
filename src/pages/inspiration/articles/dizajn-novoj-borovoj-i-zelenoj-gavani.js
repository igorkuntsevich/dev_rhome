import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { ProjectConsultationSergey } from "../../../subitems/project/consultation/project-consultation-sergey"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"





const DizajnNovojBorovoj = () => (
  <Layout>
    <Seo 
      title={"Дизайн интерьера квартир в Новой Боровой, Пирсе и Зеленой Гавани - RHOME"} description={"Студия Rhome собрала кейсы из популярных ЖК в Минске"}
      location={"https://rhome.by/articles/dizajn-novoj-borovoj-i-zelenoj-gavani"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Дизайн интерьера квартир в Новой Боровой, Пирсе и Зеленой Гавани</h1>
          <StaticImage
            src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/11_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/00_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>A100-девелопмент делает интересные проекты с архитектурной и урбанистической точки зрения. У них узнаваемый стиль, а жилые кварталы совершенствуются, становясь все более инновационными и продуманными. Запрос жителей Новой Боровой, Пирса, Зеленой Гавани – современное и технологичное окружение, построенное на принципах добрососедства, открытости и мобильности. В этих районах рождаются настоящие сообщества со своими традициями, правилами жизни и ценностями.</p>
        </div>



        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSergey
                text="Дизайн интерьера, хоть и скрыт от глаз прохожих, но все же является продолжением городской среды. Нам интересно делать проекты в Новой Боровой, Пирсе, Зеленой Гавани – там пространство вокруг дома задает тон в создании интерьера. Для нас важно создавать интерьеры, которые отражали бы пожелания заказчика и дух пространства, в котором они расположены."
              />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Мы уже сделали несколько дизайн-проектов в домах А100-девелопмент, поэтому мы:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Знакомы с конструктивными особенностями жилых комплексов Новая Боровая, Пирс, Зеленая Гавань.</li>
              <li className={styles.articles__li}>Знаем как работать с типовыми планировками А100 в панельных домах без возможности перепланировки.</li>
              <li className={styles.articles__li}>Имеем успешный опыт взаимодействия с товариществом собственников.</li>
            </ul>
          </div>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Дизайн интерьера дома в Зелёной Гавани</h2>
          <div>
          <p className={styles.articles__p}>В этом проекте было важно создать интерьер городского дома. ЖК Зеленая Гавань находится за пределами городской черты, но это все же не формат загородного дома, куда приезжают на выходные и в отпуск. Нам хотелось совместить лучшее от городской эстетики и частных домов. В этом дизайн-проекте мы работали с пространством в целом — здесь нет мелких деталей, мы работали с крупными формами и текстурами. Зонирование пространства осуществляется за счет использования разных материалов отделки и объемных форм — дивана, обеденного стола, острова. Мы стремились сделать пространство легким, используя утонченную мебельную фурнитуру и светильники.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/09_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/interer-zelenoja-gavan/08_interer-zelenoja-gavan.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/house/interer-zelenoja-gavan/"
          title="Черничный проезд"
          metr="189"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/interer-zelenoja-gavan/00_interer-zelenoja-gavan.jpg"
              alt=""
            />
          }
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Дизайн интерьера квартиры с объединенными комнатами в Новой Боровой</h2>
          <div>
          <p className={styles.articles__p}>Видение интерьера этой квартиры в Новой Боровой – объединенное пространство, много света, натурального дерева и минимум деталей. Сложность в том, что в этой квартире почти все стены несущие, поэтому убрать полностью их невозможно. Мы обошли этот момент, расширив дверные проемы. Так мы объединили все помещения, кроме санузла и спальни в единое пространство, в котором одна зона плавно перетекает в другую. Интересная деталь – барная стойка из древесного слэба, разграничивающая зону кухни и столовой.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/07_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>


        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/05_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/12_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Дизайн интерьера двухкомнатной квартиры в Новой Боровой</h2>
          <div>
          <p className={styles.articles__p}>В этой квартире мы стремились создать минималистичный интерьер, где будет достаточно места для хранения вещей. Хозяева квартиры рассказали нам о своей любви к дереву и камню, поэтому мы стремились использовать по максимуму эти текстуры в дизайне интерьера квартиры. Цветовая гамма интерьера максимально приближена к природным оттенкам, здесь нет слишком броских элементов — все сбалансировано. Метраж не очень большой — 60 кв. м., поэтому мы максимально рационально использовали пространство, чтобы разместить большую ТВ-зону, рабочее место и даже гардеробную, сохранив ощущение простора и легкости.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/01_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>


        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/02_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/13_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Дизайн интерьера квартиры на Небесной улице в Новой Боровой</h2>
          <div>
          <p className={styles.articles__p}>В этом проекте было важно продумать пространство с учетом увлечений хозяев — для них было важно иметь свой спортзал в этой небольшой квартире. Еще одно пожелание — зона для чтения на подоконнике и меловая стена для творчества на кухне. Это панельный дом — здесь серьезные изменения в планировке невозможны. Мы учли все пожелания заказчиков, используя по максимуму потенциал изначальной планировки квартиры в Новой Боровой. Спальню было важно максимально разгрузить, поэтому все зоны хранения размещены в гостиной — в закрытом стеллаже рядом с ТВ-зоной и в отсеке под подоконником. Такой вариант визуально не перегружает пространство, а места хранения много.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/10_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>


        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/03_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/14_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Классический интерьер квартиры в Боровлянах</h2>
          <div>
          <p className={styles.articles__p}>Дизайн интерьера этой квартиры выполнен в неоклассическом стиле. Здесь много классических элементов, но мы также добавили современный декор, чтобы уравновесить дух нового дома с классической эстетикой, которой отдают предпочтение хозяева квартиры. Для этого проекта мы выбрали классические светильники и мебель, стены декорированы молдингом, в цветовой гамма — приглушенные пудровые оттенки. Детскую комнату было решено делать отдельную, поэтому пространство гостиной продумывалось с учетом того, что она будет одновременно играть роль спальни хозяев квартиры.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/08_dizajn-novoj-borovoj-i-zelenoj-gavani.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-borovlyani/03_kvartira-borovlyani.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-borovlyani/"
          title="Квартира в Боровлянах"
          metr="70"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-borovlyani/00_kvartira-borovlyani.jpg"
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

export default DizajnNovojBorovoj