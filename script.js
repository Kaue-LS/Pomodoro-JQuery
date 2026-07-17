$(document).ready(function () {
    var pomodoroTimeDefault = 25
    var shortBreakTimeDefault = 5
    var longBreakTimeDefault = 15
    var minutes = 0
    var seconds = 0



    // UPDATE TIMER
    function updateTimer(timer) {
        minutes = timer
        console.log(minutes, pomodoroTimeDefault)

        $("#timerDisplay").val(updateMinutes(timer) + ":" + updateSeconds(seconds));
        console.log("update")
    }
    function updateSeconds(seconds) {
        if (seconds >= 0 && seconds <= 10) {
            return seconds + "0"
        }
        else {
            return seconds
        }
    }
    function updateMinutes(minutes) {
        console.log("teste")

        if (minutes >= 0 && minutes <= 9) {
            console.log("0" + minutes)
            return "0" + minutes
        }
        if (minutes < 0) {
            return "0" + 0
        }
        if (minutes > 60) {
            return 60
        }
        else {
            return minutes
        }
    }


    // DEFAULT
    $("#timerDisplay").val(updateMinutes(pomodoroTimeDefault) + ":" + updateSeconds(seconds));
    minutes = pomodoroTimeDefault


    // 
    $("#plus").click(function () {
        console.log(minutes, pomodoroTimeDefault)
        minutes++
        $("#timerDisplay").val(updateMinutes(minutes) + ":" + updateSeconds(seconds));
    })
    $("#minus").click(function () {
        console.log(minutes, pomodoroTimeDefault)
        minutes--
        $("#timerDisplay").val(updateMinutes(minutes) + ":" + updateSeconds(seconds));
    })








    // UPDATE CLASS AND INPUT
    $("#pomodoro").click(function () {

        $(this).addClass("active" || "");
        $("#short-break").removeClass("active");
        $("#long-break").removeClass("active");
        $("#timerInfo #Title").text("Pomodoro");
        $("#timerInfo #Description").text("Focus on your work for 25 minutes.");
        updateTimer(pomodoroTimeDefault)


    });
    $("#short-break").click(function () {
        $("#pomodoro").removeClass("active");
        $("#long-break").removeClass("active");
        $(this).addClass("active" || "");
        $("#timerInfo #Title").text("Short Break");
        $("#timerInfo #Description").text("Take a short break for 5 minutes.");
        updateTimer(shortBreakTimeDefault)

    });
    $("#long-break").click(function () {
        $(this).addClass("active" || "");
        $("#pomodoro").removeClass("active");
        $("#short-break").removeClass("active");
        $("#timerInfo #Title").text("Long Break");
        updateTimer(longBreakTimeDefault)
    });



    // CHECK BEFORE START
    $("#start-timer").click(function () {
        if (minutes <= 0) {
            alert("Error, please check the timer")
        } else {
            startPomodoro()
        }
    })
});