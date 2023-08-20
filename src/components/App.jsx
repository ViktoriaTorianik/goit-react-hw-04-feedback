import { useState } from 'react';
import React from 'react';

import Feedback from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/statistics';
import Wrapper from './Wrapper/wrapper';
import Section from './Section/Section';
import Notification from './Notification/Notification';

export default function FormFeedback() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedback = e => {
    switch (e) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };
  const countTotalFeedback = () => good + neutral + bad;
  const countPositiveFeedbackPercentage = () =>
    Math.round((good / countTotalFeedback()) * 100);
  return (
    <Wrapper>
      <Section title="Please leave feedback">
        <Feedback
          options={Object.keys({ good, neutral, bad })}
          onFeedback={feedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() > 0 ? (
          <Statistics
            good={good}
            netural={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Wrapper>
  );
}
