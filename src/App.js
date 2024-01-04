import './App.css';
import AttendanceReport from './components/AttendanceReport/AttendanceReport';
import MainPage from './components/MainPage/MainPage';
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<MainPage />}></Route>
          <Route path="/attendance-report" element={<AttendanceReport />}></Route>
      </Routes>
    </div>
  );
}

export default App;
