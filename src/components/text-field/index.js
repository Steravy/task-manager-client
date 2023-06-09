import React from "react";
import { TextField } from "@mui/material";
import { useField } from "formik";

const Textfield = ({
    name,
    ...otherProps
  }) => {

    const [field, meta] = useField(name);


    const configTextField = {
        ...field,
        ...otherProps,
        variant: "standard",
        fullWidth: true,
        label: false,
    };

    if (meta && meta.touched && meta.error) {
        configTextField.error = true;
        configTextField.helperText = meta.error;
    }

    return (
        <>
        <label>{otherProps.label}</label>
        <TextField  {...configTextField} />
        </>
    )
};

export default Textfield;