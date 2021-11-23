/* eslint-disable */

$(function(){

    $(".subMenu li").mouseover(function(){
        $(this).children("a").css({"color":"#fff"});
    });

    $(".subMenu li").mouseout(function(){
        $(this).children("a").css({"color":"#000"});
    });

    /* GNB 메뉴 시작 */
    $("li.mainLi").mouseover(function(){
        $("ul.subMenu").show();
        $("div#gnbBGFrame").show();
    });

    $("li.mainLi").mouseout(function(){
        $("ul.subMenu").hide();
        $("div#gnbBGFrame").hide();
    });

    $("div#gnbBGFrame").mouseover(function(){
        $("ul.subMenu").show();
        $("div#gnbBGFrame").show();
    });

    $("div#gnbBGFrame").mouseout(function(){
        $("ul.subMenu").hide();
        $("div#gnbBGFrame").hide();
    });

    $(".subMenu li").mouseover(function(){
        let a = $(this).children("a").text();
        console.log(a);
        if(a == ""){
            $(this).css({"background-color":"#fff"});
        } else {
            $(this).css({"background-color":"#f56254"});
        }
    });

    $(".subMenu li").mouseout(function(){
       $(this).css({"background-color":"#fff"});
    });
    /* GNB 메뉴 끝 */


    /* 주소 검색 시작 */
    $("input#searchWord").keyup(function(){

        var txt = $("input#searchWord").val();  // 변수 : 값을 저장
        // txt에 저장된 값이 비어있는 공백( = "" )이 아니라면
        // 제이쿼리의 CSS를 사용하여 X 기호를 표시하세요.

        if (txt == "") {   // 텍스트박스의 값이 공백이라면
            $("span#closeMark").css({ "visibility": "hidden" });
                                // "X" 기호를 숨겨주세요
        }

        if (txt != "")  {   // 텍스트박스의 값이 공백이 아니라면
            $("span#closeMark").css({ "visibility": "visible" });
                                // "X" 기호를 표시해주세요
        }


    });     // 2차 기능
    /* 주소 검색 끝 */


    /* 검색 내용 제거(closeMark 버튼) 시작 */
        // 1차기능 => closeMark 클릭
        // 2차기능 => 텍스트박스(input type="text") 내용 제거
    $("span#closeMark").click(function(){

        $("input#searchWord").val("");

        $(this).css({"visibility": "hidden"});
        // 1차기능에서 선택자로 지정된 항목이
        // 추가기능에서 동일하게 지정할 때
        // this 선택자를 사용한다.

    });
    /* 검색 내용 제거(closeMark 버튼) 끝 */


    /* 검색창 실행 유효성검사 시작 */
        // 검색창이 공백일 때 검색 실행 버튼을 누르면
        // 경고창을 발생하여 내용을 입력하게 만든다.
        // 이렇게 사용자에게 올바른 행동을 유도하는
        // 코드를 작성하는 것을 "JS 유효성 검사"라고 한다.
        //                      Validation 밸리데이션(=유효성)

    $("span#searchMark").click(function(){

        var txt = $("input#searchWord").val();
        // 변수  => 텍스트박스의 입력값이 임시 저장되어 있음

        if (txt == "") {   // if조건식 또는 if조건문
            alert("검색어을(를) 입력해주세요!");
        }

        if (txt != "") {   // 검색어가 공백이 아니라면 데이터 전송
            $("form").submit();
        }



        // 텍스트박스에 포커스 설정하기
        // $("선택자").포커스설정기능(); => 해당메서드 .focus()
        $("input#searchWord").focus();

    });      /* 검색창 실행 유효성검사 끝 */

    

    /* 도로명 주소 클래스 속성 추가/제거 ul#jusoItem>li */ 
    $("ul#jusoItem>li").click(function (){
        $("ul#jusoItem>li").removeClass("selected");
        $(this).addClass("selected");
    });
    

    
    
    /* contents 영역 알림판 슬라이드 쇼 */
    var token = false;
    var rotationChk = setInterval(fnNoticeSlide, 4000);
    
    function fnNoticeSlide(){
        
        if(token == false){
            
            $("#noticeControl>span").removeClass("noticeSelected");
            $("#noticeControl>span").eq(1).addClass("noticeSelected");
            
            $("#shuttleFrame2").animate(
                {"margin-left" : "-285px"},
                200,
                function (){
                    token = true;
                }
            );
        }
        else {
            
            $("#noticeControl>span").removeClass("noticeSelected");
            $("#noticeControl>span").eq(0).addClass("noticeSelected");
            
            $("#shuttleFrame2").animate(
                {"margin-left" : "0px"},
                200,
                function (){
                    token = false;
                }
            );
        }
    }

    
    var animToken = false;
    
    $("#noticeControl>img").click(function (){
        if(animToken == false) {
            $(this).attr("src", "images/btn_play.gif");  // 일시중지
            animToken = true;
            clearInterval(rotationChk);
        }
        else {
            $(this).attr("src", "images/btn_ps.gif");    // 재생
            animToken = false;
            rotationChk = setInterval(fnNoticeSlide, 4000);
        }
    });
    
    
});   // 제이쿼리 템플릿코드





