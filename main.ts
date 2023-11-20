basic.forever(function () {
    if (cuteBot.tracking(cuteBot.TrackingState.L_R_unline)) {
        cuteBot.motors(25, 25)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_unline_R_line)) {
        cuteBot.motors(25, 10)
    } else if (cuteBot.tracking(cuteBot.TrackingState.L_line_R_unline)) {
        cuteBot.motors(10, 25)
    } else {
        cuteBot.motors(20, 20)
    }
})
