import "./styles/styles.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Switch from "react-switch";
import { useEffect, useState } from "react";

function App() {
  const [pageviews, setPageviews] = useState("100K");
  const [toggle, setToggle] = useState(false);
  const [pricing, setPricing] = useState(16);
  const [discounted, setDiscounted] = useState(0);

  const marks = {
    0: 8,
    25: 12,
    50: 16,
    75: 24,
    100: 36,
  };

  // Calculates discounted price
  useEffect(() => {
    let newPrice = pricing;
    if (toggle) {
      newPrice -= 0.25 * pricing;
    }

    setDiscounted(newPrice);
  }, [pricing, toggle]);

  // Sets the pageview text
  useEffect(() => {
    if (pricing === 8) {
      setPageviews("10K");
    } else if (pricing === 12) {
      setPageviews("50K");
    } else if (pricing === 16) {
      setPageviews("100K");
    } else if (pricing === 24) {
      setPageviews("500K");
    } else if (pricing === 36) {
      setPageviews("1M");
    }
  }, [pricing]);

  return (
    <div className="App">
      <header className="header">
        <h1 className="header__heading">Simple, traffic-based pricing</h1>
        <p className="header__para">
          Sign-up for our 30-day trial. No credit card required.
        </p>
      </header>
      <main>
        <div className="container">
          <p className="container__pageviews">{pageviews} Pageviews</p>
          <Slider
            marks={marks}
            defaultValue={50}
            step={25}
            onChange={(e) => setPricing(marks[e])}
            className="container__slider slider"
          />
          <p className="container__price">
            <span>${toggle ? discounted.toFixed(2) : pricing.toFixed(2)}</span>/
            month
          </p>
          <div className="container__billing">
            <p className="container__billing__text">Monthly Billing</p>
            <Switch
              className="container__billing__switch"
              onColor="#7AEADF"
              offColor="#CFD8EF"
              offHandleColor="#FFFFFF"
              onHandleColor="#FFFFFF"
              uncheckedIcon={false}
              checkedIcon={false}
              checked={toggle}
              onChange={() => setToggle(!toggle)}
              height={22}
              width={43}
            />
            <p className="container__billing__text">Yearly Billing</p>
            <p className="container__billing__discount">25%</p>
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
