import FirstCard from "./Page/Main/FirstCard";
import AccountNumber from "./Page/Main/AccountNumber";
import Calendar from "./Page/Main/Calendar";
import Family from "./Page/Main/Family";
import Introduction from "./Page/Main/Introduction";
import Map from "./Page/Main/Map";
import MiniGallery from "./Page/Main/MiniGallery";
import WiseSaying from "./Page/Main/WiseSaying";

function App() {
  return (
    <>
      <FirstCard />
      <WiseSaying />
      <Introduction />
      <Family />
      <Calendar />
      <AccountNumber />
      <MiniGallery />
      <Map />
    </>
  );
}

export default App;
