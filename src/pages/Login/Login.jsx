import googleIcon from "assets/Icons/google.png";
import logo from "assets/images/logo.png";
import { useLogin } from "hooks/useAuth";
import { Form } from "react-bootstrap";

import { Link } from "react-router-dom";
import { ClipLoader } from "react-spinners";

import { notify } from "components/ToastNotification";
import styles from "./login.module.scss";

function Login() {
  const { isLoading, mutate } = useLogin();

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;

    mutate(
      { email, password },
      {
        onSuccess: (data) => {
          console.log(data);
        },
        onError: ({ response }) => {
          notify("error", response.data.message);
        }
      }
    );
  };

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
          <Form.Check type="checkbox" label="Remember me" />
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

export default Login;
