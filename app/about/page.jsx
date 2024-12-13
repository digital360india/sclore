
import AboutSchlorepage from "@/components/AboutSchlorepage";


export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to GoEdu - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

const About = () => {
  return (
    <>

      <AboutSchlorepage />

     

    </>
  );
};

export default About;
