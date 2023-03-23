import "./styles/styles.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { useState } from "react";

function App() {
  const [pageviews, setPageviews] = useState(100000);
  const [pricing, setPricing] = useState(16);
  return (
    <div className="App">
      <header>
        <h1 className="header__heading">Simple, traffic-based pricing</h1>
        <p className="header__para">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </header>
      <main>
        <div className="container">
          <p className="container__views">{pageviews} Pageviews</p>
          <Slider />
          <p className="container__price">
            <span>${pricing}</span>/month
          </p>
          <div className="container__billing">
            <p className="container__billing__text">Monthly Billing</p>
            <button
              aria-label="billing toggle"
              className="container__billing__toggle"
              type="button"
            >
              <div className="container__billing__toggle--dot" />
            </button>
            <p className="container__billing__text">Yearly Billing</p>
            <p className="container__billing__discount">25% discount</p>
          </div>
          <ul className="container__list">
            <li className="container__list__item">Unlimited websites</li>
            <li className="container__list__item">100% data ownership</li>
            <li className="container__list__item">Email reports</li>
          </ul>
          <button className="container__button" type="button">
            Start my trial
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
