import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KvartiraStorozhevskaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира на ул. Сторожевская"} description={"Квартира на ул. Сторожевская дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-storozhevskaya"}
        image={"https://rhome.by/images/portfolio/kvartira-storozhevskaya/01_kvartira-storozhevskaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира на ул. Сторожевская"
                leader="Сергей Рассеко"
                architector="Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="май 2018"
                metr="270"
                building="13 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/01_kvartira-storozhevskaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/00_kvartira-storozhevskaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/cut/17_kvartira-storozhevskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/cut/33_kvartira-storozhevskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/cut/05_kvartira-storozhevskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/cut/11_kvartira-storozhevskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-storozhevskaya/cut/26_kvartira-storozhevskaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Хочется увидеть в итоге современную городскую квартиру, стильную и элегантную, но не перегруженную деталями. По цветовой гамме предпочитаю благородные коньячные оттенки. Пространство оставьте максимально просторным, но не забудьте про системы хранения, в том числе организацию хозблока и нескольких гардеробных."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Просторная квартира площадью 270 кв. м. с прекрасным видом и свободной планировкой. Изначально стенами тут были отгорожены только санузлы, что дало архитекторам определенную свободу действий в организации пространства.Все помещения хозяйственного назначения вынесли в центральную часть, а вот жилые — поближе к окнам. А чтобы подчеркнуть и приумножить естественный свет — расширили оконные блоки везде, где это было возможно.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/02_kvartira-storozhevskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/02_kvartira-storozhevskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Интерьер гостиной можно назвать в какой-то степени минималистским, ведь здесь нет ничего лишнего, есть только максимум света и фактур. Все очень функционально и на первый взгляд предельно просто. Лаконичный модульный диван итальянской фабрики Poliform отлично вписался в строгий интерьер с серыми стенами, а знаменитый дизайнерский торшер Arco Flos, придуманный еще в 1962 году, добавляет гостиной авангардности и шика. В отделке предпочтения были отданы исключительно натуральным материалам высокого качества: массив дерева, мрамор, стекло, металл.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/03_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/03_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/04_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/04_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/05_kvartira-storozhevskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/05_kvartira-storozhevskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Звездная люстра и кухня за стеклом</h2>
              <div>
                <p className={styles.project__p}>В просторной гостиной нашлось место и для уютной столовой зоны на 8-10 персон. Роскошный стол с тонкой столешницей из камня и элегантно изогнутые стулья — результат сотрудничества фабрики Poliform c дизайнером Марселем Вандерсом.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/09_kvartira-storozhevskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/09_kvartira-storozhevskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/10_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/10_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/11_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/11_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Большой обеденный стол требует подходящего освещения, и подвесные светильники Moooi в виде многогранных шаров отлично справляются со своей задачей. За раздвижной стеклянной перегородкой в алюминиевой раме находится стильная и продуманная до мелочей кухня немецкого производителя. Благодаря встраиваемой технике и лаконичным двухцветным фасадам со скрытой фурнитурой она органично вписывается в интерьер всей квартиры, словно продолжая изысканный образ гостиной. Остров из натурального камня не только обыгрывает несущую колонну, но и эргономично совмещает в себе рабочее место с подстольными ящиками для хранения кухонной утвари.</p>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/06_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/06_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/08_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/08_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/07_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/07_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>В холле минимум деталей</h2>
              <div>
                <p className={styles.project__p}>В оформлении интерьера холла мы использовали темное дерево коньячных оттенков, максимум света и свободного пространства. Просторный светлый холл поддерживает стилистику всех остальных помещений. Не забыли и про функциональность: рядом с входной дверью расположился небольшой шкаф для верхней одежды и компактные пуфики для удобства гостей. Напротив входа — изысканная картина современного художника. Это первое, что будут видеть хозяева, возвращаясь домой.</p>
              </div>
            </div>


            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/12_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/12_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/13_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/13_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/14_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/14_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/15_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/15_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/16_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/16_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Стеклянная стена между спальней и ванной</h2>
              <div>
                <p className={styles.project__p}>Ощущение тепла и уюта в спальне создает отделка стен шпонированными панелями нежно-коричневого оттенка. Такой вариант экологичен, прост в уходе и выглядит солидно. Немаленькая площадь комнаты позволила организовать в спальне зону отдыха. Темная стена из дерева и подобранный к ней в тон паркет придают помещению уместную камерность, интимность. А окна в пол наполняют помещение необходимым светом.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/17_kvartira-storozhevskaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-storozhevskaya/17_kvartira-storozhevskaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/18_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/18_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/19_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/19_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Смелое и нестандартное решение — стеклянная перегородка между спальней и санузлом, которая стирает границы между двумя зонами и наполняет ванную естественным светом. Так как санузел является продолжением комнаты, он оформлен в одном с ней ключе: в спокойных бежевых и коричневых тонах.</p>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/34_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/34_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/38_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/38_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Текстильные стены в кабинете</h2>
              <div>
                <p className={styles.project__p}>Одним из пожеланий хозяина было сделать кабинет в строгом офисном стиле, чтобы создать там рабочую атмосферу. Поэтому интерьер получился очень сдержанный. Стеновые панели, обтянутые тканью, — прямая отсылка к классическому английскому стилю, строгому и консервативному. Модульный стеллаж Poliform оснащен встроенной светодиодной подсветкой, а многочисленные открытые и закрытые полки из окрашенного дерева можно дополнить элементами, необходимыми для рабочего кабинета.</p>
              </div>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/31_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/31_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/32_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/32_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/33_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/33_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/25_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/25_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/26_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/26_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/27_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/27_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Кровать в детской раскладывается из стены</h2>
              <div>
                <p className={styles.project__p}>Отличное решение для детской — кровать-трансформер Olissys, которая днем выглядит как стенка и удачно замаскированный диван под ней, а ночью легко и просто трансформируется в просторную кровать с удобным ортопедическим матрасом.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/21_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/21_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/22_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/22_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Комфортное рабочее место разместили перед окном, через которое проникает достаточно солнечного света. Благодаря грамотной планировке в квартире появился небольшой хозблок, в котором хозяева смогут спрятать бытовую химию, технику и инструменты.</p>
            </div>
   

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/23_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/23_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/24_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/24_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/38_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/38_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Динамичный рисунок на плитке в ванной</h2>
              <div>
                <p className={styles.project__p}>Интерьер ванной комнаты — светлый, сдержанный, и в целом поддерживает стилистику, заданную в других помещениях. Весь санузел решили отделать итальянской плиткой с текстурой мрамора и добавить необходимый акцент в виде серого пола и мебели из темного дерева.Практичное решение для ванной — зеркало на всю стену, которое визуально расширяет пространство, делая небольшое помещение практически бесконечным.</p>
              </div>
            </div>

          <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/20_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/20_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/29_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/29_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/28_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/28_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/35_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/35_kvartira-storozhevskaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-storozhevskaya/36_kvartira-storozhevskaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-storozhevskaya/36_kvartira-storozhevskaya.jpg"
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
              />
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
                  src="../../../images/partners/atrium.jpg"
                  alt=""
                  />
                }
                text="Салон плитки и сантехники" 
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
export default KvartiraStorozhevskaya