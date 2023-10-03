import { useCallback, useEffect, useState } from 'react';

const useTimer = (seconds: number) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const [hasTimeout, setHasTimeout] = useState(false);

  const formatTime = useCallback((time: number): string => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes} : ${seconds.toString().padStart(2, '0')}`;
  }, []);

  const resetOtpTimer = useCallback((seconds: number) => {
    setHasTimeout(false);
    setTimeLeft(seconds);
  }, []);

  useEffect(() => {
    let timer: NodeJS.Timer;
    if (timeLeft > 0) {
      timer = setInterval(() => setTimeLeft((prevTime) => prevTime - 1), 1000);
    } else {
      setHasTimeout(true);
    }
    return () => clearInterval(timer as unknown as number);
  }, [timeLeft]);

  return { timeLeft: formatTime(timeLeft), hasTimeout, resetOtpTimer };
};

export default useTimer;
