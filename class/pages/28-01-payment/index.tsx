import Head from "next/head";

export default function PaymentPage() {
  const onClickPayment = () => {
    const IMP = window.IMP; // 생략 가능
    // IMP.init("imp01706761"); // 개인 key
    IMP.init("imp49910675"); // 코드캠프 key , 백엔드에서 impUid 검증해야 하기 때문에
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "노르웨이 회전 의자",
        amount: 100,
        buyer_email: "gildong@gmail.com",
        buyer_name: "강재연",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 뉴욕",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 환경일 경우 redirect 주소 적어주기 , 이경우 웹훅 노티피케이션 (우리가 만드는 rest api) 설정
      },
      (rsp) => {
        // callback
        if (rsp.success) {
          // 결제 성공시
          console.log(rsp);

          // createPointTransactionOfLoading 뮤테이션 실행, impUid 넘기기
        } else {
          // 결제 실패시
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      결제금액: <input type="text" />
      <button onClick={onClickPayment}>결제하기</button>
    </>
  );
}
