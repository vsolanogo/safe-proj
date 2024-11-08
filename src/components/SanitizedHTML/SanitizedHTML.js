import React from "react"
import sanitizeHtml from "sanitize-html"
import styled from "styled-components"
import * as Proptypes from "prop-types"

const defaultOptions = {
  allowedAttributes: {
    'a': [ 'href' ]
  }
};

const Container = styled.div``

export const SanitizedHTML = ({ html, tagName, className, options }) => {
  const sanitize = (dirty, options) => {
    const sanitizeOptions = { ...defaultOptions, ...options }

    return { __html: sanitizeHtml(dirty, sanitizeOptions) }
  }

  return (
    <Container
      as={tagName}
      className={className}
      dangerouslySetInnerHTML={sanitize(html, options)}
    />
  )
}

SanitizedHTML.propTypes = {
  html: Proptypes.string,
  tagName: Proptypes.string,
  className: Proptypes.string,
  options: Proptypes.object,
}