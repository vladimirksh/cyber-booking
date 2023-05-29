import React from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe";
import Footer from "../../components/Footer/Footer";

function Home(props) {
  return (
    <>
      <Header />
      <SearchForm />
      <main className="home-container">
        <Featured />
        <h2 className="home-container__title">Поиск по типу размещения</h2>
        <PropertyList />
        <h2 className="home-container__title">Дома, которые нравятся гостям</h2>
        <FeaturedProperties />
      </main>
      <EmailSubscribe />
      <Footer />
    </>
  );
}

export default Home;
