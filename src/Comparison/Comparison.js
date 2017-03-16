import React from 'react';
import DistrictCard from '../DistrictCard/DistrictCard';

import './Comparison.css';

const Comparison = ({ card1, card2, repo, clearSelection }) => {

    if (card1 && !card2) {
      return (
        <div className='comparison'>
          <DistrictCard districtData={card1}/>
        </div>
      )
    } else if (card1 && card2) {
      const compareObject = repo.compareDistrictAverages(card1.location, card2.location)
      return (
        <div className='comparison'>
          <DistrictCard districtData={card1}/>
          <div className='compare-card'>
            <h3 className="location">{ card1.location} </h3>
            <p className="location-average">{ compareObject[card1.location]} %</p>
            <p className="average-compare"> -- { compareObject.compared} % -- </p>
            <h3 className="location">{ card2.location }</h3>
            <p className="location-average">{ compareObject[card2.location]} %</p>
            <button className='clear-btn'
                    onClick={() => clearSelection()}
                    type='submit'
                    value='clear'>clear</button>
          </div>
          <DistrictCard districtData={card2}/>
        </div>
      )
    }
    return <div></div>
}

export default Comparison;
