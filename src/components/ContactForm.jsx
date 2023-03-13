import { FormWrapper } from "./FormWrapper";

export function ContactForm({
  dataUpdateEmail,
  serviceDataArea,
  serviceDataCity,
  updateFields,
}) {
  return (
    <FormWrapper title="Dodatkowe dane">
      <label htmlFor="dataUpdateEmail">E-mail</label>
      <input
        autoFocus
        id="dataUpdateEmail"
        type="email"
        name="dataUpdateEmail"
        value={dataUpdateEmail}
        onChange={(e) =>
          updateFields({
            dataUpdateEmail: e.target.value,
          })
        }
      />
      <label htmlFor="serviceDataArea">Metaż nieruchomości</label>
      <input
        type="number"
        name="serviceDataArea"
        id="serviceDataArea"
        min={1}
        max={10000}
        value={serviceDataArea}
        onChange={(e) =>
          updateFields({
            "dataValues[serviceDataArea]": e.target.value,
          })
        }
      />
      <label htmlFor="serviceDataCity">Województwo</label>
      <select
        id="serviceDataCity"
        name="serviceDataCity"
        value={serviceDataCity}
        onChange={(e) =>
          updateFields({
            "dataValues[serviceDataCity]": e.target.value,
          })
        }
      >
        <option value="wybierz">wybierz</option>
        <option value="3">Dolnośląskie</option>
        <option value="10">Kujawsko-pomorskie</option>
        <option value="8">Lubelskie</option>
        <option value="350">Lubuskie</option>
        <option value="5">Łódzkie</option>
        <option value="2">Małopolskie</option>
        <option value="1">Mazowieckie</option>
        <option value="351">Opolskie</option>
        <option value="9">Podkarpackie</option>
        <option value="12">Podlaskie</option>
        <option value="6">Pomorskie</option>
        <option value="4">Śląskie</option>
        <option value="342">Świętokrzyskie</option>
        <option value="13">Warmińsko-mazurskie</option>
        <option value="7">Wielkopolskie</option>
        <option value="11">Zachodniopomorskie</option>
      </select>
    </FormWrapper>
  );
}
