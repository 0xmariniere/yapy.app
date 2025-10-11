"use client";

import { useTimer, type TimerDuration } from "@/hooks/useTimer";

export default function Timer() {
  const {
    isActive,
    isPaused,
    timeRemaining,
    selectedDuration,
    startTimer,
    pauseTimer,
    resumeTimer,
    stopTimer,
    formatTime,
    progress
  } = useTimer();

  const durations: TimerDuration[] = [5, 10, 15];

  if (!isActive && !selectedDuration) {
    // Timer selection view
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10 p-4 sm:p-6 pb-safe-8">
        <p className="text-white/80 text-center mb-3 sm:mb-4 text-xs sm:text-sm font-medium">
          Start a discussion timer
        </p>
        <div className="flex justify-center gap-2 sm:gap-3">
          {durations.map((duration) => (
            <button
              key={duration}
              onClick={() => startTimer(duration)}
              className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 touch-manipulation text-sm sm:text-base"
              aria-label={`Start ${duration} minute timer`}
            >
              {duration} min
            </button>
          ))}
        </div>
      </div>
    );
  }

  if (timeRemaining === 0 && isActive === false && selectedDuration) {
    // Timer finished view
    return (
      <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10 p-4 sm:p-6 pb-safe-8">
        <div className="text-center">
          <p className="text-white text-xl sm:text-2xl font-bold mb-3 sm:mb-4" role="alert" aria-live="assertive">
            Time&apos;s up! ⏰
          </p>
          <button
            onClick={stopTimer}
            className="px-6 sm:px-8 py-2 sm:py-3 bg-white/20 hover:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 touch-manipulation"
            aria-label="Close timer"
          >
            Close
          </button>
        </div>
      </div>
    );
  }

  // Active timer view
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-black/40 backdrop-blur-md border-t border-white/10 p-4 sm:p-6 pb-safe-8">
      <div className="max-w-md mx-auto">
        {/* Progress bar */}
        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden mb-3 sm:mb-4" role="progressbar" aria-valuenow={progress} aria-valuemin={0} aria-valuemax={100}>
          <div
            className="h-full bg-white/80 transition-all duration-1000 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Time display */}
        <div className="text-center mb-3 sm:mb-4">
          <p className="text-4xl sm:text-5xl font-bold text-white tabular-nums" aria-live="polite" aria-atomic="true">
            {formatTime(timeRemaining)}
          </p>
        </div>

        {/* Controls */}
        <div className="flex justify-center gap-2 sm:gap-3">
          <button
            onClick={isPaused ? resumeTimer : pauseTimer}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 touch-manipulation text-sm sm:text-base"
            aria-label={isPaused ? "Resume timer" : "Pause timer"}
          >
            {isPaused ? "Resume" : "Pause"}
          </button>
          <button
            onClick={stopTimer}
            className="px-4 sm:px-6 py-2 sm:py-3 bg-white/10 hover:bg-white/20 active:bg-white/30 rounded-full text-white font-semibold transition-all duration-200 touch-manipulation text-sm sm:text-base"
            aria-label="Stop timer"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  );
}

