import { createContext } from "react";
import MyBoardWrite from "../../src/components/units/21-context-api/MyBoardWrite.container";

export const MyContext = createContext(null);
const myValue = {
  isEdit: true,
};

export default function ContextAPIPage() {
  return (
    <MyContext.Provider value={myValue}>
      <MyBoardWrite />
    </MyContext.Provider>
  );
}
