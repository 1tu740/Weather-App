const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');
const data_hide = document.querySelector('.middle_layer')
const tempdegree = document.getElementById('tempdegree');



const getInfo = async(event) =>{
    event.preventDefault();

    let cityval = cityName.value;

    if(cityval === ""){

        city_name.innerText = `please write the name before search`
        data_hide.classList.add('data_hide');

    }
    else{
        try{
            let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=7beea9f0411a8165c7fbe46846a3120f`
            const response = await fetch(url);
            const data = await response.json();
            const arrdata = [data];

            tempdegree.innerText = arrdata[0].main.temp;
            city_name.innerText = `${arrdata[0].name}  , ${arrdata[0].sys.country}`;
            let tempMood = arrdata[0].weather[0].main;


            if(tempMood == "Clear"){
                temp_status.innerHTML=
                "<i class='fas fa-sun' style='color:#eccc68;'></i>"
            }  else if(tempMood == "Rain"){
                temp_status.innerHTML=
                "<i class='fas fa-rain' style='color:f1f2f6;'></i>"
            }  else if(tempMood == "Clouds"){
                temp_status.innerHTML=
                "<i class='fas fa-cloud-rain' style='color:#a4b0be;'></i>"
            }  else{
                temp_status.innerHTML=
                "<i class='fas fa-cloud' style='color:#f1f2f6;'></i>"
            }
            data_hide.classList.remove('data_hide');
        }
        
        catch
        {
            city_name.innerText = `please enter the correct city name`
            data_hide.classList.add('data_hide');
        }
   

    
    }
   
}

submitBtn.addEventListener('click' , getInfo);