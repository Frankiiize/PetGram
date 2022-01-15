import React from "react";
import { Helmet } from 'react-helmet';

const SeoHelmet = ({ title, description, keywords, canonical = false, robots = false, url = false }) => {
  return(
    <Helmet>
      <meta charSet="utf-8"/>
      <title>{title}</title>
      {description && <meta name="description" content={description}/> }
      {description && <meta property="og:description" content={description} /> }
      {keywords && <meta name="keywords" content={keywords}/> }
      {canonical && <link rel="canonical" href="pet-gram-gg97wxsux-frankiiize.vercel.app" />}
      {robots && <meta name="robots" content="index, follow"/>  }
      <meta property="og:type" content="webapp" />
      {url && <meta property="og:url" content="pet-gram-gg97wxsux-frankiiize.vercel.app" />}
      <meta name="author" content="Frankiiize"/>
      <link href="https://github.com/Frankiiize" rel="publisher" />
    </Helmet>
  )
}

export { SeoHelmet };
