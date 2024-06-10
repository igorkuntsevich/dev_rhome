import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-facade"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'


const FasadSovremennyj = () => {
  return (
    <Layout>
      <Seo 
        title={"Современный фасад дома | Дизайн студия – Rhome.by"} description={"Современный фасад дома от студии Rhome. Было/стало, чертежи, 3D проекты."}
        location={"https://rhome.by/portfolio/facade/fasad-sovremennyj"}
        image={"https://rhome.by/images/portfolio/fasad-sovremennyj/01_fasad-sovremennyj.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современный фасад дома"
                leader="Алексей Сергеев"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="май 2016"
                metr="250"
                building=""
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-sovremennyj/01_fasad-sovremennyj.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/fasad-sovremennyj/00_fasad-sovremennyj.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>    
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Оформить фасад дома в современном стиле."
              wishText="Хотим придать нашему дому современный внешний вид. В оформлении фасадов нравится лаконичный европейский подход. Необходимо также разработать входную группу и террасу с обратной стороны дома. Делайте все что угодно, только не «избушку»."
            />
           <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
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
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер дома</h2>
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
          </div>
        </div>
      </Fancybox>
      <div className="wrapper">
        <FooterConsultationDmitry />
      </div>
    </Layout>
  )
}
export default FasadSovremennyj