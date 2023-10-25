const apiKey="Add your key here"
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("input");
  const city = document.getElementById("city");
  const degree = document.getElementById("degree");
  const humidity = document.getElementById("humidity");
  const windSpeed = document.getElementById("windSpeed");

  input.addEventListener("keyup", (event) => {
    if (event.key === "Enter") {
      fetchData(input.value)
        .then((data) => {
          city.innerHTML = data.location.name;
          degree.innerHTML = data.current.temp_c;
          humidity.innerHTML = data.current.humidity;
          windSpeed.innerHTML = data.current.wind_kph;
        })
        .catch((error) => {
          alert("Wrong Input");
        });
    }
  });
});

function onBtn() {
  fetchData(input.value)
    .then((data) => {
      city.innerHTML = data.location.name;
      degree.innerHTML = data.current.temp_c;
      humidity.innerHTML = data.current.humidity;
      windSpeed.innerHTML = data.current.wind_kph;
    })
    .catch((error) => {
      alert("Wrong Input");
    });
}

const fetchData = async (value) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&api=yes&q=${value}`
    );
    const jsonData = await response.json();
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
