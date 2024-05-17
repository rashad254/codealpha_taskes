let submit = document.querySelector('.year');
let text = document.getElementById('text');
let date = new Date();
let year =date.getFullYear()
let month =date.getMonth()
let day =date.getDate()
function getyear(){
    let mydate = new Date(submit.value);
    let myyear = mydate.getFullYear();
    let mymonth = mydate.getMonth();
    let myday = mydate.getDate();
    let equalyear = year-myyear;
    let equalmonth = month-mymonth;
    let equalday = day-myday;
    console.log(equalday);
    if(equalyear==0){
        if(equalmonth==0){
            if(equalday==0){
                text.innerText='He was born today';
            }else if(equalday<0){
                text.innerText='error';
            }else{
                text.innerText="You're " +equalday+ "days old";
            }
        }else if(equalmonth<0){
            text.innerText='error';
        }else{
            if(equalday==0 || equalday>0){
                text.innerText="You're " +equalmonth+ "months old";
            }else{
                equalmonth=equalmonth-1
                if(equalmonth==0){
                equalday=equalday+31
                text.innerText="You're " +equalday+ "days old";
                }else{
                    text.innerText="You're " +equalmonth+ "months old";
                }
            }
        }
    }else if(equalyear>0){
        if(equalmonth>0){
            text.innerText="Your age is "+equalyear+" years.";
        }else if(equalmonth<0){
            equalyear = equalyear-1
            if(equalyear==0){
                equalmonth = equalmonth +12
                text.innerText="You're " +equalmonth+ "months old";
            }else{
            text.innerText="Your age is "+equalyear+" years.";
            }
        }else if(equalmonth==0){
            if(equalday==0 || equalday>0){
            text.innerText="Your age is "+equalyear+" years.";
            }else{
            equalyear = equalyear-1
            if(equalyear==0){
                equalmonth = equalmonth +11
                text.innerText="You're " +equalmonth+ "months old";
            }else{
                text.innerText="Your age is " +equalyear+ "years.";
            }
            }
        }
    }else{
        text.innerText='error';
    }
}