import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { PortfolioItem } from "../../../subitems/portfolio"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const ArDeko = () => (
  <Layout>
    <Seo 
      title={"Ар-деко - RHOME"} description={"Разберем особенности стиля, материалы отделки и предметы интерьера"}
      location={"https://rhome.by/articles/ar-deko"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Ар-деко</h1>
          <StaticImage
            src="../../../images/inspiration/articles/ar-deko/11_ar-deko.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/ar-deko/00_ar-deko.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>В статье о главных трендах 2019 года мы уже рассказывали о невероятной популярности элементов в стиле ар-деко в наши дни. В целом, стиль этот на протяжении долгого времени горячо любим многими известными дизайнерами и декораторами, а его легкость, смелость и эклектичность отлично вписывается в самые современные интерьеры.</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>История</h2>
          <div>
          <p className={styles.articles__p}>История ар-деко (от фр. art deco — «декоративное искусство») как интерьерного стиля началась в 1925 году с Международной выставки декоративного и промышленного искусства в Париже. Роскошный и утонченный, ар-деко зародился на почве послевоенного кризиса и Великой депрессии, когда «развалинам» и нищете начали противопоставлять шик и богатство. Этот стиль соединил в себе черты модерна и неоклассицизма, для которых характерны в первую очередь пышность и изящность. Атмосфера стиля в полной мере отражала образ жизни аристократов и творческой интеллигенции того времени. Сейчас ар-деко также часто выбирают люди творческих профессий: художники, актеры, музыканты и звезды TV.</p>
            <p className={styles.articles__p}>Конечно, воспроизвести классический ар-деко в современной городской квартире непросто: такой интерьер предполагает наличие очень просторных помещений, высоких потолков и больших окон. На сегодняшний день этот стиль достаточно редко воссоздается в чистом виде, но, если вас завораживает атмосфера Голливуда 20-х годов, вы можете работать на ассоциациях и дозированно вводить в свой интерьер отдельные элементы этого шикарного стиля.</p>
            <p className={styles.articles__p}>В рамках гида по стилям от студии RHome (предыдущие статьи можно посмотреть здесь) разбираемся, из чего состоит ар-деко и как вписать его в современное пространство.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/01_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Геометрия и симметрия</h2>
          <div>
          <p className={styles.articles__p}>Одна из основных черт стиля – четкая геометрия пространства. Здесь нет места романтичным орнаментам и абстрактным принтам, строгая продуманность и выразительность характеризуют ар- деко. Как любому классическому стилю, ар-деко также важна симметрия. Настенный декор, прикроватные тумбочки, кресла, столики, подушки – здесь все выстраивается по принципу симметрии.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/02_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Чаще всего используют такие узоры:</h2>
          <div>
            <ul>
              <li className={styles.articles__li}>Полоски.</li>
              <li className={styles.articles__li}>Зигзаги и ступени.</li>
              <li className={styles.articles__li}>Мотивы из повторяющихся кругов, ромбов, квадратов.</li>
              <li className={styles.articles__li}>Шестигранники или пчелиные соты.</li>
              <li className={styles.articles__li}>Гексагональный узор или рыбья чешуя.</li>
            </ul>
          </div>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Материалы</h2>
          <div>
          <p className={styles.articles__p}>Ар-деко – это стиль, который обычно ассоциируется с пышными вечеринками, элегантными нарядами и роскошными домами, поэтому вполне логично, что за ним прочно закрепилась репутация «дорогого» стиля.</p>
          <p className={styles.articles__p}>Ценные и редкие природные материалы – неотъемлемая часть ар-деко. Черное и красное дерево, мрамор, серебро, полированный камень, слоновая кость и хрусталь – все это очень широко используется в отделке помещений. Самые распространенные ткани для оформления мебели и аксессуаров – бархат, шелк, парча. Среди металлов особенно уместны будут металлы теплых оттенков: латунь, золото, бронза.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/03_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
              <p className={styles.articles__p}>Кстати, блеск – это наиболее характерная черта классического ар-деко. Глянцевые поверхности, большое количество зеркал, преломление света через стекло и отражающие элементы современной техники создают ту самую атмосферу роскоши и вечного праздника. Также очень широко используются в интерьерах ар-деко зеркальные элементы. Это могут быть как настенные зеркала в вычурных дорогих рамах, так и зеркальная плитка, вставки на мебели.</p>
            </div>
        <div className={styles.project__bigmargin}>
            <ProjectConsultationAlexey
                text="Отдавайте предпочтение поверхностям с блестящими металлическими элементами, зеркальными и стеклянными вставками для создания эффекта мерцания. Лак и глянцевая краска, полированное дерево и металл – в ар-деко все должно блестеть!"
            />
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Цветовая палитра</h2>
          <div>
          <p className={styles.articles__p}>Цветовая палитра интерьера в стиле ар-деко отличается сочностью, яркостью и резкими контрастами. Главная задача – создание не повседневной обстановки, а немного театральной, поэтому в интерьерах часто используют черно-белый контраст. Он может быть в узорах на стенах, в напольной плитке и даже на потолке.</p>
          <p className={styles.articles__p}>Помимо контрастной гаммы в интерьер можно вводить насыщенные цвета, однако они должны быть «драгоценных» оттенков: золото, рубин, сапфир, изумруд. Чаще всего их применяют в обивке мебели, текстиле.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/04_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
              <p className={styles.articles__p}>В ар-деко вполне возможны как контрастные и яркие, так и сочетающиеся между собой спокойные оттенки. Так как стилистика предполагает большое количество декоративных элементов, стены нередко оставляют спокойными и однотонными, чтобы они выступали нейтральным фоном интерьерной композиции. Иногда их украшают металлическими или деревянными 3D-панелями или геометрическим молдингом. Например, спальню в стиле ар-деко можно оформить в бежево-золотистой гамме, кремовых, перламутровых и шоколадных оттенках, подчеркнув все это блеском хрусталя и зеркал. Для оформления кабинета подойдут более темные оттенки: дорогие светильники, кожаная мебель и стеновые панели из лакированного дерева завершат образ. </p>
            </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/05_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Свет</h2>
          <div>
          <p className={styles.articles__p}>Интерьер в стиле ар-деко предполагает сложную многоуровневую систему освещения. Свет здесь играет стилеобразующую роль. С помощью бра, торшеров, люстр не только освещают комнаты, но и придают помещению особую богемную атмосферу.</p>
          <p className={styles.articles__p}>Чтобы указать на элементы ар-деко, используйте торшеры с абажурами, роскошные люстры в античном стиле, витражные плафоны, стилизованные под лампы Тиффани, блестящие полированные светильники геометрических форм из хромированного металла. Также можно поставить в комнате профессиональные ретро-софиты, они добавят интерьеру немного театральности.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/06_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мебель и декор</h2>
          <div>
          <p className={styles.articles__p}>Классический стиль ар-деко – недешевое удовольствие, поэтому в чистом виде в современных квартирах встречается нечасто. Однако ввести в интерьер отдельные элементы в этой стилистике могут позволить себе многие: например, бархатный диван или небольшой комод на изогнутых ножках. Привлекательность такой мебели и декора не только в ценных материалах и отделке, но и в тщательно выверенных пропорциях, намекающих на высокое качество работы.</p>
          <p className={styles.articles__p}>Мебель в стиле ар-деко традиционно выглядит дорого, но в то же время изящно. Ее отличительные черты — ножки с изгибами, высокие спинки, кристаллообразная фурнитура и округлые или трапециевидные формы. В обстановку практически любого интерьера отлично впишется мягкая мебель в стиле ар-деко: шикарные диваны и кресла с бархатной, велюровой, кожаной обивкой и каретной стяжкой. Если выбираете шкаф в стиле ар-деко, то пусть это будет шкаф-витрина, шкаф с зеркальной дверцей или открытая этажерка.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/07_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
              <p className={styles.articles__p}>Мебель обычно подбирается по такому принципу: если стены светлые, то мебель должна быть темной и наоборот. Главное – вся композиция должна выглядеть целостно и дорого. Небольшие декоративные акценты в стиле ар-деко – волшебная палочка для тех, кто не хочет замахиваться на целый ансамбль. Это могут быть высокие вазы и напольные часы, антикварные скульптуры и подсвечники, постеры и рекламные плакаты 20-х годов на стенах. Любовь к классическому искусству здесь органично сочетается с увлечением авангардными экспериментами, а декор подбирается в зависимости от выбранной интерпретации интерьера – классической, исторической или современной. Несмотря на то, что ар-деко тяготеет к «нарядности», важно не переусердствовать с украшательством. Элегантность, умеренность и зрелость – вот главные черты стиля.</p>
            </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/08_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.project__bigmargin}>
            <ProjectConsultationAlexey
                text="Зеркала – это must have для интерьера в стиле ар- деко. Купите пару зеркал в красивых рамах и повесьте их симметрично. Или используйте специальные зеркальные панно, которые образуют оригинальные композиции и служат в качестве своеобразных картин."
            />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Кому подойдет интерьер в стиле ар-деко?</h2>
          <div>
          <p className={styles.articles__p}>Как мы уже отмечали выше, ар-деко часто выбирают творческие натуры. Этот стиль придется по душе тем, кто хочет произвести впечатление на гостей, продемонстрировать свой статус и креативность. А вот для небольших квартир и бюджетных или нарочито скромных интерьеров он не подойдет, так как требует значительных денежных вложений.</p>
          <p className={styles.articles__p}>Если вы ищете стильное дизайнерское решение для дома на грани классики и модерна, то интерьер с элементами ар-деко – идеальный вариант. Этот стиль эклектичен и потому еще долго не потеряет своей актуальности, а вы сможете бесконечно изменять его при помощи многочисленных аксессуаров, «играть» с обстановкой.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/09_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/ar-deko/10_ar-deko.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h3 className={styles.articles__lefttitle_righttext__title}>Посмотреть примеры интерьеров с элементами ар-деко от студии дизайна RHome можно тут:</h3>
        </div>




        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-vostochnaya/04_kvartira-vostochnaya.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-vostochnaya"
          title="Квартира по ул. Восточная"
          metr="95"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/00_kvartira-vostochnaya.jpg"
              alt=""
            />
          }
        />
        </div>
        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-dvuhurovnevaya/08_kvartira-dvuhurovnevaya.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-dvuhurovnevaya"
          title="Двухуровневая квартира на Васнецова"
          metr="152"
          building="11 месяцев"
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/00_kvartira-dvuhurovnevaya.jpg"
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

export default ArDeko