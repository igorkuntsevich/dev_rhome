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
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const KvartiraPromenad = () => {
  return (
    <Layout>
      <Seo 
        title={"Квартира в ЖК “Променад” - RHOME"} description={"Квартира в ЖК “Променад” дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-promenad"}
        image={"https://rhome.by/images/portfolio/kvartira-promenad/01_kvartira-promenad.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в ЖК “Променад”"
                leader="Сергей Рассеко"
                architector="Евгений Ковалевский, Анастасия Стороженко"
                manager="Дмитрий Разумейчик"
                data="2021"
                metr="122"
                building="8 месяцев"
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/01_kvartira-promenad.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/00_kvartira-promenad.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-promenad/cut/19_kvartira-promenad.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-promenad/cut/13_kvartira-promenad.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-promenad/cut/05_kvartira-promenad.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-promenad/cut/10_kvartira-promenad.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-promenad/cut/18_kvartira-promenad.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать светлый и минималистичный дизайн интерьера."
              wishText="В нашей новой квартире окна в пол, хотелось бы сохранить чувство, что свет буквально пронизывает все пространство. Будем рады видеть больше светлых красок — ничего мрачного. Нам по душе современные минималистичные интерьеры. Но все же это квартира для семьи с ребенком, поэтому не стоит слишком уходить в “хай-тек” – домашний уют для нас очень важен."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Спокойные оттенки, натуральные текстуры и много света — мы создали интерьер, вдохновленный северными морскими пейзажами. Заказчики этого дизайн-проекта ценят взаимосвязь городского стиля жизни и близость к природе. Отчасти поэтому мы отдали предпочтение легким песчаным тонам в дизайне интерьера этой четырехкомнатной квартиры.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-promenad/02_kvartira-promenad.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/02_kvartira-promenad.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Концепция</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/03_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/03_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/04_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/04_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер гостиной в песочно-серой гамме</h2>
              <div>
                <p className={styles.project__p}>Стиль интерьера квартиры – современный минимализм. Однако общая простота компенсируется сочетанием множества текстур, которые не дают помещению стать излишне аскетичным. Центральный акцент в гостиной – большой темно-серый диван Ligne-Roset Exclusif. Рядом с ним – журнальные столики Poliform Dama и Soori. Мотив двух разноразмерных окружностей дублируется потолочными светильниками Nimb T и Rondo T от Центрсвет. Встроенный закрытый стеллаж – удобная система хранения. Чтобы избежать эффекта глухой стены, мы добавили несколько открытых полок, где можно разместить декор.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-promenad/05_kvartira-promenad.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/05_kvartira-promenad.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/07_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/07_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/06_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/06_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/24_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/24_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/09_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/09_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/08_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/08_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Бежевая кухня</h2>
              <div>
                <p className={styles.project__p}>Кухня – место, где много суетятся и часто принимают гостей. Самое важное здесь – это люди их разговоры, приготовление блюд и трапезы. В интерьере кухни в ЖК “Променад” мы отказались от чрезмерно ярких акцентов. Даже подвесной светильник над столом Vibia Tempo – легкий и элегантный. Основной цвет интерьера кухни – песочно-бежевый, разные оттенки которого представлены на всех поверхностях. Исключение – стулья Calligaris. Их насыщенный серый цвет обивки перекликается с диваном в гостиной. На полу плитка X-Rock от Imola Ceramica. Обеденный стол у окна – Midj Blade.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/10_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/10_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/11_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/11_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>



            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Чтобы монохромный интерьер не выглядел слишком пресным, можно включить элементы с узором основного цвета. Это могут быть обои, принт на текстиле или плитка. К примеру, в этом проекте фартук отделан крупноформатной плиткой с рисунком, повторяющий срез каменной породы. Он не слишком притягивает внимание и придает визуальную глубину кухне с одноцветными фасадами без ручек."
              />
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер спальни</h2>
            </div>
            <div className={styles.project__two_inline_bigrightimg}>
              <div className={styles.project__two_inline_bigrightimg_left}>
              <div>
                <p className={styles.project__p}>Главная задача – создать умиротворенную и разряженную атмосферу без излишнего визуального шума. Для освещения спальной комнаты мы выбрали почти незаметные спотовые светильники и светодиодные ленты. Накладные светильники Locus CT Duo выполняют функцию ночника и лампы для чтения. У минималистичных прикроватных тумбочек в стиле 60-х столешница сделана из композита кварца – красиво и практично.</p>
              </div>
                <a href="https://rhome.by/images/portfolio/kvartira-promenad/13_kvartira-promenad.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-promenad/13_kvartira-promenad.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/14_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/14_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-promenad/12_kvartira-promenad.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/12_kvartira-promenad.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>




            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер домашнего офиса</h2>
              <div>
                <p className={styles.project__p}>В оформлении кабинета использовали ту же цветовую гамму, что и в остальных комнатах. Диван более насыщенного оттенка, хоть и из того же спектра. Широкий рабочий стол-консоль примыкает к книжному стеллажу. Паркет в кабинете и во всей квартире – Boen Stonewashed Oak Pearl.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-promenad/15_kvartira-promenad.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-promenad/15_kvartira-promenad.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/16_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/16_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/23_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/23_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>



            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Дизайн ванной комнаты</h2>
              <div>
                <p className={styles.project__p}>В оформлении ванной мы использовали несколько видов плитки. Здесь нет контрастных сочетаний, визуальная динамичность пространства обусловлена переходами между близкими цветами. На стенах душевой кабины – Imola Ceramica X-Rock 128, плитка под дерево – Imola Ceramica Koala. Раковина Holbi Neptune Solid Surface погружена в тумбу отделанную крупноформатным керамогранитом с текстурой камня.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/17_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/17_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/18_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/18_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Детская комната</h2>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/19_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/19_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/20_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/20_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Барная стойка на лоджии</h2>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/21_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/21_kvartira-promenad.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-promenad/22_kvartira-promenad.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-promenad/22_kvartira-promenad.jpg"
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
                  src="../../../images/partners/oikos.jpg"
                  alt=""
                  />
                }
                text="Декоративная штукатурка и краска" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/antrano.jpg"
                  alt=""
                  />
                }
                text="Фабрика эксклюзивной мебели"
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
                  src="../../../images/partners/svet.jpg"
                  alt=""
                  />
                }
                text="Лаконичное освещение" 
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
export default KvartiraPromenad