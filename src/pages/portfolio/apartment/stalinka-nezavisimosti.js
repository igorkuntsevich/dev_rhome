import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const StalinkaNezavisimosti = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира на Мястровской - RHOME"} description={"Квартира на Мястровской дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/stalinka-nezavisimosti"}
        image={"https://rhome.by/images/portfolio/stalinka-nezavisimosti/01_stalinka-nezavisimosti.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Сталинка в Минске"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="2019"
                metr="74"
                building="8 месяцев"
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/stalinka-nezavisimosti/01_stalinka-nezavisimosti.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/stalinka-nezavisimosti/00_stalinka-nezavisimosti.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Создать интерьер, где бы скандинавский стиль сочетался с традиционным для “сталинок” декором."
              wishText="Мы всегда мечтали жить в сталинке, поэтому хотим сохранить все узнаваемые черты. Но при этом, мы хотим стильный интерьер в скандинавском стиле. У нас много книг, поэтому нужно продумать, где разместить библиотеку. "
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Мы оставили максимум традиционного декора сталинок: лепнины и розеток на потолках. Они оригинальные. Двери и паркет пришлось заменить. Чтобы сохранить аутентичность в дизайне интерьера квартиры, мы выбрали максимально похожие на те, что были здесь изначально. Хотя сейчас существует тренд на двери-невидимки, здесь мы поставили их портальные с наличниками. Новый паркет — французская елка, то есть тот же узор, что был здесь изначально.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/02_stalinka-nezavisimosti.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/stalinka-nezavisimosti/02_stalinka-nezavisimosti.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Старые дома и квартиры сами подскажут, какой стиль им подходит</h2>
              <div>
                <p className={styles.project__p}>Гостиная соединяется с библиотекой арочным проемом. Он довольно широкий, поэтому эти две комнаты ощущаются единым пространством. Стеллаж для библиотеки изготавливался на заказ. Неподалеку от него расположен кофейный столик Сosmorelax Blink со столешницей из натурального камня. Возле дивана в гостиной есть ещё один кофейный столик Cosmorelax Cutout, как и стеллаж в библиотеке, он выполнен под орех. Поскольку мы разместили более тяжеловесный стальной светильник в индустриальном стиле — Cosmorelax Maserlo — над диваном в гостиной, для библиотеки мы выбрали более лёгкий вариант — X-образный светильник Nowodvorski Sticks.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/03_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/03_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/04_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/04_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Иногда лучшее, что можно сделать со стенами – снять все до основания</h2>
              <div>
                <p className={styles.project__p}>Обратите внимание на стены — мы сняли старые обои, оголив бетонную поверхность. После шлифовки – покрыли лаком. За счет интересной фактуры получился стильный и оригинальный результат.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/05_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/05_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/06_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/06_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <h2 className={styles.project__title}>Абажур в столовой в форме юбки...</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Интерьер столовой стилистически продолжает дизайнерскую концепцию всей квартиры. В центре внимания здесь светильник Dancing Pendant от Iskos Berlin. Абажур сделан из синтетического войлока, а его диаметр составляет почти метр. Форма светильника вдохновлена танцем: дизайнер этого светильника хотел добиться сходства с юбкой танцовщицы.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/08_stalinka-nezavisimosti.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/stalinka-nezavisimosti/08_stalinka-nezavisimosti.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/09_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/09_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/07_stalinka-nezavisimosti.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/stalinka-nezavisimosti/07_stalinka-nezavisimosti.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Минималистичная кухня</h2>
              <div>
                <p className={styles.project__p}>Минималистичная кухня сделана на заказ из крашеных МДФ-панелей и ЛДС-панелей Egger. Столешница — Avant Vicostone Bizana из композита кварца. Стол и стулья — Cosmorelax. Стол отдельно освещается черным бра Cosmorelax Avery. Каждый элемент обеденной зоны имеет обтекаемую форму. Это уравновешивает чёткие линии кухонного гарнитура.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/11_stalinka-nezavisimosti.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/stalinka-nezavisimosti/11_stalinka-nezavisimosti.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Опустили потолки и сделали ровное покрытие, скрыв лепнину, только в кухне, ванной комнате и коридоре. В коридоре мы также сделали проходную гардеробную, которая освещается за счёт подсветки потолка.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/14_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/14_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/16_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/16_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/15_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/15_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <ProjectConsultationSergey
                text="Создавая дизайн интерьера в доме с историей, стоит искать вдохновения в той эпохе, а не пытаться сделать оторванный от исторического контекста интерьер. Тогда ваши вкусы и идеи вступят во взаимодействие с характером дома, а из этого может получиться невероятный результат."
            />
            <div className="line"></div>
            <h2 className={styles.project__title}>Прежние хозяева квартиры оставили два берёзовых шкафа из 70-х. По желанию заказчика мы интегрировали их в новый интерьер</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Остальная мебель и аксессуары современные. Светильник Cosmorelax Air Bubble, расположенный в классической потолочной розетке. Кровать в спальне — Ditre Italia Sanders. Тумба возле зеркала изготавливается на заказ. В этом интерьере смешиваются классические и современные элементы: античный торс соседствует со стулом из гнутых трубок, форма которого придумана представителями школы баухаус в 1928 году. А современный светильник Cosmorelax Air Bubble, расположенный в классической потолочной розетке.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/13_stalinka-nezavisimosti.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/stalinka-nezavisimosti/13_stalinka-nezavisimosti.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/12_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/12_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Исходные данные</h2>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/18_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/18_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/17_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/17_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/19_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/19_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/20_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/20_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/22_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/22_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/stalinka-nezavisimosti/21_stalinka-nezavisimosti.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/stalinka-nezavisimosti/21_stalinka-nezavisimosti.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


          </div>
        </div>
        <div className="wrapper">
          <ProjectPartner
            items={
            <>
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/austrialight.jpg"
                  alt=""
                  />
                }
                text="Салон светильников" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/ikea.jpg"
                  alt=""
                  />
                }
                text="Центр мебели и товаров для дома"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/caparol.jpg"
                  alt=""
                  />
                }
                text="Отделочные материалы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/antrano.jpg"
                  alt=""
                  />
                }
                text="Фабрика эксклюзивной мебели" 
              />
            </>
          }
          />
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default StalinkaNezavisimosti