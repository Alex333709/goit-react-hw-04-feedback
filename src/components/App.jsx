import React, { useState } from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Notification from './Notification/Notification';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import { AppContainer } from './App.styled.js';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const sum = countTotalFeedback();
    const percentage = Math.round((good / sum) * 100);
    return percentage;
  };

  // const handleFeedback = ({ target }) => {
  //   console.log(target.textContent);
  //   if (!target || !target.textContent) return;

  //   if (target.textContent === 'good') setGood(prev => prev + 1);
  //   if (target.textContent === 'neutral') setNeutral(prev => prev + 1);
  //   if (target.textContent === 'bad') setBad(prev => prev + 1);
  // };
  const handleFeedback = ({ target }) => {
    console.log(target.textContent);
    if (!target || !target.textContent) return;

    switch (target.textContent) {
      case 'good':
        setGood(prev => prev + 1);
        break;
      case 'neutral':
        setNeutral(prev => prev + 1);
        break;
      case 'bad':
        setBad(prev => prev + 1);
        break;
      default:
        // Handle any other cases if necessary
        break;
    }
  };

  const total = countTotalFeedback();

  return (
    <AppContainer>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleFeedback}
        />
      </Section>

      <Section title="Statistics">
        {total === 0 ? (
          <Notification message="No feedback given" />
        ) : (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        )}
      </Section>
    </AppContainer>
  );
};

export default App;
