import React from "react";
import { useRouter } from "next/router";
import Input from "components/element/input";
import Button from "components/element/button";
import css from "styles/auth.module.scss";
import { useLogin } from "network-requests/mutations";
import useInputs from "hooks/useInputs";
import Link from "next/link";
import NextSEO from "layout/nextseo";

const LoginPage = () => {
  const router = useRouter();
  const { inputs, onChangeInputs } = useInputs({
    email: "",
    password: "",
  });

  const { mutate } = useLogin();

  const handleSubmit = React.useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate(inputs, {
        onSuccess: () => {
          router.push("/");
        },
      });
    },
    [inputs]
  );

  return (
    <>
      <NextSEO
        title={"Divan Beds in UK | Divan Double Bed | Beds for Sale | Beds Divans"}
        description={
          "Discover Divan beds in the UK, which are available in small, double king, and super king bed sizes with headboards. Get a special discount on divan beds."
        }
      />
      <div className={css["sectionlogin"]}>
        <div className={css.container}>
        <form className={css.login} onSubmit={handleSubmit}>
          <div className={css.heading}>
            <h2>Login</h2>
          </div>
          <Input
            type="text"
            name="email"
            placeholder="Enter your email"
            label={"Email"}
            value={inputs.email}
            onChange={onChangeInputs}
          />
          <Input
            name="password"
            type="password"
            label={"Password"}
            placeholder="Enter your password"
            value={inputs.password}
            onChange={onChangeInputs}
          />
          <p>
            Dont have an account?{" "}
            <Link href="/auth/signup">
              <a style={{ fontWeight: 600, color: "blueviolet" }}>Register</a>
            </Link>
          </p>
          <div className={css.controls}>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
      </div>
      
    </>
  );
};
export default LoginPage;
