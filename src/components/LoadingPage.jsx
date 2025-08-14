import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/loading.css";

export default function LoadingPage() {
  const [countdown, setCountdown] = useState(10);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          navigate("/dashboard");
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [navigate]);

  return (
    <div className="loading-container">
      <div className="loading-content">
        <h1>Katsina LGA Staff File Management</h1>
        <p>Loading system resources...</p>

        <div className="countdown-timer">
          <div className="timer-circle">
            <svg className="timer-svg" viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" className="timer-bg" />
              <circle
                cx="50"
                cy="50"
                r="45"
                className="timer-progress"
                strokeDasharray={`${283} ${283}`}
                strokeDashoffset={283 - (283 * (10 - countdown)) / 10}
              />
            </svg>
            <span className="timer-text">{countdown}</span>
          </div>
        </div>

        <div className="loading-progress">
          <div
            className="progress-bar"
            style={{ width: `${100 - countdown * 10}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}
