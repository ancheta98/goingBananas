import React from "react";
import moment from "moment";

const SubmitButton = props => {
  function handleClick(e) {
    e.preventDefault();
    console.log(props.stateDate.format("L"), props.stateDays)
    var startDate = props.stateDate.format("L")
    startDate = startDate.split('/').join(',')
    var numDays = props.stateDays
    // var endDate = moment(startDate, "MM-DD-YYYY").add(numDays, 'days').format('L').split('/').join(',');
    // console.log(endDate)

    function processBananas (start, duration){
        //this function is going to predict the pricing
        var totalPrice = 0;
        for(var i = 0; i<= duration;i++){
            if(moment(start).add(i,"days").format("dddd") == "Saturday" || moment(start).add(i,"days").format("dddd") == "Sunday"){
                continue;
            }else if(moment(start).add(i,"days").format("D") <=7){
                totalPrice +=0.05
            }else if(moment(start).add(i,"days").format("D") >=8 && moment(start).add(i,"days").format("D")<=15){
                totalPrice +=0.1
            }else if(moment(start).add(i,"days").format("D") >=16 && moment(start).add(i,"days").format("D")<=22){
                totalPrice +=0.15
            }else if(moment(start).add(i,"days").format("D") >=23 && moment(start).add(i,"days").format("D")<=29){
                totalPrice +=0.2
            }else if(moment(start).add(i,"days").format("D") >=30){
                totalPrice +=0.25
            }
        }
        console.log(totalPrice.toFixed(2))
}
processBananas(startDate,numDays);
// we let applicants either make just the api endpoint if they want to be backend devs or a fullstack react app that uses that same api endpoint that the backend devs wouldve made.

  }


  return (
    <div>
      <button type="submit" onClick={handleClick}>
        Calculate!
      </button>
    </div>
  );
};

export default SubmitButton;
