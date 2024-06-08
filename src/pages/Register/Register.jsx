import googleIcon from "assets/Icons/google.png";
import logo from "assets/images/logo.png";
import { Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { selectAuthState } from "store/entities/auth";
import { registerThunk } from "store/thunks/auth.thunks";
import styles from "./register.module.scss";

function Register({ register, isLoading, isSuccess, isAuthenticated }) {
  const navigate = useNavigate();

  const previousRoute = useSelector(
    (state) => state.entities.navigation.previousRoute
  );

  const handleRegisterSubmit = (event) => {
    event.preventDefault();
    const name = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;
    const confirmPassword = event.target[3].value;

    register({ email, password, name, confirm_password: confirmPassword });
  };
  console.log(isAuthenticated);
  useEffect(() => {
    if (isSuccess || isAuthenticated) {
      navigate("/");
    }
  }, [isSuccess, navigate, previousRoute]);

  return (
    <div className={styles.registerContainer}>
      <div className={styles.header}>
        <img src={logo} alt="Woode Furniture" />
        <h1>Sign Up</h1>
      </div>

      <Form className={styles.registerForm} onSubmit={handleRegisterSubmit}>
        <Form.Group controlId="form-name">
          <Form.Label>Name*</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your name"
            disabled={isLoading}
          />
        </Form.Group>

        <Form.Group controlId="form-email" className="mt-3">
          <Form.Label>Email*</Form.Label>
          <Form.Control
            type="email"
            placeholder="name@email.com"
            disabled={isLoading}
          />
        </Form.Group>

        <Form.Group controlId="form-password" className="mt-3">
          <Form.Label>Password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="password"
            disabled={isLoading}
          />
        </Form.Group>

        <Form.Group controlId="form-confirm-password" className="mt-3">
          <Form.Label>Confirm password*</Form.Label>
          <Form.Control
            type="password"
            placeholder="confirm your password"
            disabled={isLoading}
          />
        </Form.Group>

        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? (
            <ClipLoader color={"white"} loading={isLoading} size={17} />
          ) : (
            "Sign up"
          )}
        </button>

        <div className={styles.additionalLinks}>
          <p>
            Already have an account?{" "}
            <Link to="/login" className={styles.link}>
              Sign in
            </Link>
          </p>
        </div>

        <div className={styles.separator}>or</div>

        <button
          type="button"
          className={styles.socialButton}
          disabled={isLoading}
        >
          <img src={googleIcon} alt="Google icon" />
          Continue with Google
        </button>
      </Form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    register: (credentials) => dispatch(registerThunk(credentials))
  };
};

const mapStateToProps = (state) => {
  return {
    isSuccess: selectAuthState(state).isSuccess,
    isLoading: selectAuthState(state).isLoading,
    error: selectAuthState(state).error,
    isAuthenticated: selectAuthState(state).isAuthenticated
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
