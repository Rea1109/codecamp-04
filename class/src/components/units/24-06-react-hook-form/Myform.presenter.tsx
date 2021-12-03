import Button01 from "../../commons/buttons/01/Button01";
import Input01 from "../../commons/inputs/Input01";

export default function MyformUI(props) {
  return (
    <form onSubmit={props.handleSubmit(props.onClickLogin)}>
      이메일 : <Input01 type={"text"} register={props.register("myEmail")} />
      {/* email : <input type="text" {...props.register("myEmail")} /> */}
      <div>{props.formState.errors.myEmail?.message}</div>
      비밀번호 :{" "}
      <Input01 type="password" register={props.register("myPassword")} />
      {/* password : <input type="password" {...props.register("myPassword")} /> */}
      <div>{props.formState.errors.myPassword?.message}</div>
      <Button01
        type={"submit"}
        name={"로그인"}
        isValid={props.formState.isValid}
      />
      {/* <button isValid={props.formState.isValid}>login</button> */}
    </form>
  );
}
