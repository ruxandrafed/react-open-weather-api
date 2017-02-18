import React from 'react';
import dateFormat from 'dateformat';

export function puke (object) {
 return (<pre>{JSON.stringify(object, null, ' ')}</pre>);
}

export function getDateString (timestamp) {
  var date = new Date(timestamp * 1000);
  return dateFormat(date, "dddd, mmm dS").toString();
};

export function convertTemp (kelvin) {
  return parseFloat(kelvin - 273.15).toFixed(2);
};
