import './App.css';
import awning from './images/awning.png'
import Card from './components/Card'
import img1_1 from './images/1-1.webp'
import img1_2 from './images/1-2.jpg'
import img1_3 from './images/1-3.webp'
import img2_1 from './images/2-1.jpg'
import img2_2 from './images/2-2.jpg'
import img2_3 from './images/2-3.jpg'
import img3_1 from './images/3-1.jpg'
import img3_2 from './images/3-2.jpg'
import img3_3 from './images/3-3.jpg'
import img4_1 from './images/4-1.jpg'
import img4_2 from './images/4-2.jpg'
import img4_3 from './images/4-3.jpg'

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <img src={awning} />
        <h1>Food Truck Favorites</h1>
      </div>

      <div className='body'>
        <Card img={img1_1} name='Birria-Landia' type='Mexican' link=''/>
        <Card img={img1_2} name='Mysttik Masala' type='Indian' link=''/>
        <Card img={img1_3} name='The Halal Guys' type='Middle Eastern' link=''/>
        <Card img={img2_1} name='NY Dosas' type='Vegetarian' link=''/>
        <Card img={img2_2} name='Jerk Pan' type='Jamaican' link=''/>
        <Card img={img2_3} name='Tong' type='Bangladeshi' link=''/>
        <Card img={img3_1} name='King Souvlaki of Astoria' type='Greek' link=''/>
        <Card img={img3_2} name="Ling's Sweet Mini Cakes" type='Chinese' link=''/>
        <Card img={img3_3} name="Uncle Gussy's" type='Greek' link=''/>
        <Card img={img4_1} name='Patacon Pisao' type='Venezuelan' link=''/>
        <Card img={img4_2} name="Mom's Mono" type='Tibetan' link=''/>
        <Card img={img4_3} name='Makina Cafe' type='Ethiopian' link=''/>
      </div>
      
    </div>
  )
}

export default App