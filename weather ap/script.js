const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName =  document.getElementById("city-name")
const cityTime = document.getElementById("city-time")
const  cityTemp = document.getElementById("city-temerature ")


async function getData(cityName) {
    const response = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=c51a469e24354341bf6135400262401&q=${cityName}&aqi=yes`
    );
    return response.json();
}

button.addEventListener("click", async () => {
    const value = input.value;
    const result = await getData(value);
    cityName.innerText = `${result.location.name},${result.location.country}`
    cityTime.innerText = result.location.localtime
    cityTemp.innerText = result.current.temp_c
});
