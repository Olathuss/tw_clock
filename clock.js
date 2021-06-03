// START CLOCK SCRIPT

Number.prototype.pad = function(n) {
  for (var r = this.toString(); r.length < n; r = 0 + r);
  return r;
};

function insertClock() {
    let table = document.querySelector("#contentContainer");
    if(table) {
        var clock = create('<div id="timedate"><a id="mon">January</a><a id="d">1</a>,<a id="y">0</a><br /><a id="h">12</a>:<a id="m">00</a>:<a id="s">00</a>:    <a id="mi">000</a>');
        let tablebody = table.childNodes[1];
        //let tr = document.createElement("tr");
        //tr.id = "myclock";
        tablebody.insertBefore(clock, table.childNodes[0]);
        
        //let td = document.createElement("td");
        //td.id = "mycontent";
        //td.className = "blah";
        //tr.appendChild(td);
        //return td;
    }
}

function updateClock() {
  var now = new Date();
  var milli = now.getMilliseconds(),
    sec = now.getSeconds(),
    min = now.getMinutes(),
    hou = now.getHours(),
    mo = now.getMonth(),
    dy = now.getDate(),
    yr = now.getFullYear();
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  var tags = ["mon", "d", "y", "h", "m", "s", "mi"],
    corr = [months[mo], dy, yr, hou.pad(2), min.pad(2), sec.pad(2), milli];
  for (var i = 0; i < tags.length; i++)
    document.getElementById(tags[i]).firstChild.nodeValue = corr[i];
}

function initClock() {
  insertClock();
  //updateClock();
  //window.setInterval("updateClock()", 1);
}

initClock();

// END CLOCK SCRIPT
