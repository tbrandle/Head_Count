export default class DistrictRepository {
  constructor (data) {
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

    // const results = Object.keys(this.data).filter((key) => {
    //   return location.toLowerCase() === key.toLowerCase()
    // })
    //{location: ??, data: { "2004": 0.302, "2005": 0.267...}}
  }
}


