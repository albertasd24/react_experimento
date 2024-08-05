import { differenceInDays } from 'date-fns';
import { es } from 'date-fns/locale';
import { useState } from 'react';
import { Calendar, DateRange } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


const App = () => {
  const [date, setDate] = useState(null);
  const [diasD, setdiasD] = useState(0);
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection'
    }
  ]);
  const [showDatePicker, setShowDatePicker] = useState(true);

  const changeDate = (date) => {
    if (date) {
      console.log(typeof date);
      setDate(date);
    }
  }

  const changeDatePicker = (date) => {
    if (date) {
      console.log(`La diferencia en días es de ${differenceInDays(date.selection.endDate, date.selection.startDate) + 1}`);
      setdiasD(differenceInDays(date.selection.endDate, date.selection.startDate) + 1)
      console.log(date.selection);
      setState([date.selection])
    }
  }

  const toggleDatePicker = () => {
    setShowDatePicker(!showDatePicker);
  };

  return (
    <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
      <button onClick={toggleDatePicker}>
        {showDatePicker ? 'Seleccionar Rango de Fechas' : 'Seleccionar Día'}
      </button>
      <span>Seleccionar Fecha</span>
      {showDatePicker ? (
        <>
          <Calendar
            onChange={changeDate}
            minDate={new Date()}
            locale={es}
            date={date}
            color='#82328C'

          />
          <h4>Fecha: {date != null ? date.toLocaleString() : 'no fecha'}</h4>
        </>
      ) : (
        <>
          <DateRange
            editableDateInputs={true}
            onChange={changeDatePicker}
            moveRangeOnFirstSelection={false}
            ranges={state}
            locale={es}
            minDate={new Date()}
            showDateDisplay={false}
            startDatePlaceholder="Start Date"
            endDatePlaceholder="End Date"
            color='#82328C'

          />
          <p>Haz seleccionado {diasD} días</p>
        </>
      )}
    </div >
  );
};

export default App;
