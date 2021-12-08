const BrowserStoragePage = () => {
  const onClickSetCookie = () => {
    document.cookie = "aaa=철수";
  };
  const onClickSetLocalStorage = () => {
    localStorage.setItem("bbb", "영희");
  };
  const onClickSetSessionStorage = () => {
    sessionStorage.setItem("ccc", "훈이");
  };

  const onClickGetCookie = () => {
    const mycookie = document.cookie;
    console.log(mycookie);
    const zzz = mycookie.split("; ").filter((el) => el.startsWith("zzz="))[0];
    console.log(zzz.split("=")[1]);
  };
  const onClickGetLocalStorage = () => {
    const bbb = localStorage.getItem("bbb");
    console.log(bbb);
  };
  const onClickGetSessionStorage = () => {
    const ccc = sessionStorage.getItem("ccc");
    console.log(ccc);
  };

  return (
    <>
      <button onClick={onClickSetCookie}>쿠키에 저장하기</button>
      <button onClick={onClickSetLocalStorage}>로컬 스토리지에 저장하기</button>
      <button onClick={onClickSetSessionStorage}>
        세션 스토리지에 저장하기
      </button>
      <br />
      ======================================
      <br />
      <button onClick={onClickGetCookie}>쿠키에 있는 값 가져오기</button>
      <button onClick={onClickGetLocalStorage}>
        로컬 스토리지에 있는 값 가져오기
      </button>
      <button onClick={onClickGetSessionStorage}>
        세셔 스토리지에 있는 값 가져오기
      </button>
    </>
  );
};

export default BrowserStoragePage;
