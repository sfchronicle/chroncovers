var month = document.getElementById('month');
  var months = ["Jan","Feb","March","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
  var day = document.getElementById('day');
  var days = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  var e28 = document.getElementsByClassName('d-28');
  var e30 = document.getElementById('d-30');
  var m30 = document.getElementsByClassName('m-30');
  
  /* replots all of the things */
  function replot() {
    for (var i = 0; i < months.length; i++) {
      var replot = document.getElementsByClassName(months[i]);
      for (var l = 0; l < replot.length; l++) {
        replot[l].style.display = "block";
      }
    }
  }

  /* replots all of the months so you can filter through them again */
  function replotMonth() {
    var replot = document.getElementsByClassName(month.value);
    for (var l = 0; l < replot.length; l++) {
      if (day.value == "") {
        replot[l].style.display = "block";
      }
      else if (replot[l].classList.contains(day.value)) {
        replot[l].style.display = "block";
      }
    }
  }

  /* replots all of the days so you can filter through them again */
  function replotDay() {
    var replot = document.getElementsByClassName(day.value);
    for (var l = 0; l < replot.length; l++) {
      if (month.value == "") {
        replot[l].style.display = "block";
      }
      else if (replot[l].classList.contains(month.value)) {
        replot[l].style.display = "block";
      }
    }
  }

  /* what hapens when you change the month */
  function monthChange() {
    /* be careful if editing the order on this */
    if (month.value == "Feb") {
      for (var i = 0; i < e28.length; i++) {
        e28[i].disabled = true;
      }
    }
    else if (month.value == "Sept" || month.value == "April" || month.value == "June" || month.value == "Nov") {
      e30.disabled = true;
    }
    else {
      for (var i = 0; i < e28.length; i++) {
        e28[i].disabled = false;
      }
      e30.disabled = false;
    }

    for (var i = 0; i < e28.length; i++) {
      if (month.value == "Feb") {
        e28[i].disabled = true;
      }
      else {
        e28[i].disabled = false;
      }
    }

    if (day.value == "") {
      replot();
      for (var i = 0; i < months.length; i++) {
        if (month.value != "") {
          if (month.value != months[i]) {
            var disappear = document.getElementsByClassName(months[i]);
            for (var j = 0; j < disappear.length; j++ ) {
              disappear[j].style.display = "none";
            }
          }
        }
        else {
          replot();
        }
      }
    }
    else {
      if (month.value != "") {
        replotMonth();
        for (var i = 0; i < months.length; i++) {
          if (month.value != months[i]) {
            var disappear = document.getElementsByClassName(months[i]);
            for (var j = 0; j < disappear.length; j++ ) {
              disappear[j].style.display = "none";
            }
          }
        }
      }
      else {
        replotDay();
      }
    }
  }

  /* what happens when you change the day */
  function dayChange() {
    for (var i = 0; i < m30.length; i++) {
      if (day.value == "31") {
        m30[i].disabled = true;
      }
      else {
        m30[i].disabled = false;
      }
    }

    if (day.value == "30" || day.value == "31") {
      document.getElementById('feb').disabled = true;
    }
    else {
      document.getElementById('feb').disabled = false;      
    }

    /* if no month is set ... */
    if (month.value == "") {
      /* replot the entire thing */
      replot();
      for (var i = 0; i < days.length; i++) {
        /* if the date is set ... */
        if (day.value != "") {
          /* go through the array of days and find ones that don't match */
          if (day.value != days[i]) {
            /* create an array of those bc they need to go */
            var disappear = document.getElementsByClassName(days[i]);
            /* and they're gone */
            for (var j = 0; j < disappear.length; j++ ) {
              disappear[j].style.display = "none";
            }
          }
        }
        else {
          /* if the date is not set, replot everything */
          replot();
        }
      }
    }
    /* if a month is set ... */
    else {
      /* and there is a date set ... */
      if (day.value != "") {
        /* replot all of the days to filter through them all */
        replotDay();
        for (var i = 0; i < days.length; i++) {
          /* find which days are not the set date */
          if (day.value != days[i] ) {
            /* and get rid of them */
            var disappear = document.getElementsByClassName(days[i]);
            for (var j = 0; j < disappear.length; j++ ) {
              disappear[j].style.display = "none";
            }
          }
        }
      }
      else {
        replotMonth();
      }
    }
  }



var jsonURL = "http://extras.sfgate.com/editorial/chroncovers/chroncovers.json?" + (new Date()).getTime();

$.getJSON( jsonURL, function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push( "<div class='column chroncovers " + val.month + "\u0020" + val.day + "' style='display:" + val.display + "'>" +
            "<a href='" + val.url + "'>" +
            "<div class='img-wrapper'><img class='thumbnail' src='http://ww1.hdnux.com/photos/43/13/44/" + val.imageid + "/7/460x1240.jpg" + "' /></div>" +
            "<p><span class='date'>" + val.month + ". " + val.day + ", " + val.orig_year + ":</span> " +
            val.headline + "</p>" + "</a>" +
        "</div>");
  });
 
  $( "<div/>", {
    "class": "row small-up-2 medium-up-4 large-up-5",
    html: items.reverse().join( "" )
  }).appendTo( "#covers" );
});



var d = new Date();
n = d.getMonth()
var monthy = new Array();
monthy[0] = "Jan";
monthy[1] = "Feb";
monthy[2] = "March";
monthy[3] = "Apr";
monthy[4] = "May";
monthy[5] = "Jun";
monthy[6] = "Jul";
monthy[7] = "Aug";
monthy[8] = "Sep";
monthy[9] = "Oct";
monthy[10] = "Nov";
monthy[11] = "Dec";
var currentMonth = monthy[d.getMonth()];


var monthindex;


function setSelectedIndex(s, i) {
    s.options[i+1].selected = true;
}

    if (n < 12) {
        setSelectedIndex(document.getElementById("month"),n);
    }
    
    else if (n > 12) {        
        // do nothing
    }
  
  var list = document.getElementsByClassName(currentMonth);
  for (monthindex = 0; monthindex < list.length; ++monthindex) {
      list[monthindex].style.display ="block";
  }


