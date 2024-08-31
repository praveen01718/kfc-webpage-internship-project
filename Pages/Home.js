import React from 'react'
import './Home.css'
import food1 from '../Image/CAT99.jpg'
import food2 from '../Image/CAT86.jpg'
import food3 from '../Image/CAT289.jpg'
import food4 from '../Image/CAT287.jpg'
import food5 from '../Image/CAT228.jpg'
import food6 from '../Image/CAT224.jpg'
import food7 from '../Image/CAT213.jpg'
import food8 from '../Image/CAT158.jpg'
import offer from '../Image/web_1440x396px.webp'

const Home = () => {
  return (
    <div>
    <section className='combo'>
      <img src={offer} alt=''/>
      </section>

      <section className='add1'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='card'>
            <img src={food1} alt=''/>
            <div className='card-title'>
              BURGERS
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
            <div className='card'>
            <img src={food2} alt=''/>
            <div className='card-title'>
              CHICKEN BUCKETS
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
            <div className='card'>
            <img src={food3} alt=''/>
            <div className='card-title'>
              INTERNATIONAL BURGER FEST
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
            <div className='card'>
            <img src={food4} alt=''/>
            <div className='card-title'>
              MATCH DAY COMBOS
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

      <section className='add2'>
        <div className='container'>
        <div className='row'>
          <div className='col-lg-3'>
            <div className='card'>
            <img src={food5} alt=''/>
            <div className='card-title'>
              VALUE LUNCH SPECIALS
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
            <div className='card'>
            <img src={food6} alt=''/>
            <div className='card-title'>
              VALUE SNACKERS
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
            <div className='card'>
            <img src={food7} alt=''/>
            <div className='card-title'>
              RICE BOWLZ
            </div>
          </div>
        </div>
        <div className='col-lg-3'>
            <div className='card'>
            <img src={food8} alt=''/>
            <div className='card-title'>
              BOX MEALS
            </div>
          </div>
        </div>
        </div>
        </div>
      </section>

    
  
    </div>
  )
}

export default Home