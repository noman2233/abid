import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Heading from "../../components/heading/Heading";
import Form from "../../components/form/Form";
import Gallery from "../../components/gallery/Gallery";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Heading />
      <Form />
      <Gallery/>
      <Footer/>
      
    </div>
  );
};

export default Home;
