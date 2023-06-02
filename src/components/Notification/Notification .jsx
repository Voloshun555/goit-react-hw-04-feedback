import PropTypes from 'prop-types';

export const Notification = ({ name }) => {
  return <p>{name}</p>;
};

Notification.propTypes = {
  name: PropTypes.string.isRequired,
};
