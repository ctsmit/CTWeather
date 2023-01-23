import { help } from "../utils"

export const HourlyPrecip = ({ hourly }) => {
  let next6Hours = hourly.splice(1,6)
  console.log(hourly);
  console.log(next6Hours);
  return (
    <>
      {next6Hours.map((hour) => {
        return (
          <h4>{help.getHour(hour.dt)}</h4>
        )
      })}
    </>
  )
}
