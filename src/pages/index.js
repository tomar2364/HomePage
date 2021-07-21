import React from "react";
import Navbar from "../components/navbar";
import HeroSection from "../components/Hero";
import Footer from "../components/footer/Footer";
import Screen from "../components/padding1";
import Screen2 from "../components/padding2";
import CardItem from "../components/CardS/Cards.js";
import ImageSlider from '../SliderData/ImageSlider';
import { SliderData } from '../SliderData/SliderData';
import ServicesSection from '../components/Help/ServicesSection'
// import info from "../info";
const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ImageSlider slides={SliderData} />
      <Screen />
      <ServicesSection />
      <CardItem />
      <Screen2 />
      

      <Footer />
    </>
  );
};

export default Home;
