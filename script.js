$(document).ready(function () {
    var pomodoroTime = 25
    var shortBreakTime = 5
    var seconds = 0
    var sessions = 2
    var type = 'pomodoro'
    var started = false
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


    // DEFAULT VALUES AND IMAGES
    $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));
    $("#pomodoroIcon").append("<img src='./assets/watch-2.png' alt='pomodoro'/>");
    $("#shortBreakIcon").append("<img src='./assets/coffe.png' alt='pomodoro'/>");
    $("#sessionIcon").append("<img src='./assets/couch-2.png' alt='pomodoro'/>");

    $("#plusIcon").append("<img src='./assets/plus.png' alt='pomodoro'/>");
    $("#minusIcon").append("<img src='./assets/minus.png' alt='pomodoro'/>");


    let displayControl = started ? "block" : 'none';
    $(".control").css('display', displayControl)



    // PLUS and MINUS button
    $("#plus").click(function () {
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
        personalizeButton(type)

    });
    $("#short-break").click(function () {
        $("#pomodoro").removeClass("active");
        $("#sessions").removeClass("active");
        $(this).addClass("active" || "");
        $("#timerInfo #Title").text("Short Break");
        $("#timerInfo #Description").text("Take a short break for 5 minutes.");
        type = 'shortBreak'
        console.log(type)
        updateTimer(shortBreakTime)
        personalizeButton(type)

    });
    $("#sessions").click(function () {
        $(this).addClass("active" || "");
        $("#pomodoro").removeClass("active");
        $("#short-break").removeClass("active");
        $("#timerInfo #Title").text("Long Break");
        type = 'session'
        updateTimer(sessions)
        personalizeButton(type)
    });



    // CHECK BEFORE START
    $("#start-timer").click(function () {
        if (pomodoroTime == 0 || shortBreakTime == 0 && session == 0) {
            alert("Error, please check the timer")
        } else {
            // started = !started
            startPomodoro()
        }
    })


    // ADD ICONS on default and hove button
    function personalizeButton(type) {
        let watchSrc = (type === "pomodoro") ? './assets/watch-2.png' : './assets/watch.png';
        let coffeSrc = (type === "shortBreak") ? './assets/coffe-2.png' : './assets/coffe.png';
        let sessionSrc = (type === "session") ? './assets/couch.png' : './assets/couch-2.png';

        $("#pomodoroIcon img").attr("src", watchSrc);
        $("#shortBreakIcon img").attr("src", coffeSrc);
        $("#sessionIcon img").attr("src", sessionSrc);


    }

    // APP HOVER ON BUTTONS
    $('#plus').hover(function () {
        $(`#plusIcon img`).attr('src', "./assets/plus-2.png")
    },
        function () {
            $(`#plusIcon img`).attr('src', "./assets/plus.png")

        })

    $('#minus').hover(function () {
        $(`#minusIcon img`).attr('src', "./assets/minus-2.png")
    },
        function () {
            $(`#minusIcon img`).attr('src', "./assets/minus.png")

        })
});