export default function CounterLetPage() {
  function change() {
    const number = Number(document.getElementById("num").innerText) + 1;

    document.getElementById("num").innerText = number;
  }

  return (
    <>
      <div id="num">0</div>
      <button onClick={change}>+</button>
    </>
  );
}
