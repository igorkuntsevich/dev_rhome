/**
 * SEO component that queries for data with
 * Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { Helmet } from 'react-helmet';

const Seo = ({title, description,   image, location}) => {

  title=         title||" Дизайн интерьера квартир, домов и офисов в Минске"
  description=   description||" Студия дизайна и архитектуры i-project.by разрабатывает индивидуальный дизайн интерьера ✦ более 15 лет опыта ✦ портфолио более 100 проектов ✦ под ключ"
  image=         image||" https://i-project.by/wp-content/uploads/2020/10/main_services_1.png "
  location=      location||"https://www.i-project.by"


  return (
    <Helmet>
      <html lang="en"/>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta charSet="utf-8" />

        {location && <meta property="og:url" content={location } />}
      <meta property="og:image" content={image } />
      <meta property="og:title" content={title}  />
      <meta property='og:type' content="website"/>
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description}/>

      <meta itemprop="name" content={title} />
      {location && <meta itemprop="url" content={location } />}
      <meta itemprop="description" content={description} />

      <meta name="twitter:title" content={title}/>
      {location && <meta name="twitter:url" content={location }/>}
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description}/>
      <meta name="twitter:image" content={image }/>
    </Helmet>
  )
}
export default Seo;