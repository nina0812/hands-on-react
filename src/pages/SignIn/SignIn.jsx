import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
} from "../../utils/styles/generalStyles";

const SignIn = () => {
  return (
    <Section title="Sign in" isCentered="true">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"), //funkcija koja provjerava je li korisnik zaista upisao email
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
         
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          

          setTimeout(()=>{
            const data={
              email: values.email,
              password: values.password,
            }
            alert(JSON.stringify(data, null, 2))
            setSubmitting(false);
            resetForm();
          },1000)
        }}
      >
        {(formik) => (
          <Form isCentered="true">
            <FormRow>
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="email" />
            </FormRow>
            <FormRow>
              <Field
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="password" />
            </FormRow>
            <FormRow>
              <Button isSecondary type="submit" disabled={formik.isSubmitting}>{formik.isSubmitting? "Processing" : "Sign in"}</Button>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default SignIn;
