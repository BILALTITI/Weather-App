import logo from "./logo.svg";
import "./App.css";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";
//  Material UI Container
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import CloudIcon from "@mui/icons-material/Cloud";
import { colors, createTheme, ThemeProvider } from "@mui/material";
import CircularProgress from '@mui/material/CircularProgress';

import Button from "@mui/material/Button";
// external laibrary
import axios from "axios";
import moment from "moment";

import { useTranslation } from "react-i18next";
import "moment/min/locales";

//redux Import
import {changeResult}from"./weatherAppSlice"
import { useSelector, useDispatch } from "react-redux";
import {fetchWeather} from "./weatherAppSlice"
moment.locale("ar");
const theme = createTheme({
  typography: {
    fontFamily: ["IBM"],
  },
});
let cancelAxios = null;
function App() {
  // redux Code

  const dispatch = useDispatch();
  const result = useSelector((State) => {
    return State.result;
  });
// لإضافة المتغير lon (خط الطول)

  const { t, i18n } = useTranslation();
  //============================== STATE ==============================//
  const [Date, setDate] = useState("");
   
const temp=useSelector((state)=>{

return state.weather.weather

})
  const [local, setLocal] = useState("ar");
  useEffect(() => {

    // dispatch(
    //   changeResult()
    // )

    dispatch(fetchWeather())
    i18n.changeLanguage("ar");
  }, []);

  const isloading=useSelector((state)=>{

   return state.weather.isloading;
  })
  // Fetch the weather data and get geolocation on component mount
  useEffect(() => {
    setDate(moment().format("LL"));

     
  }, []);

  function handleLanguageClick() {
    if (local === "en") {
      setLocal("ar");
      i18n.changeLanguage("ar");
      moment.locale("ar");
    } else {
      setLocal("en");
      i18n.changeLanguage("en");
      moment.locale("en");
    }
    setDate(moment().format("LL"));
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Container maxWidth="sm">
          {/* content Container */}
          <div
            style={{
              height: "100vh",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
            }}
          >
            {/* card  */}
            <div
              dir={local === "ar" ? "rtl" : "ltr"}
              style={{
                background: "rgb(28 52 91 / 36%)",
                color: "white",
                padding: "10px",
                borderRadius: "15px",
                boxShadow: "0px 11px 1px  rgba(0,0,0,0.05)",
                width: "100%",
              }}
            >
              {/* Content */}
              <div>
                {/* City &time */}
                <div
                  dir={local === "ar" ? "rtl" : "ltr"}
                  style={{
                    display: "flex",
                    alignItems: "end",
                    justifyContent: "start",
                    marginRight: "20px",
                  }}
                >
                  <Typography gutterBottom variant="h2">
                    {t(temp.name)}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="h5"
                    style={{ marginRight: "20px" }}
                  >
                    {t(Date)}
                  </Typography>
                </div>
                <hr />
                {/* Container Of Degree & Cloud Icon  */}
                <div
                  style={{ display: "flex", justifyContent: "space-around" }}
                >
                  {/* Degree & description */}
                  <div>
                    {/* Temp */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      {isloading?<CircularProgress style={{color:"white"}}/>:""}                       
                      <Typography
                        gutterBottom
                        variant="h1"
                        style={{ textAlign: "right" }}
                      >
                        {temp.number}
                      </Typography>
                      <img src={temp.icon} />
                    </div>

                    <Typography gutterBottom variant="h6">
                      {t(temp.description)}
                    </Typography>

                    {/* min & max degree */}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <h5>
                        {t("min")} : {temp.min}
                      </h5>
                      <h6 style={{ margin: "0PX 5PX" }}>|</h6>
                      <h5>
                        {" "}
                        {t("max")} :{temp.max}
                      </h5>
                    </div>
                  </div>

                  <CloudIcon
                    style={{
                      fontSize: "180px",
                      color: "white",
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Language Button */}
            <Button
              dir={local === "ar" ? "rtl" : "ltr"}
              variant="text"
              style={{
                color: "white",
                display: "flex",
                justifyContent: "end",
                width: "100%",
                marginTop: "10px",
              }}
              onClick={handleLanguageClick}
            >
              {local === "en" ? "Arabic" : "English"}
            </Button>
          </div>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
