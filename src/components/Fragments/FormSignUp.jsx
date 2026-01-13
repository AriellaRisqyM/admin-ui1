import React, { useContext, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import LabeledInput from '../Elements/LabeledInput';
import CheckBox from '../Elements/CheckBox';
import Button from '../Elements/Button';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { AuthContext } from '../../context/authContext';
import AppSnackbar from '../Elements/AppSnackbar';

const SignUpSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Nama terlalu pendek")
    .required("Nama wajib diisi"),
  email: Yup.string()
    .email("Email tidak valid")
    .required("Email wajib diisi"),
  password: Yup.string()
    .min(6, "Password minimal 6 karakter")
    .required("Password wajib diisi"),
  terms: Yup.boolean()
    .oneOf([true], "Anda harus menyetujui syarat & ketentuan"),
});

function FormSignUp() {
  const { signup } = useContext(AuthContext);
  const navigate = useNavigate();

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <>
      <div className="mt-16">
        <Formik
          initialValues={{ 
            name: "", 
            email: "", 
            password: "", 
            terms: false 
          }}
          validationSchema={SignUpSchema}
          onSubmit={async (values, { setSubmitting }) => {
            try {
              await signup(values.name, values.email, values.password);
              
              setSnackbar({
                open: true,
                message: "Registrasi Berhasil",
                severity: "success",
              });

              setTimeout(() => {
                navigate("/login");
              }, 2000);

            } catch (err) {
              setSnackbar({
                open: true,
                message: err.message || "Email sudah digunakan sebelumnya",
                severity: "error",
              });
            } finally {
              setSubmitting(false);
            }
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <div className="mb-6">
                <Field name="name">
                  {({ field }) => (
                    <LabeledInput 
                      {...field} 
                      id="name" 
                      type="text" 
                      label="Name" 
                      placeholder="Tanzir Rahman" 
                    />
                  )}
                </Field>
                <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-6">
                <Field name="email">
                  {({ field }) => (
                    <LabeledInput 
                      {...field} 
                      id="email" 
                      type="email" 
                      label="Email address" 
                      placeholder="hello@example.com" 
                    />
                  )}
                </Field>
                <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-6">
                <Field name="password">
                  {({ field }) => (
                    <LabeledInput 
                      {...field} 
                      id="password" 
                      type="password" 
                      label="Password" 
                      placeholder="xxxxxxxx" 
                    />
                  )}
                </Field>
                <ErrorMessage name="password" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <div className="mb-6">
                <Field name="terms">
                  {({ field }) => (
                    <CheckBox
                      {...field}
                      id="terms"
                      type="checkbox"
                      checked={field.value}
                      label="By continuing, you agree to our terms of service"
                    />
                  )}
                </Field>
                <ErrorMessage name="terms" component="p" className="text-red-500 text-xs mt-1" />
              </div>

              <Button type="submit">
                {isSubmitting ? "Processing..." : "Sign Up"}
              </Button>
            </Form>
          )}
        </Formik>
      </div>

      <div className="flex justify-center">
        <Link to="/login" className="mt-4 text-primary text-sm font-bold">
          Already have an account? Sign In Here
        </Link>
      </div>

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </>
  );
}

export default FormSignUp;