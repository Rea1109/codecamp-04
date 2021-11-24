// DB server 연결 connection
import { createConnection, Not } from "typeorm";
import { ApolloServer, gql } from "apollo-server";
import Board from "./Board.mysql";

// apollo server 설정
const myTypeDefs = gql`
  input CreateBoardInput {
    writer: String!
    title: String
    age: Int
  }

  type AAA {
    number: Int
    writer: String
    title: String
    age: Int
  }

  type Query {
    fetchBoards: [AAA]
  }

  type Mutation {
    # 주석처리 createBoard(writer: String, title: String, age: Int): String
    createBoard(createBoardInput: CreateBoardInput!): String
    deleteBoard(number: Int!): String
  }
`;

const myResolvers = {
  Query: {
    fetchBoards: async () => {
      const result = await Board.find({ where: { deletdeAt: null } });
      console.log(result);
      return result;
    },
  },

  Mutation: {
    deleteBoard: async (_: any, args: any) => {
      await Board.update({ number: args.number }, { deletdeAt: new Date() });
      return "게시물이 삭제되었습니다.";
    },
    createBoard: async (_: any, args: any) => {
      // await Board.insert({
      //   title: "안녕하세요 test 입니다.",
      //   writer: "철수",
      //   age: 8,
      // });
      // await Board.insert({
      //   title: args.title,
      //   writer: args.writer,
      //   age: args.age,
      //   ...args
      // });
      await Board.insert({
        // title: args.createBoardInput.title,
        // writer: args.createBoardInput.writer,
        // age: args.createBoardInput.age,
        ...args.createBoardInput,
      });
      return "게시물 등록에 성공하였습니다.";
    },
  },
};

const server = new ApolloServer({
  typeDefs: myTypeDefs,
  resolvers: myResolvers,
});

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
    server.listen({ port: 4000 });
  })
  .catch((error) => {
    console.log(error);
  });
