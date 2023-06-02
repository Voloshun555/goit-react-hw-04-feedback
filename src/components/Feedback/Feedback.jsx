import PropTypes from 'prop-types';

export const Feedback = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map(option => {
        return (
          <button
            type="button"
            key={option}
            onClick={() => onLeaveFeedback(option)}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
};

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired
};
