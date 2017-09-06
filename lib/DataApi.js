
export default class DataApi{
    constructor(rawData){
        this.rawData = rawData;
    }

    mapIntoObjects(array){
        return array.reduce((acdcumulate,current) => {
          acdcumulate[current.id] = current;
          return acdcumulate;
        },{});
    }
    getArticles(){
        return this.mapIntoObjects(this.rawData.getArticles());
    }

    getAuthors(){
        return this.mapIntoObjects(this.rawData.getAuthors());
    }

}