import React from 'react'
import { Link } from "gatsby"
import Layout from "../../../components/layout"
import Seo from "../../../components/seo"
import { BreadcrumbsAbout } from "../../../subitems/breadcrumbs/about"
import { InspirationPhoto } from "../../../subitems/inspiration/inspiration-photos"
import { FooterConsultationDmitry } from "../../../subitems/footer-consultation-dmitry"

import * as styles from "../../../components/styles/about/inspiration.module.scss"

const Photos = () => (
<Layout>
    <Seo 
      title={"Полезные статьи и лучшие интерьеры для вдохновения - RHOME"} description={"Посмотрите проекты, которыми мы вдохновляемся, почитайте полезные советы и идеи по обустройству дома"}
      location={"https://rhome.by/inspiration/"}
      image={"https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/01_vintovaya-lestnitsa.jpg"}
    />
    <div className="wrapper">
      <div className={styles.inspiration_intro + " " + styles.inspiration_intro_index}>
        <div>
          <BreadcrumbsAbout />
          <h1 className={styles.inspiration_intro_title}>Вдохновение</h1>
        </div>
        <div className={styles.inspiration_intro_list}>
          <Link to="/inspiration" className={styles.inspiration_intro_link}>Все сразу</Link>
          <Link to="/inspiration/articles" className={styles.inspiration_intro_link}>Статьи</Link>
          <Link to="/inspiration/photos" className={styles.inspiration_intro_link} activeClassName={styles.inspiration_intro_active_link}>Фотографии
          <div className={styles.animline}></div>
          </Link>
        </div>
      </div>
      <div className={styles.inspiration_content}>
        <InspirationPhoto
          url="/inspiration/photos/rezidentsiya-moskva/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/rezidentsiya-moskva/00_rezidentsiya-moskva.jpg"
          title="Резиденция площадью 157 кв.м. в Москве"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-stokgolm/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-stokgolm/00_kvartira-stokgolm.jpg"
          title="Квартира шведского дизайнера в Стокгольме"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-v-polshe/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-v-polshe/00_kvartira-v-polshe.jpg"
          title="Небольшая квартира в Польше"
        />
        <InspirationPhoto
          url="/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/apartamenty-vilnyus-dvuhetazhnye/00_apartamenty-vilnyus-dvuhetazhnye.jpg"
          title="Двухэтажные апартаменты в Вильнюсе"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-kaunas/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-kaunas/00_kvartira-kaunas.jpg"
          title="Бетонная квартира в Каунасе"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-piterskaya/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-piterskaya/00_kvartira-piterskaya.jpg"
          title="Питерская квартира"
        />
        <InspirationPhoto
          url="/inspiration/photos/grafichnost-minimalizm/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/grafichnost-minimalizm/00_grafichnost-minimalizm.jpg"
          title="Графичность и минимализм. Квартира в Москве"
        />
        <InspirationPhoto
          url="/inspiration/photos/derevyannye-paneli/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/derevyannye-paneli/00_derevyannye-paneli.jpg"
          title="Деревянные панели в московской квартире"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-melburn-black/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-melburn-black/00_dom-melburn-black.jpg"
          title="Дом в Мельбурне"
        />
        <InspirationPhoto
          url="/inspiration/photos/170-kv-metrov/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/170-kv-metrov/00_170-kv-metrov.jpg"
          title="170 кв. метров для молодой семьи"
        />
        <InspirationPhoto
          url="/inspiration/photos/chistyj-minimalizm/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/chistyj-minimalizm/00_chistyj-minimalizm.jpg"
          title="Чистый минимализм"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-moskva/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-moskva/00_kvartira-moskva.jpg"
          title="Трехкомнатная в Москве"
        />
        <InspirationPhoto
          url="/inspiration/photos/shvedskie-apartamenty/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/shvedskie-apartamenty/00_shvedskie-apartamenty.jpg"
          title="Шведские апартаменты"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-kishinev/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-kishinev/00_kvartira-kishinev.jpg"
          title="Темная квартира в Кишиневе"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-otdyha/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-otdyha/00_dom-otdyha.jpg"
          title="Дом отдыха в Нью-Йорке"
        />
        <InspirationPhoto
          url="/inspiration/photos/ofis-netrivialnyj/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/ofis-netrivialnyj/00_ofis-netrivialnyj.jpg"
          title="Нетривиальный офис"
        />
       <InspirationPhoto
          url="/inspiration/photos/villa-italyansky/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/villa-italyansky/00_villa-italyansky.jpg"
          title="Современное переосмысление итальянской виллы"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-na-baze/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-na-baze/00_kvartira-na-baze.jpg"
          title="Квартира на базе старого склада в Сиднее"
        />
        <InspirationPhoto
          url="/inspiration/photos/apartamenty-sad/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/apartamenty-sad/00_apartamenty-sad.jpg"
          title="Апартаменты с выходом в сад"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-odesskaya/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-odesskaya/00_kvartira-odesskaya.jpg"
          title="Одесская квартира в индустриальном стиле"
        />
        <InspirationPhoto
          url="/inspiration/photos/loft-shvetsiya/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/loft-shvetsiya/00_loft-shvetsiya.jpg"
          title="Белый лофт в Швеции"
        />
        <InspirationPhoto
          url="/inspiration/photos/loft-tipografii/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/loft-tipografii/00_loft-tipografii.jpg"
          title="Лофт в бывшей типографии"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-bruni/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-bruni/00_dom-bruni.jpg"
          title="Дом для отдыха на острове Бруни"
        />
        <InspirationPhoto
          url="/inspiration/photos/shtab-muuto/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/shtab-muuto/00_shtab-muuto.jpg"
          title="Штаб-квартира бренда Muuto в Копенгагене"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-nyu-jork-odnoetazhnyj/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-nyu-jork-odnoetazhnyj/00_dom-nyu-jork-odnoetazhnyj.jpg"
          title="Одноэтажный дом в Нью-Йорке"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-lajner/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-lajner/00_dom-lajner.jpg"
          title="Дом-лайнер в Англии"
        />
        <InspirationPhoto
          url="/inspiration/photos/taunhaus-bruklin/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/taunhaus-bruklin/00_taunhaus-bruklin.jpg"
          title="Современный таунхаус в Бруклине"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-melburn/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-melburn/00_dom-melburn.jpg"
          title="Дом из гранита в Мельбурне"
        />
        <InspirationPhoto
          url="/inspiration/photos/otel-afini/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/otel-afini/00_otel-afini.jpg"
          title="Неомодернистский интерьер отеля в Афинах"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-manhetten/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-manhetten/00_kvartira-manhetten.jpg"
          title="Белая квартира на Манхэттене"
        />
        <InspirationPhoto
          url="/inspiration/photos/universitet-prava/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/universitet-prava/00_universitet-prava.jpg"
          title="Здание Университета права в Новой Зеландии"
        />
        <InspirationPhoto
          url="/inspiration/photos/penthaus-korsa/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/penthaus-korsa/00_penthaus-korsa.jpg"
          title="Пентхаус дизайнера Майкла Корса"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-tel-aviv/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-tel-aviv/00_kvartira-tel-aviv.jpg"
          title="Графичная квартира в Тель-Авиве"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-gaage/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-gaage/00_dom-gaage.jpg"
          title="Дом архитектора в Гааге"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-kiev/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-kiev/00_kvartira-kiev.jpg"
          title="Глубокие цвета в киевской квартире на 30-м этаже"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-holm/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-holm/00_dom-holm.jpg"
          title="Дом на зеленых холмах"
        />
        <InspirationPhoto
          url="/inspiration/photos/taunhaus-hanoe/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/taunhaus-hanoe/00_taunhaus-hanoe.jpg"
          title="Современный таунхаус в Ханое"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-kopengagen/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-kopengagen/00_dom-kopengagen.jpg"
          title="Дом в Копенгагене в светлых тонах"
        />
        <InspirationPhoto
          url="/inspiration/photos/restoran-retro/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/restoran-retro/00_restoran-retro.jpg"
          title="Интерьер лондонского ресторана в стиле ретро"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-gente/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-gente/00_kvartira-gente.jpg"
          title="Минималистичная квартира в Генте"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-santa-barbara/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-santa-barbara/00_dom-santa-barbara.jpg"
          title="Дом в Санта-Барбаре"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-v-gorah/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-v-gorah/00_dom-v-gorah.jpg"
          title="Современный дом в горах"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-modern/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-modern/00_kvartira-modern.jpg"
          title="Квартира в стиле mid-century modern"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-rim/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-rim/00_kvartira-rim.jpg"
          title="Просторная квартира в Риме"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-monreal/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-monreal/00_dom-monreal.jpg"
          title="Минималистичный дом в Монреале"
        />
        <InspirationPhoto
          url="/inspiration/photos/tsentr-portlend/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/tsentr-portlend/00_tsentr-portlend.jpg"
          title="Культурный центр в Портленде"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-v-kitae/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-v-kitae/00_kvartira-v-kitae.jpg"
          title="Современная квартира в Китае"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-nyu-jork/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-nyu-jork/00_kvartira-nyu-jork.jpg"
          title="Двухуровневая квартира в Нью-Йорке"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-oklend/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-oklend/00_kvartira-oklend.jpg"
          title="Квартира для холостяка в Окленде"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-na-more/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-na-more/00_dom-na-more.jpg"
          title="Летний дом с видом на море"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-v-parizhe-roskoshnaya/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe-roskoshnaya/00_kvartira-v-parizhe-roskoshnaya.jpg"
          title="Роскошная квартира в Париже"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-kelli/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-kelli/00_dom-kelli.jpg"
          title="Дом ведущего дизайнера Великобритании Келли Хоппен"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-brazil-70/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-brazil-70/00_dom-brazil-70.jpg"
          title="С любовью к 70-м: дом в Бразилии"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-tajvan/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-tajvan/00_dom-tajvan.jpg"
          title="Эклектичный дом в Тайване"
        />
        <InspirationPhoto
          url="/inspiration/photos/otel-bobbi/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/otel-bobbi/00_otel-bobbi.jpg"
          title="Отель визажиста Bobbi Brown в традиционном английском стиле"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-antich-stile/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-antich-stile/00_kvartira-antich-stile.jpg"
          title="Современная квартира в античном стиле"
        />
        <InspirationPhoto
          url="/inspiration/photos/ofis-goodman/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/ofis-goodman/00_ofis-goodman.jpg"
          title="«Зеленый» офис компании Goodman"
        />
        <InspirationPhoto
          url="/inspiration/photos/apartamenty-manhetten/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/apartamenty-manhetten/00_apartamenty-manhetten.jpg"
          title="Гламурные апартаменты дизайнера на Манхэттене"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-1862/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-1862/00_dom-1862.jpg"
          title="Дом 1862 года в современной интерпретации"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-london/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-london/00_kvartira-london.jpg"
          title="Квартира в здании бывшей фабрики в Лондоне"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-sidney/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-sidney/00_dom-sidney.jpg"
          title="Необычная геометрия дома в Сиднее"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-jork/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-jork/00_kvartira-jork.jpg"
          title="Квартира в Нью-Йорке для холостяка"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-ozero/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-ozero/00_dom-ozero.jpg"
          title="Дом с видом на озеро в Новой Зеландии"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-bangkok/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-bangkok/00_dom-bangkok.jpg"
          title="Трехэтажный дом в Бангкоке"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-kenzo/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-kenzo/00_dom-kenzo.jpg"
          title="«Модный дом» дизайнера Kenzo"
        />
        <InspirationPhoto
          url="/inspiration/photos/otel-oklend/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/otel-oklend/00_otel-oklend.jpg"
          title="Изысканный интерьер отеля в Окленде"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-s-bibliotekoj/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-s-bibliotekoj/00_kvartira-s-bibliotekoj.jpg"
          title="Квартира с огромной библиотекой в старинном доме"
        />
        <InspirationPhoto
          url="/inspiration/photos/dizain-ofis/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dizain-ofis/00_dizain-ofis.jpg"
          title="Дизайнерский офис"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-na-okean/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-na-okean/00_dom-na-okean.jpg"
          title="Leigh House: дом с видом на океан"
        />
        <InspirationPhoto
          url="/inspiration/photos/barhat-mebeli/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/barhat-mebeli/00_barhat-mebeli.jpg"
          title="Бархат в новых коллекциях дизайнерской мебели"
        />
         <InspirationPhoto
          url="/inspiration/photos/design-award-2018/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/design-award-2018/00_design-award-2018.jpg"
          title="Дом-победитель German Design Award 2018"
        />
        <InspirationPhoto
          url="/inspiration/photos/varianty-lestnits/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/varianty-lestnits/00_varianty-lestnits.jpg"
          title="Варианты лестниц для вдохновения"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-v-parizhe/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-v-parizhe/00_kvartira-v-parizhe.jpg"
          title="Стильная квартира в Париже"
        />
        <InspirationPhoto
          url="/inspiration/photos/one-kleomenous/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/one-kleomenous/00_one-Kleomenous.jpg"
          title="Проект One Kleomenous"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-alpes/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-alpes/00_dom-alpes.jpg"
          title="Дом с видом на Альпы от архитектора Андреаса Грубера"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-kenterberijskih/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-kenterberijskih/00_dom-kenterberijskih.jpg"
          title="Дом посреди Кентерберийских равнин"
        />
        <InspirationPhoto
          url="/inspiration/photos/villa-brazil/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/villa-brazil/00_villa-brazil.jpg"
          title="Вилла в Бразилии"
        />
        <InspirationPhoto
          url="/inspiration/photos/villa-white/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/villa-white/00_villa-white.jpg"
          title="Вилла V3"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-gonkong/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-gonkong/00_kvartira-gonkong.jpg"
          title="Квартира в Гонконге"
        />
        <InspirationPhoto
          url="/inspiration/photos/proekt-sbd25/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/proekt-sbd25/00_proekt-sbd25.jpg"
          title="Проект SBD25"
        />
        <InspirationPhoto
          url="/inspiration/photos/kfar-shmaryahu/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kfar-shmaryahu/00_Kfar-Shmaryahu.jpg"
          title="Дом Kfar Shmaryahu"
        />
        <InspirationPhoto
          url="/inspiration/photos/razlichnye-perili/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/razlichnye-perili/00_razlichnye-perili.jpg"
          title="Различные узлы перилл"
        />
        <InspirationPhoto
          url="/inspiration/photos/house-binb/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/house-binb/00_house-binb.jpg"
          title="Загородный дом House B in B"
        />
        <InspirationPhoto
          url="/inspiration/photos/mebel-magazina/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/mebel-magazina/00_mebel-magazina.jpg"
          title="Мебель для магазина"
        />
        <InspirationPhoto
          url="/inspiration/photos/kvartira-tokio/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/kvartira-tokio/00_kvartira-tokio.jpg"
          title="Квартира в Токио"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-mokko/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-mokko/00_dom-mokko.jpg"
          title="Дом мокко в Мадриде"
        />
        <InspirationPhoto
          url="/inspiration/photos/moerkensheide-by/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/moerkensheide-by/00_moerkensheide-by.jpg"
          title="Вилла Moerkensheide из кирпича в Бельгии"
        />
        <InspirationPhoto
          url="/inspiration/photos/villa-vals/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/villa-vals/00_villa-vals.jpg"
          title="Вилла Vals"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-kaleidoskop/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-kaleidoskop/00_dom-kaleidoskop.jpg"
          title="Дом Калейдоскоп"
        />
        <InspirationPhoto
          url="/inspiration/photos/krysha-iz-dosok/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/krysha-iz-dosok/00_krysha-iz-dosok.jpg"
          title="Крыша из досок"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-s-shattersami/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-s-shattersami/00_dom-s-shattersami.jpg"
          title="Дом с шаттерсами (внутренними ставнями)"
        />
        <InspirationPhoto
          url="/inspiration/photos/old-mill-belgrade/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/old-mill-belgrade/00_old-mill-belgrade.jpg"
          title="Отель Old Mill Belgrade"
        />
        <InspirationPhoto
          url="/inspiration/photos/hue-apartments/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/hue-apartments/00_hue-apartments.jpg"
          title="Апартаменты Hue Apartments"
        />
        <InspirationPhoto
          url="/inspiration/photos/stelazhzhi-fittings/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/stelazhzhi-fittings/00_stelazhzhi-fittings.jpg"
          title="Стеллажи из арматуры"
        />
        <InspirationPhoto
          url="/inspiration/photos/dom-v-yuzhnoi-afrike/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/dom-v-yuzhnoi-afrike/00_dom-v-yuzhnoi-afrike.jpg"
          title="Дом в Южной Африке"
        />
        <InspirationPhoto
          url="/inspiration/photos/vintovaya-lestnitsa/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/vintovaya-lestnitsa/00_vintovaya-lestnitsa.jpg"
          title="Винтовая лестница от норвежского архитектора"
        />
        <InspirationPhoto
          url="/inspiration/photos/mountains-villa/"
          backgroundImageUrl="https://rhome.by/images/inspiration/photos/mountains-villa/00_mountains-villa.jpg"
          title="Вилла Vals"
        />
      </div>
      <FooterConsultationDmitry />
    </div>
  </Layout>
)

export default Photos
