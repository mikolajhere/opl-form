import { FormWrapper } from "../components/FormWrapper";

export function AdditionalForm({ dataLog, updateFields }) {
  return (
    <FormWrapper>
      <label htmlFor="dataLog">Dodatkowe informacje</label> 
      <textarea
        type="text"
        name="dataLog"
        id="dataLog"
        autoFocus 
        value={dataLog}
        onChange={(e) => updateFields({ dataLog: e.target.value })} 
        rows="10"
      ></textarea>
    </FormWrapper>
  );
}
