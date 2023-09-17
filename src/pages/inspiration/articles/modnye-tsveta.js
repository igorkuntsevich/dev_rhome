import * as React from "react"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
// import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { BreadcrumbsInspirationArticles } from "../../../subitems/breadcrumbs/inpiration_articles"
import { InspirationArticle } from "../../../subitems/inspiration/inspiration-articles"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"
import * as styles from "../../../components/styles/about/inspiration.module.scss"




const ModnyeTsveta = () => (
  <Layout>
    <Seo 
      title={"Как использовать модные цвета в интерьере - RHOME"} description={"Сделали подборку интересных цветов для любого интерьера"}
      location={"https://rhome.by/articles/modnye-tsveta"}
      image={""}
    />
    <div className={styles.article}>
      <div className="wrapper">
        <div className={styles.articles_intro}>
          <div className={styles.articles_intro_breadcrumbs}>
            <BreadcrumbsInspirationArticles />
          </div>
          <h1 className={styles.articles_intro_title}>Модные цвета в интерьере: как их использовать</h1>
          <StaticImage
            src="../../../images/inspiration/articles/modnye-tsveta/09_modnye-tsveta.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img}
          />
          <StaticImage
            src="../../../images/inspiration/articles/modnye-tsveta/00_modnye-tsveta.jpg"
            loading="eager"
            alt=""
            className={styles.articles_intro_img_mob}
          />
        </div>


        <div className={styles.articles_intro_text}>
          <p className={styles.articles_intro_p}>Американский институт цвета Pantone как самый признанный авторитет в области цветовых схем на протяжении многих лет задает тренды не только в интерьере, но и в одежде, макияже, графическом дизайне и множестве других областей жизни.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Pantone 2018</h2>
          <div>
          <p className={styles.articles__p}>Дважды в год Pantone выбирает десять самых модных цветов сезона, а в декабре объявляет главный цвет следующего года. В 2018 им стал Ultra Violet. Как отмечают дизайнеры, это непростой, доминирующий цвет, который носит скорее богемный характер и приятен далеко не каждому глазу. Помимо ультрафиолета есть еще несколько не менее трендовых цветов, которые при правильном использовании отлично впишутся в интерьер вашего дома. Рассказываем, как с ними грамотно обращаться.</p>
          </div>
        </div>


        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/01_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>


        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>17-1558 Grenadine</h2>
          <div>
          <p className={styles.articles__p}>Гренадин, или насыщенный красный, чаще всего в интерьере применяется как акцентный. Этот цвет очень активный и может оказывать возбуждающее воздействие на организм человека, и потому его стоит использовать очень дозированно. Конечно, стена, выкрашенная в этот сочный цвет, будет выглядеть очень смело и стильно, однако, сначала вы должны оценить, насколько комфортно вам будет находиться в таком помещении. Гренадин идеально подходит для акцентирующих деталей: декора, стульев, кресел, текстиля. В этом случае он должен составлять не более 10 % от всего цветового решения. Добавьте к нему спокойный белый, мягкий коричневый или теплый, чуть приглушенный серый и получите яркий и нескучный интерьер.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/02_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>13-2808 Ballet Slipper</h2>
          <div>
          <p className={styles.articles__p}>Этот нежный оттенок розового не имеет ничего общего с тем кричащим цветом, который часто ассоциируется с Барби и безвкусицей. Не слишком яркий, не «кукольный», и не давящий на сознание, Ballet Slipper может стать как стильным акцентом в интерьере в виде мебели или аксессуаров, так и прекрасной базой для дизайна целой комнаты. Этот цвет часто используют исключительно для детских, и напрасно — ведь он может создать гармонию в любом пространстве. Такой бледно-розовый оттенок легко наполнит помещение воздухом и теплом, которого так не хватает в наших широтах.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/03_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>17-4402 Neutral Gray</h2>
          <div>
          <p className={styles.articles__p}>Серый — прекрасный выбор для использования в интерьере, он отлично сочетается практически со всеми цветами и подходит для любого стиля. Оттенок Neutral Gray ассоциируется со стабильностью, спокойствием и некоторой строгостью. Он может стать отличным фоном и ультрамодного современного интерьера (при наличии ярких дополнительных деталей), и элегантного классического, и сдержанного минималистичного. Как любят говорить дизайнеры: «серый — новый бежевый» — так что смело используйте его в качестве нейтральной базы для любого своего эксперимента.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/04_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>19-1725 Tawny Port</h2>
          <div>
          <p className={styles.articles__p}>Свое название цвет получил от сорта портвейна, который меняет оттенок с винного на рыжевато-коричневый после нескольких лет выдержки в бочке. В интерьере Tawny Port смотрится очень выигрышно и ассоциируется с утонченностью и роскошью. Этот сложный оттенок бордового с баклажановым подтоном будет стильно смотреться как в монохромном варианте, так и в качестве акцентного. Он отлично сочетается с темно-зеленым, нежно-розовым, перламутровым и кремовым. И, конечно, Tawny Port в благородном бархатном исполнении — must have нескольких последних сезонов.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/05_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>16-1341 Butterum</h2>
          <div>
          <p className={styles.articles__p}>Butterum (масляный ром) — уютный, согревающий оттенок, который ассоциируется с осенью и спокойствием. Тенденция к использованию натуральных цветов никогда не выйдет из моды, и потому дизайнеры интерьеров уже несколько сезонов подряд с радостью вводят все оттенки бежевого в свои проекты. Butterum имеет легкий красновато-коричневый подтон, который гармонирует с любыми материалами и отлично раскрывает цвета, с которыми он соседствует. По-настоящему теплый, универсальный цвет, который придаст любому пространству атмосферу домашнего уюта.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/06_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>19-4029 Navy Peony</h2>
          <div>
          <p className={styles.articles__p}>Navy Peony (или темно-синий пион) стал ключевым цветом в этом сезоне. Несмотря на то, что синий относится к холодной палитре, при грамотном использовании в интерьере он может выглядеть и как нейтральная база, и как яркий акцент. Спокойный и изящный, Navy Peony отлично уживается практически с любыми цветами, а в сочетании с другими оттенками своей палитры придает любому помещению благородный шарм. Традиционно темно-синие оттенки используются в декоре и обивке мебели из благородных пород дерева. Однако не стоит забывать, что этот цвет может делать пространство визуально меньше, поэтому важно соблюдать баланс.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/07_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image}
        />
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>19-4524 Shaded Spruce</h2>
          <div>
          <p className={styles.articles__p}>Shaded Spruce (затененная ель) — оттенок спокойствия и умиротворения, который прекрасно подходит для любой комнаты, потому что вызывает у человека только положительные эмоции. Именно так, по мнению экспертов Pantone, выглядит спокойствие и тишина затененного леса. В интерьере этот цвет чаще всего можно встретить в обивке мебели, мягких изголовий кроватей и текстиле. При этом он отлично уживается с другими популярными цветами. Сочетать его рекомендуется с коричневым, синим, серым, белым и чёрным. Shaded Spruce настолько вдохновляет дизайнеров, что те не боятся использовать его и для монохромных ансамблей.</p>
          </div>
        </div>

        <div className={styles.articles__one_image_link}>
        <StaticImage
          src="../../../images/inspiration/articles/modnye-tsveta/08_modnye-tsveta.jpg"
          alt=""
          className={styles.articles__one_image + " " + styles.articles__bigmargin}
        />
        </div>

        <div className={styles.articles__text_center900 + " " + styles.articles__bigmargin}>
          <p className={styles.articles__p}>Как видите, вариантов актуальных цветовых решений масса. Главное определиться с тем, что нравится именно вам. А если вы все же растеряетесь во всем многообразии цветов, добро пожаловать в студию дизайна R-home! Наши специалисты подберут для вашей квартиры, дома или офиса гармоничные оттенки и цветовые сочетания, которые будут радовать вас и подчеркнут индивидуальность интерьера.</p>
        </div>

        <div className="line"></div>
        <div className={styles.articles__lefttitle_righttext}>
          <h2 className={styles.articles__lefttitle_righttext__title}>Модные цвета Pantone в интерьере</h2>
        </div>
        <div className={styles.articles_video + " " + styles.articles__bigmargin}>
              <iframe width="100%" height="100%" src="https://www.youtube.com/embed/HRZ374-TT8I?si=hgiL94tzupBbMb60" title="" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>


      </div>
    </div>
    
    <div className="wrapper">
      <div className={styles.last_articles}>
        <h2 className={styles.last_articles_title}>Последние статьи</h2>
        <div className={styles.inspiration_content}>
          <InspirationArticle
            url="/inspiration/articles/trend-kuhni/"
            backgroundColor="#FAF0BC"
            title="Новый тренд в интерьере кухни-гостиной"
            chapter="Тенденции"
          />
          <InspirationArticle
            url="/inspiration/articles/d3-i-olimpik-park-v-minske/"
            backgroundColor="#B1C8DD"
            title="5 дизайн-проектов интерьера квартир в ЖК D3 и Олимпик Парк"
            chapter="Дизайн интерьера"
          />
          <InspirationArticle
            url="/inspiration/articles/zhk-mayak-minska/"
            backgroundColor="#FFD7C8"
            title="Дизайн интерьера квартир в ЖК “Маяк Минска”"
            chapter="Дизайн интерьера"
          />
          <InspirationArticle
            url="/inspiration/articles/dizajn-novoj-borovoj-i-zelenoj-gavani/"
            backgroundColor="#FAF0BC"
            title="Дизайн интерьера квартир в Новой Боровой, Пирсе и Зеленой Гавани"
            chapter="Дизайн интерьера"
          />
        </div>
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default ModnyeTsveta