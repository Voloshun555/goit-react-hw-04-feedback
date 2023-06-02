import React, { useState } from 'react';
import { Section } from './Title/Title';
import { Feedback } from 'components/Feedback/Feedback';
import { Statistics } from 'components/Statistics/Statistics';
import { Notification } from 'components/Notification/Notification ';

function App() {
  const  [good, setGood ] = useState(0);
  const  [neutral, setNeutral]  = useState(0);
  const  [bad, setBad]  = useState(0);

  const total = good + neutral + bad;
  const feedbackInPercentage = Math.round((good / total) * 100);
  
  function onLeaveFeedback(evt) {

    switch (evt) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;

      default:
        break;
    }
  }

return (
  <section>
    <Section title={'Please leave feedback'}>
      <Feedback
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
    </Section>
    <Section title={'Statistics'}>
      {total > 0 ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={feedbackInPercentage}
          positivFeedback={feedbackInPercentage}
        />
      ) : (
        <Notification name="There is no feedback" />
      )}
    </Section>
  </section>
);
}
export default App;
