const dateValue = document.querySelector("table");
const date = document.querySelector("#date");
const content = document.querySelector("#content");
const btn = document.querySelector("button");

dateValue.addEventListener("click",function(e) {
    if(e.target.tagName === "P") {
        date.value=e.target.textContent;
        click=e.target.parentNode;
    }
})

function writeSchedule() {
    const div = document.createElement("div");
    div.textContent=content.value;
    click.append(div);
}

dateValue.addEventListener("click",function(e){
    if(e.target.tagName === "DIV") {
        e.target.remove();
    }
})

