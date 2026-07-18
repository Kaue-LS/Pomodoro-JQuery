$(document).ready(function () {
    var pomodoroTime = 25
    var shortBreakTime = 5
    var seconds = 0
    var sessions = 2
    var type = 'pomodoro'
    console.log(type)

    // UPDATE TIMER
    function updateTimer(timer) {
        if (type == 'session' && (timer >= 0 || timer <= 4)) {
            $("#timerDisplay").val(timer);
            return
        }
        if (type == 'pomodoro') {
            $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));
            return
        }
        if (type == 'shortBreak') {

            $("#timerDisplay").val(updateInput(shortBreakTime) + ":" + updateSeconds(seconds));
            return
        }
    }
    function updateSeconds(seconds) {
        if (seconds >= 0 && seconds <= 10) {
            return seconds + "0"
        }
        else {
            return seconds
        }
    }
    function updateInput(minutes) {
        console.log("teste")
        if (type == 'session') {
            if (minutes < 0) {
                return 0
            }
            if (minutes > 4) {
                return 4
            }
            return minutes

        }
        else {
            if (type == 'pomodoro' || type == 'shortBreak') {
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
        }

    }


    // 
    $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));


    // 
    $("#plus").click(function () {
        console.log(type)
        if (type == 'session') {
            sessions++
            return $("#timerDisplay").val(updateInput(sessions));

        }
        if (type == "pomodoro") {
            pomodoroTime++
            $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));

        }
        if (type == "shortBreak") {
            shortBreakTime++
            $("#timerDisplay").val(updateInput(shortBreakTime) + ":" + updateSeconds(seconds));

        }
    })
    $("#minus").click(function () {
        console.log(type)
        if (type == 'session') {
            sessions--
            return $("#timerDisplay").val(updateInput(sessions));

        }
        if (type == "pomodoro") {
            pomodoroTime--
            $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));

        }
        if (type == "shortBreak") {
            shortBreakTime--
            $("#timerDisplay").val(updateInput(shortBreakTime) + ":" + updateSeconds(seconds));

        }
    })








    // UPDATE CLASS AND INPUT
    $("#pomodoro").click(function () {

        $(this).addClass("active" || "");
        $("#short-break").removeClass("active");
        $("#sessions").removeClass("active");
        $("#timerInfo #Title").text("Pomodoro");
        $("#timerInfo #Description").text("Focus on your work for 25 minutes.");
        type = "pomodoro";
        updateTimer(pomodoroTime)


    });
    $("#short-break").click(function () {
        $("#pomodoro").removeClass("active");
        $("#sessions").removeClass("active");
        $(this).addClass("active" || "");
        $("#timerInfo #Title").text("Short Break");
        $("#timerInfo #Description").text("Take a short break for 5 minutes.");
        type = 'shortBreak'
        updateTimer(shortBreakTime)

    });
    $("#sessions").click(function () {
        $(this).addClass("active" || "");
        $("#pomodoro").removeClass("active");
        $("#short-break").removeClass("active");
        $("#timerInfo #Title").text("Long Break");
        console.log("sessions break")
        type = 'session'
        updateTimer(sessions)
    });



    // CHECK BEFORE START
    $("#start-timer").click(function () {
        if (pomodoroTime == 0 || shortBreakTime == 0 && session == 0) {
            alert("Error, please check the timer")
        } else {
            startPomodoro()
        }
    })
});