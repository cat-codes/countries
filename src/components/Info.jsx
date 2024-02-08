import React from 'react'
import './Info.css'
import { GetData } from './DataProvider'
// import BackButton from './BackButton'

const Info = () => {
  const { data } = GetData();

  return (
    <div id='containerAll'>
      {/* <BackButton /> */}
        <div id='containerInfo'>
          <div id='flag'></div>
          <div id='infoPart'>
            <div id='infoMain'>
              <div className='infoTitle'>
                
              </div>
              <div id='infoBody' className='pRegInfo'>
                <span className='pBoldInfo'>Native Name:</span>
                <br />
                <span className='pBoldInfo'>Population:</span>
                <br />
                <span className='pBoldInfo'>Region:</span>
                <br />
                <span className='pBoldInfo'>Sub Region:</span>
                <br />
                <span className='pBoldInfo'>Capital:</span>
                <br />
                <span className='pBoldInfo'>Top Level Domain:</span>
                <br />
                <span className='pBoldInfo'>Currencies:</span>
                <br />
                <span className='pBoldInfo'>Languages:</span>
              </div>
            </div>
            <div id='notes'>
              <div className='pBoldInfo'>Border Countries:</div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Info;
