import { base } from "@/app/api/airtable.jsx";
import Hero from "@/components/Hero";
import FAQ from "@/components/FAQ";
import CategoryPage from "@/components/CategoryPage";
import CategoryHeroGoEdu from "@/components/CategoryHeroGoEdu";
import Head from "next/head";

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
      canonical: `https://www.sclore.com/category/${params.slug}`,
    },
    openGraph: {
      title: categoryData?.title,
      description: categoryData?.meta_description,
      url: `https://www.sclore.com/${params.slug}`,
      locale: "en_US",
      type: "website",
      images: [{ url: categoryData?.featuredImg }],
      siteName: "sclore",
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
      card: categoryData?.featuredImg,
      image: categoryData?.featuredImg,
      site: "@sclore",
      creator: "@sclore",
    },
  };
}

export default async function ListingPage({ params }) {
  const categoryData = await getCategoryData(params.slug);

  return (
    <>
      <Head>
        <script
          defer
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData?.schema,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData?.schema2,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: categoryData?.schema3,
          }}
        />
      </Head>

      <div className="overflow-hidden md:overflow-visible">
        <CategoryHeroGoEdu />
        <CategoryPage categoryData={categoryData} />
        <FAQ categoryData={categoryData} />
      </div>
    </>
  );
}
