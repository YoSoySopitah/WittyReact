import React from "react";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import WhyChooseUs from "./components/WhyChooseUs";
import Tips from "./components/Tips";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <SearchBar />
        <WhyChooseUs />
        <Tips />
        <Quote />
        <Footer />
      </div>
    </div>
  );
}

export default App;
