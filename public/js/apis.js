// const submit,cityget,cityset,temp_status,temp_value,datahide;
const submit = document.getElementById("submit");
const cityget = document.getElementById("cityget");
const cityset = document.getElementById("cityset");
const temp_status = document.getElementById("temp_status");
const temp_value = document.getElementById("temp");
const datahide = document.querySelector(".middle_layer")

const CityTemp = async (e) => {
    e.preventDefault();
    let city = cityget.value;
    if(city === "")
    {
        cityset.innerText = `please enter city here before prssed search button`;
        datahide.classList.add("data_hide");
    }
    else
    {
       try{
            let wapiurl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bce7220769ea5a0d9f35e340a024b6c4`;
            let response = await fetch(wapiurl);
            let data = await response.json();
            let arrdata = [data];
            
            cityset.innerText = `${arrdata[0].name},${arrdata[0].sys.country}`;
            temp_value.innerText = arrdata[0].main.temp;
            const tempMood = arrdata[0].weather[0].main;
            if (tempMood == "Clear") {
                temp_status.innerHTML =
                "<i class='fas fa-sun' style='color:#eccc68'></i>";
            } else if (tempMood == "Clouds") {
                temp_status.innerHTML =
                "<i class='fas fa-cloud' style='color:#f1f2f6'></i>";
            } else if (tempMood == "Rain") {
                temp_status.innerHTML =
                "<i class='fas fa-cloud-rain' style='color:#a4b0be'></i>";
            } else {
                temp_status.innerHTML =
                "<i class='fas fa-clouds' style='color:#f1f2f6'></i>";
            }
            datahide.classList.remove("data_hide");
            city = "";
       }
       catch{
           city = "";
           datahide.classList.add("data_hide");
       } 
    }
};
submit.addEventListener("click", CityTemp);