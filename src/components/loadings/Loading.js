import React from 'react';
import './loading.scss'

const Loading = ({ loading = false }) => {
  if (!loading) return <></>;
  return (
    <div className="loader-wrapper">
      <div id="loader"></div>
    </div>
  );
}

export default Loading;