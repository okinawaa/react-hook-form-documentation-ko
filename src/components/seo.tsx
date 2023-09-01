import Head from "next/head"

const site = {
  siteMetadata: {
    title: `React Hook Form - 간단한 리액트 폼 벨리데이션`,
    description: `성능이 우수하고 유연하며 확장 가능한 폼과 쉬운 사용자 정의 벨리데이션을 제공합니다.`,
    author: `@bluebill1049`,
    siteUrl: "https://www.react-hook-form.com",
    languages: {
      defaultLangKey: "ko",
    },
  },
}

function SEO({ title, description }: { title: string; description?: string }) {
  const metaDescription = description || site.siteMetadata.description

  return (
    <Head>
      <title>{title || site.siteMetadata.title}</title>
      <meta
        property="description"
        content={metaDescription}
        key="description"
      />
      <meta
        name="twitter:description"
        content="성능이 우수하고 유연하며 확장 가능한 폼과 쉬운 사용자 정의 벨리데이션을 제공합니다."
      ></meta>
      <meta name="twitter:creator" content={site.siteMetadata.author}></meta>
      <meta
        property="twitter:image"
        content="https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"
      ></meta>
      <meta name="twitter:card" content="summary_large_image"></meta>
      <meta property="og:type" content="website"></meta>
      <meta
        property="og:description"
        content="성능이 우수하고 유연하며 확장 가능한 폼과 쉬운 사용자 정의 벨리데이션을 제공합니다."
      ></meta>
      <meta
        property="og:image"
        content="https://raw.githubusercontent.com/react-hook-form/documentation/master/src/images/react-hook-form-og.png"
      ></meta>
    </Head>
  )
}

export default SEO
