import React from "react";
import Header from "../../components/Header/Header";
import SearchForm from "../../components/SearchForm/SearchForm";
import Featured from "../../components/Featured/Featured";
import PropertyList from "../../components/PropertyList/PropertyList";
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties";
import EmailSubscribe from "../../components/EmailSubscribe/EmailSubscribe";

function Home(props) {
  return (
    <>
      <Header />
      <SearchForm />
      <section className="home-container">
        <Featured />
        <h2 className="home-container__title">Поиск по типу размещения</h2>
        <PropertyList />
        <h2 className="home-container__title">Дома, которые нравятся гостям</h2>
        <FeaturedProperties />
      </section>
      <EmailSubscribe />
    </>
  );
}

export default Home;
