import { Button, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import "./Formulario.css";

import React from "react";

const Formulario = () => {
  let initialValues = {
    nombre: "",
    email: "",
    clave: "",
  };

  const enviarForm = (data) => {
    console.log(data);
  };

  /* const formik =useFormik({
        initialValues,
        onSubmit: enviarForm
        
    }) */

  const { handleSubmit, handleChange, values, setFieldValue, errors } =
    useFormik({
      initialValues,

      validationSchema: Yup.object({
        nombre: Yup.string().required("Debes ingresar un nombre"),
        email: Yup.string().required("Debes ingresar un email valido"),
        clave: Yup.string().required("Debes ingresar una clave"),
      }),

      onSubmit: enviarForm,
    });

  return (
    <div>
      <Typography color="primary" variant="h2" align="center">
        Formulario de Registro
      </Typography>

      <form className="form-container" onSubmit={handleSubmit}>
        <Grid
          container
          //direction="column"
          alignItems={"Center"}
          justifyContent="space-evenly"
          spacing={2}
          sx={{ width: "100%" }}
        >
          <Grid item xs={12} md={7}>
            <TextField
              type="text"
              label="Ingrese su nombre"
              variant="outlined"
              fullWidth
              //name="nombre"
              onChange={(e) => {
                setFieldValue("nombre", e.target.value);
              }}
              value={values.nombre}
              error={errors.nombre}
              helperText={errors.nombre}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="email"
              label="Ingrese su email"
              variant="outlined"
              fullWidth
              name="email"
              onChange={handleChange}
              value={values.email}
              error={errors.email}
              helperText={errors.email}
            />
          </Grid>

          <Grid item xs={12} md={7}>
            <TextField
              type="clave"
              label="Ingrese su clave"
              variant="outlined"
              fullWidth
              name="clave"
              onChange={handleChange}
              value={values.clave}
              error={errors.clave}
              helperText={errors.clave}
            />
          </Grid>
        </Grid>
        <Button type="submit" variant="contained">
          Enviar
        </Button>
      </form>
    </div>
  );
};

export default Formulario;
