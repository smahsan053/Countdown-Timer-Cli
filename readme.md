# Countdown Timer CLI

This is a simple command-line countdown timer built using Node.js and Inquirer.js. The user can input the duration in seconds, and the application will start a countdown, displaying the time in hours, minutes, and seconds format.

## Features

- Prompts the user to enter the duration for the countdown timer.
- Displays the countdown timer in the format `HH:MM:SS`.
- Notifies the user when the countdown is complete.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://yarnpkg.com/getting-started/install) package manager

## Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/countdown-timer-cli.git
    cd countdown-timer-cli
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Make the script executable:
    ```sh
    chmod +x ./index.js
    ```

## Usage

To start the countdown timer application, run the following command:
```sh
./index.js
Follow the prompt to enter the duration in seconds for the countdown.

How It Works
User Input: The application prompts the user to enter the duration in seconds.
Countdown Timer: The script calculates the hours, minutes, and seconds from the input duration.
Display Timer: The countdown timer is displayed in the format HH:MM:SS and updates every second.
Completion Notification: When the countdown reaches zero, a "Countdown Complete" message is displayed and the timer stops.
Example

./index.js

# Output:
# Enter duration to start countdown timer: 3661
# 01:01:01
# 01:01:00
# ...
# 00:00:01
# 00:00:00
# Countdown Complete

License
This project is licensed under the MIT License. See the LICENSE file for details.

Contributing
If you would like to contribute to this project, please fork the repository and submit a pull request. Contributions are welcome!


