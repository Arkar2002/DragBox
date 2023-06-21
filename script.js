const getContainer = document.querySelector(".container");
const getResetBtn = document.getElementById("reset");

getResetBtn.onclick = resetbtn;

dragBox(getContainer);

function dragBox(getEle) {

    if (getEle) {
    
        let getCx, getCy, setCx, setCy;
        getEle.onmousedown = mouseDown;

        function mouseDown(e) {
            getCx = e.clientX;
            getCy = e.clientY;

            document.onmousemove = dragNow;
            document.onmouseup = stopDrag;

            function dragNow(e) {

                setCx = getCx - e.clientX;
                setCy = getCy - e.clientY;

                getCx = e.clientX;
                getCy = e.clientY;

                const eleLeft = getEle.offsetLeft;
                const eleTop = getEle.offsetTop;

                getContainer.style.left = (eleLeft - setCx) + "px";
                getContainer.style.top = (eleTop - setCy) + "px";
            }

            function stopDrag() {
                document.onmousemove = null;
                document.onmouseup = null;
            }
        }

    }

}

function resetbtn() {
    getContainer.style.left = 50 + "%";
    getContainer.style.top = 50 + "%";
}