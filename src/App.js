import React from 'react';
import CalendarBoard from './components/calendarBoard/container';
import ToolBar from './components/toolbar/container';
import AddScheduleDialog from './components/dialog/container';
import DeleteUserDialog from './components/deleteUserDialog/container';

function App() {
  return (
    <div className="App">
      <ToolBar/>
      <CalendarBoard/>
      <AddScheduleDialog/>
      <DeleteUserDialog/>
    </div>
  );
}

export default App;
