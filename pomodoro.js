var interval = null;
function startPomodoro(props) {
    if (interval) return; // impede vários setInterval
    var setType = props.type
    if (setType != "pomodoro") {
        setType = 'pomodoro'
    }

    $(".control").css('display', "flex")
    $("#completedTask").css("display", "block")
    interval = setInterval(() => {
        console.log(setType)
    }, 1000);
}

// function countdown(props) {
//     if (props.seconds === 0) {
//         if (props.type === "pomodoro") {
//             if (props.pomodoroTime === 0) {
//                 nextStep();
//                 return;
//             }

//             props.pomodoroTime--;
//             props.seconds = 59;
//         }

//         if (props.type === "shortBreak") {
//             if (props.shortBreakTime === 0) {
//                 nextStep(props);
//                 return;
//             }

//             props.shortBreakTime--;
//             props.seconds = 59;
//         }
//     } else {
//         props.seconds--;
//     }

//     updateTimer();
// }


$(document).startPomodoro = startPomodoro;