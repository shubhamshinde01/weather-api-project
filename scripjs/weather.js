const searchBtn = document.getElementById("search-btn");
const cityInput= document.getElementById("city-input");
const location=document.getElementByClass("location");
const temp=document.getElementByClass("teamp");
const sup= document.getElementById("sup")
const Info=async(event)=>{
    event.preventDefault();
    let cityValue = cityInput.value;
        if (cityValue==="") {
        location.innerText=`Please Enter The City`;
    } else {
      try {
        let url= `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&unit=matric&appid=023a4657da503540a62e44f84ca58201`
        const responce = await fetch(url);
        const data=await responce.json();
        const arrData=[data];
        //console.log(arrData);
        teamp.innerText=`${arrData[0].main.temp+sup}`;
        location.innerText=`${arrData[0].name},${arrData[0].sys.country}`;  

        console.log(data);
      } catch  {
        location.innerText=`Please Use Proper Name Of The City`;
      }
    }
}

searchBtn.addEventListener('click',Info);
