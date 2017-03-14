export default class DistrictRepository {

  constructor (data) {
    // maybe break the data reduce into it's own function??
    this.rawData = data
    this.data = data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] = []
      }
      acc[obj.Location].push(obj)
      return acc
    }, {})
  }

  findByName (nameToFind) {
    if (nameToFind) {
      const key = Object.keys(this.data).find(key => nameToFind.toLowerCase() === key.toLowerCase())
      if(key) {
        const dateScoreData = this.data[key].reduce((result, current) => {
          if(typeof current.Data === "number"){
            result[current.TimeFrame] = current.Data.toFixed(3) * 1
          } else {
            result[current.TimeFrame] = 0
          }
          return result
        }, {})
        return { location:key, data:dateScoreData }
      }
    }
  }

  findAllMatches (nameToFind) {
    if (nameToFind) {
      const key = Object.keys(this.data).filter(key => key.toLowerCase().includes(nameToFind.toLowerCase()))
      return key
    }
    return Object.keys(this.data)
  }
}
