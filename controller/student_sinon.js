class Student{
    constructor(){

    }
    home(number){
        let data=this.getInfo(number,1);
        this.getInfo(number,3)
        return data+5;
    }
    userId(){
        return 15;
    }
    getInfo(number,status){
        return number+status
    }
    finalMarks(total){
        let ext=this.getExternal(total);
        let int=this.getInternal(total);

        let finalSum=ext+int+10;
        return finalSum;
    }
    getExternal(total){
        return total+1;
    }
    getInternal(total){
        return total-1;
    }
    dbData(){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve(10)
            }, 1500);
        })
    }
}
export default Student