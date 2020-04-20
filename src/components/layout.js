/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/_reset.sass"

import Header from "./header"
import "./layout.css"

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

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div class="main-container">
        <main>{children}</main>
        <footer>
          Llámame Online es un servicio de
          {` `}
          <a
            href="https://servidoresrapidos.net"
            target="_blank"
            rel="noopener noreferrer"
          >
            Servidores Rápidos, S. A.
          </a>
          {` `}
          Todos los derechos reservados © {new Date().getFullYear()}. Diseñado y
          Desarrollado por
          {` `}
          <a
            href="https://www.moitorrijos.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Moi Torrijos.
          </a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
