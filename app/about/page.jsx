
import AboutSchlorepage from "@/components/AboutSchlorepage";


export async function generateMetadata() {
  return {
    title: "About Us",
    description:
      "Welcome to Sclore - The ultimate guide to the best schools in India! ",
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
