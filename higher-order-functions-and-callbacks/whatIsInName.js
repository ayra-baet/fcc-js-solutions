function whatIsInAName(arrOfObj, sourceObj) {
  const sourceKeys = Object.keys(sourceObj);

  return arrOfObj.filter((obj) =>
    sourceKeys.every((key) => obj[key] === sourceObj[key])
  );
}

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
