import { Box, Container } from "@mui/material";
import React from "react";
import { heroSchema } from "../schemas/schemas";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, TextField } from "@mui/material";

const AdminHero = () => {
  const initialValue = {
    title: "",
    description: "",
    image: "",
    state: "",
    country: "",
  };

  return (
    <Container maxWidth="lg">
      <Box>Admin Hero</Box>
      <Formik
        initialValues={initialValue}
        validationSchema={heroSchema}
        onSubmit={(values) => {
          console.log(values,"ghdcfvgbhnj");
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              width: "300px",
              margin: "auto",
            }}
          >
            <Field
              as={TextField}
              label="Title"
              name="title"
              variant="outlined"
              fullWidth
              error={touched.title && Boolean(errors.title)}
              helperText={<ErrorMessage name="title" />}
            />
            <Field
              as={TextField}
              label="Description"
              name="description"
              variant="outlined"
              fullWidth
              error={touched.description && Boolean(errors.description)}
              helperText={<ErrorMessage name="description" />}
            />
            {/* <Field
              as={FileField}
              label="Image"
              name="image"
              variant="outlined"
              fullWidth
              error={touched.image && Boolean(errors.image)}
              helperText={<ErrorMessage name="image" />}
            /> */}
            <Field
              as={TextField}
              label="State"
              name="state"
              variant="outlined"
              fullWidth
              error={touched.state && Boolean(errors.state)}
              helperText={<ErrorMessage name="state" />}
            />
            <Field
              as={TextField}
              label="Country"
              name="country"
              variant="outlined"
              fullWidth
              error={touched.country && Boolean(errors.country)}
              helperText={<ErrorMessage name="country" />}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
            >
              Submit
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  );
};

export default AdminHero;
