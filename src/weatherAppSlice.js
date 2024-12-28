import { blue } from "@mui/material/colors";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Asynchronous Thunk to fetch weather data based on geolocation
export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async () => {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            try {
              const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=12e6dde49bf91cea55511a747979199f`
              );

              // Process the weather data
              const weatherData = {
                name: response.data.name,
                number: Math.round(response.data.main.temp - 272.15), // Convert from Kelvin to Celsius
                min: Math.round(response.data.main.temp_min - 272.15),
                max: Math.round(response.data.main.temp_max - 272.15),
                description: response.data.weather[0].description,
                icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
              };

              resolve(weatherData); 
            } catch (error) {
              reject("Failed to fetch weather for your location");             }
          },
          (error) => {
            
            if (error.code === error.PERMISSION_DENIED) {
              axios
                .get(
                  "https://api.openweathermap.org/data/2.5/weather?lat=24.774265&lon=46.738586&appid=12e6dde49bf91cea55511a747979199f"
                )
                .then((response) => {
                  const weatherData = {
                    name: response.data.name,
                    number: Math.round(response.data.main.temp - 272.15), // Convert from Kelvin to Celsius
                    min: Math.round(response.data.main.temp_min - 272.15),
                    max: Math.round(response.data.main.temp_max - 272.15),
                    description: response.data.weather[0].description,
                    icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
                  };
                  resolve(weatherData)
                })
                .catch((error) => {
                  reject(error.message); 
                });
            } else {
              reject(error.message); 
            }
          }
        );
      });
    } else {
      try {
        const response = await axios.get(
          "https://api.openweathermap.org/data/2.5/weather?lat=24.774265&lon=46.738586&appid=12e6dde49bf91cea55511a747979199f"
        );
        const weatherData = {
          name: response.data.name,
          number: Math.round(response.data.main.temp - 272.15), 
          min: Math.round(response.data.main.temp_min - 272.15),
          max: Math.round(response.data.main.temp_max - 272.15),
          description: response.data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
        };
        return weatherData; 
      } catch (error) {
        throw new Error("Failed to fetch weather for Riyadh"); 
      }
    }
  }
);

// Redux Slice to handle weather data
const weatherApiSlice = createSlice({
  name: "weatherAPI",
  initialState: {
    result: "empty",
    
   weather:{

   } 
   ,isloading:false,
  },
  reducers:{


    changeResult:(state,action)=>{
state.result="Change";


    },
  },
  extraReducers(builder){
    builder.addCase("weatherAPI/fetchWeather/pending",(state,action)=>{


      console.log("recived weatherAPI/fetchWeather/pending")
      state.isloading=true
      console.log("=",state,action)
    }).addCase(fetchWeather.fulfilled,(state,action)=>{

      state.isloading=false;

      state.weather=action.payload;
    }).addCase(fetchWeather.rejected,(state,action)=>{

      state.isloading=false;
    })
  }
    
})

export const { changeResult } = weatherApiSlice.actions;
export default weatherApiSlice.reducer;
