// Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} bad={} total={} ositiveercentage={}>.
import React, { Component } from 'react';

import s from './Statistics.module.css';
class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;
    return (
      <div>
        <h3 className={s.statisticsTitle}>Statistics</h3>
        <p className={s.statisticItem}>Good: {good}</p>
        <p className={s.statisticItem}>Neutral: {neutral}</p>
        <p className={s.statisticItem}>Bad: {bad}</p>
        <p className={s.statisticItem}>Total: {total}</p>
        <p className={s.statisticItem}>
          Positive feedback: {positivePercentage}
        </p>
      </div>
    );
  }
}

export default Statistic;
