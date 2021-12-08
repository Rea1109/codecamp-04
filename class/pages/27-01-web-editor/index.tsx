// import ReactQuill from "react-quill";  그냥 임포트
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic"; // next가 지원해주는 다이나믹 임포트

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function WebEditorPage() {
  const handleChange = (value: string) => {
    console.log(value);
  };

  if (process.browser) {
    console.log("This is browser !!");
  } else {
    console.log("This is next.js server !!");
  }

  return (
    <>
      작성자 : <input type="text" /> <br />
      비밀번호 : <input type="passoword" /> <br />
      제목 : <input type="text" /> <br />
      내용 : <ReactQuill onChange={handleChange} /> <br />
      <button>등록하기</button>
    </>
  );
}
