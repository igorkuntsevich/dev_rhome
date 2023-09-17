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





const D3Olimpik = () => (
  <Layout>
    <Seo 
      title={"Дизайн-проекты интерьера квартир в ЖК D3 и Олимпик Парк - RHOME"} description={"ТОП 5 успешно реализованных дизайн-проектов квартир в жилых кварталах D3 и Олимпик парк в микрорайоне Лебяжий в Минске от студии дизайна интерьера RHome."}
      location={"https://rhome.by/articles/d3-i-olimpik-park-v-minske"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>5 дизайн-проектов интерьера квартир в ЖК D3 и Олимпик Парк</h1>
          <StaticImage
            src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/10_d3-i-olimpik-park-v-minske.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/00_d3-i-olimpik-park-v-minske.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Несколько недавних проектов дизайн-студии RHome — дизайн интерьера квартир в жилых комплексах D3 и Олимпик Парк. И хотя для каждой клиента мы создаем уникальный дизайн-проект, наличие опыта работы в этих домах имеет преимущества.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Наладили контакт с товариществом собственников</h2>
          <div>
          <p className={styles.articles__p}>Жилые комплексы D3 и “Олимпик Парк” – “закрытые” дома, поэтому во время ремонта строителям и подрядчикам сложно попадать в дом в отсутствие собственника квартиры – нужно согласовывать с председателем ТС. Мы берем урегулирование этих вопросов на себя! Поскольку мы уже знакомы с товариществом собственников, с этим не возникнет сложностей. Все разрешения получим максимально быстро.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Работаем с документацией, полученной от застройщика</h2>
          <div>
          <p className={styles.articles__p}>В каждой квартире есть технические ограничения, определяющие, где можно делать ванную и кухню, какие зоны жилые, а какие – нет. В техпаспорте зачастую эта информация отсутствует, и эти нюансы выясняются уже в процессе работы. Мы работаем с технической документацией застройщика ЖК D3 и Олимпик Парк, полученной через юриста. Мы изначально опираемся на максимально полную информацию, и учитываем все ограничения при создании дизайн-проекта квартиры.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Поможем принять квартиру</h2>
          <div>
          <p className={styles.articles__p}>Раньше мы уже работали с квартирами в ЖК D3 и Олимпик Парк, поэтому знаем, чему нужно уделить особое внимание. На этапе сдачи квартиры в эксплуатацию проверим окна, стены, отопление, стяжку пола. Некоторые проблемы должен решать застройщик, однако заявить о них нужно при приеме квартиры. Наше включение на раннем этапе поможет вам существенно сэкономить, если обнаружатся конструктивные недочеты.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Нашли оптимальные решения</h2>
          <div>
          <p className={styles.articles__p}>Знание конструктивных особенностей планировок квартир упрощает процесс разработки дизайна интерьера. Это значит, что мы сможем предложить лучшее планировочное решение, ведь мы уже рассмотрели разные варианты и остановились на лучших.</p>
          </div>
        </div>


        <div className={styles.articles__greyblock}>
          <div className={styles.articles__greyblock_wrap}>
            <h2 className={styles.articles__greyblock_title}>Мы уже решали эти задачи. С нами вы не потратите на них время.</h2>
            <div className={styles.articles__greyblock_text}>
              <p className={styles.articles__p}>Мы нашли решения некоторых сложных задач в ЖК D3 и Олимпик Парк. Эти вещи могут показаться довольно специфическими, но именно с этими сложностями сталкиваются большинство жильцов этих ЖК.</p>
            </div>
          </div>
        </div>




        <div className={styles.articles__bigmargin}>
              <ProjectConsultationSergey
                text="За последний год дизайнеры RHome разработали более 10 нетиповых проектов интерьера для ЖК D3 и Олимпик Парк. Наши специалисты досконально изучили эти комплексы, знают все тонкости работы с ними, что позволяет улучшить и ускорить процесс создания дизайн-проекта и ремонта квартиры. Представляем 5 из них."
              />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Знаем, как обойти запрет размещения внешнего блока кондиционера на фасаде</h2>
          <div>
          <p className={styles.articles__p}>По законодательству РБ блоки кондиционеров нельзя размещать на фасадах – они должны находиться на лоджии. Мы нашли компромиссное решение – делаем врезку блока. Так он не виден снаружи и функционирует исправно.</p>
          </div>
        </div>
        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Делаем теплый балкон при холодном профиле</h2>
          <div>
          <p className={styles.articles__p}>В новых ЖК система остекления – металлический холодный профиль цельными вертикальными рейками от первого до последнего этажа. По правилам менять внешний вид фасада нельзя. Мы знаем, как сделать тёплый балкон или лоджию так, чтобы визуально фасад не изменился.</p>
          </div>
        </div>







        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Cветлый интерьер квартиры в ЖК D3</h2>
          <div>
          <p className={styles.articles__p}>Частое пожелание — совместить современную эстетику с природными материалами и эстетикой. Для интерьера квартиры в жилом комплексе D3 это очень логичное сочетание, ведь он находится на окраине города рядом с живописными водоемами — водохранилищем Дрозды и прудом Лебяжий. Мы вдохновлялись природными сочетаниями, выбирая цветовую гамму интерьера: предпочтение отдали приглушенным древесным и песчаным оттенкам. Текстуры дерева и камня подчеркивают связь с природными мотивами, а дизайн мебели и четкие линии, использованные в интерьере — отражение городского духа.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/06_d3-i-olimpik-park-v-minske.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/03_d3-i-olimpik-park-v-minske.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/11_d3-i-olimpik-park-v-minske.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Неоклассический дизайн интерьера в ЖК D3</h2>
          <div>
          <p className={styles.articles__p}>Еще одно частое пожелание — «легкая» классика. Речь идет о неоклассических интерьерах, где строгость классических форм и линий миксуется с современными дизайнерскими приемами и яркими аксессуарами. Такой интерьер более требовательный, но в тоже время очень вдохновляющий — это стиль одновременно сдержанный и праздничный. Мы не стремились перегружать квартиру в жилом комплексе D3 классическими элементами, например, дизайн кухни в этом проекте минималистичный и современный.</p>
          </div>
        </div>


        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/neoklassika-d3/03_neoklassika-d3.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/neoklassika-d3/"
          title="Неоклассика в ЖК D3"
          metr="80"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/neoklassika-d3/00_neoklassika-d3.jpg"
              alt=""
            />
          }
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Дизайн четырехкомнатной квартиры в ЖК D3</h2>
          <div>
          <p className={styles.articles__p}>Это современная городская квартира, напоминающей по атмосфере уютные испанские виллы. Изначально квартира была со свободной планировкой — перегородки отделяли только санузлы. Эти перегородки мы тоже подвинули, немного увеличив площадь санузлов за счет коридоров. В планировке квартиры в ЖК D3 мы учли основные требования заказчиков: просторная и удобная гостиная со столовой для приема гостей и раздельные спальни с гардеробными для хозяев квартиры. Природные оттенки, лаконичные формы, функциональная мебель — на это мы обращали внимание при создании дизайн-проекта для этой квартиры.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/07_d3-i-olimpik-park-v-minske.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__project}>
          <StaticImage
            src="../../../images/portfolio/kvartira-dlya-dvoih/05_kvartira-dlya-dvoih.jpg"
            loading="eager"
            alt=""
            className={styles.articles__one_image}
          />
        <PortfolioItem
          url="/portfolio/apartment/kvartira-dlya-dvoih/"
          title="Квартира в ЖК «D3»"
          metr="109"
          building=""
          budget=""
          image={
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/00_kvartira-dlya-dvoih.jpg"
              alt=""
            />
          }
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Дизайн-проект квартиры в ЖК Олимпик Парк</h2>
          <div>
          <p className={styles.articles__p}>Владельцам этой квартиры в жилом комплексе Олимпик Парк нравятся современные, немного сдержанные интерьеры, не перегруженные деталями. Основное требование по планировке квартиры — продумать большую уютную гостиную и мастер-спальню с отдельной гардеробной. В цветовой гамме интерьера мы отдали предпочтение глубоким сложным цветам и оттенкам натурального дерева. Благодаря использованию визуально близких текстур объединенное пространство гостиной, кухни и прихожей смотрится как одно целое.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/08_d3-i-olimpik-park-v-minske.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/04_d3-i-olimpik-park-v-minske.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/12_d3-i-olimpik-park-v-minske.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title + " " + styles.articles__lefttitle_righttext__title_long}>Мужская квартира в ЖК D3</h2>
          <div>
          <p className={styles.articles__p}>Дизайн-проект этой квартиры мы создавали для отца с сыном. Часто при словах «мужской интерьер» воображение рисует темные холодные оттенки и массивную мебель, но эта квартира просторная и светлая. Хара́ктерность интерьера здесь проявляется в строгости линий. Нам было важно продумать планировку так, чтобы не «погасить» большое количество солнечного света, проникающего сквозь панорамные окна. У хозяина квартиры есть свои любимые картины, поэтому задачей дизайнера стало интегрировать их в интерьер, объединив фривольность мазков с четкими архитектурными формами.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/09_d3-i-olimpik-park-v-minske.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__two_inline}>
                <StaticImage
                  src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/05_d3-i-olimpik-park-v-minske.jpg"
                  alt=""
                  className={styles.articles__one_image}
                />
                <StaticImage
                  src="../../../images/inspiration/articles/d3-i-olimpik-park-v-minske/13_d3-i-olimpik-park-v-minske.jpg"
                  alt=""
                  className={styles.articles__one_image}
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

export default D3Olimpik