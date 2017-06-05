import React from 'react'

const ListingText = ({ business, officeNumber }) => {
  return (
      <div className="row">
        <div className="one-half column">
          <p>{business ? business: ''}</p>
        </div>
        <div className="one-half column">
          <p>{officeNumber ? officeNumber: ''}</p>
        </div>
      </div>
  );
}

export default ListingText
