import React, { useEffect, useState } from 'react';
import Manchester from '../../../../../public/Images/Match/Manchester_City.webp';
import Arsenal from '../../../../../public/Images/Match/Arsenal_FC.svg.webp';

const Match = () => {
  const targetDate = '2024-12-01T00:00:00Z';

  const [timeRemaining, setTimeRemaining] = useState(calculateTimeRemaining());

  useEffect(() => {
    const interval = setInterval(() => {
      const remainingTime = calculateTimeRemaining();
      setTimeRemaining(remainingTime);

      // Stop the interval if the countdown ends
      if (
        remainingTime.days === 0 &&
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  function calculateTimeRemaining() {
    const now = new Date().getTime();
    const targetTime = new Date(targetDate).getTime();
    const difference = targetTime - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds };
  }

  return (
    <div className="bg-white rounded-[12px] w-full h-full py-[34px] px-[20px] lg:p-[16px] flex flex-col justify-center gap-[48px]">
      <div className="flex justify-around">
        <div className="w-[120px] lg:w-[70px] flex items-center">
          <img className="w-full" src={Manchester} alt="Manchester logo" />
        </div>
        <div className="flex flex-col items-center justify-between h-[170px] lg:h-[100px]">
          <h2 className="text-[16px] font-[500] leading-normal capitalize lg:text-[14px]">The Final Round</h2>
          <span className="text-[39px] font-[600] leading-normal tracking-[5px] from-[#F81539] via-[#FC4308] to-[#FC4308] bg-gradient-to-l bg-clip-text text-transparent">
            VS
          </span>
          <h2 className="text-[16px] lg:text-[12px] font-[500] leading-normal capitalize">
            {new Date(targetDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </h2>
        </div>
        <div className="w-[120px] lg:w-[70px] flex items-center">
          <img className="w-full" src={Arsenal} alt="Arsenal logo" />
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="bg-[#2F5C9F] w-full py-[8px] rounded-tl-[12px] rounded-bl-[12px] text-center text-white lg:text-[10px]">
          Liverpool
        </span>
        <div className="flex">
          <button className="text-[25px] rounded-tl-[12px] rounded-bl-[12px] border-[3px] border-[#E6E6E6] border-r-[1.5px] font-[400] leading-normal text-white bg-[#3E3232] py-[10px] px-[19px] lg:text-[16px]">
            {timeRemaining.hours}
          </button>
          <button className="text-[25px] font-[400] border-[#E6E6E6] border-[3px] border-l-[1.5px] leading-normal text-white bg-[#3E3232] py-[10px] px-[19px] lg:text-[16px]">
            {timeRemaining.minutes}
          </button>
          <button className="text-[25px] font-[400] rounded-tr-[12px] rounded-br-[12px] border-[#E6E6E6] border-[3px] border-l-[1.5px] leading-normal text-white bg-[#3E3232] py-[10px] px-[19px] lg:text-[16px]">
            {timeRemaining.seconds}
          </button>
        </div>
        <span className="bg-[#AA3034] w-full py-[8px] rounded-tr-[12px] rounded-br-[12px] text-center text-white lg:text-[10px]">
          Liverpool
        </span>
      </div>
    </div>
  );
};

export default Match;
