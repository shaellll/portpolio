


/* 프로필 입력 영역입니다  */
let webName = "Web Portfolio"//웹 제목 이름
let myName = "신지혜" // 자기이름
let birthDay = "97.12.25" //생년월일
let mobileNum = "010-2307-3391" //전화번호
let email = "esk3565@naver.com" //email


/* 교육사항 입력영역입니다
데이터 형식은 

[ {
    key : value,
    key : value
}, {
    key : value,
    key : value
}]

의 형태이므로 , 누락되지않게 조심합시다 
"" 는 계속 유지해야합니다.

*/
let education =[
    {
        date : "2011.02",
        name : "예원여자 고등학교 졸업"
    },

    {
        date : "2016.03",
        name : "고신대학교 음악과 입학"
    },
    {
        date : "2020.02",
        name : "고신대학교 졸업"
    },
    {
        date : "2022.08",
        name : "멀티미디어(프리미어,에프터이펙트,3D모션)앱콘텐츠 제작 실무"
    }
]; //education


let work = [
    {
        date : "2016.3",
        name : "세븐일레븐 아르바이트 시작"
    },

    {
        date : "2016.10",
        name : "세븐일레븐 아르바이트 그만둠"
    },
    {
        date : "2020.7",
        name : "갓신 아르바이트 시작"
    },
    {
        date : "2021.1",
        name : "갓신 아르바이트 그만둠"
    }
]//work


/* 스킬 입력영역 */


let skills = [

    {
        name : "Photoshop", //추가할 스킬이름
        icon : "fas fa-magic", // 폰트어썸 아이콘 클래스
        quant : "40", //퍼센테이지
        fontColor : "purple", //글자색상
        bgColor : "plum" //백그라운드 색상
    },
    {
        name : "Illustrator", 
        icon : "fas fa-palette", 
        quant : "50",
        fontColor : "purple",
        bgColor : "plum"
    },
    {
        name : "Web Publishing<br>HTML/css/jQuery",
        icon : "fas fa-code",
        quant : "60",
        fontColor : "purple",
        bgColor : "plum"
    },
    {
        name : "Premiere",
        icon : "fas fa-video", 
        quant : "70",
        fontColor : "purple",
        bgColor : "plum"
    },
    {
        name : "After Effects",
        icon : "fas fa-photo-video",
        quant : "80",
        fontColor : "purple",
        bgColor : "plum" 
    },
    {
        name : "3d Max", 
        icon : "fas fa-cube", 
        quant : "90", 
        fontColor : "purple",
        bgColor : "plum"
    }

];


