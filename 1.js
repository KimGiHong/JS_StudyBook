/*function greeting(){
    document.write("Hello","<br>");
    document.write("welcom","<br>");
}
greeting();


function hello(name, area){
    document.write("Hello "+name,"<br>");
    document.write("welcom to "+area,"<br>");
}
hello("김기홍","korea");
hello("기홍","USA")*/
// var num = 500; //전역번수
// function funcTest() { //지역변수
    
//     function innerFnc(){
//         var num=200;
//         document.write(num, "<br>"); 
//         alert(num);
//     }
//     innerFnc();
// } 
// funcTest();

// document.write(num);
//지역변수를 스코프 밖에서 호출시 적용 X

/*return 문
    값 반환 또는 함수 강제 종료시 사용
*/

// function myFnc(num1, num2) { //return 문 다음에 오면접근 불가`
//     document.write("num1 + num2 =");
//     return num1 + num2;
//     document.write("=== 함수 종료 ==");
// }
// var result = myFnc(100,200);
// document.write(result);

// $(function(){
//     $(".wrap").css("border","1px solid red");
//     $(".wrap p").eq(1).css("background-color","yellow");
//     $(".active").next("p").css("background-color","aqua");
//     $("input[type=text]").css({"background-color":"orange"});
//     $(".wrap p").eq(1).removeClass("active");
//     $(".wrap").append("<p>텍스트2</p>");
// });

$(function(){
    $(".btn1 a").on("click",function() {
        var ts = $(this);
        $(".btn1").next("ul").filter(":visible").hide();
        ts.parent().next().show();
        return false;
    });
});