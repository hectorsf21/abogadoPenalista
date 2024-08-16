import React from 'react';

export default function Layout({ id = '', children }) {
  return (
    <>
      <div id={id} className="wrapper">
        {children}
      </div>
    </>
  );
}
