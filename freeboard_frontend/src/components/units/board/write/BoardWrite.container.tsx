import { useRouter } from "next/router";
import { useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import BoardWriteUI from "./BoardWrite.presenter";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { IBoardWriteProps, IUpdateBoardInput } from "./BoardWrite.types";
import {
  IMutation,
  IMutationCreateBoardArgs,
  IMutationUpdateBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";

declare const window: Window &
  typeof globalThis & {
    daum: any;
  };

export default function BoardWrite(props: IBoardWriteProps) {
  const router = useRouter();

  const [createBoard] = useMutation<
    Pick<IMutation, "createBoard">,
    IMutationCreateBoardArgs
  >(CREATE_BOARD);
  const [updateBoard] = useMutation<
    Pick<IMutation, "updateBoard">,
    IMutationUpdateBoardArgs
  >(UPDATE_BOARD);

  const [writer, setWriter] = useState("");
  const [password, setPassword] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [youtubeUrl, setYoutubeUrl] = useState("");

  const [errorWriter, setErrorWriter] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorTitle, setErrorTitle] = useState("");
  const [errorContent, setErrorContent] = useState("");
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [addressDetail, setAddressDetail] = useState("");

  const onChangeWriter = (e: ChangeEvent<HTMLInputElement>) => {
    setWriter(e.target.value);
    if (e.target.value !== "") {
      setErrorWriter("");
    } else {
      setErrorWriter("작성자를 입력해주세요");
    }
  };

  const onChangePassword = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value !== "") {
      setErrorPassword("");
    } else {
      setErrorPassword("비밀번호를 입력해주세요");
    }
  };

  const onChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    if (e.target.value !== "") {
      setErrorTitle("");
    } else {
      setErrorTitle("제목을 입력해주세요");
    }
  };

  const onChangeContent = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
    if (e.target.value !== "") {
      setErrorContent("");
    } else {
      setErrorContent("내용을 입력해주세요");
    }
  };

  const onChangeAddr = (e: ChangeEvent<HTMLInputElement>) =>
    setAddressDetail(e.target.value);

  const onChangeYoutube = (e: ChangeEvent<HTMLInputElement>) =>
    setYoutubeUrl(e.target.value);

  const check = () => {
    let isCheck = true;

    if (writer === "") {
      setErrorWriter("작성자를 입력해주세요");
      isCheck = false;
    }

    if (password === "") {
      setErrorPassword("비밀번호를 입력해주세요");
      isCheck = false;
    }

    if (title === "") {
      setErrorTitle("제목을 입력해주세요");
      isCheck = false;
    }

    if (content === "") {
      setErrorContent("내용을 입력해주세요");
      isCheck = false;
    }

    return isCheck;
  };

  const addBoard = async () => {
    if (check()) {
      try {
        const result = await createBoard({
          variables: {
            createBoardInput: {
              writer,
              password,
              title,
              contents: content,
              youtubeUrl,
              boardAddress: {
                zipcode,
                address,
                addressDetail,
              },
            },
          },
        });
        Modal.success({ title: "게시물 등록이 완료 되었습니다." });
        router.push(`/boards/${result.data?.createBoard._id}`);
      } catch (error: any) {
        console.log(error.message);
        Modal.error({ title: "error.message" });
      }
    }
  };

  const editBoard = async () => {
    const boardAddress = {};
    const updateBoardInput: IUpdateBoardInput = {};
    if (!title && !content && !youtubeUrl && !zipcode) {
      Modal.warning({ title: "수정 내용이 없습니다." });
      return;
    }

    if (title) updateBoardInput.title = title;
    if (content) updateBoardInput.contents = content;
    if (youtubeUrl) updateBoardInput.youtubeUrl = youtubeUrl;

    if (zipcode) {
      updateBoardInput.boardAddress = boardAddress;

      if (zipcode) updateBoardInput.boardAddress.zipcode = zipcode;
      if (address) updateBoardInput.boardAddress.address = address;
      if (addressDetail)
        updateBoardInput.boardAddress.addressDetail = addressDetail;
    }

    try {
      const result = await updateBoard({
        variables: {
          boardId: String(router.query.boardId),
          password: password,
          updateBoardInput: updateBoardInput,
        },
      });

      Modal.success({ title: "게시물 수정이 완료 되었습니다." });
      console.log(result);
      router.push(`/boards/${result.data?.updateBoard._id}`);
    } catch (error: any) {
      console.log(error.message);
      Modal.error({ title: error.message });
    }
  };

  // 다음 우편 API
  const getAddr = () => {
    new window.daum.Postcode({
      oncomplete: function (data: any) {
        let addr = ""; // 주소 변수
        let extraAddr = ""; // 참고항목 변수

        if (data.userSelectedType === "R") {
          addr = data.roadAddress;
        } else {
          addr = data.jibunAddress;
        }

        if (data.userSelectedType === "R") {
          if (data.bname !== "" && /[동|로|가]$/g.test(data.bname)) {
            extraAddr += data.bname;
          }
          if (data.buildingName !== "" && data.apartment === "Y") {
            extraAddr +=
              extraAddr !== "" ? ", " + data.buildingName : data.buildingName;
          }
          if (extraAddr !== "") {
            extraAddr = " (" + extraAddr + ")";
          }
        }
        setZipcode(data.zonecode);
        setAddress(addr);
        document.getElementById("extraAddr")?.focus();
      },
    }).open();
  };

  return (
    <BoardWriteUI
      onChangeWriter={onChangeWriter}
      onChangePassword={onChangePassword}
      onChangeTitle={onChangeTitle}
      onChangeContent={onChangeContent}
      onChangeYoutube={onChangeYoutube}
      addBoard={addBoard}
      editBoard={editBoard}
      getBoard={() => router.push(`/boards/${router.query.boardId}`)}
      errorWriter={errorWriter}
      errorPassword={errorPassword}
      errorTitle={errorTitle}
      errorContent={errorContent}
      isEdit={props.isEdit}
      getAddr={getAddr}
      onChangeAddr={onChangeAddr}
      address={address}
      zipcode={zipcode}
      data={props.data}
    />
  );
}
