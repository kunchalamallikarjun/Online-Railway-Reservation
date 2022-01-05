import React from 'react'
import maharaja from '../assets/maharaja.jpg'
import Royal from '../assets/Royal.jpg'
import Rajadani from '../assets/Rajadani.jpg'

const Destinations = () => {
  return (
    <section className='destinations'>
      <h3>Book Your Trains</h3>
      <div className='grid'>
        <div>
          <a href='https://www.the-maharajas.com/'><img src={maharaja} alt='destination-1' /></a>
          <h3>Maharaja express</h3>
          <p>
          Maharajas’ Express, operated by IRCTC is the most expensive luxury train in India. This train functions between October and April and covers around 12 destinations, mostly in Rajasthan.
          </p>
        </div>

        <div>
          <a href='https://www.royal-rajasthan-on-wheels.com/tariff.html'><img src={Royal} alt='destination-2' /></a>
          <h3>Royal Rajasthan on Wheels</h3>
          <p>
          A sophisticated luxury train that started in 2009, Royal Rajasthan on Wheels is truly extraordinary. This train takes a similar route as Palace on Wheels and offers a 7 days/8 nights’ package through the beautiful Rajasthan.
          </p>
        </div>

        <div>
          <a href='https://www.yatra.com/indian-railways/rajdhani-express-12433-train'><img src={Rajadani} alt='destination-3' /></a>
          <h3>Rajdhani Express</h3>
          <p>
          The Rajdhani Express is a series of passenger train service in India operated by Indian Railways connecting the national capital New Delhi with the capitals or largest city of various states. The word Rajdhani has been derived from the Devanagri script, which means Capital in English.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Destinations
