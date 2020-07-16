import React from 'react';
import CalendarBoard from './components/calendarBoard/container';
import ToolBar from './components/toolbar/container';

function App() {
  return (
    <div className="App">
      <ToolBar/>
      <CalendarBoard/>
    </div>
  );
}

export default App;
