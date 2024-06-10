import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"

import * as styles from "../../../components/styles/about/inspiration.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"



const ArhitekturaHelsinki = () => (
  <Layout>
    <Seo 
      title={"Современная архитектура: 5 важных зданий Хельсинки - RHOME"} description={"Хельсинки – популярное у путешественников место: сюда приезжает более 5 миллионов туристов в год. Это неудивительно: хотя город при желании"}
      location={"https://rhome.by/articles/arhitektura-helsinki"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Современная архитектура: 5 важных зданий Хельсинки</h1>
          <StaticImage
            src="../../../images/inspiration/articles/arhitektura-helsinki/03_arhitektura-helsinki.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/arhitektura-helsinki/00_arhitektura-helsinki.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Хельсинки – популярное у путешественников место: сюда приезжает более 5 миллионов туристов в год. Это неудивительно: хотя город при желании можно обойти пешком за день – настолько компактно все расположено – здесь можно найти более 30 архитектурных стилей. Однако для того, чтобы проникнуться Хельсинки, нужно провести в нем больше времени: найти библиотеку-корабль, дворец-айсберг и Часовню тишины посреди многолюдной площади. Эти здания – часть повседневной жизни местных, но и туристам там тоже будут рады.

            </p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Немного истории</h2>
          <div>
            <p className={styles.articles__p}>Хельсинки был основан 1550 году, но большая часть застройки относится к ХХ веку. У этого есть две причины: во-первых, активно застраивалась столица Финляндии после 1918-го года, когда страна стала независимой, а во-вторых, традиционно финны строили преимущественно деревянные дома, и большая их часть была уничтожена пожарами.</p>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/05_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>



        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Философия</h2>
          <div>
            <p className={styles.articles__p}>Современная финская архитектура органично вписывается в ландшафт. Очень заметна связь архитектуры с природой, что неудивительно, ведь даже в Хельсинки люди живут почти как за городом: скалы и небольшие водопады – привычная часть городского пейзажа. В архитектуре преобладают камень и дерево. Особое внимание уделяется естественному освещению, что объясняется постоянным недостатком солнечного света в северном климате. О пяти знаковых примерах финской современной архитектуры рассказывает Сергей Рассеко, руководитель архитектурного бюро RHome.</p>
          </div>
        </div>


        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/06_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/07_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Библиотека Oodi (Töölönlahdenkatu 4)</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Финляндия – морская держава, и это отразилось и в дизайне главной библиотеки Хельсинки: если посмотреть на нее сбоку, она напоминает корабль, а плавные искривленные линии походят на морские волны. По бокам стены сходятся под таким острым углом, что здание кажется плоским, словно лист бумаги. Деревянный фасад облицован финскими еловыми рейками, толщина каждой из них – всего 33 миллиметра. Искривленный выступ здания создает навес над площадью Кансалайстори, укрывая горожан и посетителей библиотеки от непогоды.</p>
            </div>
          </div>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Фасад</h2>
          <div>
            <p className={styles.articles__p}>Фасад здания сделан из дерева и стекла. Второй этаж библиотеки почти полностью стеклянный: это позволяет пропускать внутрь большое количество солнечного света, а вечером и в пасмурную погоду, наоборот, освещать городской ландшафт Хельсинки. Архитекторы приняли во внимание локальные климатические условия, а также сделали акцент на использование местных материалов, что очень в духе скандинавского стремления к принципам устойчивого развития и экологичности.</p>
            <p className={styles.articles__p}>Библиотеки в Финляндии – это центры неформального образования, которые поддерживают развитие активной гражданской позиции и свободы самовыражения. Так как книги стоят довольно дорого, библиотеки популярны среди местных жителей – в среднем каждый финн берет из библиотеки 16 книг в год.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/10_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Oodi</h2>
          <div>
            <p className={styles.articles__p}>Oodi – пример библиотеки будущего не только из-за прогрессивных архитектурных решений, но и из-за функций библиотеки как общественного пространства. Книгам пришлось потесниться – дизайнеры сократили пространство для их хранения, чтобы освободить больше места для людей. Кроме читальных залов, в библиотеке расположены кафе, ресторан, терраса, кинотеатр, аудиовизуальные студии и рабочая зона: места для работы в интернете и студии для работы с аудиовизуальными носителями из коллекции библиотеки. Oodi – общественное пространство, открытое для каждого, включая туристов, так что не стесняйся заходить. Здесь переосмысливается идея не только работы с информацией, но и взаимодействия людей в современном городе.</p>
          </div>
        </div>


        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/02_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>
        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Дом Алвара Аалто (Riihitie 20)</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Алвар Аалто – родоначальник модернизма в Северной Европе и важный культурный герой Финляндии. Учитывая, что скандинавский дизайн во многом определяет европейские тенденции визуального искусства и архитектуры, значимость Аалто выходит за пределы Финляндии: его архитектурное наследие определило понятие северноевропейского модернизма и повлияло на современную школу дизайна (включая дизайн мебели и декоративных предметов из стекла и ткани). Он также является одним из основоположников интернационального стиля, наряду с Ле Корбузье и Вальтером Гропиусом, основателями функционализма и школы дизайна Баухаус соответственно.</p>
            </div>
          </div>
        </div>
        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/11_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Дом-музей</h2>
          <div>
            <p className={styles.articles__p}>Дом, впоследствии ставший музеем, Аалто строил для себя и жены Аино. Дом структурно и функционально разделен на рабочее пространство, в котором до 1955 года располагалось архитектурное бюро Аалто, и частную резиденцию пары. В этом проекте архитектор экспериментировал с использованием дерева в экстерьере и геометрическими формами: натуральные материалы смягчают жесткость линий современной архитектуры здания. Наработки этих экспериментов он позже применял в других своих проектах.</p>
            <p className={styles.articles__p}>Несмотря на то, что дом был построен в 1936-м году, интерьер выглядит совершенно актуально. Здесь понимаешь, что Аалто был провидцем и предопределил развитие дизайна на ближайшее столетие. Попасть на экскурсию можно с группой по предварительной записи на сайте дома-музея.</p>
          </div>
        </div>

        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Дворец «Финляндия» (Mannerheimintie 13e)</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Грандиозное айсбергоподобное здание было построено в бухте Тёёлёнлахти посреди парка Гесперии по дизайну того же Алвара Аалто в 1971-м году. Здесь расположены концертные и выставочные залы, помещения для конференций и заседаний различных масштабов. Дворец «Финляндия» – важная точка для финской политической, экономической и культурной жизни. Аалто создавал здания, которые наполняют город светом и ощущением близости к природе даже в долгие темные зимние дни. Дворец «Финляндия» относится к типу модернизма, в котором форма не обязательно диктует функцию и где мелкие детали играют решающую роль в общей композиции. Аалто лично продумал каждый аспект дизайна дворца, от его асимметричного внешнего вида до освещения, мебели и текстиля в оформлении интерьера.</p>
            </div>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/03_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image}
        />
      </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Архитектура</h2>
          <div>
            <p className={styles.articles__p}>В центре здания возвышается башенная секция без окон и с покатой крышей. Она нужна для создания свободного пространства сверху концертного зала: обеспечивает лучшую акустику и создает глубокое пост-эхо. Но находясь внутри, ты не заметишь это пространство – от аудитории оно скрыто решетчатым потолком.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/arhitektura-helsinki/01_arhitektura-helsinki.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Материалы</h2>
          <div>
         <p className={styles.articles__p}>Здание отделано белым мрамором, благодаря которому оно и напоминает айсберг, хотя для архитектора мрамор, наоборот, символизировал связь со средиземноморской культурой, которую он хотел привезти в Финляндию. Использование этого нетипичного для северной архитектуры материала привело к неожиданным последствиям. Если присмотреться, то заметно, что мраморные плиты на фасаде дворца напоминают плетеную корзину. Однако это не было запланировано Аалто: плиты погнулись со временем из-за перепадов температур. В 1999 пластины даже заменили, но «дублеров» постигла та же участь. Похожая проблема случилась с облицовкой Empire State Building. Хотя это и не было задумано, получился интересный визуальный эффект.</p>
         <p className={styles.articles__p}>А еще Аалто даже продумал оптическую иллюзию: если посмотреть на дворец «Финляндия» с западного берега бухты Тёёлёнлахти, то будет казаться, что башня Национального Музея вырастает из черной трапециевидной крыши башни дворца. Такой ход объединяет разные эпохи скандинавского дизайна.</p>
          </div>
        </div>


        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Хельсинкский Дом музыки (Mannerheimintie 13 A)</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Дом музыки расположен в центре города напротив Дома Парламента и Художественного музея Киасма. Структурно здание состоит из трех частей. Более высокие секции покрыты пластинами окисленной меди зеленого цвета. Через стеклянные стены фойе виден интерьер здания и происходящее внутри, но у них есть еще одна функция – стекла эстетически объединяют Дом музыки с другими строениями, расположенными по соседству. Прозрачность сохраняется и внутри Дома музыки: главный концертный зал окружен застекленным фойе. Стеклянные стены звукоизолированы, поэтому шум сквозь них не проходит. Эта прозрачность символизирует стремление финнов к открытости и безбарьерности во всем: политической системе, жизни сообщества, городской среде. Воплощение скандинавских ценностей в архитектуре – пример того, как мир идей может переплетаться с материальным.</p>
            </div>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Академия Сибелиуса</h2>
          <div>
         <p className={styles.articles__p}>В здании находятся Академия Сибелиуса и концертный зал и базируются два симфонических оркестра: Симфонический оркестр Финского радио и Хельсинкский филармонический оркестр. Такое соседство – возможность встретиться и пообщаться для музыкантов, студентов академии и горожан. В Скандинавии очень ценится принцип community building (сплочение сообщества), а Дом музыки – один из проектов, воплощающих эту идею в жизнь. В дополнение к главному концертному залу на 1700 мест, в Музыкальном центре есть пять небольших концертных залов (от 140 до 300 мест каждый). Классы и кабинеты Академии Сибелиуса сгруппированы на семи этажах вокруг внутреннего двора, выходящего на парк.</p>
        
          </div>
        </div>


        <div className={styles.articles__three_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/arhitektura-helsinki/08_arhitektura-helsinki.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/arhitektura-helsinki/08_arhitektura-helsinki.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/arhitektura-helsinki/04_arhitektura-helsinki.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
            </div>

            <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Публичная музыкальная библиотека</h2>
          <div>
         <p className={styles.articles__p}>На двух нижних этажах – студии и публичная музыкальная библиотека. В фойе, где расположены кафе, публичная библиотека и выставочное пространство, можно попасть и с улицы, даже если у тебя нет билетов на мероприятие. Зайти внутрь стоит, чтобы насладиться архитектурой и выпить чашку кофе, сидя по соседству с музыкантами. А высокие потолки фойе, поднимающиеся вверх на несколько этажей, позволяют подвесить крупные арт-инсталляции в воздухе. Такое грандиозное зрелище пропускать не стоит!</p>
        
          </div>
        </div>


        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Часовня тишины (Simonkatu 7)</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Часовня тишины находится посреди одного из самых шумных и многолюдных мест Хельсинки – на площади Нарринккатори. В футуристическом деревянном строении причудливой овальной формы сложно узнать часовню. Впрочем, священнослужения здесь и не проводят. Исключение – встречи на молитвы. Часовня открыта для представителей всех конфессий, поэтому акцент на религиозности здесь не делается. Однако религиозная атрибутика все же присутствует: на алтаре размещен тонкий металлический крест. Стены часовни внутри облицованы изогнутыми ольховыми досками, повторяющими форму постройки, а снаружи – еловыми рейками, изогнутыми под разными радиусами. Благодаря естественному оранжевому оттенку ольхи часовня всегда наполнена теплым светом. Помещение для молитв и медитации расположено в деревянной части, а все остальные помещения – в каменной пристройке. Впрочем, здесь не всегда тихо: акустика зала многократно усиливает каждый звук.</p>
            </div>
          </div>
        </div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Назначение</h2>
          <div>
         <p className={styles.articles__p}>Часовня тишины – популярное место. В течение года с открытия в 2012-м ее посетили 250 000 человек, позже это число возросло до полумиллиона человек в год. Часовню построили по заказу Хельсинкского муниципалитета в рамках программы по улучшению качества жизни горожан. Проблема, которую намеревались решить таким образом, – высокий уровень самоубийств среди финнов. Идея часовни – дать людям побыть в комфортном месте, светлом и теплом, наедине со своими мыслями, но рядом с другими людьми, ощутить поддержку от их присутствия. Не нужно разговаривать или слушать, можно просто быть вне суеты и беспокойств, защищенным, словно объятиями, стенами часовни от северной непогоды. Это одно из главных мест силы Хельсинки.</p>
        
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

export default ArhitekturaHelsinki