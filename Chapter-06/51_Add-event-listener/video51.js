const element = document.getElementById("myBtn");
console.log(element);

const haneleClick = () => {
    console.log("You clicked a button");
}

element.addEventListener("click", haneleClick);
