import './App.css';
import awning from './images/awning.png'
import Card from './components/Card'
import img1_1 from './images/1-1.jpg'
import img1_2 from './images/1-2.jpg'
import img1_3 from './images/1-3.jpg'
import img2_1 from './images/2-1.jpg'
import img2_2 from './images/2-2.jpg'
import img2_3 from './images/2-3.jpg'
import img3_1 from './images/3-1.jpg'
import img3_2 from './images/3-2.jpeg'

const App = () => {

  return (
    <div className="App">
      <div className='header'>
        <img src={awning} />
        <h1>Food and Drinks at UB</h1>
      </div>

      <div className='body'>
        <Card img={img1_1} name="Austin's Kitchen" type='Korean' link='https://order.toasttab.com/online/austinskitchen'/>
        <Card img={img1_2} name='Dancing Chopsticks' type='Chinese' link='https://www.dancingchopsticksonline.com/'/>
        <Card img={img1_3} name='Poke Factory' type='Hawaiian' link='https://stepoutbuffalo.com/business/restaurant-poke-factory/'/>
        <Card img={img2_1} name='Subway' type='American' link='https://restaurants.subway.com/united-states/ny/amherst/520-lee-entrance'/>
        <Card img={img2_2} name='Kung Fu Tea' type='Chinese' link='https://www.kungfutea.com/'/>
        <Card img={img2_3} name='Young Chow' type='Chinese' link='https://youngchowbuffalo.com/'/>
        <Card img={img3_1} name='LaRosa Pizza' type='Italian' link='https://larosanyp.com/'/>
        <Card img={img3_2} name="Starbucks" type='American' link='https://www.starbucks.com/store-locator/store/16073/the-commons-suny-buffalo-520-lee-entrance-buffalo-ny-142282567-us'/>
      </div>
      
    </div>
  )
}

export default App