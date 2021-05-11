import './dateTime.css';

const DateTime = ({date, time}) => {
  return (
    <div className="third-line-container">
      <div className="date-time__container">
        <div className="time">
          {time}
        </div>
        <div className="date">
          {date}
        </div>
      </div>

      <div className="i-logo">
        <i className="fas fa-info-circle"></i>
      </div>
    </div>
  );
}

export default DateTime;