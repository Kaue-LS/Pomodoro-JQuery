$(document).ready(function () {
    var defaultPomodoro = 25;
    var defaultShortBreak = 5;

    var pomodoroTime = defaultPomodoro;
    var shortBreakTime = defaultShortBreak;
    var seconds = 0
    var sessions = 2;
    var currentSession = 2;
    var type = 'pomodoro'
    var started = false
    var interval = null;




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
            return "0" + seconds
        }
        else {
            return seconds
        }
    }
    function updateInput(minutes) {
        if (type == 'session') {
            if (minutes < 1) {
                sessions = 1
                return 1
            }
            if (minutes > 4) {
                sessions = 4
                return 4
            }
            return minutes

        }
        else {
            if (type == 'pomodoro') {
                if (minutes >= 0 && minutes <= 9) {
                    pomodoroTime = minutes
                    return "0" + minutes
                }
                if (minutes < 0) {
                    pomodoroTime = 0
                    return "0" + 0
                }
                if (minutes > 60) {
                    pomodoroTime = 60
                    return 60
                }
                else {
                    return minutes
                }
            }
            if (type == "shortBreak") {
                if (minutes >= 0 && minutes <= 9) {
                    shortBreakTime = minutes
                    return "0" + minutes
                }
                if (minutes < 0) {
                    shortBreakTime = 0
                    return "0" + 0
                }
                if (minutes > 60) {
                    shortBreakTime = 60
                    return 60
                }
                else {
                    return minutes
                }
            }
        }

    }


    function updateTotalFocus() {
        if (
            sessions >= 1 &&
            sessions <= 4 &&
            pomodoroTime >= 0 &&
            pomodoroTime <= 60
        ) {
            $("#totalFocus").val(pomodoroTime * sessions);
        }
    }

    // DEFAULT VALUES AND IMAGES
    $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));
    $("#pomodoroIcon").append("<img src='./assets/watch-2.png' alt='pomodoro'/>");
    $("#shortBreakIcon").append("<img src='./assets/coffe.png' alt='pomodoro'/>");
    $("#sessionIcon").append("<img src='./assets/couch-2.png' alt='pomodoro'/>");

    $("#plusIcon").append("<img src='./assets/plus.png' alt='pomodoro'/>");
    $("#minusIcon").append("<img src='./assets/minus.png' alt='pomodoro'/>");


    $("#totalFocus").val(pomodoroTime * sessions)
    $("#cycles").val(sessions)
    $("#nextBreak").val(pomodoroTime)

    $("#timerInfo #Description").text(`Focus on your work for ${pomodoroTime} minutes.`);



    let displayControl = started ? "block" : 'none';
    $(".control").css('display', displayControl)
    $("#completedTask").css("display", displayControl)



    // PLUS and MINUS button
    $("#plus").click(function () {
        if (type == 'session') {
            sessions++
            $("#timerDisplay").val(updateInput(sessions));
            $("#cycles").val(sessions)

            updateTotalFocus()

        }
        if (type == "pomodoro") {
            pomodoroTime++
            $("#timerInfo #Description").text(`Focus on your work for ${pomodoroTime} minutes.`);

            $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));
            updateTotalFocus()

        }
        if (type == "shortBreak") {
            shortBreakTime++
            $("#timerDisplay").val(updateInput(shortBreakTime) + ":" + updateSeconds(seconds));

        }

    })
    $("#minus").click(function () {
        if (type == 'session') {
            sessions--
            $("#timerDisplay").val(updateInput(sessions));
            $("#cycles").val(sessions)

            updateTotalFocus();

        }
        if (type == "pomodoro") {
            pomodoroTime--
            $("#timerInfo #Description").text(`Focus on your work for ${pomodoroTime} minutes.`);

            $("#timerDisplay").val(updateInput(pomodoroTime) + ":" + updateSeconds(seconds));
            updateTotalFocus()
        }
        if (type == "shortBreak") {
            shortBreakTime--
            $("#timerDisplay").val(updateInput(shortBreakTime) + ":" + updateSeconds(seconds));

        }
    })






    function updateInputPomodoro() {
        $("#pomodoro").addClass("active" || "");
        $("#short-break").removeClass("active");
        $("#sessions").removeClass("active");
        $("#timerInfo #Title").text("Pomodoro");
        $("#timerInfo #Description").text("Focus on your work for 25 minutes.");
        type = "pomodoro";
        updateTimer(pomodoroTime)
        personalizeButton(type)
    }
    function updateInputShortBreak() {
        $("#pomodoro").removeClass("active");
        $("#sessions").removeClass("active");
        $(this).addClass("active" || "");
        $("#timerInfo #Title").text("Short Break");
        $("#timerInfo #Description").text("Take a short break for 5 minutes.");
        type = 'shortBreak'
        console.log(type)
        updateTimer(shortBreakTime)
        personalizeButton(type)
    }
    function updateInputSession() {
        $(this).addClass("active" || "");
        $("#pomodoro").removeClass("active");
        $("#short-break").removeClass("active");
        $("#timerInfo #Title").text("Long Break");
        type = 'session'
        updateTimer(sessions)
        personalizeButton(type)
    }

    // UPDATE CLASS AND INPUT
    $("#pomodoro").click(function () {
        updateInputPomodoro(this)
    });
    $("#short-break").click(function () {
        updateInputShortBreak()
    });
    $("#sessions").click(function () {
        updateInputSession()
    });


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



    // CHECK BEFORE START
    $("#start-timer").click(function () {
        if (pomodoroTime == 0 || shortBreakTime == 0 && sessions == 0) {
            alert("Error, please check the timer")
        } else {

            started = !started
            startPomodoro()
        }
    })


    // MAKE THE COUNTDOWN
    function countDown() {
        if (seconds === 0) {
            if (type === "pomodoro") {
                if (pomodoroTime === 0) {
                    nextStep();
                    return;
                }

                pomodoroTime--;
                seconds = 59;
            }

            if (type === "shortBreak") {
                if (shortBreakTime === 0) {
                    nextStep();
                    return;
                }

                shortBreakTime--;
                seconds = 59;
            }
        } else {
            seconds--;
        }

        updateTimer();
    }

    function nextStep() {
        if (type === "pomodoro") {

            if (currentSession >= sessions) {
                clearInterval(interval);
                interval = null;

                alert("Pomodoro finalizado!");
                resetPomodoro()
                started = false
                return;
            }

            updateInputShortBreak();

            seconds = 0;
            shortBreakTime = defaultShortBreak;

            updateTimer();
            return;
        }

        if (type === "shortBreak") {

            currentSession++;

            updateInputPomodoro();

            seconds = 0;
            pomodoroTime = defaultPomodoro;

            updateTimer();
        }
    }
    function pausePomodoro() {
        clearInterval(interval);
        interval = null;
    }

    function resetPomodoro() {
        clearInterval(interval);
        interval = null;

        pomodoroTime = 25;
        shortBreakTime = 5;
        sessions = 2;
        seconds = 0;
        updateInputPomodoro()

        updateTimer();
    }

    // START POMODORO
    function startPomodoro() {
        if (interval) return; // i
        if (type != "pomodoro") {
            updateInputPomodoro()
        }

        $(".control").css('display', "flex")
        $("#completedTask").css("display", "block")
        currentSession = 1;
        defaultPomodoro = pomodoroTime
        defaultShortBreak = shortBreakTime
        // shortBreakTime = 0
        // pomodoroTime = 0
        interval = setInterval(countDown, 1000);
    }

});