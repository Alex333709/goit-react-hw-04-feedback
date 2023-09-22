import React from 'react';
import { FeedbackButton, FeedbackButtons } from './FeedbackOptions.styled';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  if (!Array.isArray(options)) {
    return <p>Error: options should be an array.</p>;
  }

  return (
    <FeedbackButtons>
      {options.map(option => (
        <FeedbackButton
          type="button"
          onClick={() => onLeaveFeedback(option)}
          key={option}
        >
          {option}
        </FeedbackButton>
      ))}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
