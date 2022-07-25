const yourDate = new Date("2022-05-22T00:00:00"),
music = ['noi-nay-co-anh', 'nguoi-am-phu', 'dau-can-mot-bai-ca-tinh-yeu', 'da-lo-yeu-em-nhieu'];
document.addEventListener('DOMContentLoaded', function() {
    var rootTime = document.querySelector("time");
    document.querySelector("date").textContent = "Chúng ta đã bên nhau được " + Math.floor(Math.floor((new Date() - yourDate) / 1000) / 60 / 60 / 24) + " ngày";
    function olock() {
        var today = new Date(),
            hrs = (Math.floor(Math.floor((today - yourDate) / 1000) / 60 / 60)) % 24,
            min = (Math.floor(Math.floor((today - yourDate) / 1000) / 60)) % 60,
            sec = Math.floor((today - yourDate) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    }
    olock();
    var timer = setInterval(function() {
        olock()
    }, 1000);
    // Thay đổi link ramdom bài hát tại đây
}, false);



$(window).load(function () {
    setTimeout(function () {
        $(".spinner").fadeOut("slow");
        setTimeout(function () {
            $("#loader").fadeOut("slow")
        }, 1000)
    }, 1000)
});

