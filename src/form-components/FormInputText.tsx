import TextField from "@material-ui/core/TextField";
import { Controller } from "react-hook-form";
import { FormInputProps } from "./FormInputProps";

export const FormInputText = ({
  name,
  control,
  label,
  unfloatLabel: shrinked,
  required,
  strictLength,
}: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({
        field: { onChange, value },
        fieldState: { error },
        formState,
      }) => (
        <TextField
          helperText={error ? error.message : null}
          size="small"
          error={!!error}
          onChange={onChange}
          value={value}
          fullWidth
          label={label}
          variant="outlined"
          InputLabelProps={{
            shrink: !shrinked,
            required: required,
          }}
          inputProps={{
            style: { textTransform: "uppercase" },
            minLength: strictLength,
            maxLength: strictLength,
          }}
        />
      )}
    />
  );
};
