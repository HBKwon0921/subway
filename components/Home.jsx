import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>지하철 가이드 입니다</h1>
      <p>호선을 선택해 주세요</p>
      <ul>
        <li>
          <Link to="/arrivals">Subway Arrival Information</Link>
        </li>
        <li>
          <Link to="/map">Subway Map</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;