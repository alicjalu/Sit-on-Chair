document.addEventListener("DOMContentLoaded",function(){

    // menu dropdown

    var dropDown = document.querySelector(".dropdown__trigger");
    var dropDownMenu = document.querySelector(".dropdown__menu");


    dropDown.addEventListener("mouseover", function (){
        dropDownMenu.style.display = "block";
    })

    dropDownMenu.addEventListener("mouseout", function(){
        dropDownMenu.style.display="none";
    })


    // slider

    var prev = document.querySelector(".prev");
    var next = document.querySelector(".next");
    var ul = document.querySelector(".main__slider__photo ul");
    var li = document.querySelectorAll(".main__slider__photo li");

    var index = 0;

    li[index].classList.add("visible");

    next.addEventListener("click", function(){
        li[index].classList.remove("visible");
        index++;
        if(index >= li.length){
            index = 0;
        }
        li[index].classList.add("visible");
    })

    prev.addEventListener("click", function (){
        li[index].classList.remove("visible");
        index--;
        if(index < 0){
            index = li.length - 1;
        }
        li[index].classList.add("visible");
    })


    // no title

    var chairPic1 = document.querySelector(".chair__pic1");
    var chairPic1Title = document.querySelector(".chair__pic1__title");

    chairPic1.addEventListener("mouseover", function(){

        chairPic1Title.style.display = "none";

    });

    chairPic1.addEventListener("mouseout", function(){
        chairPic1Title.style.display = "block";

    })

    var chairPic2 = document.querySelector(".chair__pic2");
    var chairPic2Title = document.querySelector(".chair__pic2__title");

    chairPic2.addEventListener("mouseover", function(){

        chairPic2Title.style.display = "none";

    });

    chairPic2.addEventListener("mouseout", function(){
        chairPic2Title.style.display = "block";

    })


});