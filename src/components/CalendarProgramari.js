import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import { ViewState } from "@devexpress/dx-react-scheduler";
import {
  Scheduler,
  WeekView,
  Toolbar,
  DateNavigator,
  Appointments,
} from "@devexpress/dx-react-scheduler-material-ui";
import PropTypes from "prop-types";

const CalendarProgramari = ({ appointments }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  return (
    <Paper className="my-calendar">
      <Scheduler data={appointments} height={500}>
        <ViewState
          currentDate={currentDate}
          onCurrentDateChange={setCurrentDate}
        />
        <WeekView />
        <Toolbar />
        <DateNavigator />
        <Appointments />
      </Scheduler>
    </Paper>
  );
};

CalendarProgramari.prototypes = {
  programari: PropTypes.object,
};
export default CalendarProgramari;
