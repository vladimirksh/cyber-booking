import React, { useState } from "react";
import Header from "../../components/Header/Header";
import ResultsForm from "../../components/ResultsForm/ResultsForm";
import CardHotel from "../../components/CardHotel/CardHotel";
import Footer from "../../components/Footer/Footer";

function SearchResults(props) {
  return (
    <>
      <Header />
      <section className="search-results">
        <ResultsForm />
        <section className="search-results__hotel-list">
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
          <CardHotel />
        </section>
      </section>
      <Footer />
    </>
  );
}

export default SearchResults;
