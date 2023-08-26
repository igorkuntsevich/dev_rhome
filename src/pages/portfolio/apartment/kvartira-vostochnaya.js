import React from 'react'
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Fancybox from "../../../components/fancybox.js";
import { BreadcrumbsProject } from "../../../subitems/breadcrumbs/project-apart"
import { ProjectIntro } from "../../../subitems/project/project-intro"
import { ProjectConsultationDmitry } from '../../../subitems/project/consultation/project-consultation-dmitry'
import { PhotoCollage } from "../../../subitems/photocollage"
import * as collageStyles from "../../../subitems/photocollage/photocollage.module.scss"
import { ProjectPartner } from "../../../subitems/project/project-partner"
import { ProjectPartnerItem } from '../../../subitems/project/project-partner-item'
import * as styles from "../../../components/styles/portfolio/portfolio-item.module.scss"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import { ProjectTaskSergey } from '../../../subitems/project/task/project-task-sergey'

const KvartiraVostochnaya = () => {
  return (
    <Layout>
      <Seo 
        title={"Дизайн интерьера Квартира по ул. Восточная"} description={"Дизайн интерьера современной квартиры по ул. Восточная от студии Rhome. Было/стало, чертежи, 3D проекты"}
        location={"https://rhome.by/portfolio/apartment/kvartira-vostochnaya"}
        image={"https://rhome.by/images/portfolio/kvartira-vostochnaya/01_kvartira-vostochnaya.jpg"}
      />
      <Fancybox>
        <div className={styles.project}>
          <div className="wrapper">
            <div className={styles.project_intro} style={{"backgroundColor" : "#ECE9E5"}}>
              <ProjectIntro
                breadcrumbs={<BreadcrumbsProject />}
                title="Квартира по ул. Восточная"
                leader="Сергей Рассеко"
                architector="Валерия Чернявская"
                manager="Дмитрий Разумейчик"
                data="июнь 2017"
                metr="95"
                building=""
                budget={styles.project_intro_item_cost2}
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-vostochnaya/01_kvartira-vostochnaya.jpg"
                className={styles.project_intro_image}
                alt=""
              />
              <StaticImage
                src="../../../images/portfolio/kvartira-vostochnaya/00_kvartira-vostochnaya.jpg"
                className={styles.project_intro_image_mob}
                alt=""
              />
            </div>
          </div>
          <PhotoCollage
            amount={collageStyles.photocollage_five_images}
          >
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/cut/13_kvartira-vostochnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/cut/17_kvartira-vostochnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img2}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/cut/04_kvartira-vostochnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img3}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/cut/11_kvartira-vostochnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_house_img4}
            />
            <StaticImage
              src="../../../images/portfolio/kvartira-vostochnaya/cut/07_kvartira-vostochnaya.jpg"
              alt=""
              className={collageStyles.photocollage_img + " " + collageStyles.photocollage_img_100}
            />
          </PhotoCollage>
          <div className="wrapper">
            <ProjectTaskSergey
              taskText="Разработать дизайн интерьера в стиле ар-деко."
              wishText="Нам нравятся яркие интерьеры, наполненные предметами искусства. Хочется, чтобы квартира получилась теплой и уютной с интересными и нестандартными решениями. Но не сильно перегружайте деталями. "
            />

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Планировка</h2>
              <div>
                <p className={styles.project__p}>В целом планировка квартиры нам понравилась. Единственное, что мы изменили — увеличили ванную за счет коридора. Благодаря этому мы смогли разместить отдельный душ. И немного продлили стену на кухне, чтобы разместить там дополнительную стойку и скрыть от глаз сидящих за столом входную дверь.</p>
              </div>
            </div>

            <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/02_kvartira-vostochnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link + " " + styles.project__bigmargin + " " + styles.project__narrow_block}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-vostochnaya/02_kvartira-vostochnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/03_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/03_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/04_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/04_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Декор в стиле ар-деко</h2>
              <div>
                <p className={styles.project__p}>Холл декорирован с традиционными для ар-деко элементами. Круглое зеркало в золотой раме, комод и симметричные лампы. Справа стену украшает абстрактное полотно. Именно его смогут наблюдать хозяева, отдыхая в гостиной или сидя за обеденным столом. Мы сознательно переключили их внимание на стену с картиной, чтобы отвлечь от входной зоны.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/05_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/05_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/06_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/06_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Большая угловая кухня вмещает в себе всю необходимую технику и утварь. При этом важно было сохранить визуальный порядок и эстетику, так какё кухня в этом проекте — часть гостиной, в которой хозяева будут отдыхать и принимать гостей. Все шкафы закрыты, а техника спрятана за фасадами.</p>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/07_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/07_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/08_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/08_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__bigmargin}>
              <ProjectConsultationDmitry
                text="Большой обеденный стол требует подходящего освещения. Парные светильники над столовой зоной важно расположить не слишком близко, но и не слишком далеко друг от друга: ровно на такое расстояние, чтобы столешница была полностью покрыта светом."
              />
            </div>


            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Первое, что хозяева и гости будут видеть, когда зайдут в квартиру — эффектную композицию из предметов искусства. Особое внимание мы уделили деталям: яркие лампы на дизайнерских столиках, уютное кресло футуристической формы. Многоуровневый потолок в стиле ар-деко украшен массивным плинтусом. Светильники современные. Нам не хотелось перегружать пространство люстрой, так как высота потолков и масштаб помещения «просили» оставить больше воздуха.</p>
            </div>

            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/09_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/09_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/10_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/10_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Теплая лоджия</h2>
              <div>
                <p className={styles.project__p}>Одно из главных достоинств этой квартиры — лоджия с панорамным остеклением и видом на город. Мы предусмотрели теплый пол и плитку под дерево, чтобы там было комфортно находиться даже зимой. Большой шкаф, диван и журнальный столик создают единую композицию. А крупные растения создают впечатление, как будто вы находитесь на террасе где-нибудь в Италии. Диван и шкаф изготовлены на заказ.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/13_kvartira-vostochnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-vostochnaya/13_kvartira-vostochnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/11_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/11_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/12_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/12_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Деревянное панно в изголовье кровати</h2>
              <div>
                <p className={styles.project__p}>Главный акцент спальни – эффектное изголовье из деревянных панелей под орех. Прикроватные тумбочки изготовлены на заказ с использованием тех же панелей. Светильники — 100% попадание в стиль ар-деко. В спальне нашлось место и для туалетного столика.</p>
              </div>
            </div>
            <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/14_kvartira-vostochnaya.webp"
              data-fancybox="gallery"
              className={styles.project__one_image_link}
            >
              <StaticImage
                src="../../../images/portfolio/kvartira-vostochnaya/14_kvartira-vostochnaya.jpg"
                alt=""
                className={styles.project__one_image}
              />
            </a>
            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/17_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/17_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/15_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/15_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>


            <div className="line"></div>
            <div className={styles.project__lefttitle_righttext}>
              <h2 className={styles.project__lefttitle_righttext__title}>Интерьеры санузлов в песочной гамме</h2>
              <div>
                <p className={styles.project__p}>Для ванной выбрали плитку под камень производителя FMG и подчеркнули ее фоновой белой плиткой и фасадами. К тому же, мы выиграли немного пространства для душа благодаря коридору.Площадь ванной комнаты позволила нам организовать полноценную систему хранения и прачечную.</p>
              </div>
            </div>

            <div className={styles.project__two_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/18_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/18_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/19_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/19_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
            </div>

            <div className={styles.project__text_center900 + " " + styles.project__bigmargin}>
            <p className={styles.project__p}>Санузел выполнен в стиле основной ванной комнаты. Плитка под камень, белые фасады и двери — все соответствует единой концепции интерьера в стиле ар-деко.</p>
            </div>

            <div className={styles.project__three_inline + " " + styles.project__bigmargin}>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/20_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/20_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/21_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/21_kvartira-vostochnaya.jpg"
                  alt=""
                  className={styles.project__one_image}
                />
              </a>
              <a href="https://rhome.by/images/portfolio/kvartira-vostochnaya/22_kvartira-vostochnaya.webp"
                data-fancybox="gallery"
                >
                <StaticImage
                  src="../../../images/portfolio/kvartira-vostochnaya/22_kvartira-vostochnaya.jpg"
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
                  src="../../../images/partners/cosmorelax.jpg"
                  alt=""
                  />
                }
                text="Магазин дизайнерских предметов" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/krea.jpg"
                  alt=""
                  />
                }
                text="Салон обоев" 
              />
              <ProjectPartnerItem
                image={
                  <StaticImage
                  src="../../../images/partners/fmg.jpg"
                  alt=""
                  />
                }
                text="Керамическая плитка"
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
export default KvartiraVostochnaya