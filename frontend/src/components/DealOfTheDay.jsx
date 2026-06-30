import React from 'react';
import '../styles/deal-of-day.css';

export default function DealOfTheDay() {
  const [timeLeft, setTimeLeft] = React.useState({ hours: 12, minutes: 45, seconds: 30 });

  React.useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="deal-of-day">
      <div className="deal-container">
        <div className="deal-header">
          <h2>🔥 Deal of the Day</h2>
          <p>iPhone 14 Pro Max</p>
        </div>
        <div className="deal-content">
          <div className="deal-image">📱</div>
          <div className="deal-info">
            <p className="deal-desc">Up to 15% Off</p>
            <div className="price-section">
              <span className="price">$999</span>
              <span className="original-price">$1,199</span>
            </div>
            <div className="countdown">
              <p>Offer ends in:</p>
              <div className="timer">
                <div className="time-unit">
                  <span className="time">{String(timeLeft.hours).padStart(2, '0')}</span>
                  <span className="label">Hours</span>
                </div>
                <span className="separator">:</span>
                <div className="time-unit">
                  <span className="time">{String(timeLeft.minutes).padStart(2, '0')}</span>
                  <span className="label">Minutes</span>
                </div>
                <span className="separator">:</span>
                <div className="time-unit">
                  <span className="time">{String(timeLeft.seconds).padStart(2, '0')}</span>
                  <span className="label">Seconds</span>
                </div>
              </div>
            </div>
            <button className="btn btn-primary btn-grab">Grab Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}