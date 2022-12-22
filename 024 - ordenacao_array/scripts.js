let cars = [
   {brand: 'Fiat', year: 2022},
   {brand: 'Bmw', year: 2018},
   {brand: 'Ferrari', year: 2020},
   {brand: 'Ford', year: 2006}
]

cars.sort((a, b) => {
   if (a.year > b.year) {
      return 1;
   } else if (a.year < b.year) {
      return -1;
   } else {
      return 0;
   }
});

console.log(cars);