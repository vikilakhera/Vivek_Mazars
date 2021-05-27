import React, {useState} from 'react';
import Paper from '@material-ui/core/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  ViewSwitcher,
  MonthView,
  DayView,
  TodayButton,
  DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';

import { appointments } from './scheduleData';
const Demo = () => {
  const [data, setData] = useState(appointments);
  const [currentDate, setCurrentDate] = useState('2018-06-27');

    const currentDateChange = (currentDate) => {setCurrentDate(currentDate)};


    return (
        <div className="custSchedule">
        <Paper>
            <Scheduler
            data={data}
            height={660}
            >
            <ViewState
                currentDate={currentDate}
                onCurrentDateChange={(currentDate) => currentDateChange(currentDate)}
            />
            <WeekView
                startDayHour={9}
                endDayHour={19}
            />
            <WeekView
                name="work-week"
                displayName="Work Week"
                excludedDays={[0, 6]}
                startDayHour={9}
                endDayHour={19}
            />
            <MonthView />
            <DayView />
            <Toolbar />
            <ViewSwitcher />
            <DateNavigator />
            <TodayButton />
            <Appointments />
            </Scheduler>
        </Paper>
      </div>
    );
  }


export default Demo;