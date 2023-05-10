import React, { useState } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Button,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  Label,
  Option,
  Select,
  Password,
  Title,
} from "../../utils/styles/generalStyles";

const Profile = () => {
  const [edit, setEdit] = useState(false);
  const [profile, setProfile] = useState({
    firstName: "Nikolina",
    lastName: "Žižić",
    email: "nzizic00@gmail.com",
    githubUsername: "nina0812",
    zeplinUsername: "nina0812",
    activeFacultyYear: "4",
    isAdmin: false,
  });
  return (
    <Section
      title="Profile"
      isProfilePage="true"
      buttonText={!edit ? "Edit" : "Cancel"}
      handleEditing={() => setEdit(!edit)}
    >
      <Formik
        initialValues={profile}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"), //ako netko nije upisao firstname ispisi mu poruku iz required
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"), //funkcija koja provjerava je li korisnik zaista upisao email
          githubUsername: Yup.string().required("Github username is required"),
          zeplinUsername: Yup.string().required("Zeplin username is required"),
          activeFacultyYear: Yup.string().required(
            "Active faculty year is required"
          ),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              github_username: values.githubUsername,
              zeplin_username: values.zeplinUsername,
              active_faculty_year:
                parseInt(values.activeFacultyYear) === 0
                  ? null
                  : parseInt(values.activeFacultyYear),
              is_admin: false,
            };
            alert(JSON.stringify(data, null, 2));
            setSubmitting(false);
            resetForm();
            setEdit(false);
          }, 1000);
        }}
        enableReinitialize
      >
        {(formik) => (
          <Form disabled={!edit || formik.isSubmitting}>
            <FormRow>
              {edit && <Label>First name</Label>}
              <Field
                type="text"
                name="firstName"
                placeholder="First name..."
                disabled={!edit || formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="firstName" />
            </FormRow>
            <FormRow>
              {edit && <Label>Last name</Label>}
              <Field
                type="text"
                name="lastName"
                placeholder="Last name..."
                disabled={!edit || formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="lastName" />
            </FormRow>
            <FormRow>
              {edit && <Label>Email</Label>}
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                disabled={!edit || formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="email" />
            </FormRow>
            <FormRow>
              {edit && <Label>Github</Label>}
              <Field
                type="text"
                name="githubUsername"
                placeholder="Github username..."
                disabled={!edit || formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="githubUsername" />
            </FormRow>
            <FormRow>
              {edit && <Label>Zeplin</Label>}
              <Field
                type="text"
                name="zeplinUsername"
                placeholder="Zeplin username..."
                disabled={!edit || formik.isSubmitting}
              />
              <ErrorMessage component={"div"} name="zeplinUsername" />
            </FormRow>
            <FormRow>
              {edit && <Label>Active faculty year</Label>}
              <Select
                disabled={!edit || formik.isSubmitting}
                id="activeFacultyYear"
                {...formik.getFieldProps("activeFacultyYear")}
              >
                <Option value="" disabled hidden>
                  Choose an Active faculty year
                </Option>
                <Option value="0">Not a student</Option>
                <Option value="1">1st faculty year</Option>
                <Option value="2">2nd faculty year</Option>
                <Option value="3">3rd faculty year</Option>
                <Option value="4">4th faculty year</Option>
                <Option value="5">5th faculty year</Option>
              </Select>
              <ErrorMessage component={"div"} name="activeFacultyYear" />
            </FormRow>
            {edit && (
              <FormRow>
                <Button
                  isSecondary
                  type="submit"
                  disabled={formik.isSubmitting}
                  onClick={() => setProfile(formik.values)}
                >
                  {formik.isSubmitting ? "Processing" : "Update User data"}
                </Button>
              </FormRow>
            )}
          </Form>
        )}
      </Formik>
       <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          passwordConfirmation: "",
        }}
        validationSchema={Yup.object({
          oldPassword: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
          newPassword: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"),
          passwordConfirmation: Yup.string()
            .test("passwords-match", "Passwords must match", function (value) {
              return this.parent.newPassword === value;
            })
            .required("Confirmation password is required"),
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              oldPassword: values.oldPassword,
              newPassword: values.newPassword,
            };
            alert(JSON.stringify(data, null, 2));
            setSubmitting(false);
            resetForm();
            setEdit(false);
          }, 1000);
        }}
      >
        {(formik) => (
          <>
          {edit && (
            <Password isRight>
              <Title>Reset password</Title>
              <Form disabled={formik.isSubmitting} >
                <FormRow>
                  <Field
                    type="password"
                    name="oldPassword"
                    placeholder="Old password..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="oldPassword" />
                </FormRow>
                <FormRow>
                  <Field
                    type="password"
                    name="newPassword"
                    placeholder="New password..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="newPassword" />
                </FormRow>
                <FormRow>
                  <Field
                    type="password"
                    name="passwordConfirmation"
                    placeholder="Repeat new password..."
                    disabled={formik.isSubmitting}
                  />
                  <ErrorMessage component={"div"} name="passwordConfirmation" />
                </FormRow>
                <FormRow>
                  <Button
                    isSecondary
                    type="submit"
                    disabled={formik.isSubmitting}
                  >
                    {formik.isSubmitting ? "Processing" : "Update Password"}
                  </Button>
                </FormRow>
              </Form>
            </Password>
          )}
          {!edit && (
            <Password isOnlyText isRightt>
            <Title>Reset password</Title>
            <p>Please click the "Edit" button to reset your password.</p>
            </Password>
          )}
        </>
      )}
      </Formik> 
    </Section>
  );
};

export default Profile;
