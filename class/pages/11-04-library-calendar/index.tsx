// import styled from "@emotion/styled";
import { DatePicker, Card } from "antd";
import { useState } from "react";

export default function LibraryCalendar() {
  const [date, setDate] = useState("");

  const onChange = (date: any, dateString: any) => {
    setDate(dateString);
  };

  return (
    <>
      <DatePicker onChange={onChange} />
      {date}
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://images.unsplash.com/photo-1633113215792-b50572729907?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80"
            style={{ height: "200px" }}
          />
          // <div style={{ backgroundColor: "yellow" }}>asdf</div>
        }
      >
        title <br />
        content
      </Card>
    </>
  );
}
