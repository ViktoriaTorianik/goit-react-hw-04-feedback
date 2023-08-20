import PropTypes from 'prop-types';
import { Button } from './FeedbackOptions.styled';
const Feedback = ({ options, onFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <Button type="button" onClick={() => onFeedback(option)} key={option}>
            {option}
          </Button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onFeedback: PropTypes.func.isRequired,
};
export default Feedback;
