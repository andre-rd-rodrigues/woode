import googleIcon from "assets/Icons/google.png";
import logo from "assets/images/logo.png";
import { Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./login.module.scss";

function Login() {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.header}>
        <img src={logo} alt="Woode Furniture" />
        <h1>Login</h1>
      </div>

      <Form className={styles.loginForm}>
        <Form.Group controlId="form-email">
          <Form.Label>Email*</Form.Label>
          <Form.Control type="email" placeholder="name@email.com" />
        </Form.Group>

        <Form.Group controlId="form-password" className="mt-3">
          <Form.Label>Password*</Form.Label>
          <Form.Control type="password" placeholder="password" />
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

        <button type="submit" className={styles.button}>
          Sign in
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

        <button type="button" className={styles.socialButton}>
          <img src={googleIcon} alt="Google icon" />
          Continue with Google
        </button>
      </Form>
    </div>
  );
}

export default Login;
