export default (date: number | Date, locale: string = "en-US") => {
  const formatter = new Intl.DateTimeFormat(locale, {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
	return formatter.format(date instanceof Date ? date : new Date(date))
};
