import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const MonohromZelenayagavan = () => {
  return (
    <Layout>
      <Seo 
        title={"Горани Барнхаус - RHOME"} description={"Горани Барнхаус дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/monohrom-zelenaya-gavan"}
        image={"https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/01_monohrom-zelenaya-gavan.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Монохромный интерьер дома в Зеленой Гавани"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="2021"
                metr="182"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/monohrom-zelenaya-gavan/01_monohrom-zelenaya-gavan.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/monohrom-zelenaya-gavan/00_monohrom-zelenaya-gavan.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/monohrom-zelenaya-gavan/cut/13_monohrom-zelenaya-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/monohrom-zelenaya-gavan/cut/29_monohrom-zelenaya-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/monohrom-zelenaya-gavan/cut/22_monohrom-zelenaya-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/monohrom-zelenaya-gavan/cut/11_monohrom-zelenaya-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/monohrom-zelenaya-gavan/cut/16_monohrom-zelenaya-gavan.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать дизайн интерьера дома для зрелой пары."
              wishText="Главное, чтобы в интерьере нашлось место для нашей коллекции картин и рояля. Предпочтение отдаем светлым интерьерам, но не против цветовых пятен. Исключение – все оттенки фиолетового и зеленого. Еще одно пожелание – не использовать дерево в оформлении кухни."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
                <div>
                <p className={styles.project__p}>Это проект мы создавали для дома в Зеленой Гавани. Он построен в современной минималистичной стилистике. Дома, где интерьер и экстерьер выполнены в единой стилистике смотрятся более целостно и эффектно. Поэтому концепцию интерьера мы разработали в соответствии с эстетикой архитектурного решения дома.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/39_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/39_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/19_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/19_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/02_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/02_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/03_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/03_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Наши клиенты сразу упомянули, что предпочитают светлые интерьеры, которые можно разбавить цветовыми акцентами. В качестве дополнительного цвета мы выбрали черный – помещения просторные, хорошо освещенные, поэтому мы не опасались, что это будет смотреться мрачно. А еще сочетание черного и белого вызывает ассоциацию с клавишами фортепиано. Хозяйка дома музыкант, именно поэтому так важно было найти место для рояля. Классический инструмент отлично вписался в современный интерьер.</p>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/10_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/10_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/04_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/04_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/12_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/12_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/14_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/14_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/13_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/13_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/07_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/07_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/11_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/11_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/08_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/08_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Для интерьера дома в Зеленой Гавани мы подобрали изысканную и минималистическую кухню Next125 от DasКухня. Главное в них – чистый дизайн и высокое качество. Кухни Next125 отличаются вниманием к деталям и использованием передовых технологий –благодаря современным производственным процессам они безвредны для окружающей среды. А еще они многократные призеры международного конкурса Red Dot Design Award.</p>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реализация</h2>
                <div>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/31_monohrom-zelenaya-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/monohrom-zelenaya-gavan/31_monohrom-zelenaya-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/33_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/33_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/34_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/34_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/32_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/32_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/35_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/35_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/38_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/38_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/36_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/36_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationAlexey
                text="Картины могут стать акцентными точками в интерьере. Широкоформатные полотна выигрышно смотрятся в минималистичном пространтсве. Именно поэтому дизайн дома в Зеленой Гавани довольный сдержанный, без множества мелких деталей – все внимание искусству."
            />  
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер гостевой спальни</h2>
                <div>
                <p className={styles.project__p}>Главная дизайнерская задача – придать мягкость строгому пространству. Идеально ровные линии стеновых панелей и корпусной мебели уравновешиваются мягким изголовьем кровати. А использование текстиля привносит некоторую расслабленность в атмосферу спальной комнаты.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/15_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/15_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/16_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/16_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Для интерьера дома в Зеленой Гавани мы подобрали изысканную и минималистическую кухню Next125 от DasКухня. Главное в них – чистый дизайн и высокое качество. Кухни Next125 отличаются вниманием к деталям и использованием передовых технологий –благодаря современным производственным процессам они безвредны для окружающей среды. А еще они многократные призеры международного конкурса Red Dot Design Award.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/17_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/17_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/18_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/18_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Ванная комната и СПА</h2>
                <div>
                <p className={styles.project__p}>Несомненный плюс частного дома – возможность оборудовать собственное СПА. Интерьер сауны и прилегающего пространства зачастую ассоциируется с рустикальным стилем, но мы оформили эту зону как продолжение общей стилистики дома – современной и минималистичной.</p>
              </div>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/21_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/21_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/22_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/22_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/23_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/23_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/24_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/24_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/25_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/25_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/05_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/05_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/06_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/06_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/26_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/26_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__leftimage_righttext + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/20_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/20_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Главное в кабинете – функциональность. Создавая концепцию для этой комнаты, мы пытались продумать все рабочие сценарии хозяев дома. Поскольку музыка не просто страсть, но и профессия хозяйки, в кабинете разместили фортепиано. Массивный деревянный стеллаж – место для домашней библиотеки. Интересная деталь – высокий чугунный радиатор. Он не только обогревает помещение, но и стал интересным элементом декора.</p>
              </div>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер-спальня</h2>
                <div>
                <p className={styles.project__p}>В интерьере спальной комнаты мы также использовали монохромную палитру, но отказались от контрастного сочетания черного и белого в пользу мягких серых оттенков. Все же эта комната предназначена для отдыха. Декоративная штукатурка в изголовье кровати усложняет интерьер благодаря интересной текстуре и способствует визуальному зонированию пространства.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/27_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/27_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/28_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/28_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Наиболее интересный ракурс раскрывается прямо при входе в спальню – взгляд охватывает одновременно окно с живописным видом, туалетный столик с зеркалом причудливой формы и даже картину, расположенную напротив кровати. Эти элементы наполняют интерьер спальни жизнью.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/29_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/29_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/monohrom-zelenaya-gavan/30_monohrom-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/monohrom-zelenaya-gavan/30_monohrom-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Фасад</h2>
            </div>
            <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/03_fasad-zelenaya-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/03_fasad-zelenaya-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/05_fasad-zelenaya-gavan.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/fasad-zelenaya-gavan/05_fasad-zelenaya-gavan.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/04_fasad-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-zelenaya-gavan/04_fasad-zelenaya-gavan.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-zelenaya-gavan/02_fasad-zelenaya-gavan.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-zelenaya-gavan/02_fasad-zelenaya-gavan.jpg"
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
                  src="../../../images/partners/domani.jpg"
                  alt=""
                  />
                }
                text="Центр интерьерных решений"
              />
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
                  src="../../../images/partners/lazio.jpg"
                  alt=""
                  />
                }
                text="Салон дверей"
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
                  src="../../../images/partners/asteya.jpg"
                  alt=""
                  />
                }
                text="Современные электроустановочные изделия"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/artmadestyle.jpg"
                  alt=""
                  />
                }
                text="Салон текстиля"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/viridian.jpg"
                  alt=""
                  />
                }
                text="Студия интерьеров"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/alutex.jpg"
                  alt=""
                  />
                }
                text="Алюминиевые профильные системы" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/hormann.jpg"
                  alt=""
                  />
                }
                text="Двери и ворота"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/rimadesio.jpg"
                  alt=""
                  />
                }
                text="Межкомнатные перегородки" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/daskitchen.jpg"
                  alt=""
                  />
                }
                text="Салон немецкой мебели" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/imola.jpg"
                  alt=""
                  />
                }
                text="Итальянская плитка" 
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
export default MonohromZelenayagavan