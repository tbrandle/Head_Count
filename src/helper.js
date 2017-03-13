export default class DistrictRepository {
  constructor (data) {
    this.data = data.reduce((acc, obj) => {
      if (!acc[obj.Location]) {
        acc[obj.Location] =[]
      }
      acc[obj.Location].push(obj)
      return acc
    }, {})
  }


}
