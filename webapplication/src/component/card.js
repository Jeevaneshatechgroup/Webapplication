import React from 'react';

const LaunchCards = ({ data }) => {
  // Style for the container that holds all cards
  const containerStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '20px',
    padding: '20px',
  };

  // Style for each individual card
  const cardStyle = {
    width: '300px',
    backgroundColor: '#fff',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
  };

  // Style for the content inside each card
  const cardContentStyle = {
    padding: '20px',
  };

  // Style for the title of the launch
  const titleStyle = {
    fontSize: '22px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#333',
  };

  // Style for the launch details paragraph
  const detailsStyle = {
    fontSize: '16px',
    color: '#666',
    lineHeight: '1.5',
    marginBottom: '20px',
  };

  // Adding hover effect and scale on active state using mouse events
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = 'translateY(-10px)';
    e.currentTarget.style.boxShadow = '0 10px 20px rgba(0, 0, 0, 0.2)';
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
  };

  const handleClick = (e) => {
    e.currentTarget.style.transform = 'scale(0.98)';
  };

  const handleAnimationEnd = (e) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div style={containerStyle}>
      {data.map((launch) => (
        <div
          key={launch.id}
          style={cardStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onClick={handleClick}
          onAnimationEnd={handleAnimationEnd}
        >
          <div style={cardContentStyle}>
            <h1 style={titleStyle}>{launch.name}</h1>
            <p style={detailsStyle}>{launch.details}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LaunchCards;
