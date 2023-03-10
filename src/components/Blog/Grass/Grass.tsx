import React, { useState } from 'react';
import moment from 'moment';
import css from './Grass.module.scss';
import type { GrassData } from '../Profile';

function Grass({ grassCounts, grassDate, grassLevel }: any) {
  // props: Pick<GrassData, 'count' | 'date' | 'level'>
  // const { count, date, level } = props;
  const [getMoment, setMoment] = useState(moment());
  // const dates = date.replace(/-/g, '');
  const today = getMoment;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();
  // const grassDates = grassData.grassData.map((data: any) => {
  //   return data.date;
  // });

  const calendarArr = () => {
    let result: any = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf('year')
                .week(week)
                .startOf('week')
                .add(index, 'day');
              if (moment().format('YYYY-MM-DD') == days.format('YYYY-MM-DD')) {
                return (
                  <td key={index} style={{ backgroundColor: 'red' }}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              } else {
                return (
                  <td key={index}>
                    <span>{days.format('D')}</span>
                  </td>
                );
              }
            })}
        </tr>
      );
    }
    return result;
  };
  return (
    <div className={css.grassContainer}>
      <div className={css.grassHeader}>
        <button
          className={css.backButton}
          onClick={() => {
            setMoment(getMoment.clone().subtract(1, 'month'));
          }}
        >
          이전달
        </button>
        <span className={css.grassYear}>{today.format('YYYY 년 MM 월')}</span>
        <button
          className={css.nextButton}
          onClick={() => {
            setMoment(getMoment.clone().add(1, 'month'));
          }}
        >
          다음달
        </button>
      </div>
      <table className={css.calender}>
        <tbody className={css.calenderContent}>{calendarArr()}</tbody>
      </table>
    </div>
  );
}

export default Grass;
