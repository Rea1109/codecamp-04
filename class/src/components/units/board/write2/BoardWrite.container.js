import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const router = useRouter();

  const [myWriter, setMyWriter] = useState("");
  const [myTitle, setMyTitle] = useState("");
  const [myContents, setMyContents] = useState("");
  const [myChange, setMyChange] = useState(true);
  const [createBoard] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);

  // event handler function
  const onChangeMyWriter = (e) => {
    setMyWriter(e.target.value);
    if (e.target.value !== "" && myTitle !== "" && myContents !== "") {
      setMyChange(false);
    } else {
      setMyChange(true);
    }
  };

  const onChangeMyTitle = (e) => {
    setMyTitle(e.target.value);
    if (e.target.value !== "" && myWriter !== "" && myContents !== "") {
      setMyChange(false);
    } else {
      setMyChange(true);
    }
  };

  const onChangeMyContents = (e) => {
    setMyContents(e.target.value);
    if (e.target.value !== "" && myWriter !== "" && myTitle !== "") {
      setMyChange(false);
    } else {
      setMyChange(true);
    }
  };

  const addBoard = async () => {
    alert("등록하기");
    const result = await createBoard({
      variables: { writer: myWriter, title: myTitle, contents: myContents },
    });
    console.log(result);
    router.push(`/08-06-boards/${result.data.createBoard.number}`);
  };

  const editBoard = async () => {
    alert("수정하기");
    await updateBoard({
      variables: {
        number: Number(router.query.myNumber),
        writer: myWriter,
        title: myTitle,
        contents: myContents,
      },
    });
    router.push(`/08-06-boards/${router.query.myNumber}`);
  };

  return (
    <BoardWriteUI
      onChangeMyWriter={onChangeMyWriter}
      onChangeMyTitle={onChangeMyTitle}
      onChangeMyContents={onChangeMyContents}
      addBoard={addBoard}
      editBoard={editBoard}
      myChange={myChange}
      isEdit={props.isEdit}
    />
  );
}
