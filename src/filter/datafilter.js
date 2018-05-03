import moment from 'moment';
export default function(value,patten){
  return moment(value).format(patten);
}