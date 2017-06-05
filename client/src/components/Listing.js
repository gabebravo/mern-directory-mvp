import React from 'react'
import ListingFloor from './ListingFloor'
import ListingTextHeader from './ListingTextHeader'
import ListingText from './ListingText'

const Listing = ({ listing }) => {
  let offices = [];

  if(listing.list) {
    offices = printText(listing.list);
  }

  return (
    <div>
      {
        listing.floor === 'loading' && <div className="loader"></div>
      }
      <img className="image" src={listing.img} alt=""/>
      <div className="text">
        <ListingFloor floor={listing.floor} />
        <ListingTextHeader />
        {offices}
      </div>
    </div>
  );
}

const printText = arr => {
  return arr.map( (office, index) => {
    return <ListingText key={index} business={office.name} officeNumber={office.location} />
  });
}

export default Listing
