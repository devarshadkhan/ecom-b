import React from "react";
import { useRouter } from "next/router";
import Input from "components/element/input";
import Button from "components/element/button";
import css from "styles/auth.module.scss";
import { useRegister } from "network-requests/mutations";
import useInputs from "hooks/useInputs";

const SignUpPage = () => {
  const router = useRouter();

  const { inputs, onChangeInputs } = useInputs({
    email: "",
    password: "",
    name: "",
  });

  const { mutate } = useRegister();

  const handleSubmit = React.useCallback(
    (e: React.ChangeEvent<HTMLFormElement>) => {
      e.preventDefault();
      mutate(inputs as any, {
        onSuccess: () => {
          router.push("/auth/magic-link");
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [inputs]
  );

  console.log(inputs);
  return (
    <div className={css.container}>
      <form className={css.login} onSubmit={handleSubmit}>
        <div className={css.heading}>
          <h2>Signup</h2>
        </div>
        <Input
          type="text"
          name="name"
          placeholder="Enter your Name"
          label={"Name"}
          value={inputs.name}
          onChange={onChangeInputs}
        />
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
        <div className={css.controls}>
          <Button>Submit</Button>
        </div>
      </form>
    </div>
  );
};
export default SignUpPage;
