//获取当前年份
let year=new Date().getFullYear()
//调用calendar函数，设置cal内容显示年历
document.getElementById("cal").innerHTML=calendar(year)
function setCalendar(year){
    document.getElementById('cal').innerHTML = '<div class="box" id="cal"></div>'
    var year =parseInt(year)
    //设置preyear
    var pre = year-1
    console.log(pre)
    //设置curyear
    var pre=year
    //设置nextyear
    var next = year+1
    console.log(next)
    //设置cal显示年历
 
}