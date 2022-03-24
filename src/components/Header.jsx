import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { fetchMovies, fetchShows } from '../redux/slices/movieSlice/fetchData';

import user from '../common/images/user.png';

function Header() {
  const dispatch = useDispatch();
  const [seacrh, setSeacrh] = React.useState('');

  const onChangeSeacrh = (e) => {
    setSeacrh(e.target.value);
  };

  const onSearchButtonClick = () => {
    if (seacrh) {
      dispatch(fetchMovies(seacrh));
      dispatch(fetchShows(seacrh));

      setSeacrh('');
    }
  };

  return (
    <div className="header">
      <div className="logo">
        <Link to='/'>Movie App</Link>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search movies or shows"
          value={seacrh}
          onChange={onChangeSeacrh}
        />
        <button onClick={onSearchButtonClick}>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  )
};

export default Header;