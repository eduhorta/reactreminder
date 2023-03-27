import { useState, useEffect } from 'react';

function Clock() {
  const [time, setTime] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Clean up the interval
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1 className="text-lg font-semibold text-white">
        {time.toLocaleTimeString()}
      </h1>
    </div>
  );
}

export default Clock;
