// Винеси блок кнопок в компонент <FeedbackOptions options={} onLeaveFeedback={}>.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Button.module.css';

class FeedbackOptions extends Component {
  render() {
    const { options, onButtonClick } = this.props;

    return (
      <div className={s.container}>
        {Object.keys(options).map(item => {
          return (
            <button
              key={item}
              type="button"
              name={item}
              className={s.button}
              onClick={e => {
                onButtonClick(e.currentTarget.name);
              }}
            >
              {item}
            </button>
          );
        })}
      </div>
    );
  }
}

FeedbackOptions.propTypes = {
  options: PropTypes.shape({
    item: PropTypes.string,
  }),
  onButtonClick: PropTypes.func.isRequired,
};
export default FeedbackOptions;
