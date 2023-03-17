import { FormWrapper } from "../components/FormWrapper";

export function AddressForm({
  serviceDataAddressCityTextText,
  serviceDataAddress,
  tips,
  street,
  updateFields,
}) {
  const handleChange = (e) => {
    updateFields({
      "dataValues[serviceDataAddress]": `${street} (${tips})`,
    });
  };

  return (
    <FormWrapper>
      <label htmlFor="serviceDataAddressCityTextText">Miasto</label>
      <input
        autoFocus
        type="text"
        name="city"
        id="serviceDataAddressCityTextText"
        value={serviceDataAddressCityTextText}
        onChange={(e) =>
          updateFields({
            "dataValues[serviceDataAddressCityText]": e.target.value,
          })
        }
      />
      <label htmlFor="street">Ulica i numer</label>
      <input
        type="text"
        name="street"
        id="street"
        value={street}
        onChange={(e) => {
          updateFields({ street: e.target.value });
          handleChange();
        }}
      />
      <label htmlFor="tips">Wskazówki dojazdu</label>
      <input
        type="text"
        name="tips"
        id="tips"
        value={tips}
        onChange={(e) => {
          updateFields({ tips: e.target.value });
          handleChange();
        }}
        defaultValue=" "
      />
    </FormWrapper>
  );
}
