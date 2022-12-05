import { Button, Paper, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import { FormInputText } from "./form-components/FormInputText";
import { Carrier, getInitialCarrier } from "./models/Carrier.Interface";

export const FormDemo = () => {
  const initialCarrier = getInitialCarrier();

  const methods = useForm<Carrier>({ defaultValues: initialCarrier });
  const { handleSubmit, reset, control, setValue, watch } = methods;
  const onSubmit = (data: Carrier) => console.log(data);

  return (
    <Paper
      style={{
        display: "grid",
        gridRowGap: "20px",
        padding: "20px",
        margin: "10px 300px",
      }}
    >
      <Typography variant="h6">Form Demo</Typography>

      <FormInputText name="name" control={control} label="Name" required />
      <FormInputText
        name="gsdb"
        control={control}
        label="Contract GSDB Code"
        strictLength={5}
        required
      />
      <FormInputText
        name="carrierManager"
        control={control}
        label="Carrier Manager"
      />

      <Button onClick={handleSubmit(onSubmit)} variant="contained">
        {" "}
        Submit{" "}
      </Button>
      <Button onClick={() => reset()} variant="outlined">
        {" "}
        Reset{" "}
      </Button>
    </Paper>
  );
};
