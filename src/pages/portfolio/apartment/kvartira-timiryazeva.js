import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana'

const KvartiraTimiryazeva = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира с камином на Тимирязева"} description={"Квартира с камином на Тимирязева дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-timiryazeva"}
        image={"https://rhome.by/images/portfolio/kvartira-timiryazeva/01_kvartira-timiryazeva.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира с камином на Тимирязева"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="октябрь 2018"
                metr="89"
                building="7 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/01_kvartira-timiryazeva.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/00_kvartira-timiryazeva.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-timiryazeva/cut/03_kvartira-timiryazeva.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-timiryazeva/cut/06_kvartira-timiryazeva.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-timiryazeva/cut/13_kvartira-timiryazeva.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-timiryazeva/cut/08_kvartira-timiryazeva.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-timiryazeva/cut/11_kvartira-timiryazeva.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="В нашей новой квартире мы хотим увидеть светлый, солнечный интерьер с современными решениями и актуальными материалами. В планировке обязательно предусмотрите отдельную спальню для нас и детскую для ребенка, гостиную можно совместить с кухней, нам нравится такой прием."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Хозяева квартиры в новостройке – семейная пара с ребенком. Чтобы удовлетворить все нужды заказчиков, пришлось произвести небольшую перепланировку. Первое, что мы сделали – объединили кухню с гостиной и оставили один вход. Следующим шагом стало расширение санузлов за счет коридора. В остальном значительных изменений не потребовалось.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/02_kvartira-timiryazeva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/02_kvartira-timiryazeva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/05_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/05_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/09_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/09_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Гостиная, как и хотели хозяева, получилась светлой, солнечной.</h2>
              <div>
              <p className={styles.project__p}>Центром интерьера и основной точкой притяжения внимания тут стал стильный биокамин, снизу встроенный в тумбу под TV, а сверху облицованный тонким керамогранитом песочного цвета. Такая конструкция выглядит нестандартно и современно.</p>
                <p className={styles.project__p}>Совмещенное пространство гостиной и кухни все же хотелось разграничить хотя бы визуально. И тут нам на помощь пришел один из любимейших дизайнерских приемов зонирования – перегородка из деревянных реек от пола до потолка. Фишка этой конструкции в подвижных ламелях, которые работают по принципу жалюзи, придают всему помещению динамику и возможность с легкостью видоизменяться.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/04_kvartira-timiryazeva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/04_kvartira-timiryazeva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Основной свет в гостиной организован при помощи трековой системы. Это удобное решение для больших комнат, ведь световой поток можно разбить на несколько групп, а сами светильники перемещать и направлять в нужную сторону. Технический свет дополняет оригинальный подвесной светильник от Cosmorelax Spider Mouille, который может стать стильным акцентом в любом помещении.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/03_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/03_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/08_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/08_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
                <div>
                  <p className={styles.project__p}>Так как у входа у нас образовалась достаточно глубокая ниша (около 120 см), использовать ее только под шкаф было не совсем удобно, поэтому архитектор разместил тут встроенную мебельную конструкцию для хранения легкой одежды и мелочей, а также функциональный подиум с подсветкой.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/11_kvartira-timiryazeva.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-timiryazeva/11_kvartira-timiryazeva.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/10_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/10_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Высокие двери до потолка – еще один актуальный дизайнерский прием. Такие двери не только делают помещение более высоким, но и в целом преображают пространство. А шпонированные полотна дверей работают как стеновые панели, то есть выполняют эстетическую функцию, являясь своеобразным элементом декора."
              />
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Максимум дневного света в столовой зоне</h2>
              <div>
              <p className={styles.project__p}>В кухне мы демонтировали подоконную часть и установили окна в пол, благодаря чему немного расширили имеющееся пространство и получили максимум дневного света в столовой зоне. В вечернее время за освещение здесь отвечают встроенные парные светильники и люстра Spider Mouille, у которой лампы с легкостью могут поворачиваться под любым удобным углом.</p>
                <p className={styles.project__p}>Кухня и гостиная у нас объединены в единое пространство. Поэтому, чтобы не привлекать к себе особого внимания, кухня была выбрана встроенная, со скрытой фурнитурой, в песочных оттенках в тон гостиной.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/07_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/07_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/06_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/06_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня в английском стиле</h2>
              <div>
              <p className={styles.project__p}>Цветовая гамма в спальне очень спокойная, в основном в пастельных тонах. Стену у изголовья украшают клетчатые обои в английском стиле, которые в сочетании с деревянными элементами выглядят сдержанно, но изысканно.</p>
              <p className={styles.project__p}>Заказчики очень хотели видеть у себя в квартире деревянные фактуры теплых оттенков, им было важно использовать в интерьере живой материал. Даже строгий бюджет не повлиял на выбор натурального шпона как основного отделочного материала в спальне.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/12_kvartira-timiryazeva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-timiryazeva/12_kvartira-timiryazeva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/13_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/13_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/14_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/14_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Детская имеет свои функциональные зоны: спальное и рабочее место, TV-зону и большое количество мест для хранения. Этой комнате не хватало естественного света, поэтому мы предусмотрели всевозможные варианты искусственного освещение: встроенные светильники, люстра, настольные лампы и бра.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/15_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/15_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/16_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/16_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Санузлы</h2>
              <div>
              <p className={styles.project__p}>В квартире предусмотрено два санузла: в одном находится просторная ванная, а в другом – компактная душевая.</p>
              <p className={styles.project__p}>Санузел полностью отделан итальянской плиткой с имитацией камня. Функцию необходимого цветового акцента тут выполняют высокие двери до потолка со шпонированными полотнами, которые мы использовали во всей квартире.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/17_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/17_kvartira-timiryazeva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-timiryazeva/18_kvartira-timiryazeva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-timiryazeva/18_kvartira-timiryazeva.jpg"
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
                  src="../../../images/partners/mega.jpg"
                  alt=""
                  />
                }
                text="Салон интерьерных решений"
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
                  src="../../../images/partners/openini.jpg"
                  alt=""
                  />
                }
                text="Салон напольных покрытий и дверей"
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
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/krea.jpg"
                  alt=""
                  />
                }
                text="Салон обоевй"
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
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
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
export default KvartiraTimiryazeva