import { useForm } from "react-hook-form";
// import ReactQuill from "react-quill";  그냥 임포트
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic"; // next가 지원해주는 다이나믹 임포트

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const handleChange = (value: string) => {
    console.log(value);

    // register로 등록하지 않고, 강제로 값을 넣어주는 기능
    setValue("contents", value === "<p><br></p>" ? "" : value);

    // onChange 됐는지 안됐는지 react-hook-form에 알려주는 기능!
    trigger("contents");
  };

  return (
    <>
      작성자 : <input type="text" {...register("writer")} /> <br />
      비밀번호 : <input type="passoword" {...register("password")} /> <br />
      제목 : <input type="text" {...register("title")} /> <br />
      내용 : <ReactQuill onChange={handleChange} /> <br />
      <button>등록하기</button>
    </>
  );
}
