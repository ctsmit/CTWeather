export const help = {
  getHour(dt) {
    let time = new Date(dt * 1000).toLocaleString([], { timeStyle: "short" })
    let hour
    time.length === 7 ? (hour = time.slice(0, 1) + time.slice(-3)) : (hour = time.slice(0, 2) + time.slice(-3))
    return hour.toLowerCase()
  },
  getDayAndTime() {
    let date = new Date()
    return date.toLocaleDateString([], { weekday: "long" }) + " " + date.toLocaleString([], { timeStyle: "short" })
  },
  getSunrise(s) {
    let diff = Math.round((s * 1000 - Date.now()) / 1000 / 60 / 60)
    let time = new Date(s * 1000).toLocaleString([], { timeStyle: "short" })
    return { time, diff }
  },
  getSunset(s) {
    let diff = Math.round((s * 1000 - Date.now()) / 1000 / 60 / 60)
    let time = new Date(s * 1000).toLocaleString([], { timeStyle: "short" })
    return { time, diff }
  },

  capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
  },
  isUVHigh(i) {
    switch (true) {
      case i > 0 && i < 3:
        return "Low"
      case i >= 3 && i < 6:
        return "Moderate"
      case i >= 6 && i < 7:
        return "High"
      case i >= 8 && i < 11:
        return "Very High"
      case i >= 11:
        return "Extreme"
      default:
        return "DEAD"
    }
  },
  isAirBad(api) {
    switch (api) {
      case 1:
        return "Good"
      case 2:
        return "Fair"
      case 3:
        return "Moderate"
      case 4:
        return "Poor"
      case 5:
        return "Very Poor"
      default:
        return "DEAD"
    }
  },
}
