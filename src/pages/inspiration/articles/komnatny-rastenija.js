import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const KomnatnyRastenija = () => (
  <Layout>
    <Seo 
      title={"Топ популярных комнатных растений, которые не требуют особого ухода - RHOME"} description={"Украшение дома при помощи декоративных комнатных растений – очень популярный способ придания помещению индивидуальности. Зеленые обитатели квартир насыщают воздух кислородом"}
      location={"https://rhome.by/articles/komnatny-rastenija"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Топ популярных комнатных растений, которые не требуют особого ухода</h1>
          <StaticImage
            src="../../../images/inspiration/articles/komnatny-rastenija/09_komnatny-rastenija.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/komnatny-rastenija/00_komnatny-rastenija.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
        <p className={styles.articles_intro_p}>Украшение дома при помощи декоративных комнатных растений – очень популярный способ придания помещению индивидуальности. Зеленые обитатели квартир насыщают воздух кислородом и очищают его от токсинов, помогают поддерживать баланс влажности, привносят уют и тепло в дом.</p>
        <p className={styles.articles_intro_p}>Очевидно, что выбор комнатных растений определяется в первую очередь личными предпочтениями, а не модными трендами. Но тем не менее свои тенденции есть и в сфере комнатного цветоводства. В последние годы стало очень популярно украшать интерьеры нецветущими субтропическими растениями – пальмами, монстерами, банановыми деревьями. Такая флора выглядит очень ярко и эффектно. Многие из этих растений переживают новую волну популярности благодаря моде на интерьеры 70-х.</p>
        <p className={styles.articles_intro_p}>Однако, не стоит забывать, что любые растения требуют ухода. Кактусы и суккуленты известны своей живучестью уже давно, но сейчас в моде всевозможные зеленые тропические растения. Именно поэтому мы составили для вас список самых популярных и неприхотливых «зеленых питомцев». Эти комнатные растения растут практически сами по себе, от вас потребуется лишь вспоминать о них время от времени.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/01_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Монстера</h2>
          <div>
          <p className={styles.articles__p}>Даже если вы ничего не смыслите в цветоводстве и не представляете, что скрывается за всеми этими странными латинскими названиями, монстеру вы точно не раз видели в интерьерах квартир, в салонах, офисах, модных ресторанах и в Instagram-аккаунтах известных блогеров. Это, безусловно, самое популярное зеленое растение 2018-2019 годов.</p>
            <p className={styles.articles__p}>На сегодняшний день существует несколько видов монстер (заостренная, деликатесная, Адасона), но в домашних условиях чаще всего выращивают деликатесную. Сочные расщепленные листья этого растения подарят атмосферу тропиков в любом месте, где вы решите его поставить. Помимо эстетических качеств монстера обладает еще одним важным свойством – способностью очищать воздух вокруг: она помогает поддерживать баланс влажности и поглощает из воздуха вредные вещества.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/02_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Уход за этим цветком (а точнее, лианой) достаточно прост и не требует от владельца особых изысков. Лучше всего монстера растет под ярким, но рассеянным светом, поэтому подходящим местом для нее станет западная или восточная часть квартиры недалеко от окна. Просто убедитесь, что монстера получает достаточно непрямого солнечного света и поливайте ее каждый раз, когда видите, что земля в горшке пересохла. Вот и весь уход.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/03_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__bigmargin}>
          <ProjectConsultationAlexey
            text="Чувство меры — необходимое условие при выборе возможных комбинаций озеленения интерьера. Если пренебречь этим правилом, вы рискуете превратить свой дом в тропическую оранжерею или джунгли."
          />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Алоэ</h2>
          <div>
          <p className={styles.articles__p}>Еще какое-то время назад алоэ можно было встретить разве что на подоконниках у бабушек. Но в последние годы на волне популярности неприхотливых видов растений алоэ все чаще стало появляться в современных интерьерах. И в этом нет ничего удивительного, потому что это растение максимально непритязательно в уходе: не нуждается в частом поливе, постоянном солнечном свете, может расти в одном и том же горшке в течение многих лет. Помимо неприхотливости, это еще и одно из самых полезных растений, которыми вы можете украсить свой дом. Сок алоэ вера используется в качестве увлажняющего средства для кожи, а также для лечения мелких порезов и снятия зуда при солнечных ожогах.</p>
            <p className={styles.articles__p}>Удобрять алоэ достаточно раз в месяц – весной и летом. Влажность воздуха также не играет особой роли для алоэ, однако для профилактики рекомендуется иногда устраивать теплый душ для очистки его листьев. Главное – не переборщить с водой.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/04_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Аспидистра</h2>
          <div>
          <p className={styles.articles__p}>Аспидистра (или Сast Irоn, что переводится как «чугунное дерево») – еще один неприхотливый и привлекательно выглядящий комнатный цветок, который относится к древнейшим растениям на земле. Названный в честь металлического сплава, он также несгибаем и способен выживать в самых неблагоприятных условиях, даже под открытым небом в глубокой тени.</p>
            <p className={styles.articles__p}>Это зеленое растение на удивление безразлично к частому поливу и прекрасно чувствует себя без воды на протяжении нескольких недель. Аспидистра также не особо требовательна и к освещению, так как может комфортно себя чувствовать как в светлом месте, так и в тени. Все это делает растение идеально подходящим для темных уголков квартиры, которые обычно сложно приукрасить.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/05_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Единственное важное условие, необходимое для успешного содержания дома «чугунного дерева» – повышенная влажность. Растению необходимо обеспечить среду, близкую к естественной субтропической, и с этим прекрасно справится любой увлажнитель воздуха. От вас же – минимум хлопот.</p>
        </div>
        <div className={styles.articles__bigmargin}>
          <ProjectConsultationAlexey
            text="Не стоит размещать комнатные растения в непосредственной близости от холодильника, плиты или духовки. Жаркий воздух, равно как и холодный, губителен для абсолютного большинства представителей флоры."
          />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Сансевиерия</h2>
          <div>
          <p className={styles.articles__p}>Сансевиерию (известна также как «щучий хвост» и «тещин язык») часто называют любимым цветком всех минималистов, путешественников и холостяков. Почему? Да потому что это растение практически неубиваемо, способно прекрасно существовать без воды по нескольку недель и при этом выглядит очень современно и лаконично.</p>
            <p className={styles.articles__p}>Выходец из западной Африки, этот цветок совершенно неприхотлив ни к свету, ни к воде, но при этом сансевиерия — один из чемпионов по производству кислорода среди домашних растений. Этот комнатный «питомец» одинаково эффектно будет смотреться в любых помещениях: квартирах, домах, офисах, ресторанах, в общественных пространствах и ландшафтных композициях. Сансевиерия идеально впишется в интерьер в стиле лофт, модерн и даже самый неприветливый к цветам стиль – минимализм. Благодаря компактному росту листьев, щучий хвост прекрасно подходит для неиспользуемых простенков, углов и ниш. С помощью него часто зонируют помещения и заполняют пространства там, где другие растения обычно не хотят расти.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/06_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Папоротник</h2>
          <div>
          <p className={styles.articles__p}>Если вы любите пышную зелень, но не любите возиться с цветами, домашний папоротник станет для вас идеальным выбором. Дизайнеры и декораторы уважают папоротник за густую шапку зеленых листьев, с помощью которых получаются очень естественные, живые композиции в интерьере. А еще он прекрасно смотрится в соседстве с мебелью из дерева.</p>
            <p className={styles.articles__p}>При всей своей внешней простоте домашний папоротник станет настоящим украшением в доме, так как на протяжении всего года его крона остается зеленой. Более того, это растение считается своеобразным индикатором воздуха — в дикой природе папоротник не может расти в сильно загазованных местах, а в квартире ему не подходит несвежий пересушенный воздух. Так что если папоротник вдруг начал увядать, это сигнал обратить внимание на свежесть и влажность воздуха в помещении.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/07_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Уход за домашним папоротником максимально прост, а эстетический эффект потрясающий. Запомните: главное правило ухода за цветком – избегать попадания прямых солнечных лучей. Поэтому растение лучше разместить не на окне, а на полу, чтобы был необходимый доступ к солнечному свету, но непрямому. Да и в целом, папоротник — довольно крупное растение, и цветочный горшок, с точки зрения интерьера, будет больше уместен на полу, нежели на подоконнике. Идеальное место для растения – простенок между окнами.</p>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/komnatny-rastenija/08_komnatny-rastenija.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__bigmargin}>
          <ProjectConsultationAlexey
            text="При оформлении интерьера небольших по площади комнат не рекомендуется использовать крупные виды растений. Для тесных пространств больше подойдут подвесные кашпо и расставленные на заднем плане небольшие растения и суккуленты."
          />
        </div>
        
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>При помощи правильно подобранных комнатных растений вы сможете не только внести в интерьер элемент живой природы, но и создать гармоничное сочетание цветовых акцентов, наполнив жилое помещение приятными ароматами и нотками свежести.</p>
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

export default KomnatnyRastenija