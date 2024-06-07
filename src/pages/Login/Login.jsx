import googleIcon from "assets/Icons/google.png";
import logo from "assets/images/logo.png";
import { Form } from "react-bootstrap";

import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { selectAuthState } from "store/entities/auth";
import { loginThunk } from "store/thunks/auth.thunks";
import styles from "./login.module.scss";

function Login({ login, isLoading, isSuccess }) {
  const navigate = useNavigate();

  const previousRoute = useSelector(
    (state) => state.entities.navigation.previousRoute
  );

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    login({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      navigate(previousRoute || "/");
    }
  }, [isSuccess, navigate, previousRoute]);

  return (
    <div className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} alt="Woode Furniture" />
        <h1>Login</h1>
      </div>

      <Form className={styles.loginForm} onSubmit={handleLoginSubmit}>
        <Form.Group controlId="form-email">
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

        <Form.Group
          className={`mt-3 ${styles.formGroup}`}
          controlId="formBasicCheckbox"
        >
          <Form.Check type="checkbox" label="Remember me" defaultChecked />
          <Link to="/forgot-password" className={styles.link}>
            Reset password
          </Link>
        </Form.Group>

        <button type="submit" className={styles.button} disabled={isLoading}>
          {isLoading ? (
            <ClipLoader color={"white"} loading={isLoading} size={17} />
          ) : (
            "Sign in"
          )}
        </button>

        <div className={styles.additionalLinks}>
          <p>
            Don&apos;t have an account?{" "}
            <Link to="/register" className={styles.link}>
              Sign up
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
    login: (credentials) => dispatch(loginThunk(credentials))
  };
};

const mapStateToProps = ({ entities }) => {
  return {
    isSuccess: selectAuthState(entities).isSuccess,
    isLoading: selectAuthState(entities).isLoading,
    error: selectAuthState(entities).error
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
