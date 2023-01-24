import { faCircle } from "@fortawesome/free-regular-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useEffect, useState } from "react"
import { help } from "../utils"

export const HourlyPrecip = ({ hourly }) => {
  const [sixHours, setHourly] = useState()

  useEffect(() => {
    setHourly(hourly.splice(1, 6))
  }, [hourly])

  return (
    sixHours && (
      <>
        <p className="rain-chance">Chance of Rain</p>
        <div className="six-hour-container">
          {sixHours.map((hour, i) => {
            let iconCode = hour.weather[0].icon
            let iconURL = `http://openweathermap.org/img/w/${iconCode}.png`
            let precChance = Math.round(hour.pop * 100)

            return (
              <div key={i + 4} className="hour-container">
                <h4 key={i}>{help.getHour(hour.dt)}</h4>
                <img key={i + 1} src={iconURL} height="32" alt="oop" />
                <h4 key={i + 3}>
                  {Math.round(hour.temp)}
                  <FontAwesomeIcon className="degree1" icon={faCircle} />
                </h4>
                <h4 key={i + 2}>{precChance}%</h4>
              </div>
            )
          })}
        </div>
      </>
    )
  )
}
