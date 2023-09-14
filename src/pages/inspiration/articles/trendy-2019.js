import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const Trendy2019 = () => (
  <Layout>
    <Seo 
      title={"Тренды 2019: что будет модно в дизайне интерьера в этом году - RHOME"} description={"Узнаем что такое instagram-ready и eco style"}
      location={"https://rhome.by/articles/trendy-2019"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Тренды 2019: что будет модно в дизайне интерьера в этом году</h1>
          <StaticImage
            src="../../../images/inspiration/articles/trendy-2019/12_trendy-2019.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/trendy-2019/00_trendy-2019.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
        <p className={styles.articles_intro_p}>В прошлом году мы уже писали про тренды в дизайне интерьера, но тема эта ежегодная, поэтому дизайнеры студии R-home решили порассуждать о том, что будет на пике популярности в 2019 году.</p>
        <p className={styles.articles_intro_p}>Конечно, тенденции в дизайне не меняются с такой скоростью, как, например, в моде. Не беспокойтесь: все то, что было популярно в 2018, не теряет своей актуальности и в нынешнем году. Однако среди пудрово-розовых интерьеров с обилием тропических принтов все более убедительно начинают звучать новые формы, цвета и материалы.</p>

        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/01_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>О главных моментах, которые станут основой трендовых интерьеров в 2019 году, мы расскажем в этой статье. Вдохновляйтесь и выбирайте то, что по душе именно вам!</p>
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Актуальные стили</h2>
          <div>
          <p className={styles.articles__p}>В 2019 году тенденции в интерьерном дизайне обещают нам моду на плавные линии и минимализм наряду с изящными деталями и предметами в стиле ар-деко. Да, скандинавский стиль теперь уже окончательно отступил на третий план, освободив территорию дорогим материалам, насыщенным оттенкам и заниженной мебели. Это касается оформления не только квартир, но также и отелей, баров, ресторанов.</p>
          <p className={styles.articles__p}>Характерные для ар-деко геометрические формы, тонкие линии, сочетание глубоких, сложных цветов (в особенности черного, насыщенного зеленого и темно-синего) с золотыми акцентами в 2019 году будут отлично соседствовать с философией минимализма. Постепенно мебель и отделка становятся новым декором. Чем меньше нефункциональных предметов в вашем интерьере, тем лучше.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/02_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Параллельно со стремлением к минимализму и ускоренным развитием технологий дизайнеры не перестают обращаться к истории и снова заглядываются на стили ретро. И если в последние годы они вдохновлялись mid-century modern, то в 2019-2020, вероятнее всего, на первый план выйдет стиль 70-х годов с его сочными цветами, орнаментами и мебелью обтекаемых форм.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/03_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Модные цвета</h2>
          <div>
          <p className={styles.articles__p}>Основную палитру модных цветов 2019 года будут составлять всевозможные осенние оттенки: не слишком яркие, но сложные и теплые по тону (лососевый, горчичный, карамельный, охра, янтарный и бордо). Но главная роль, конечно, достанется глубоким оттенкам зеленого, как у лесных деревьев и мхов. Такие цвета придают интерьеру спокойную солидность и хорошо работают в качестве акцентов.</p>
          
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/04_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>В то же время «богатые», насыщенные оттенки никуда не уходят и по-прежнему остаются в тренде. Однако сейчас они помогают создавать нюансные решения интерьера – дизайнерский прием, когда в помещении преобладают сочетания оттенков в пределах одного цветового тона.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/05_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Популярные материалы</h2>
          <div>
          <p className={styles.articles__p}>Если речь идет об отделочных материалах, то смело можно утверждать, что в будущем году на первый план выйдет натуральный камень или его качественная имитация. Особенно актуален мрамор теплых оттенков. Из роскошного акцента этот материал превратился в полноправного главного героя, распространившись из санузлов по всем комнатам дома — в виде столов и журнальных столиков в гостиных, напольных покрытий в прихожих, подоконников и рабочих поверхностей на кухнях. Обратите внимание: на смену белому мрамору приходит коричневый и серый с крупными прожилками и контрастом оттенков.</p>
          
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/06_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Все еще не теряет своей актуальности и венецианская плитка terrazzo с бетонной крошкой. Превосходные высокопрочные качества материала идеально подходят для обустройства небанального напольного покрытия в помещениях с высокой проходимостью, таких, как прихожая и кухня. Однако теперь разноцветный terrazzo украшает не только полы и лестницы, но и стены, мебель, предметы декора, посуду. Среди металлов по-прежнему сохраняют свои позиции латунь, золото и почерневшие металлы, так как все они прекрасно гармонируют с главными цветами 2019 года. И если раньше дизайнеры использовали позолоченные поверхности очень осторожно и дозированно, то теперь, помимо всевозможной фурнитуры и кранов в ванной комнате, они смело украшают золотом мебельные фасады и даже целые стены.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/07_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>И, конечно, нельзя не упомянуть главный хит – нарядный и трендовый бархат — беспроигрышное средство сделать любую обстановку роскошной. Еще в 2018 году бархат стал одним из самых популярных материалов в мебельных коллекциях именитых кутюрье. Дизайнеры интерьеров не отстают и объявляют бархатную обивку основным трендом ближайших лет. И это неудивительно: ткань приятна на ощупь, богата на оттенки, красиво переливается в солнечных лучах и легко добавляет интерьеру театральности или иронии. Тренды 2019 в дизайне интерьера</p>
        </div>
        <div className={styles.articles__bigmargin}>
          <ProjectConsultationAlexey
            text="Бархат – материал роскошный. Чтобы оттенить его нежность, мебель в бархатной обивке следует сочетать с нарочито грубыми текстурами – деревом, камнем, джутовыми половиками и состаренными коврами."
          />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Мебель и декор</h2>
          <div>
          <p className={styles.articles__p}>Обустройство комфортного пространства немыслимо без мебели. И в 2019 году будет модно украшать интерьеры предметами мебели ручной работы. Лучшие мебельные производители внедряют в свои технологии ручное ремесло, уходя от массового производства и делая свою продукцию поистине уникальной. Также всячески приветствуется обновленная винтажная мебель классических форм, вещи в духе 30-х, 50-х или 70-х годов, округлые предметы декора, паттерны из 60-х и «дорогие» цвета обивки.</p>
          
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/08_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Невесомая и почти невидимая мебель из прозрачного пластика и стекла снова начала набирать популярность еще в этом году, но в следующем дизайнеры и декораторы пророчат ей настоящий бум. И это здорово, ведь прозрачная мебель словно создана для небольших квартир: сохраняя функциональность, она визуально разгружает помещение, делая его более воздушным и просторным. Еще одним декоративным трендом 2019 года можно смело назвать освоение потолочной плоскости. Геометрические узоры и орнаменты на потолке могут стать главным акцентом всего помещения, а цветной потолок сделает комнату яркой и, безусловно, запоминающейся.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/09_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Стилистика мебели и интерьера в целом сейчас черпает вдохновение в ретростилях, что выражается в первую очередь в самой геометрии форм, которые приобретают более округлые, плавные очертания. Полукруглые арки, оконные проемы, овальные наклонные зеркала, стеллажи для книг в виде арок и  силуэты мебели обтекаемых форм – эти элементы присутствовали на большинстве стендов крупнейших компаний на всех международных выставках в этом году.</p>
        </div>
        <div className={styles.articles__bigmargin}>
          <ProjectConsultationAlexey
            text="Арки и арочные конструкции снова в моде. Плавная, округлая геометрия прекрасно преображает пространство, придает помещению мягкость и динамику. Благодаря закругленной форме вершины арка как элемент архитектуры визуально делает комнату элегантнее и просторнее."
          />
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Стиль жизни</h2>
          <div>
          <p className={styles.articles__p}>Интернет и социальные сети очень прочно вошли в нашу повседневную жизнь, и большинство людей хотят видеть вокруг себя красивую картинку, в том числе и в собственном доме. Поэтому дизайнеры стремятся создавать интерьеры таким образом, чтобы каждый уголок был стильным местом для фото в Instagram. Акцентные стены, реплики дизайнерской мебели и дорогих светильников и все, что делает кадр «инстаграмным», будет популярно и на протяжении 2019 года.</p>
            <p className={styles.articles__p}>Однако наравне с актуальной тенденцией Instagram-ready можно смело выделить и особое внимание человека к собственному самочувствию и состоянию окружающей среды, которые постепенно становятся новыми азами благополучия. Пестрое разнообразие интерьеров постепенно вытесняется природными мотивами ECO style. Озеленение квартиры также остается трендом будущего года, а обилие домашних растений в декоре является первым шагом на пути к гармонии человека и природы.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/10_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Каждый год предлагает нам огромное разнообразие тенденций в дизайне, среди которых любой может найти что-то интересное для себя. Но не стоит забывать главное: интерьер должен быть в первую очередь комфортным и уютным пространством для своих обитателей, независимо от того, насколько он соответствует трендам.</p>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/trendy-2019/11_trendy-2019.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
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

export default Trendy2019