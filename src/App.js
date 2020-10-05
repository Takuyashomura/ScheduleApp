import React from 'react';
import CalendarBoard from './components/calendarBoard/container';
import ToolBar from './components/toolbar/container';
import AddScheduleDialog from './components/dialog/container';
import CurrentScheduleDialog from './components/currentScheduleDialog/container';
import DeleteDialog from './components/deleteDialog/container';

function App() {
  return (
    <div className="App">
      <ToolBar/>
      <CalendarBoard/>
      <AddScheduleDialog/>
      <CurrentScheduleDialog/>
      <DeleteDialog/>
    </div>
  );
}

export default App;
