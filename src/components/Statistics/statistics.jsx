import PropTypes from 'prop-types';

import { StatisticList, StatisticParagraph } from './statistics.styled';

const Statistics = ({ good, netural, bad, total, positivePercentage }) => {
  return (
    <div>
      <h2>Statistics</h2>
      <StatisticList>
        <StatisticParagraph>
          <p>Good: </p>
          <p>{good}</p>
        </StatisticParagraph>
        <StatisticParagraph StatisticParagraph>
          <p>Neutral: {netural}</p>
        </StatisticParagraph>
        <StatisticParagraph>
          <p>Bad: {bad}</p>
        </StatisticParagraph>
        <StatisticParagraph>
          <p>Total: {total}</p>
        </StatisticParagraph>
        <StatisticParagraph>
          <p>Positive Feedback: {positivePercentage} %</p>
        </StatisticParagraph>
      </StatisticList>
    </div>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
