import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SubwayArrivalData = () => {
  const [stationName, setStationName] = useState('');
  const [subwayData, setSubwayData] = useState(null);

  const fetchData = async () => {
    try {
      if (stationName.trim() === '') {
        // 역 이름이 비어있으면 도착 정보를 가져오지 않음
        return;
      }

      const response = await axios.get(
        `http://swopenAPI.seoul.go.kr/api/subway/4b4a496763746f6631313247546a6a53/json/realtimeStationArrival/0/5/${encodeURIComponent(stationName)}`
      );

      // API 응답에서 필요한 데이터 추출
      const { realtimeArrivalList } = response.data;

      // 추출한 데이터를 상태에 설정
      setSubwayData(realtimeArrivalList);
    } catch (error) {
      console.error('Error fetching subway data:', error);
    }
  };

  const handleInputChange = (event) => {
    setStationName(event.target.value);
  };

  const handleSearchClick = () => {
    fetchData();
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <div>
      <label>
        Enter Subway Station:
        <input
          type="text"
          value={stationName}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
      </label>
      <button onClick={handleSearchClick}>Search</button>
      {subwayData ? (
        <ul>
          {subwayData.map((arrival, index) => (
            <li key={index}>
              <p>도착 정보: {arrival.arrivalTime}</p>
              <p>도착 역: {arrival.stationName}</p>
              <p>호선: {arrival.lineName}</p>
              {/* 추가적인 필요한 정보들을 출력 */}
            </li>
          ))}
        </ul>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default SubwayArrivalData;