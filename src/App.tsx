import React, {useState} from 'react';
import './App.scss';
import Button from './components/Button'
import HourCard from './components/HourCard'

const App = () => {
  const [currentDay, setCurrentDay] = useState<number>()
  const [currentHour, setCurrentHour] = useState<number>()

  //lets assume this data comes in from an API, and we've already set
  //set it up in the state 
  let hours = [1, 2, 3, 4]
  let days = [1, 2, 3]

  return (
    <div className="App">
      <div className="header">
        {!currentDay && <div className="zeroState">Choose a date, then</div>}
        {currentDay &&  <div>You've selected day {currentDay},</div>}
        {!currentHour && <div className="zeroState">choose hour</div>}
        {currentHour &&  "hour " + currentHour + "."}
      </div>
      <div className="daysWrapper">
        {days.map((day: number) => (
            <Button
            text={"Day " + day}
            onClick={() => {setCurrentDay(day)}}
            isSelected={currentDay == day ? true : false}
            />    
          ))
        }
      </div>
      <div className="hoursWrapper">
        {hours.map((hour: number) => (
          <HourCard hour={hour} 
          changeHour={()=> {setCurrentHour(hour)}} 
          isSelected={currentHour == hour ? true : false}
          />
        ))}
      </div>
    </div>
  );

}

export default App;
