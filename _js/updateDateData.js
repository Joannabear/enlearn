function conert2MonthName(month)    {
  switch(month){
      case 0: return "January";
      case 1: return "February";
      case 2: return "March";
      case 3: return "April";
      case 4: return "May";
      case 5: return "June";
      case 6: return "July";
      case 7: return "August";
      case 8: return "September";
      case 9: return "October";
      case 10: return "November";
      case 11: return "December";
  }
}
var date = new Date(); //星期幾, 0~6
var year = date.getFullYear();
var month = date.getMonth();
function updateDateData(){
  document.getElementById("cal-year").innerHTML  = date.getFullYear();
//  document.getElementById("cul-year").innerHTML  = date.getFullYear();
  document.getElementById("cal-month").innerHTML  = conert2MonthName(date.getMonth());
//  document.getElementById("cul-month").innerHTML  = date.getMonth()+1;
  fillInMonth(year, month);
}

function fillInNextMonth(){
    month++;
    if(month==12){
        year++;
        month = 0;
    }
    fillInMonth(year, month);
    document.getElementById("cal-year").innerHTML  = year;
    document.getElementById("cal-month").innerHTML  = conert2MonthName(month);
//    document.getElementById("cul-year").innerHTML  = year;
//    document.getElementById("cul-month").innerHTML  = month+1;
}

function fillInPreviousMonth(){
    month--;
    if(month==-1){
        year--;
        month = 11;
    }
    fillInMonth(year, month);
    document.getElementById("cal-year").innerHTML  = year;
    document.getElementById("cal-month").innerHTML  = conert2MonthName(month);
//    document.getElementById("cul-year").innerHTML  = year;
//    document.getElementById("cul-month").innerHTML  = month+1;
}

function fillInMonth(year, month){
  let days = document.getElementsByTagName("td"); //將td標籤放入days物件集合中
  date = new Date(year, month, 1);
  weekDay = date.getDay(); //計算出今年今月1日是星期幾…
  var monthDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; //每個月的天數
  if ( ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0) ) monthDays[1] = 29; //閏年2月是29天
    
  for (var i = 0; i <= 41; i++){
    if (days[i].classList.contains("color")) days[i].classList.remove("color");
  }//清除上下月color
    
  for (var i=weekDay, j=1; j <= monthDays[month]; i++, j++){
    days[i].innerHTML = j;
  }//這個月的日期
    
  let prevMonth = month-1;
  if(prevMonth == -1) prevMonth = 11;
    
  for (var i = (weekDay-1), day = monthDays[prevMonth]; i >=0; i--, day--){
    days[i].innerHTML = day;
    days[i].classList.add("color");//非本月背景
  }//上個月的日期
  for (var i = (weekDay+monthDays[month]), day = 1; i <days.length; i++, day++){
    days[i].innerHTML = day;
    days[i].classList.add("color");//非本月背景
  }//下個月的日期
  if (document.getElementById("current-day")) {
      document.getElementById("current-day").removeAttribute("id");
  }//處理今日元素表格的顯著背景設定
  date = new Date();
  current_date = date.getDate();
  if(year == date.getFullYear() && month == date.getMonth()){
    days[weekDay + current_date - 1].setAttribute("id", "current-day");  
  }
}

document.onkeydown = function(e) {
    switch (e.keyCode) {
        case 37: fillInPreviousMonth(); break;
        case 39: fillInNextMonth(); break;
    }
};


