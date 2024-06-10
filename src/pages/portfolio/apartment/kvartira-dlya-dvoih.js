import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
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


const KvartiraDlyadvoih = () => {
  return (
    <Layout>
      <Seo 
        title={"Создание и реализация дизайна интерьера в ЖК «D3» - RHOME"} description={"Студия дизайна RHome разработала и сопроводила дизайн проект для квартиры в новом жилом комплексе D3 в Минске. Интерьер получился сдержанным, удобным и элегантным, но в то же время не лишенным индивидуальности."}
        location={"https://rhome.by/portfolio/apartment/kvartira-dlya-dvoih"}
        image={"https://rhome.by/images/portfolio/kvartira-dlya-dvoih/01_kvartira-dlya-dvoih.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК «D3»"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="август 2018"
                metr="109"
                building="10 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/01_kvartira-dlya-dvoih.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/00_kvartira-dlya-dvoih.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/cut/12_kvartira-dlya-dvoih.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/cut/07_kvartira-dlya-dvoih.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/cut/05_kvartira-dlya-dvoih.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/cut/09_kvartira-dlya-dvoih.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dlya-dvoih/cut/16_kvartira-dlya-dvoih.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Спроектировать интерьер в современном стиле."
              wishText="В итоге хотелось бы получить проект современной городской квартиры, по ощущениям напоминающий уютные испанские виллы. К планировке у нас есть 2 основных требования: обязательно предусмотреть просторную удобную гостиную со столовой, где можно будет принимать гостей, и раздельные спальни с личными гардеробными для нас с женой."
            />
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/02_kvartira-dlya-dvoih.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/02_kvartira-dlya-dvoih.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Вдохновение  проекта – виллы Испании</h2>
              <div>
              <p className={styles.project__p}>Владельцам этой квартиры близка стилистика современных европейских апартаментов, так как супруг родом из Испании. Это наложило определенный отпечаток на то, каким в итоге получился интерьер: сдержанным, удобным и элегантным, но в то же время не лишенным индивидуальности.</p>
                <p className={styles.project__p}>В планировке дизайна интерьера квартиры архитектор учел все пожелания заказчиков и предусмотрел общее объединенное пространство кухни и гостиной, а также обособленные раздельные спальни для обоих супругов. Туалет с ванной объединили, в итоге получив 2 просторных совмещенных санузла, которые удалось расширить за счет коридора.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/07_kvartira-dlya-dvoih.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/07_kvartira-dlya-dvoih.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title + " " + styles.project__lefttitle_righttext__title_long}>Лаконичные формы и природные материалы – основа сдержанного и стильного интерьера</h2>
              <div>
              <p className={styles.project__p}>Простые природные оттенки, лаконичные формы, использование натуральных материалов, функциональная современная мебель и общий комфорт помещения – базовые принципы, которые легли в основу интерьера этой гостиной.</p>
                <p className={styles.project__p}>Пол, выложенный модульным паркетом Bauwerk, выглядит роскошно и дорого, но вместе с тем обладает универсальной красотой благодаря нестандартной раскладке и теплому, темно-коньячному оттенку.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/05_kvartira-dlya-dvoih.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/05_kvartira-dlya-dvoih.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <h2 className={styles.project__title}>Абажуры в столовой из гиацинтов...</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                <p className={styles.project__p}>В столовой зоне главными акцентами, безусловно, являются оригинальные подвесные светильники Water Hyacinth от Cosmorelax. Их абажур изготовлен из природного материала – стеблей водяного гиацинта, которые по структуре напоминают слой деревянной стружки, благодаря чему светильники выглядят невесомыми и легкими, будто свободно парят в воздухе.</p>
                  <p className={styles.project__p}>Отлично вписывается в интерьер и выглядит солидно. Вся корпусная мебель на кухне теплого оттенка, что удачно контрастирует с белыми нейтральными стенами. Благодаря встраиваемой технике и лаконичным двухцветным фасадам со скрытой фурнитурой кухня выглядит цельно и органично продолжает изысканный образ гостиной.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/10_kvartira-dlya-dvoih.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-dlya-dvoih/10_kvartira-dlya-dvoih.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/08_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/08_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Некая сдержанность и даже суровость ощущается из-за обилия натурального камня на стенах, но стиль довольно самобытен, имеет своё «лицо» и продуманную упорядоченность. Стильный и практичный вариант организации хранения вина – встроенный винный стеллаж.</p>
            </div>


            
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/06_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/06_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/09_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/09_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Телевизор на управляемом кронштейне</h2>
              <div>
              <p className={styles.project__p}>В спальне цветовая гамма довольно сдержанная, почти нейтральная. Да и в целом комната выглядит достаточно аскетично и просто. Интересные детали – встроенные стеллажи с металлическими стойками, добавляющие интерьеру брутальности, и TV на управляемом кронштейне, который при необходимости опускается.</p>

              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/13_kvartira-dlya-dvoih.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/13_kvartira-dlya-dvoih.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В спальне имеется собственный санузел, в интерьере которого продолжается «каменная тема», заданная в других помещениях. Здесь ничего лишнего, только правильная геометрия и сочетание фактур – шероховатого камня и глянцевого керамогранита.</p>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/12_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/12_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/14_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/14_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/11_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/11_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__bigmargin}>
            <ProjectConsultationAlexey
                text="Общепринятый стандарт высоты установки раковины в ванной комнате 85-90 см. Он рассчитан на людей среднего роста. Если члены семьи высокие или, наоборот, ниже среднего, есть смысл отказаться от модели на пьедестале и установить раковину в соответствии с ростом, обратив внимание на накладные и навесные модели."
            />
            </div>
           
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Пастельные тона и мягкие линии</h2>
              <div>
              <p className={styles.project__p}>Вторая спальня выполнена в принципиально другом стиле: светлые тона, плавные линии и обилие элементов декора. Роскошная кровать цвета пыльной розы с высоким мягким изголовьем очень эффектно смотрится на фоне нейтральных белых стен.</p>
              <p className={styles.project__p}>В помещении очень много округлых форм. Это касается всех элементов, начиная от геометрии стен (арка в изголовье), заканчивая силуэтами мебели и светильников. Такой прием делает интерьер спальни еще более женственным, мягким.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/16_kvartira-dlya-dvoih.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/16_kvartira-dlya-dvoih.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>В основном санузле на стенах и полу использовали итальянскую широкоформатную плитку под мрамор в двух цветах – черном и белом. Главная фишка интерьера – стильная цельнокорпусная раковина из композита кварца, которая будто вырастает из стены.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/15_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/15_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/17_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/17_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Реализация</h2>
            </div>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/20_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/20_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/19_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/19_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/18_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/18_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/22_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/22_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/23_kvartira-dlya-dvoih.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dlya-dvoih/23_kvartira-dlya-dvoih.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-dlya-dvoih/21_kvartira-dlya-dvoih.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dlya-dvoih/21_kvartira-dlya-dvoih.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
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
                  src="../../../images/partners/gira.jpg"
                  alt=""
                  />
                }
                text="Розетки и выключатели"
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
                  src="../../../images/partners/glivi.jpg"
                  alt=""
                  />
                }
                text="Интерьерные изделия из камня"
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
export default KvartiraDlyadvoih