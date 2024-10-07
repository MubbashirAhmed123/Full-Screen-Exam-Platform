# Full-Screen Exam Platform

This project is a simple React application designed to simulate an exam-taking platform. The application features a full-screen mode with a countdown timer and strict exit restrictions.

## Features

- **Full-Screen Exam Mode**: Automatically switches to full-screen mode when the exam starts.
- **Reverse Countdown Timer**: Displays a timer counting down from a specified duration. The exam will be auto-submitted or terminated when the timer runs out.
- **Exit Restriction with Violation Notifications**: 
  - Triggers a "Violation Warning" if the user tries to exit full-screen mode.
  - Terminates the exam after the second exit attempt and displays a termination message.
- **Confirmation Modal**: Asks for user confirmation before starting the exam.
- **Manual Submit Exam Button**: Allows the user to manually submit the exam.
- **Basic Report**: Displays the exam status at the end (completed or terminated).
- **Reset and Restart Exam**: Allows the user to reset and restart the exam.

## Technologies Used

- React (Functional Components)
- Tailwind CSS (for styling)
- Basic HTML/CSS

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-folder>

## Install dependencies:

npm install

## Start the application:
npm start