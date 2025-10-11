"use client";

import { useState, useEffect, useCallback, useRef } from "react";

export type TimerDuration = 5 | 10 | 15;

export function useTimer() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const [selectedDuration, setSelectedDuration] = useState<TimerDuration | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startTimer = useCallback((minutes: TimerDuration) => {
    setSelectedDuration(minutes);
    setTimeRemaining(minutes * 60);
    setIsActive(true);
    setIsPaused(false);
  }, []);

  const pauseTimer = useCallback(() => {
    setIsPaused(true);
  }, []);

  const resumeTimer = useCallback(() => {
    setIsPaused(false);
  }, []);

  const stopTimer = useCallback(() => {
    setIsActive(false);
    setIsPaused(false);
    setTimeRemaining(0);
    setSelectedDuration(null);
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  useEffect(() => {
    if (isActive && !isPaused) {
      intervalRef.current = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev <= 1) {
            // Timer finished
            setIsActive(false);
            setIsPaused(false);
            if (intervalRef.current) {
              clearInterval(intervalRef.current);
              intervalRef.current = null;
            }
            // Vibrate and play sound if available
            if (typeof window !== "undefined" && "vibrate" in navigator) {
              navigator.vibrate([200, 100, 200]);
            }
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isActive, isPaused]);

  const formatTime = useCallback((seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  }, []);

  const progress = selectedDuration
    ? ((selectedDuration * 60 - timeRemaining) / (selectedDuration * 60)) * 100
    : 0;

  return {
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
  };
}


