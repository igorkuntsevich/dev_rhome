import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const DomBerezovayaroshha = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера дома в Березовой роще - RHOME"} description={"Дизайн интерьера дома в современном стиле в Березовой роще от студии Rhome. Было/стало, чертежи, 3D проекты"}
        location={"https://rhome.by/portfolio/house/dom-berezovaya-roshha"}
        image={"https://rhome.by/images/portfolio/dom-berezovaya-roshha/01_dom-berezovaya-roshha.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в Березовой роще"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="июль 2017"
                metr="250"
                building="14 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/dom-berezovaya-roshha/01_dom-berezovaya-roshha.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-berezovaya-roshha/00_dom-berezovaya-roshha.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-berezovaya-roshha/cut/05_dom-berezovaya-roshha.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezovaya-roshha/cut/03_dom-berezovaya-roshha.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezovaya-roshha/cut/29_dom-berezovaya-roshha.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezovaya-roshha/cut/22_dom-berezovaya-roshha.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-berezovaya-roshha/cut/09_dom-berezovaya-roshha.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Мы только что построили дом и хотим получить дизайн-проект интерьера в духе современной архитектуры. В принципе, ограничений не так много. Главное — чтобы стены не были белыми, как у нас в офисе. Не хотелось бы ощущать себя на работе круглые сутки."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Этот дом явно выделяется на фоне среднестатистических построек в стране: очень необычный проект с претензией на современную архитектуру. При первом же выезде на объект стало понятно, каким должен быть интерьер и дизайн-проект дома.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/02_dom-berezovaya-roshha.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezovaya-roshha/02_dom-berezovaya-roshha.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Главная роль в оформлении холла у освещения</h2>
                <div>
                <p className={styles.project__p}>Попасть в дом можно как с цокольного этажа, так и прямо с улицы. В любом случае вы попадаете в холл, где находится большая система хранения для верхней одежды и обуви. Главную роль в современном лаконичном интерьере мы отвели освещению. Света много и каждый источник выполняет свою функцию: подсветка шкафа, лестницы, общий свет — все вместе и по отдельности они создают особую домашнюю атмосферу.</p>
                <p className={styles.project__p}>«Пустые» стены декорирует арт-объектами и функциональным комодом. В данном случае это уравновешивает композицию и устраняет «офисность».</p>
              </div>
            </div>
          
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/03_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/03_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/04_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/04_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Нестандартная планировка: радиусная стена и огромная кухня</h2>
                <div>
                <p className={styles.project__p}>Дом одноэтажный с цокольным этажом и сложной планировкой. Но если спальни, санузлы и коридоры не вызывали практически никаких вопросов, то зона кухни-столовой нас озадачила. По задумке архитекторов это пространство занимало 75% пространства, а для гостиной оставалось совсем немного места. Кроме того радиусная стена не позволяла полноценно разместить диван. В общем, было решено изменить функционал помещений. В итоге получили полноценную гостиную, кухню и столовую.</p>

              </div>
            </div>
            <div className={styles.project_video + " " + styles.project__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/blDOjZaRYxg" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <div className="line"></div>
            <h2 className={styles.project__title}>Подчеркнули геометрию потолка  гостиной подсветкой</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>Гостиная заняла свое место между кухней и столовой. Благодаря грамотной перепланировке это помещение получилось просторным и функциональным. В образовавшейся нише мы поместили встроенный шкаф-библиотеку. Но главным украшением гостиной стал потолок. Мы специально не выравнивали его, а лишь подчеркнули геометрию подсветкой. И, как следствие, получили дополнительный «воздух» и динамику. Дизайн интерьера гостиной в Березовой роще | Дизайн студия – Rhome.by</p>
                  <p className={styles.project__p}>Уютные диваны, дизайнерские столики, био-камин и большой телевизор с системой хранения во всю стену — все это располагает к теплым вечерам в приятной компании.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/05_dom-berezovaya-roshha.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-berezovaya-roshha/05_dom-berezovaya-roshha.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/06_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/06_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Кухня у террасы с барной стойкой для перекусов</h2>
                <div>
                <p className={styles.project__p}>Кухню решили сделать проходной, чтобы летом можно было обедать и ужинать на террасе, не перенося еду и посуду через полдома. Для всей техники и шкафов места в полукруглом помещении оказалось предостаточно. </p>
              </div>
            </div>  
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/07_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/07_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/08_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/08_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>По просьбе хозяйки мы добавили небольшой кофейный столик. Однако этот стол можно оставить, а можно убрать. Именно поэтому мы продумали не совсем стандартное освещение. Гибкая лампа от Artemide Tolomeo позволила нам избежать «капитальной» люстры, которую было бы сложно убрать без потерь, и оставили красивую единую геометрию потолка.</p>
            </div>
              <ProjectConsultationSvetlana
                text="В любом интерьере есть место для арт-объектов. Найдите по-настоящему ценную для вас картину, статуэтки или изваяние и ваш интерьер станет на порядок более изысканным."
              />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Акцентная люстра над обеденным столом</h2>
                <div>
                <p className={styles.project__p}>В зоне столовой установили большой овальный стол и удобные стулья. Нам оставалось только задекорировать пространство в едином стиле с гостиной и кухней. Добавляем шкафы, арт-объекты и акцентную люстру — теперь все выглядит законченным.</p>
              </div>
            </div>  
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/09_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/09_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/10_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/10_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Темное дерево в спальне сделало комнату более уютной</h2>
                <div>
                <p className={styles.project__p}>Для спальни мы выбрали еще более темный оттенок дерева, чем во всем доме. Это придает помещению больше уюта и статусности. Туалетный столик просвечивает уже знакомая нам люстра из коллекции Artemide Tolomeo. А дерево на потолке зонирует и добавляет изысканности.</p>
                <p className={styles.project__p}>В спальне ничего лишнего, как и просили хозяева: большая дизайнерская кровать, мягкий ковер, туалетный столик и телевизор.</p>              
                </div>
            </div> 

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/20_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/20_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/21_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/21_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/22_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/22_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Комнату сына в молодежном скандинавском стиле</h2>
                <div>
                <p className={styles.project__p}>Светлое дерево, продуманная геометрия и обилие белого цвета. В этой комнате заказчик — молодой парень, поэтому мы с легким сердцем отошли от правил, установленных в остальной части дома.</p>
              </div>
            </div>  
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/24_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/24_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/25_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/25_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Два полноценных рабочих места, с диваном и стеллажом — главные требования парня. Зонируем помещение с помощью стеллажа и устанавливаем большую кровать. Для санузла выбрали эффектный камень и подчеркнули его фоновой белой плиткой.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/26_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/26_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/17_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/17_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Цокольный этаж</h2>
                <div>
                <p className={styles.project__p}>На цокольном этаже расположен кабинет хозяина — небольшое, но функциональное помещение. Стол, кресло, система хранения и диван для отдыха.</p>
                </div>
            </div> 

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/14_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/14_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/13_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/13_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Кабинет-гостевая комната с необычной геометрией</h2>
                <div>
                <p className={styles.project__p}>Яркая жизнерадостная комната будет служить кабинетом для хозяйки и гостевой комнатой на случай, если друзья или родственники остановятся погостить. Необычная геометрия полок придает динамики всему помещению и объединяет всю композицию.</p>
                </div>
            </div> 

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/11_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/11_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/12_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/12_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Лаунж-зона на цокольном этаже</h2>
                <div>
                <p className={styles.project__p}>На цокольном этаже расположена комната отдыха с мини-кухней. Светлый цвет стен нивелирует недостаток естественного освещения, а благородные материалы (дерево и камень) подчеркивают статусность всего проекта.</p>
                </div>
            </div> 

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/15_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/15_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/16_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/16_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Фасад</h2>
            </div> 
            <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/28_dom-berezovaya-roshha.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-berezovaya-roshha/28_dom-berezovaya-roshha.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>  
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/29_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/29_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/30_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/30_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/31_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/31_dom-berezovaya-roshha.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-berezovaya-roshha/32_dom-berezovaya-roshha.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-berezovaya-roshha/32_dom-berezovaya-roshha.jpg"
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
                  src="../../../images/partners/skvirel.jpg"
                  alt=""
                  />
                }
                text="Салон интерьеров" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений" 
              />
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
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня"
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
                  src="../../../images/partners/sofaclub.jpg"
                  alt=""
                  />
                }
                text="Салон мебели" 
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
export default DomBerezovayaroshha