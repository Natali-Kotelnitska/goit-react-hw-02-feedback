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

  // countTotalFeedback(){ }
  // countPositiveFeedbackPercentage()
  render() {
    // const { good, neutral, bad } = this.state;
    return (
      <div
        style={{
          height: '500px',
          // display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 30,
          color: '#010101',
        }}
      >
        <Section title="Please leave feedback">
          <FeedbackOptions options={this.state} onLeaveFeedback={''} />
          <Statistics
            good={2}
            neutral={3}
            bad={1}
            total={6}
            positivePercentage={5}
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
