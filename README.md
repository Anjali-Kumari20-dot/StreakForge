﻿# StreakForge
# ⏱️ useTimer - Pomodoro Timer Hook

A customizable Pomodoro-style timer hook built with React, featuring audio alerts, automatic mode transitions, and clean separation of focus, break, and rest cycles. Ideal for productivity tools, task managers, or personal focus apps.

## 🔧 Features

- Supports three modes: `focus`, `break`, and `rest`
- Timer auto-switches modes based on Pomodoro rules
- Plays distinct audio for each mode
- Mode switches **only after audio finishes playing**
- Prevents audio collision and overlapping playback
- Manual controls for resetting, toggling, and changing modes
- Custom durations passed as props

## 📦 Installation

npm install
import useTimer from "./useTimer";

const durations = {
  focus: 25,  // in minutes
  break: 5,
  rest: 15,
};

const {
  mode,
  timeLeft,
  isRunning,
  handleReset,
  handleToggle,
  handleModeChange,
} = useTimer(durations);

##🧭 API
Property	Type	Description
mode	string	Current mode (focus, break, rest)
timeLeft	number	Remaining time in seconds
isRunning	boolean	Whether the timer is active
handleReset()	function	Resets the timer for current mode
handleToggle()	function	Starts or pauses the timer
handleModeChange()	function	Manually switches mode and resets cycles

##🛠️ Development Notes
All sounds are handled via the playSound function.

Audio overlaps are prevented with a shared currentAudio instance.

Mode changes are deferred until the current audio finishes.

You can adjust audioDurations for custom sound lengths.

## 🚀 Ideas for Extension
Add browser notifications using the Notification API

Persist timer state in localStorage across reloads

Add streak tracking, session logs, and progress charts

Build a React Native version for mobile productivity

📄 License
MIT

Made with ❤️ to help you focus better, one beep at a time.
