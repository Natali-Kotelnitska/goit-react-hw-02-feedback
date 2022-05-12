import React, { Component } from 'react';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };

  countTotalFeedback = state => {
    return Object.values(state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = total =>
    `${Math.round((this.state.good / total) * 100)}%`;

  render() {
    // const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(this.state);
    let positivePercentage = this.countPositiveFeedbackPercentage(total);
    // const statisticsData = { ...this.state, total, positivePercentage };

    return (
      <div
        style={{
          height: '500px',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onButtonClick={this.onLeaveFeedback}
          />
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default App;

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '500px',
//         // display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 30,
//         color: '#010101',
//       }}
//     >
//       {/* React homework template */}
//       <Section title="Please leave feedback">
//         <FeedbackOptions />
//         <Statistics />
//       </Section>
//     </div>
//   );
// };
