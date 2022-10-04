import QrScanner from "qr-scanner";
import "./style.css";

const videoElem = document.querySelector("#camara");
const pElem = document.querySelector("#result");

const qrScanner = new QrScanner(
  videoElem,
  (result) => {
    console.log("decoded qr code: ", result);
    pElem.innerHTML = JSON.stringify(result);
  },
  {
    highlightScanRegion: true,
    returnDetailedScanResult: true,
    highlightCodeOutline: true,
  }
);

const btnStart = document.querySelector("#start");
const btnStop = document.querySelector("#stop");

btnStart.addEventListener("click", () => {
  qrScanner.start();
});

btnStop.addEventListener("click", () => {
  qrScanner.stop();
});
