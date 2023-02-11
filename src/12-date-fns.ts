import { subDays, format } from 'date-fns'


const date = new Date(1998, 1, 28)
const rta = format(subDays(date, 10), 'dd-MM-yyyy')

console.log(rta)
