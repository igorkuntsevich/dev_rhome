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


const KvartiraDvuhurovnevaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Двухуровневая квартира на Васнецова"} description={"Двухуровневая квартира на Васнецова дизайн от студии RHome"}
        location={"https://rhome.by/portfolio/apartment/kvartira-dvuhurovnevaya"}
        image={"https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/01_kvartira-dvuhurovnevaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#F3E8D6"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Двухуровневая квартира на Васнецова"
                leader="Сергей Рассеко"
                architector="Алексей Сергеев"
                manager="Дмитрий Разумейчик"
                data="февраль 2019"
                metr="152"
                building="11 месяцев"
                budget=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-dvuhurovnevaya/01_kvartira-dvuhurovnevaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-dvuhurovnevaya/00_kvartira-dvuhurovnevaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/cut/06_kvartira-dvuhurovnevaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img1}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/cut/08_kvartira-dvuhurovnevaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/cut/03_kvartira-dvuhurovnevaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/cut/09_kvartira-dvuhurovnevaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_50}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-dvuhurovnevaya/cut/10_kvartira-dvuhurovnevaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img5}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в современном стиле."
              wishText="Нам нравятся яркие современные интерьеры, в которых много свободного пространства и света. Любимого стиля у нас нет, нравятся отдельные элементы совершенно разных направлений: от лофта до модерна. Главное, чтобы в квартире было светло и уютно! Во всем остальном готовы полностью довериться профессионалам."
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>Квартиру разделили на две основные зоны: весь первый этаж отвели под общественные помещения (плюс обособленная детская), а на втором этаже организовали приватную зону для хозяев – просторную спальню с собственным санузлом и гардеробной.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/02_kvartira-dvuhurovnevaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dvuhurovnevaya/02_kvartira-dvuhurovnevaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/03_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/03_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/04_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/04_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Гостиная с необычной геометрией и ощущение "воздуха" в пространстве</h2>
              <div>
                <p className={styles.project__p}>Перед архитектором стояла задача сохранить ощущение воздуха и объема в гостиной. Очень хотелось сформировать интерьер, не отвлекающий внимание от необычной геометрии стен, наклонных потолков и большого количества естественных источников света, поэтому в отделке выбор пал исключительно на природные цвета и натуральные материалы.</p>
              </div>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/05_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/05_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/04_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/04_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Так, например, в гостиной сохранили родную кирпичную кладку, отреставрировали и ввели ее в интерьер как декоративный акцент. Она хорошо вписалась сюда и по цветовой гамме. Высокие потолки (почти 4 метра) повлияли на выбор сценариев освещения. Ультратонкие подвесные светильники выбирали по такому принципу, чтобы они обеспечивали светом достаточно большое пространство, но при этом сливались с интерьером и не выделялись.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/06_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/06_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/07_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/07_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>



            <div className="line"></div>
            <h2 className={styles.project__title}>Центральная зона всего помещения – столовая с большим обеденным столом и акцентной люстрой из итальянского стекла</h2>
            <div className={styles.project__two_inline_mediumrightimg}>
              <div className={styles.project__two_inline_mediumrightimg_left}>
                <div>
                <p className={styles.project__p}>А оригинальная картина современного автора добавляет интерьеру яркости, эстетичности и завершенности.</p>
                </div>
                <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/03_kvartira-dvuhurovnevaya.webp"
                  data-fancybox="gallery"
                  >
                  <StaticImage
                    src="../../../images/portfolio/kvartira-dvuhurovnevaya/03_kvartira-dvuhurovnevaya.jpg"
                    alt=""
                    className={styles.project__one_image}
                  />
                </a>
              </div>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/08_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/08_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>



            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Лестница на второй этаж</h2>
              <div>
                <p className={styles.project__p}>Одним из важных моментов планировки любой двухуровневой квартиры является присутствие лестницы, на которую, как правило, невозможно не обратить внимание. Ограждение из белого перфорированного металла, выполненное по эскизам архитектора, отлично сочетается со шпонированными элементами ступеней.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/09_kvartira-dvuhurovnevaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dvuhurovnevaya/09_kvartira-dvuhurovnevaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Спальня с заниженным потолком</h2>
              <div>
                <p className={styles.project__p}>Основной задачей архитектора было превратить второй этаж в удобную приватную зону и объединить его функционально и идейно в целостное пространство с первым этажом. Чтобы визуально уменьшить высоту помещения, сделать комнату более уютной и камерной, для потолка выбрали темные цвета и пиксельную покраску. Нестандартный скругленный карниз использовали для смягчения форм.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/10_kvartira-dvuhurovnevaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-dvuhurovnevaya/10_kvartira-dvuhurovnevaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>


            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/11_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/11_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/12_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/12_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Гостевой санузел сделан по всем канонам последних тенденций в дизайне помещений: венецианская плитка terrazzo с золотыми вкраплениями, приглушенные терракотовые цвета, матовые поверхности и черный металл.</p>
            </div>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/13_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/13_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/14_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/14_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Санузел при спальне оформлен итальянской крупноформатной плиткой La Faenza с фактурой золота. В сочетании с фоновым мрамором блестящая облицовка не выглядит излишне вычурно, а придает помещению желаемый лоск. Несмотря на разнообразие материалов, отделок и сложных технических решений интерьер квартиры получился целостным и гармоничным, но при этом дышащим теплом и комфортом, как и хотели хозяева.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/15_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/15_kvartira-dvuhurovnevaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-dvuhurovnevaya/16_kvartira-dvuhurovnevaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-dvuhurovnevaya/16_kvartira-dvuhurovnevaya.jpg"
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
export default KvartiraDvuhurovnevaya