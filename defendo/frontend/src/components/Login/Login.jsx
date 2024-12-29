import React, { useState } from "react";
import "./LoginStyles.css";
import { Link } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useLoginUserMutation } from "../../features/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/authSlice";

function Login() {
  const [loginUser] = useLoginUserMutation();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    const user = values;
    try {
      const result = await loginUser(user);
      resetForm();
      const userData = result.data;
      dispatch(setCredentials(userData));

      if (result.data.status === "success") {
        navigate("/");
      } else {
        const receivedError = result.data.error;
        setError(receivedError);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login-wrapper py-5 px-0">
      <div className="row">
        <div className="container">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ errors, touched }) => (
              <Form className="form">
                <h1 className="h3 mb-3 fw-normal text-center text-uppercase heading">
                  Login
                </h1>
                <p className="text-center">
                  Please enter your e-mail and password
                </p>
                <div className="display">
                  <div className="inside-form ps-4">
                    {error && (
                      <p className="text-center error-message">{error}</p>
                    )}
                    <Field
                      className="email p-1 my-2"
                      type="text"
                      placeholder="Email"
                      name="email"
                    />
                    {errors.email && touched.email && (
                      <ErrorMessage
                        className="error-message"
                        name="email"
                        component="div"
                      />
                    )}
                    <Field
                      className="password p-1 my-2"
                      type="password"
                      placeholder="Password"
                      name="password"
                    />
                    {errors.password && touched.password && (
                      <ErrorMessage
                        className="error-message"
                        name="password"
                        component="div"
                      />
                    )}
                    <button
                      className="login-btn my-3 p-2 py-2 mx-0"
                      type="submit"
                    >
                      Login
                    </button>
                    <p className="text-center create">
                      Don't have an account?
                      <Link to="/account/signup" className="mx-1">
                        Create one
                      </Link>{" "}
                    </p>
                  </div>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default Login;
