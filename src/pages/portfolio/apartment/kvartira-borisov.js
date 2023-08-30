import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskDmitry } from '../../../subitems/project/task/project-task-dmitry'

const KvartiraBorisov = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в Борисове в темных тонах"} description={"Квартира в Борисове в темных тонах дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-borisov"}
        image={"https://rhome.by/images/portfolio/kvartira-borisov/01_kvartira-borisov.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в Борисове в темных тонах"
                leader="Сергей Рассеко"
                architector="Дмитрий Вашкевич, Ксения Ледохович"
                manager="Дмитрий Разумейчик"
                data="май 2018"
                metr="146"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-borisov/01_kvartira-borisov.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-borisov/00_kvartira-borisov.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskDmitry
              taskText="Разработать дизайн интерьера квартиры в современном стиле."
              wishText="Очень нравятся современные интерьеры, стильные, но сдержанные, не перегруженные деталями. Основные пожелания по планировке – большая уютная гостиная для посиделок и комфортабельная хозяйская спальня со своей отдельной гардеробной. Еще важно предусмотреть яркую и нескучную детскую комнату для двоих детишек дошкольного возраста."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Для работы нам досталось достаточно просторное помещение площадью 146 кв. м., получившееся благодаря объединению двух смежных квартир. В целом изначальная планировка понравилась, но все же небольшие изменения пришлось внести: за счет прихожей немного увеличили кухню, бывшую кладовую модернизировали под гардеробную комнату, изменив ее форму, а также демонтировали балконные блоки, введя площадь лоджий в жилое пространство.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-borisov/02_kvartira-borisov.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-borisov/02_kvartira-borisov.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Гостиная заполнена солнечным светом</h2>
                <div>
                <p className={styles.project__p}>Благодаря тому, что стандартный балконный блок мы заменили на современную раздвижную систему в тонкой алюминиевой раме, в гостиную попадает много естественного света, поэтому ее не побоялись выполнить в темных тонах. На стенах — штукатурка благородного серого цвета с золотой потертостью. Лаконичный белый диван Soft Dream итальянской фабрики Flexform, будто парящий над полом на элегантной металлической основе, гармонично вписался в интерьер и стал главным цветовым акцентом всего помещения.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/03_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/03_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/04_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/04_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Особое внимание уделено световому дизайну: необычные бра бренда Delightfull на стенах, оригинальная дизайнерская люстра над журнальным столиком, итальянский торшер Flos и мягкая светодиодная подсветка обеспечивают огромное разнообразие сценариев освещения — от приглушенного интимного до яркого праздничного.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/05_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/05_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/06_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/06_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <h2 className={styles.project__title}>Черный мрамор на кухне</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                <p className={styles.project__p}>Немецкая кухня с лаконичными глухими фасадами изготовлена под заказ. Фартук выполнен из того же материала, что и напольное покрытие, — натурального мрамора роскошного черного цвета, который является одним из самых долговечных и прочных природных материалов.</p>
                <p className={styles.project__p}>Эргономичный остров из натурального камня совмещает в себе комфортное рабочее место с ящиками для хранения кухонной утвари и барную стойку, переходящую в обеденный стол для всей семьи. Главная изюминка помещения — впечатляющий подвесной светильник от компании CENTRSVET, который легко меняет свою конфигурацию за счет вращающихся модулей. Благодаря этому можно не только менять геометрию люстры от прямой линии до различных волнообразных форм, но и концентрировать свет в нужной зоне.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/07_kvartira-skandinavsk.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-skandinavsk/07_kvartira-skandinavsk.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-skandinavsk/08_kvartira-skandinavsk.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-skandinavsk/08_kvartira-skandinavsk.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Визуально увеличили прихожую</h2>
                <div>
                <p className={styles.project__p}>Так как прихожая достаточно узкая, ее объем раздвинули при помощи большого зеркала, эффектно обыгранного стеновыми панелями из натурального шпона в цвете темный зебрано. На полу — черный мрамор, который добавляет помещению презентабельности и к тому же служит прекрасным природным антисептиком.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/09_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/09_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/10_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/10_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Мастер-спальня</h2>
                <div>
                <p className={styles.project__p}>Хозяйская спальня — совершенно самодостаточный объект с отдельным санузлом и гардеробной, который, несмотря на доминирующие темные тона, рождает ощущение уюта и спокойствия. Оригинальные настольные светильники дают хороший направленный свет и усиливают приятную расслабляющую атмосферу. Центром комнаты является большая двуспальная кровать с мягким кожаным изголовьем, которая благодаря тонким металлическим ножкам не выглядит массивно. Подвесной светильник над кроватью в виде светодиодных кругов разного диаметра в латунном корпусе выполнен вручную итальянскими мастерами на фабрике Henge.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/11_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/11_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/12_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/12_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/13_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/13_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер комнаты подростка</h2>
                <div>
                <p className={styles.project__p}>Сын хозяев — современный любознательный парень, поэтому дизайн детской комнаты универсален и готов к любым модификациям. Стеллаж, выполненный под заказ, является не только оригинальным местом для хранения книг и мелочей, но и прекрасным зонирующим элементом комнаты, отделяя спальную зону от учебно-игровой.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/14_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/14_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/15_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/15_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванная с джакузи</h2>
                <div>
                <p className={styles.project__p}>Большая каменная столешница на две раковины — практичное решение для удобства всех членов семьи. Для отделки санузла использовали широкоформатную плитку, повторяющую текстуру напольных покрытий в гостиной и кухне, только в других цветах — белом и сером. Просторная ванная с джакузи стала центральным объектом санузла за счет оригинальной подсветки, создающей «парящий» эффект. В итоге, как и хотели хозяева, получился элегантный европейский дизайн интерьера квартиры, который, несмотря на доминанту темных оттенков, вышел теплым и уютным.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/16_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/16_kvartira-borisov.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-borisov/17_kvartira-borisov.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-borisov/17_kvartira-borisov.jpg"
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
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня" 
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
                  src="../../../images/partners/artmadestyle.jpg"
                  alt=""
                  />
                }
                text="Салон текстиля" 
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
export default KvartiraBorisov