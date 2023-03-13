import { useState } from "react";
import { ContactForm } from "./components/ContactForm";
import { UseMultistepForm } from "./components/UseMultistepForm";
import { UserForm } from "./components/UserForm";
import { DateForm } from "./components/DateForm";
import { AddressForm } from "./components/AddressForm";
import { AdditionalForm } from "./components/AdditionalForm";
import { ThankYouForm } from "./components/ThankYouForm";
import "../src/styles/App.css";

const INITIAL_DATA = {
  dataLog: "",
  dataPhone: "",
  dataEmailTemplate: "odbior.pl.php",
  dataSMSTemplate: "odbior.pl.php",
  dataTags: {
    3: "1",
    4: "1",
  },
  "dataValues[serviceDataType]": 394,
  "dataValues[serviceClientSource]": 19,
  "dataValues[serviceClientChannel]": 39,
  "dataValues[serviceDataAddressCityText]": "",
  "dataValues[serviceDataAddress]": "",
  "dataValues[serviceDataCity]": "",
  "dataValues[serviceDataArea]": "",
  "dataValues[serviceHomeType]": "",
  "dataValues[serviceDataServiceDate]": "",
  dataUpdateEmail: "",
  docs: "",
  submit: 1,
  tips: "",
  street: "",
};

export const App = () => {
  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const { isFirstStep, step, isSecondStep, isLastStep, next } =
    UseMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <ContactForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <DateForm {...data} updateFields={updateFields} />,
      <AdditionalForm {...data} updateFields={updateFields} />,
      <ThankYouForm {...data} updateFields={updateFields} />,
    ]);

  function onSubmit(e) {
    e.preventDefault();

    if (isFirstStep) {
      fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => {
          setData({
            clientHash: data.hash,
            submit: 1,
            dataEmailTemplate: "odbior.pl.php",
          });
          console.log("Endpoint Success: ", data);
          gtag("event", "conversion", {
            send_to: "AW-725933870/jm4tCM7Z9LMBEK6-k9oC",
          });
        })
        .catch((error) => {
          console.error("Endpoint Error: ", error);
        });
      next();
      setData({
        dataEmailTemplate: "odbior.pl.php",
        clientHash: data.clientHash,
        submit: 1,
      });
    } else if (!isLastStep) {
      console.log(data);
      fetch("", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          response.json();
        })
        .then((data) => {
          console.log("UpdateClientData Success: ", data);
        })
        .catch((error) => {
          console.error("UpdateClientData Error: ", error);
        });
      next();
      setData({
        dataEmailTemplate: "",
        clientHash: data.clientHash,
        submit: 1,
      });
    }
  }

  return (
    <>
      <img src="/img/opl-logo.png" className="logo" alt="" />
      <div className="form-container">
        <div className="num-of-page">
          <h1>Zarezerwuj termin odbioru</h1>
        </div>
        <form onSubmit={onSubmit}>
          {step}
          {isLastStep ? (
            <></>
          ) : (
            <div className="form-foot">
              <button className="btn-main" type="submit">
                Dalej
              </button>
            </div>
          )}
        </form>
      </div>
    </>
  );
};
