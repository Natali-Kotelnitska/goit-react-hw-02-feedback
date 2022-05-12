// Створи компонент <Section title="">, який рендерить секцію із заголовком і дітей (children). Обгорни кожен із <Statistics> і <FeedbackOptions> у створений компонент секції.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import s from './Section.module.css';

class Section extends Component {
  render() {
    const { title, children } = this.props;

    return (
      <section className={s.section}>
        <h2>
          {title}
          {children}
        </h2>
      </section>
    );
  }
}

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
export default Section;
