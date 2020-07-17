import React from 'react';
import CalendarBoard from './components/calendarBoard/container';
import ToolBar from './components/toolbar/container';
import AddScheduleDialog from './components/dialog/container';

function App() {
  return (
    <div className="App">
      <ToolBar/>
      <CalendarBoard/>
      <AddScheduleDialog/>
    </div>
  );
}

export default App;
