#! /usr/bin/env node
import inquirer from "inquirer";
let duration = await inquirer.prompt([{
        type: "number",
        name: 'duration',
        message: 'Enter duration to start countdown timer'
    }]);
const count = () => {
    let hours = Math.floor(duration.duration / 3600);
    let remainingSecondsAfterHours = duration.duration % 3600;
    let minutes = Math.floor(remainingSecondsAfterHours / 60);
    let remainingSeconds = remainingSecondsAfterHours % 60;
    console.log(`${hours.toString().padStart(2, '0')}:${minutes
        .toString()
        .padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`);
    if (duration.duration === 0) {
        console.log('Countdown Complete');
        clearInterval(interval); // Stop the interval when countdown is complete
    }
    else {
        duration.duration--;
    }
};
const interval = setInterval(count, 1000);
