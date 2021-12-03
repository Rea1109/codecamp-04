import { useForm } from "react-hook-form";

interface FormValues {
  myEmail: string;
  myPassword: string;
}
export default function ReactHookFormPage() {
  const { handleSubmit, register } = useForm();
  const onClickLogin = (data: FormValues) => {
    // loginUser API 요청하기
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onClickLogin)}>
      email : <input type="text" {...register("myEmail")} />
      password : <input type="password" {...register("myPassword")} />
      <button>login</button>
    </form>
  );
}
