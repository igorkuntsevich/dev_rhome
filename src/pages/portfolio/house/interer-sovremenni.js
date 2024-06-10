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
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'


const IntererSovremenni = () => {
  return (
    <Layout>
      <Seo 
        title={"Светлый интерьер в современном стиле - RHOME"} description={"Светлый интерьер в современном стиле дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/interer-sovremenni"}
        image={"https://rhome.by/images/portfolio/interer-sovremenni/01_interer-sovremenni.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Светлый интерьер в современном стиле"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="июнь 2016"
                metr="91"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/interer-sovremenni/01_interer-sovremenni.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/interer-sovremenni/00_interer-sovremenni.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/interer-sovremenni/cut/08_interer-sovremenni.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/interer-sovremenni/cut/04_interer-sovremenni.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/interer-sovremenni/cut/07_interer-sovremenni.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/interer-sovremenni/cut/13_interer-sovremenni.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/interer-sovremenni/cut/05_interer-sovremenni.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать светлый функциональный интерьер в современном стиле."
              wishText="Абсолютно точно мы хотим современный интерьер. Однако фасад дома классический, и мы никак не можем придумать, как «подружить» архитектуру с интерьером. Главная задача — чтобы все вместе выглядело гармонично и современные фишки не казались инородными."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Несмотря на то, что дом построен в традиционном для нашей страны стиле, архитектор и дизайнер все же смогли «подружить» классическую архитектуру с современным интерьером. Мы не переносили стены и не возводили новые. Просто «выжали» максимум из готового пространства. Смотрим, что получилось.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin + " " + styles.project__narrow_block}>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/02_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/02_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/03_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/03_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Главный объект иньерьера — лестница</h2>
                <div>
                <p className={styles.project__p}>Для ступеней архитектор выбрал плитку под камень FMG из коллекции Maxtone с реалистичной имитацией камня. Ограждение напоминает белоснежную ленту. Это как раз тот случай, когда внешне простое решение превращает обычную лестницу в арт-объект.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/04_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/04_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/05_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/05_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В данном проекте нам удалось разместить большой функциональный остров с плитой, рабочей поверхностью, барной стойкой и большой системой хранения. Высота подоконника удачно совпала с высотой столешницы, поэтому мойку разместили прямо под окном. Хозяйка сможет одновременно заниматься домашними делами и любоваться видом из окна.</p>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Деревянный «куб» объединяет коридор и кухню</h2>
                <div>
                <p className={styles.project__p}>А множество шкафов и полок вместят в себя все необходимое. Кухонный стол из массива с живым краем изготовили наши партнеры специально для этого проекта. Сочетание «теплого» дерева с металлом и стеклом вряд ли когда-либо выйдут из моды.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/06_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/06_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/07_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/07_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/08_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/08_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

             <ProjectConsultationAlexey
                text="Полубарная высота стола около 900 мм идеально подходит для дома. На высокий стул удобно присаживаться, но при этом не нужно «подпрыгивать». Поскольку в помещении и так разместили все необходимые зоны, эркер просто украсили растениями, чтобы не перегружать интерьер и оставить больше воздуха."
            />
           <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Центр притяжения гостиной — камин</h2>
                <div>
                <p className={styles.project__p}>Поскольку топка и дымоход находятся в правом нижнем углу стены, архитектору и дизайнеру пришлось серьезно потрудиться, чтобы выстроить грамотную композицию. В итоге остановились на асимметричном расположении телевизора и камина, уравновесив их декоративной дровницей. Благодаря подсветке ниши кажется, что камин занимает всю нижнюю часть стены.</p>
              </div>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/09_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/09_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/10_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/10_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/11_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/11_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Окно ванной</h2>
                <div>
                <p className={styles.project__p}>Сразу было решено обыграть и приумножить свет. Поэтому выбрали светлую плитку Explorer под мрамор. Итальянский производитель очень точно воспроизвел рисунок и фактуру камня в своей коллекции. Двери Barausse с алюминиевым наличником придают еще больше статусности помещению. </p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/12_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/12_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/13_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/13_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Хороший дизайн интерьера дома отличается от плохо тем, что в нем нет ни одной лишней линии. Поэтому столешница под умывальником плавно «вытекает» из полок стеллажа, подчеркивая целостность композиции. Темная итальянская плитка Explorer имитирует окисленный металл.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/14_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/14_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/interer-sovremenni/15_interer-sovremenni.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/interer-sovremenni/15_interer-sovremenni.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Фасад дома</h2>
                <div>
                <p className={styles.project__p}>Финишное покрытие кровли и ливневая система полностью устраивали хозяев, поэтому дизайн фасада архитектор проектировал исходя из этих данных. Фасад решили не дробить и «залили» его белым цветом. Помимо штукатурки ввели еще декоративную клинкерную плитку под кирпич, чтобы разнообразить фактуры.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/fasad-sovremennyj/02_fasad-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-sovremennyj/02_fasad-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/fasad-sovremennyj/03_fasad-sovremennyj.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-sovremennyj/03_fasad-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationAlexey
                text="Для фасада частного дома лучше использовать декоративную штукатурку шагрень. Привычные «шуба» и «короед» чаще используются для офисных зданий и уже изрядно набили оскомину. Лаконичное решение входной группы добавляет современности в традиционную архитектуру. Металлические ограждения из труб прямоугольного сечения сделали на заказ наши партнеры."
              />

            <div className={styles.project__leftimage_righttext}>
              <a href="https://rhome.by/images/portfolio/fasad-sovremennyj/04_fasad-sovremennyj.webp"
                data-fancybox="gallery"
                className={styles.project__leftimage_righttext_link}
                >
                <StaticImage
                  src="../../../images/portfolio/fasad-sovremennyj/04_fasad-sovremennyj.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <div className={styles.project__leftimage_righttext_text}>
                <p className={styles.project__leftimage_righttext_text_p}>Чтобы уравновесить высоту фронтонов добавили декоративные распорки. Часть террасы сделали открытой, однако ее всегда можно будет укрыть от дождя с помощью раздвижной маркизы. За счет этого в гостиной будет больше света, а на террасе хозяева смогут установить шезлонги и загорать.</p>
              </div>
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
                  src="../../../images/partners/rode.jpg"
                  alt=""
                  />
                }
                text="Салон штор и текстиля" 
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
export default IntererSovremenni