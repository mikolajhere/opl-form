import { FormWrapper } from "./FormWrapper";

export function UserForm({ dataPhone, serviceHomeType, updateFields }) {
  return (
    <FormWrapper title="Podstawowe dane">
      <label htmlFor="dataPhone">Numer telefonu</label>
      <input
        autoFocus
        required
        name="dataPhone"
        type="tel"
        id="dataPhone"
        minLength={9}
        maxLength={14}
        value={dataPhone}
        onChange={(e) => updateFields({ dataPhone: e.target.value })}
      />

      <label htmlFor="serviceHomeType">Typ nieruchomości</label>
      <select
        id="serviceHomeType"
        name="serviceHomeType"
        value={serviceHomeType}
        onChange={(e) =>
          updateFields({ "dataValues[serviceHomeType]": e.target.value })
        }
        style={{ display: "none" }}
      >
        <option value="wybierz">wybierz</option>
        <option value="390">Mieszkanie</option>
        <option value="391">Dom</option>
        <option value="391">Inne</option>
      </select>

      <>
        <div className="propertyContainer">
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input contractType"
              value="390"
              name="dataValues[serviceHomeType]"
              id="defaultCheck42" 
              onChange={(e) =>
                updateFields({ "dataValues[serviceHomeType]": e.target.value })
              }
            />
            <label
              className="form-check-label mx-auto"
              htmlFor="defaultCheck42"
            >
              Mieszkanie
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input contractType"
              value="391"
              name="dataValues[serviceHomeType]"
              id="defaultCheck52"
              onChange={(e) =>
                updateFields({ "dataValues[serviceHomeType]": e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="defaultCheck52">
              Dom
            </label>
          </div>
          <div className="form-check">
            <input
              type="radio"
              className="form-check-input contractType"
              value="391"
              name="dataValues[serviceHomeType]"
              id="defaultCheck53"
              onChange={(e) =>
                updateFields({ "dataValues[serviceHomeType]": e.target.value })
              }
            />
            <label className="form-check-label" htmlFor="defaultCheck53">
              Inne
            </label>
          </div>
        </div>
      </>
    </FormWrapper>
  );
}
