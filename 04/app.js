const user = {
  firstName: "Adam",
  lastName: "Nowak",
  born: {
    day: "4",
    month: "12",
    year: "2023",
  },
};

checkBirthday = () => {
  const myDate = new Date(user.born.year, user.born.month - 1, user.born.day).toLocaleString().substring(0, 9);
  const today = new Date().toLocaleString().substring(0, 9);
  if (myDate == today) console.log("Happy birthday !!!");
};

checkBirthday();
