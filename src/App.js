import { useEffect, useState } from 'react';
import './App.scss';
import './assets/styles/main.scss';
import { AppDescription } from './cmps/AppDescription/AppDescription';
import { AppInfo } from './cmps/AppInfo/AppInfo';
import romJSON from './data/rom/rom.json';


function App() {
  const [romData, setData] = useState(null);
  useEffect(() => {
    setData(prevState => prevState = romJSON);
  }, [])



  return (
    romData && <div className="app-container app">
      <AppInfo romData={romData} />
      <AppDescription romData={romData} />
    </div>
  );
}

export default App;
