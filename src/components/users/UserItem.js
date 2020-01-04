import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import React from 'react';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className='card and text-center'>
      <img
        src={avatar_url}
        alt=''
        className='round-img'
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a
          to={`/user/${login}`}
          className='btn btn-dark btn-sm my-1'
          target='_blank'
        >
          More
        </a>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
