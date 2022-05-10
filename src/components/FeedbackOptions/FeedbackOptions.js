// Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import s from './Button.module.css';

class FeedbackOptions extends Component {
  onGoodButtonClick = () => {
    console.log('Click good');
  };
  render() {
    const { good, neutral, bad } = this.props;
    console.log(good);

    return (
      <div className={s.container}>
        <button
          type="button"
          className={s.button}
          onClick={this.onGoodButtonClick}
        >
          Good
        </button>
        <button type="button" className={s.button}>
          Neutral
        </button>
        <button type="button" className={s.button}>
          Bad
        </button>
      </div>
    );
  }
}

// FeedbackOptions.propTypes = {
//   props: PropTypes.shape,
// };
export default FeedbackOptions;
