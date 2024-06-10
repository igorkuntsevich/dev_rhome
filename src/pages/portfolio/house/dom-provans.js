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


const DomProvans = () => {
  return (
    <Layout>
      <Seo 
        title={"Современный дом с элементами прованса - RHOME"} description={"Современный дом с элементами прованса дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/dom-provans"}
        image={"https://rhome.by/images/portfolio/dom-provans/01_dom-provans.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Современный дом с элементами прованса"
                leader="Сергей Рассеко"
                architector="Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="декабрь 2018"
                metr="130"
                building=""
                budget={styles.project_intro_item_cost1}
              />
              <StaticImage
                src="../../../images/portfolio/dom-provans/01_dom-provans.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-provans/00_dom-provans.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-provans/cut/08_dom-provans.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-provans/cut/14_dom-provans.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/dom-provans/cut/09_dom-provans.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-provans/cut/19_dom-provans.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/dom-provans/cut/05_dom-provans.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера дома в современном стиле."
              wishText="Мы купили готовый дом и хотим в нем сделать уютное семейное гнездышко с элементами прованса. Главная просьба к архитекторам: не нужно радикально менять планировку, желательно максимально подстроиться под имеющуюся. В то же время хотелось бы, чтобы в доме были предусмотрены отдельные комнаты для спальни, рабочего кабинета и детской."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Для работы над проектом мы получили просторный одноэтажный дом с грамотной архитектурой и соответствующей планировкой. Площадь помещения позволяла разместить все необходимое без сноса стен, к тому же заказчики не хотели радикальных изменений, чтобы сохранить большую часть бюджета для отделочных работ и комплектации, поэтому планировку было решено оставить практически без изменений. Все хранение вынесли в отдельные помещения – гардеробную и прачечную. Их организовали в неиспользуемой части гаража – так было удобно хозяевам дома.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-provans/02_dom-provans.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-provans/02_dom-provans.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>            
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-provans/03_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/03_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/04_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/04_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Прованс в современной гостиной</h2>
                <div>
                <p className={styles.project__p}>Традиционный прованский декор отлично вписался в современный интерьер. Гостиная, совмещенная с кухней, получилась очень светлой и просторной. Белые стены, паркет максимально естественного оттенка и декоративные балки на потолке – классические элементы стиля прованс, которые органично вписались в современный интерьер дома для молодой семьи. Главный предмет в гостиной — большой, мягкий и удобный угловой диван, о котором давно мечтали хозяева квартиры. Неяркий сине-голубой цвет смотрится особенно свежо на фоне деревянных поверхностей и сдержанных оттенков стен.</p>
                <p className={styles.project__p}>Для придания большой комнате дополнительного уюта также предусмотрели камин, встроенный в стену, облицованную кирпичом. Чтобы он не выглядел слишком массивным и не доминировал в пространстве, выбрали простой, лаконичный портал.

Гостиная | Дизайн студия – Rhome.by</p>
              </div>
            </div>           
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-provans/06_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/06_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/07_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/07_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-provans/08_dom-provans.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
              >
              <StaticImage
                src="../../../images/portfolio/dom-provans/08_dom-provans.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a> 
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Помимо практически незаметных точечных светильников, встроенных в потолок, дизайнер предусмотрел стильную современную люстру над обеденной группой: такое решение позволит создать более интимную атмосферу за столом в вечернее время. Благодаря большому количеству окон, гостиная получилась очень светлой и гостеприимной. Нейтральный оттенок стен не отвлекает на себя внимание, и в то же время на этом фоне отчетливо выделяются яркие детали и текстуры.</p>
            </div>
 

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-provans/05_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/05_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/09_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/09_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Если вешаете телевизор над камином, постарайтесь заранее минимизировать риск перегрева техники. Например, можно спрятать телевизор в неглубокую нишу, а над камином обязательно стоит предусмотреть выпирающую полку, которая создаст дополнительную защиту для техники."
              />
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Лаконичная кухня</h2>
                <div>
                <p className={styles.project__p}>Кухню решили сделать открытой, с плавным переходом в столовую и гостиную. Заказчикам очень понравилась идея кухонной столешницы, переходящей в барный стол. Такой прием отлично разграничивает визуально достаточно большой объем общего пространства. Рядом поставили несколько барных стульев с мягкой обивкой, на которых гостям и хозяевам будет комфортно сидеть. За лаконичными глухими фасадами шкафчиков спрятана вся техника.Плитка на кухонном фартуке — молодой перспективный итальянский бренд 41zero42 – глазурованный керамогранит с высокими эксплуатационными свойствами и актуальным дизайном.</p>
              </div>
            </div>  
            <a href="https://rhome.by/images/portfolio/dom-provans/10_dom-provans.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-provans/10_dom-provans.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>            

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Балки и мягкая подсветка в cпальнe</h2>
                <div>
                <p className={styles.project__p}>Спальня выполнена в современном стиле, о провансе здесь напоминают разве что балки на потолке. Чтобы конструкция была безопасной, основные балки жестко закрепили, а сверху уложили доски по типу вагонки. В потолок встроили мягкую подсветку, прикроватные светильники и вентиляционные решетки. Заказчики не хотели захламлять комнаты шкафами, поэтому все хранение сосредоточено в отдельной гардеробной. В спальне предусмотрен всего лишь небольшой комод – этого достаточно для хранения постельного белья и других необходимых мелочей.</p>
              </div>
            </div>  
            <a href="https://rhome.by/images/portfolio/dom-provans/12_dom-provans.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-provans/12_dom-provans.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a> 
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-provans/14_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/14_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/13_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/13_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Кабинет с картой мира</h2>
                <div>
                <p className={styles.project__p}>Помимо стандартного белого цвета в интерьер рабочего кабинета введен еще насыщенный бежевый оттенок, он придает контрастности помещению и настраивает на рабочий лад. В качестве декора в помещении использовали оригинальную карту мира, составленную из разных пород дерева.</p>
                <p className={styles.project__p}>По просьбе хозяев в кабинете появились два больших книжных шкафа и уютный уголок для чтения. Элегантное кресло Ermes от Misura Emme благодаря обтекаемой форме гарантирует непревзойденный комфорт, а стильный торшер справится с недостатком естественного света.</p>
              </div>
            </div>  

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-provans/16_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/16_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/18_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/18_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/17_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/17_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Нейтральный дизайн детской</h2>
                <div>
                <p className={styles.project__p}>Так как во время работы над проектом еще было непонятно, мальчик или девочка будет жить в комнате, дизайнер выбрал нейтральные обои, которые отлично подойдут ребенку любого пола. Дети очень быстро растут, поэтому вся мебель в этом помещении отдельно стоящая, мобильная и готова к изменениям в любой момент.</p>
              </div>
            </div>  

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-provans/19_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/19_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/20_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/20_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/21_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/21_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Постирочная команата и санузел</h2>
                <div>
                <p className={styles.project__p}>Основные места хранения в доме сосредоточены в отдельной гардеробной и постирочной комнате, которые разместили в неиспользуемой части гаража.</p>
                <p className={styles.project__p}>Хоть размер комнаты и позволял разместить здесь ванну, заказчики предпочли сделать просторную современную душевую. Весь санузел оформлен плиткой и мозаикой из одной коллекции от итальянской фабрики Imola Ceramica. Недостаток естественного света в помещении компенсировали большим зеркалом с функциональным светом, расположенным напротив окна.</p>
              </div>
            </div>  

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-provans/15_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/15_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/23_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/23_dom-provans.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-provans/22_dom-provans.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-provans/22_dom-provans.jpg"
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
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня"
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
export default DomProvans