import { yupResolver } from "@hookform/resolvers/yup/dist/yup";
import { useForm } from "react-hook-form";
import { schema } from "./Myform.validations";
import { FormValues } from "./Myform.types";
import MyformUI from "./Myform.presenter";

export default function Myform() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onClickLogin = (data: FormValues) => {
    // loginUser API 요청하기
    console.log(data);
  };

  return (
    <MyformUI
      handleSubmit={handleSubmit}
      register={register}
      formState={formState}
      onClickLogin={onClickLogin}
    />
  );
}
