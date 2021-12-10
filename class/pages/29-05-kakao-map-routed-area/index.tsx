import { useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

export default function KakaoMaPageRouted() {
  useEffect(() => {
    const script = document.createElement("script"); // <script></script> 만들기
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=cf3787403995010d7263a715122de059"; // script 의 src 추가
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        // v3가 모두 로드된 후, 이 콜백 함수가 실행됩니다.
        const container = document.getElementById("map"); // 지도를 담을 영역의 DOM 레퍼런스
        const options = {
          // 지도를 생성할 때 필요한 기본 옵션
          center: new window.kakao.maps.LatLng(37.483974, 126.898263), // 지도의 중심좌표.
          level: 3, // 지도의 레벨(확대, 축소 정도)
        };
        const map = new window.kakao.maps.Map(container, options);

        const polygonPath = [
          new window.kakao.maps.LatLng(37.484071, 126.898103),
          new window.kakao.maps.LatLng(37.483893, 126.898081),
          new window.kakao.maps.LatLng(37.483867, 126.898373),
          new window.kakao.maps.LatLng(37.483895, 126.898389),
          new window.kakao.maps.LatLng(37.483891, 126.898424),
          new window.kakao.maps.LatLng(37.483872, 126.898451),
          new window.kakao.maps.LatLng(37.483878, 126.898497),
          new window.kakao.maps.LatLng(37.483938, 126.898508),
          new window.kakao.maps.LatLng(37.48401, 126.898481),
          new window.kakao.maps.LatLng(37.483999, 126.898435),
          new window.kakao.maps.LatLng(37.484037, 126.898435),
          new window.kakao.maps.LatLng(37.484065, 126.898263),
        ];

        // 지도에 표시할 다각형을 생성합니다
        const polygon = new window.kakao.maps.Polygon({
          path: polygonPath, // 그려질 다각형의 좌표 배열입니다
          strokeWeight: 3, // 선의 두께입니다
          strokeColor: "#39DE2A", // 선의 색깔입니다
          strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
          strokeStyle: "solid", // 선의 스타일입니다
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        });

        // 지도에 다각형을 표시합니다
        polygon.setMap(map);

        // 다각형에 마우스오버 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoverOption = {
          fillColor: "#EFFFED", // 채우기 색깔입니다
          fillOpacity: 0.8, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스아웃 이벤트가 발생했을 때 변경할 채우기 옵션입니다
        const mouseoutOption = {
          fillColor: "#A2FF99", // 채우기 색깔입니다
          fillOpacity: 0.7, // 채우기 불투명도 입니다
        };

        // 다각형에 마우스오버 이벤트를 등록합니다
        window.kakao.maps.event.addListener(polygon, "mouseover", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoverOption);
        });

        window.kakao.maps.event.addListener(polygon, "mouseout", function () {
          // 다각형의 채우기 옵션을 변경합니다
          polygon.setOptions(mouseoutOption);
        });
      });
    };
  }, []);

  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
