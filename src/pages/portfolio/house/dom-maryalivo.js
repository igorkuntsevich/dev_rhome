import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSergey } from '../../../subitems/project/consultation/project-consultation-sergey'
import { ProjectConsultationAlexey } from '../../../subitems/project/consultation/project-consultation-alexey'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskAlexey } from '../../../subitems/project/task/project-task-alexey';

const DomMaryalivo = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом в Марьяливо - RHOME"} description={"Дом в Марьяливо дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/dom-maryalivo"}
        image={"https://rhome.by/images/portfolio/dom-maryalivo/01_dom-maryalivo.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#E6E3E6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Дом в Марьяливо"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Тимур Саракуца"
                manager="Дмитрий Разумейчик"
                data="март 2018"
                metr="450"
                building="18 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/dom-maryalivo/01_dom-maryalivo.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/dom-maryalivo/00_dom-maryalivo.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/dom-maryalivo/cut/16_dom-maryalivo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-maryalivo/cut/24_dom-maryalivo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/dom-maryalivo/cut/23_dom-maryalivo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/dom-maryalivo/cut/14_dom-maryalivo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/dom-maryalivo/cut/06_dom-maryalivo.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskAlexey
              taskText="Разработать интерьер дома в современном стиле."
              wishText="Мы много путешествуем, часто бываем в Европе, поэтому предпочитаем современную архитектуру и спокойный, практичный дизайн в европейском стиле. Также очень нравится, когда в доме много предметов искусства — с ним интерьер сразу становится эксклюзивным."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
                <div>
                <p className={styles.project__p}>Планировочное решение первого этажа служит пространством для совместного времяпрепровождения и включает в себя просторную гостиную с камином и TV-зоной, кухню и столовую. Благодаря приличному метражу здесь же удалось разместить и комфортабельную спальню хозяев с собственной гардеробной, и все необходимые хозяйственные помещения. На втором этаже располагаются гостевые спальни и санузел, рабочий кабинет, а также современная комната отдыха с бильярдным столом в центре.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-maryalivo/02_dom-maryalivo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-maryalivo/02_dom-maryalivo.jpg"
                alt=""
                className={styles.project__one_image + " " + styles.project__narrow_block + " " + styles.project__bigmargin}
              />
            </a>  
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Изломанная геометрия пространства</h2>
                <div>
                <p className={styles.project__p}>Так как изначальный проект дома подвергся полной реконструкции, простора для творчества в плане построения пространства у архитектора было много. Так возникла идея немного поломать геометрию и объем помещения при помощи разноуровневого потолка. В итоге это и стало «фишкой» всего дизайн-проекта интерьера дома.</p>
              </div>
            </div>
          
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/03_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/03_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/04_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/04_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Гостиная – место для уютных вечеров в кругу семьи, поэтому логично, что здесь появился настоящий камин немецкого бренда Brunner с уходящим на второй этаж дымоходом.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/05_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/05_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/06_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/06_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <ProjectConsultationSergey
                text="Планируя каминную зону, заранее продумайте способ хранения дров: будет это отдельно стоящая дровница или конструкция в составе самого камина. Эти решения помогут избежать захламленности. Также обязательно учитывайте расстояние между очагом и мебелью, так как топка не всегда находится в закрытом положении, а соседство с открытым огнем небезопасно."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Незаметная кухня</h2>
                <div>
                <p className={styles.project__p}>Благодаря продуманной планировке и светлым фасадам в тон стен кухня кажется практически незаметной, спрятанной от посторонних глаз. Это не нарушает целостность гостиной зоны в совмещенном пространстве. На полу – испанский керамогранит Ape Ceramica, имитирующий паркет «французская елка».</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/07_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/07_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/08_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/08_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Гостевая зона плавно перетекает в столовую с большим обеденным столом. В данном случае пространство зонируется исключительно при помощи геометрии потолка.</p>
            </div>
            <a href="https://rhome.by/images/portfolio/dom-maryalivo/21_dom-maryalivo.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
              >
              <StaticImage
                src="../../../images/portfolio/dom-maryalivo/21_dom-maryalivo.jpg"
                alt=""
                className={styles.project__one_image + " " + styles.project__bigmargin}
              />
            </a>  
            <ProjectConsultationAlexey
                text="Очень важно расположить свет над столом на правильной высоте: в помещениях с низкими и стандартными потолками размещайте светильники на расстоянии 0,75 м над столешницей либо 1,5 м от пола; в помещениях с высокими потолками – на уровне 0,8 м над столом либо 1,6 м от пола."
            />  

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Спальня с примыкающей гардеробной</h2>
                <div>
                <p className={styles.project__p}>Немалая площадь, отведенная под спальню, позволила архитектору организовать в комнате собственную гардеробную. Таким образом нам удалось сделать помещение более приватным и автономным.</p>
                <p className={styles.project__p}>В отделке сделали ставку на сдержанные тона, которые еще долго будут в тренде: белые стены, контрастные шпонированные элементы и много текстиля теплых оттенков. Дополнили интерьер мебелью итальянских фабрик и светильниками Delta Light актуальной формы.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/09_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/09_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/10_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/10_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/27_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/27_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/28_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/28_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/29_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/29_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Ванная комната с окном в пол</h2>
                <div>
                <p className={styles.project__p}>Давнюю мечту хозяев об отдельно стоящей ванне воплотили в жизнь с помощью компании Jacob Delafon, специализирующейся на создании интерьеров ванных комнат во французском стиле. Широкоформатный керамогранит Lafaenza Ceramica, имитирующий натуральный камень, отлично дополнил изысканный интерьер.</p>
              </div>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/13_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/13_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/14_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/14_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/15_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/15_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Общий фон холла нейтральный. Особое настроение здесь задает композиция из предметов современного искусства, благодаря которой интерьер становится по-настоящему уникальным.</p>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/22_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/22_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/23_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/23_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>В кабинете установили «парящий» стол-консоль</h2>
                <div>
                <p className={styles.project__p}>В этом кабинете у нас получился микс строгого классического подхода, современных материалов и смелых дизайнерских решений. Дерево здесь представлено в самых разных вариациях: на полу, на стенах, на фасадах мебели и даже на потолке.</p>
                <p className={styles.project__p}>В отделке гостевой спальни использовали в основном натуральное дерево — из него по эскизам автора проекта создадут как панели для стены за изголовьем кровати, так и фасады систем хранения. Дополнят интерьер высокие двери до потолка со шпонированным полотном в тон.</p>
              </div>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/18_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/18_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/19_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/19_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/20_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/20_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div> 
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/16_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/16_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/17_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/17_dom-maryalivo.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <h2 className={styles.project__title}>Бильярдная в белой мансарде</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>В комнате отдыха архитектор снова «поиграл» с объемами потолка, подчеркнув тем самым нестандартную геометрию дома.</p>
                  <p className={styles.project__p}>Бильярдная комната, вопреки стереотипам, выполнена в очень светлых тонах. Благодаря четырем большим мансардным окнам она почти все время будет залита естественным светом.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/dom-maryalivo/11_dom-maryalivo.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/dom-maryalivo/11_dom-maryalivo.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/dom-maryalivo/12_dom-maryalivo.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/dom-maryalivo/12_dom-maryalivo.jpg"
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
                  src="../../../images/partners/stonetech.jpg"
                  alt=""
                  />
                }
                text="Мастерская камня"
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
                  src="../../../images/partners/brunner.jpg"
                  alt=""
                  />
                }
                text="Немецкие камины" 
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
export default DomMaryalivo