
const data =[
            {principal:2500, time:1.8},
            {principal:1000, time:5},
            {principal:3000, time:1},
            {principal:2000, time:3}
]
function interestCalculator(int){
    let interestData =[];
    let interest;
     data.forEach(x=>{
        let rate;
        if(x.principal >=2500 && x.time >1 && x.time<3){
            x.rate =3;     
        }
        else if(x.principal >=2500 && x.time >=3){
            x.rate =4;       
        }
        else if(x.principal <2500 && x.time <=1 ){
            x.rate =2; 
             
        } else{
            x.rate = 1;     
        }
        interest =(x.principal * x.rate * x.time) /100; 
    interestData.push(
        {principal: x.principal,
        rate: x.rate,
        time: x.time,
        int: interest})
    }) 
    console.log(interestData);
    return interestData;
 }      
    interestCalculator(data);          


