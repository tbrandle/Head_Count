export default class DistrictRepository {

  constructor (data) {
    this.data = data.reduce((acc, obj) => {
                  if (!acc[obj.Location]) {
                    acc[obj.Location] = [];
                  }
                  acc[obj.Location].push(obj)
                  return acc;
                }, {})
  }

  findByName (nameToFind) {
    if (nameToFind) {
      const key = Object.keys(this.data).find(key => nameToFind.toLowerCase() === key.toLowerCase())
      if(key) {
        const dateScoreData = this.data[key].reduce((result, current) => {
          typeof current.Data === "number"
            ? result[current.TimeFrame] = current.Data.toFixed(3) * 1
            : result[current.TimeFrame] = 0;
          return result
        }, {})
        return { location:key, data:dateScoreData }
      }
    }
  }

  findAllMatches (nameToFind) {
    return nameToFind
         ? Object.keys(this.data).filter(key => key.toLowerCase().includes(nameToFind.toLowerCase()))
         : Object.keys(this.data);
  }

  findAverage(nameToFind) {
    const location = this.findByName(nameToFind);
    const sum = Object.keys(location.data).reduce((acc, key) => {
      return location.data[key] + acc
    },0)
    const totalAverage = sum / Object.keys(location.data).length
    return totalAverage.toFixed(3) * 1
  }

  compareDistrictAverages(district1, district2){
    const averageOne = (this.findAverage(district1)* 100).toFixed(2)*1
    const averageTwo = (this.findAverage(district2)* 100).toFixed(2)*1
    let districtAverage = [averageOne, averageTwo].sort()
    let compared = districtAverage.reduce((acc, average) => (acc / average) *100).toFixed(2)*1
    const obj = { compared }
    obj[district1] = averageOne
    obj[district2] = averageTwo
    return obj;
  }
}
