import "./styles/styles.scss";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Switch from "react-switch";
import { useState } from "react";

function App() {
  const [pageviews, setPageviews] = useState(100000);
  const [pricing, setPricing] = useState(16);
  const [toggle, setToggle] = useState(false);

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
          <Slider className="container__slider slider" />
          <p className="container__price">
            <span>${pricing.toFixed(2)}</span>/ month
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
