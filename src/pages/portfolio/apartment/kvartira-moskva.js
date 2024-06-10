import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import Fancybox from "../../../components/fancybox.js";
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"

import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'
import { ProjectConsultationSvetlana } from '../../../subitems/project/consultation/project-consultation-svetlana'


const KvartiraMoskva = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира в Москве"} description={"Светлый и праздничный интерьер квартиры в Москве."}
        location={"https://rhome.by/portfolio/apartment/kvartira-moskva"}
        image={"https://rhome.by/images/portfolio/kvartira-moskva/01_kvartira-moskva.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира в Москве"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев, Cветлана Рожкова"
                manager="Дмитрий Разумейчик"
                data="2019"
                metr="200"
                building="14 месяцев"
                budget={styles.project_intro_item_cost3}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/01_kvartira-moskva.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/00_kvartira-moskva.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Создать концепцию интерьера для просторной квартиры."
              wishText="Я давно мечтала о светлой просторной квартире, чтобы она ощущалась «воздушной». Хочется найти способ совместить светлые тона интерьера с «люксовостью» дизайна. В первую очередь для меня важно, чтобы моя квартира отражала мою индивидуальность. Я люблю устраивать домашние вечеринки, поэтому нужно сделать так, чтобы в гостиной могли бы собираться гости."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Гостиная этой квартиры получилась достаточно праздничной, как того и хотела заказчица. Основной цвет интерьера — белый. Он создает ощущение свободного пространства и легкости, к которой стремились хозяева. Основным цветом для акцентов стал синий, который в некоторых местах переходит в нежно-голубой. Золотая фурнитура и вкрапления золотого оттенка в текстиль добавляют теплоты и уюта пространству, которое при сочетании белого и синего могло казаться излишне холодным.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-moskva/02_kvartira-moskva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/02_kvartira-moskva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Гостиная</h2>
              <div>
                <p className={styles.project__p}>Центральное место в гостиной занимает ансамбль из двух диванов Vladimir KAGAN Free Form Curved Sofa и пары кресел, расположенных полукругом перед ТВ-зоной. Здесь удобно и общаться большой компанией, и устраивать совместные кинопросмотры. Обратите внимание на люстры Axo Light Mountain View, расположенные над обеденным столом. Изгибы стекла плафона с металлизированным наполнением повторяют форму горных вершин.</p>
              </div>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/04_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/04_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/05_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/05_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-moskva/03_kvartira-moskva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/03_kvartira-moskva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__bigmargin}>
              <ProjectConsultationSvetlana
                text="Интересный прием – панно из камня или широкоформатной плитки на стене. В этом проекте на стене гостиной мы разместили панно из керамогранита имитирующего голубой агат. Глянцевая поверхность керамогранита перекликается с белыми глянцевыми стеновыми панелями, делая гостиную более нарядной."
              />
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Холл не перегружен декором</h2>
              <div>
                <p className={styles.project__p}>Пол в прихожей, как и гостиной, вымощен крупноформатной плиткой Imola Ceramica (коллекция The Room). В освещении используются пары встроенных точечных светильников и светодиодные ленты, расположенные по периметру. За зеркальной раздвижной дверью справа от входа расположена гардеробная. Двери — Rimadesio Moon.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-moskva/07_kvartira-moskva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/07_kvartira-moskva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьер в стиле гламур</h2>
              <div>
                <p className={styles.project__p}>Белый глянцевый комод-консоль объединяет ТВ-зону с туалетным столиком, не дробя пространство. Место для туалетного столика выбрано неслучайно. Обратите внимание, что в этой комнате угловое окно, а значит для нанесения макияжа будет достаточно естественного освещения. Интересным акцентом спальной комнаты стала дизайнерская люстра Аrtemide Cosmic Angel. Изогнутые линии балансируют прямые линии, которыми изобилует это пространство. Кровать — Desiree Chanсe Up.</p>
              </div>
            </div>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/08_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/08_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/09_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/09_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-moskva/10_kvartira-moskva.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-moskva/10_kvartira-moskva.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className="line"></div>
            <h2 className={styles.project__title}>Автономная детская комната</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                <p className={styles.project__p}>Детская комната несколько отличается по стилю от всей квартиры, но связана с другими комнатами цветовой гаммой. Дизайн разрабатывался для уже подросшего ребенка, поэтому комната должна была быть достаточно автономной и объединять в себе функционал спальни взрослого человека и кабинета.</p>
                  <p className={styles.project__p}>Офисный эргономичный стул Cosm Chairs от Hermann Мiller придает некоторую строгость рабочей зоне, которая отделяется от спальни занавесом. Кровать в детской — Minotti Spencer Bed. Обратите внимание, что здесь есть как кровать, так и диван DADO 2018 Modular Sofa. Благодаря дивану у подростка появляется собственная мини-гостиная, где он может смотреть фильмы или принимать гостей.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-moskva/11_kvartira-moskva.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-moskva/11_kvartira-moskva.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/12_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/12_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>
            <div className="line"></div>
            <div className={styles.project__three_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/13_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/13_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/15_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/15_kvartira-moskva.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-moskva/14_kvartira-moskva.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-moskva/14_kvartira-moskva.jpg"
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
                  src="../../../images/partners/rimadesio.jpg"
                  alt=""
                  />
                }
                text="Межкомнатные перегородки"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/lualdi.jpg"
                  alt=""
                  />
                }
                text="Итальянские двери" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/kahrs.jpg"
                  alt=""
                  />
                }
                text="Паркет"
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/imola.jpg"
                  alt=""
                  />
                }
                text="Итальянская плитка" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/artemide.jpg"
                  alt=""
                  />
                }
                text="Освещение" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/gessi.jpg"
                  alt=""
                  />
                }
                text="Итальянская сантехника" 
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
export default KvartiraMoskva