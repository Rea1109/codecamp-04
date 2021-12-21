import Head from "next/head";

export default function BoardsPage() {
  return (
    <>
      <Head>
        <meta property="og:title" content="나만의 사이트 게시판" />
        <meta property="og:url" content="http://rea-freemarket.shop" />
        <meta
          property="og:image"
          content="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-Usdzm0S1rsLukNu05STF42ROIm282eJYA&usqp=CAU"
        />
        <meta property="og:description" content="안녕하세요 환영합니다." />
      </Head>
      <div> 안녕하세요 게시판 입니다.</div>
    </>
  );
}
