let counter = document.querySelector("#counter");
let minus = document.querySelector("#minus");
let plus = document.querySelector("#plus");
let pause = document.querySelector("#pause")
let heart = document.querySelector("#heart");
let submit = document.querySelector("#submit")

let timerId;

let count = 0;
let savedCount = 0;

let timer = () => {
    timerId = setInterval(()=>{
        count++;
        counter.innerHTML = count;
    }, 1000);
}
timer();

minus.addEventListener("click",()=>{
    count--;
    counter.innerHTML = count;
})

plus.addEventListener("click",()=>{
    count++;
    counter.innerHTML = count;
})

pause.addEventListener("click",()=>{
    if(pause.innerHTML === "pause"){
        pause.innerHTML = "resume";
        clearInterval(timerId);
        countSaved = count;
        minus.disabled = true;
        plus.disabled = true;
        heart.disabled = true;
        submit.disabled = true;
    } else {
        pause.innerHTML = "pause";
        count = countSaved;
        timer();
        minus.disabled = false;
        plus.disabled = false;
        heart.disabled = false;
        submit.disabled = false;
    }
})

//let likes = {};
// heart.addEventListener("click",()=>{
//     if(likes[count]){
//         likes[count]++;
//         let updateLi = document.querySelector(".likes li:last-child")
//         updateLi.innerHTML = `${count} has been liked ${likes[count]} times!`
//     } else {
//         likes[count] = 1;
//         let li = document.createElement("li")
//         li.innerHTML = `${count} has been liked ${likes[count]} time!`
//         document.querySelector(".likes").appendChild(li)
//     }
// })//code using object

heart.addEventListener("click",()=>{
    let li = document.querySelector(`li[data-count='${count}']`);
    if (li){
        let numLikes = parseInt(li.getAttribute("data-name")) + 1; 
        li.setAttribute("data-name", numLikes)
        li.innerHTML = `${count} has been liked ${numLikes} times!`;
    }else{
        let li = document.createElement("li");
        li.setAttribute("data-count",count);
        li.setAttribute("data-name",1);
        li.innerHTML = `${count} has been liked 1 time!`
        document.querySelector(".likes").appendChild(li)
    }
})//code using data-attribute

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    let p = document.createElement("p");
    let input = document.querySelector("#comment-input");
    p.innerHTML = input.value;
    document.querySelector(".comments").appendChild(p)
})

