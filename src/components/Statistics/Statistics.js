// Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} bad={} total={} ositiveercentage={}>.
const Statistic = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div>
      <h3>Statistics</h3>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </div>
  );
};

export default Statistic;
