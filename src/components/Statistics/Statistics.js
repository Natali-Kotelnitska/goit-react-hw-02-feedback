// Винеси відображення статистики в окремий компонент <Statistics good={} neutral={} bad={} total={} ositiveercentage={}>.
import React, { Component } from 'react';
import Notification from 'components/Notification/Notification';
import PropTypes from 'prop-types';
import s from './Statistics.module.css';

class Statistic extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <h3 className={s.statisticsTitle}>Statistics</h3>
        {total ? (
          <div>
            <p className={s.statisticItem}>Good: {good}</p>
            <p className={s.statisticItem}>Neutral: {neutral}</p>
            <p className={s.statisticItem}>Bad: {bad}</p>
            <p className={s.statisticItem}>Total: {total}</p>
            <p className={s.statisticItem}>
              Positive feedback: {positivePercentage}
            </p>
          </div>
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}

Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.string,
};
export default Statistic;
