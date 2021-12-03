import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup/dist/yup";

const schema = yup.object().shape({
  myEmail: yup
    .string()
    .email("이메일 형식이 적합하지 않습니다.")
    .required("반드시 입력해야하는 필수 사항합니다."),
  myPassword: yup
    .string()
    .min(4, "비밀번호는 최소 4자리 이상입니다.")
    .max(15, "비밀번호는 최대 15자리까지 입니다.")
    .required("비밀번호는 반드시 입력해 주세요."),
});

interface FormValues {
  myEmail: string;
  myPassword: string;
}
export default function ReactHookFormPage() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const onClickLogin = (data: FormValues) => {
    // loginUser API 요청하기
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      email : <input type="text" {...register("myEmail")} />
      <div>{formState.errors.myEmail?.message}</div>
      password : <input type="password" {...register("myPassword")} />
      <div>{formState.errors.myPassword?.message}</div>
      <button>login</button>
    </form>
  );
}
