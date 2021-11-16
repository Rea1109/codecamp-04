import { useState } from "react";
import { Rate } from "antd";

export default function LibraryStarPage() {
  const [value, setValue] = useState(2);

  const handleChange = (value: number) => {
    setValue(value);
  };

  return (
    <span>
      <Rate onChange={handleChange} value={value} />
      <div>{value}</div>
    </span>
  );
}
