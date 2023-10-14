/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.scss"
import { useEffect } from "react";
import { axiosWithBase } from "../api/fetcher";
import { API } from "../api/api";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(()=>{
    axiosWithBase(API.setViewCounter(window?.location?.pathname))
  },[])
  return (
    <>
      <div className="main_flex">
        <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
