// DB server 연결 connection
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  database: "mysql",
  host: "34.64.207.239",
  port: 3308,
  username: "root",
  password: "codecamp",
  // @ts-ignore
  entities: [__dirname + "/*.mysql.ts"],
  logging: true,
  synchronize: true,
})
  .then(() => {
    console.log("get Connection !!!");
  })
  .catch((error) => {
    console.log(error);
  });
