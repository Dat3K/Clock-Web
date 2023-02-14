function a() {
    var seconds = new Date().getSeconds();
    var minutes = new Date().getMinutes();
    var hours = new Date().getHours();
    $(".clock .hand.second").css("--r", seconds * 6);
    $(".clock .hand.minute").css("--r", minutes * 6);
    $(".clock .hand.hour").css("--r", hours * 30);
}
setInterval(a);
setInterval(a, 1000);
