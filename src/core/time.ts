import {
  parse,
  differenceInYears,
  differenceInMonths,
  differenceInDays,
  addMonths,
  getYear,
  isLeapYear,
  format,
} from "date-fns";

const getTimeZone = (date?: Date) => {
  const DateForCalculate: Date = date ? date : new Date();
  return -1 * (DateForCalculate.getTimezoneOffset() / 60);
};

const getLastBirthday = (birthDate: string) => {
  const lastYear = `${birthDate.substring(0, 6)}${getYear(new Date()) - 1}`;
  return parse(lastYear, "dd-MM-yyyy", new Date());
};

const getAge = (birthDate: string) => {
  try {
    let lastBirthDate = getLastBirthday(birthDate);
    const date = parse(birthDate, "dd-MM-yyyy", new Date());
    const ageYears = differenceInYears(new Date(), date);
    let ageMonths = differenceInMonths(new Date(), lastBirthDate);
    lastBirthDate = addMonths(lastBirthDate, ageMonths);
    let ageDays = differenceInDays(new Date(), lastBirthDate);
    ageMonths = ageMonths === 12 ? 0 : ageMonths;
    const isLeap = isLeapYear(new Date());
    if (isLeap) {
      ageDays === 366 && (ageDays = 0);
    } else {
      ageDays === 365 && (ageDays = 0);
    }
    return {
      birthDate,
      ageYears,
      ageMonths,
      ageDays,
      fullAgeEn: `${ageYears} years, ${ageMonths} months, ${ageDays} days `,
      fullAgeEs: `${ageYears} años, ${ageMonths} meses, ${ageDays} dias`,
    };
  } catch (error) {
    throw new Error(error);
  }
};

const getAPIFormat = (date? : Date) => {
  const DateActive: Date = date ? date : new Date();
  return format(DateActive,"yyyy-MM-dd")
}

const getThisYear = () => format(new Date(),"yyyy")


const time = { getTimeZone, getLastBirthday, getAge, getAPIFormat, getThisYear };

export default time
