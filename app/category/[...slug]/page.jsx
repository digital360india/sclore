import { base } from "@/app/api/airtable.jsx";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CategoryPage from "@/components/CategoryPage";
import CategoryHeroGoEdu from "@/components/CategoryHeroGoEdu";
import Head from "next/head";
import Script from "next/script";

async function getCategoryData(slug) {
  const categoryData = await base("category 2")
    .select({
      filterByFormula: `slug= "${slug}"`,
    })
    .all()
    .then((value) => value[0]?.fields);
  return categoryData;
}

export async function generateMetadata({ params }) {
  const categoryData = await getCategoryData(params.slug);

  return {
    title: categoryData?.title,
    description: categoryData?.meta_description,
    keywords: categoryData?.keywords,
    authors: [{ name: categoryData?.author }],
    alternates: {
      canonical: `https://www.edu123.in/category/${params.slug}`,
    },
    openGraph: {
      title: categoryData?.title,
      description: categoryData?.meta_description,
      url: `https://www.edu123.in/category/${params.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: categoryData?.featuredImg }],

      siteName: "Sclore School Search Portal",
    },
    robots: {
      googleBot: {
        index: true,
        follow: true,
      },
    },
    twitter: {
      card: "summary",
      title: categoryData?.title,
      description: categoryData?.meta_description,

      image: categoryData?.featuredImg,
      site: "@edu123",
      creator: "@edu123",
    },
  };
}

export default async function ListingPage({ params }) {
  const categoryData = await getCategoryData(params.slug);

  return (
    <>
      <Head>
        {categoryData?.schema && (
          <Script
            id="schema1"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: categoryData.schema }}
          />
        )}
        {categoryData?.schema2 && (
          <Script
            id="schema2"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: categoryData.schema2 }}
          />
        )}
        {categoryData?.schema3 && (
          <Script
            id="schema3"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: categoryData.schema3 }}
          />
        )}
      </Head>

      <div className="overflow-hidden md:overflow-visible">
        <CategoryHeroGoEdu />
        <CategoryPage categoryData={categoryData} />
        <FAQ categoryData={categoryData} />
      </div>
    </>
  );
}
