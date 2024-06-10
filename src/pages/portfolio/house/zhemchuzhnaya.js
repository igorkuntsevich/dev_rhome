import * as React from "react"
import Layout from "../../../components/layout.js"
import Seo from "../../../components/seo.js"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-house.js"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro.js"
import { PhotoCollage } from "../../../subitems/photocollage/index.js"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry/index.js"
import { ProjectTaskSvetlana } from '../../../subitems/project/task/project-task-svetlana.js'


const Zhemchuzhnaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дом Жемчужная-2 - RHOME"} description={"Дом Жемчужная-2 дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/house/zhemchuzhnaya"}
        image={"https://rhome.by/images/portfolio/zhemchuzhnaya/01_zhemchuzhnaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#E7E3DE"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Жемчужная-2"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Светлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2023"
                metr="296"
                building="16 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/zhemchuzhnaya/01_zhemchuzhnaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/zhemchuzhnaya/00_zhemchuzhnaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/zhemchuzhnaya/cut/2_1.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/zhemchuzhnaya/cut/2_3.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/zhemchuzhnaya/cut/2_2.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/zhemchuzhnaya/cut/2_4.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/zhemchuzhnaya/cut/2_5.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSvetlana
              taskText="Спроектировать интерьер загородного дома для проживания семьи из трех человек. Максимально использовать имеющийся потенциал пространства."
              wishText="Представляю наш дом как светлый и воздушный, с большими панорамными окнами и мягкими формами. Яркие акценты не в моем стиле. В гостиной обязательно должен быть большой камин, а на полу — натуральный камень."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Концепция дома предполагает обилие естественного света и пространство, свободно трансформирующееся из помещения в сад, создавая единое целое с природой. Использование больших панорамных окон и отсутствие границ между внутренним и внешним пространством придают интерьеру иллюзию безграничности и легкости. Радиусные карнизы, мягко огибающие стены и потолок, усиливают эффект невесомости и визуального расширения пространства.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/02_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/02_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/03_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/03_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Гостиная</h2>
              <div>
                <p className={styles.project__p}>Эффектный элемент интерьера гостиной — парящий камин в современном исполнении. Он выполняет функцию зонирования, отделяя гостиную от лестничного холла. Изготовленный в виде легкой металлической ширмы из латуни, добавляет интерьеру особый современный шарм. Его воздушную форму разработал архитектор проекта.</p>
                <p className={styles.project__p}>Для отделки стен использовали МДФ-панели с тканевой текстурой — это быстрое и эстетически привлекательное решение для интерьера, которое также обеспечивает дополнительную защиту от механических повреждений. Накладные панели, в отличие от покраски, не требуют долгой подготовки стен и делают интерьер более интересным и элегантным. Весь технический свет в доме представлен продукцией Delta Light.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/04_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/04_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/05_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/05_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/06_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/06_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/07_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/07_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/08_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/08_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Центром досуга и отдыха семьи выступил мягкий модульный диван Poliform Westside. Конфигурация дивана легко адаптируется под любые нужды, превращая его в идеальное решение для приема гостей. Завершили мягкую группу два кресла Soor от Desiree и журнальный столик с закругленными краями. Предметы искусства, разместили у большого окна с живописным видом. Вместе с обеденной группой от Poliform Mad Dining, они подчеркивают концепцию дизайна и делают его визуально насыщенным и живым.</p>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Прихожая</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/09_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/09_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/10_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/10_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <h2 className={styles.project__title}>Кухня</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                  <p className={styles.project__p}>В проекте особое внимание уделено выбору материалов и эстетике кухонного пространства. Мы выбрали большую столешницу из натурального камня, чтобы подчеркнуть премиальность интерьера. Арка в оконном портале выполняет роль арт-объекта. Обеденная зона предназначена для уютных завтраков и легких перекусов, что идеально соответствует ритму современной жизни, где нет необходимости накрывать большой стол в гостиной.</p>
                  <p className={styles.project__p}>Для удобства и стиля были выбраны обеденные кресла Molteni&C Barbican с подлокотниками. Важной деталью стал подвесной светильник Flos Noctambule Suspension Cylinder Bowl, который не только освещает пространство, но и выступает в роли художественного элемента.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/11_zhemchuzhnaya.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/zhemchuzhnaya/11_zhemchuzhnaya.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/12_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/12_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Здесь нет дверей, только стеклянные перегородки, которые объединяют и одновременно зонируют пространство, сохраняя воздушность и естественное освещение.</p>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня</h2>
              <div>
                <p className={styles.project__p}>Мастер-спальня с отдельным санузлом и гардеробной выполнена в мягких, теплых тонах, поддерживающих общую легкость интерьера.</p>
                <p className={styles.project__p}>Два больших панорамных окна добавляют пространству света и визуально расширяют его. Использование радиусных карнизов помогает “стереть” границы между стенами и потолком, создают ощущение пространственной гармонии.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/13_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/13_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/14_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/14_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Гардеробная комната, разработана согласно эскизам компании Rimadesio.</p>
              <p className={styles.project__p}>Натуральный камень, использованный для отделки пола, не только придает интерьеру утонченность и элегантность, но и усиливает ощущение роскоши и комфорта.</p>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/14_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/14_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/15_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/15_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спа-зона</h2>
              <div>
                <p className={styles.project__p}>В доме спроектирована полноценная зона отдыха с сауной и комнатой для совместных мероприятий. Для достижения атмосферы расслабленности в комнате отдыха мы использовали мягкие, плавные формы мебели, а стены, как и пол, отделали натуральным камнем. Окна с видом на сад создают особую гармонию с природой.</p>
                <p className={styles.project__p}>За декоративное освещение здесь отвечают подвесной светильник бренда Delta Light Zoover и напольный светильник от Davide Groppi Sampei.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/17_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/17_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/18_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/18_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
              <p className={styles.project__p}>Пол и стены в гостевом санузле отделаны натуральным мрамором Salvatori. Благодаря природным фактурам удалось сформировать спокойную и расслабленную атмосферу.</p>
            </div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/19_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/19_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/20_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/20_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/21_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/21_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Фото объекта</h2>
            </div> 
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/22_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/22_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/23_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/23_zhemchuzhnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/zhemchuzhnaya/24_zhemchuzhnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/zhemchuzhnaya/24_zhemchuzhnaya.jpg"
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
export default Zhemchuzhnaya