export default function HelloLetPage() {

    function change() {
        document.getElementById("hello").innerText = "bye"
    }

    return(
        <> 
            <div id="hello">hello</div>
            <button onClick={change}>click</button>
        </>
    )

}