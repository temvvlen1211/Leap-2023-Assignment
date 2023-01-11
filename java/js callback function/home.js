// // 3 aar nemegdeh

// const arr = [1, 34, 56, 32, 5, 7, 111, 456];

// function clone(arr, callback) {
//   const result = [];

//   for (let i = 0; i < arr.length; i++) {
//     result.push(callback(arr[i]));
//   }
//   return result;
// }

// const cloned = clone(arr, (n) => {
//   return n + 3;
// });

// console.log("arr is:", arr);
// console.log("cloned is:", cloned);

// ner oloh
const arr = [
  {
    id: 1,
    first_name: "Barbaraanne",
    last_name: "Zannolli",
    email: "bzannolli0@nhs.uk",
    gender: "Female",
    ip_address: "115.253.49.211",
  },
  {
    id: 2,
    first_name: "Reginauld",
    last_name: "Got",
    email: "rgot1@ucla.edu",
    gender: "Male",
    ip_address: "5.127.101.166",
  },
  {
    id: 3,
    first_name: "Alicea",
    last_name: "Rantoull",
    email: "arantoull2@pcworld.com",
    gender: "Female",
    ip_address: "12.40.167.51",
  },
  {
    id: 4,
    first_name: "Brander",
    last_name: "Reeve",
    email: "breeve3@globo.com",
    gender: "Male",
    ip_address: "0.65.58.248",
  },
  {
    id: 5,
    first_name: "Michaeline",
    last_name: "Scarfe",
    email: "mscarfe4@adobe.com",
    gender: "Female",
    ip_address: "96.45.29.25",
  },
  {
    id: 6,
    first_name: "Sherman",
    last_name: "Florez",
    email: "sflorez5@artisteer.com",
    gender: "Male",
    ip_address: "51.129.194.6",
  },
  {
    id: 7,
    first_name: "Harley",
    last_name: "Crake",
    email: "hcrake6@studiopress.com",
    gender: "Male",
    ip_address: "70.21.0.134",
  },
  {
    id: 8,
    first_name: "Suki",
    last_name: "Vegas",
    email: "svegas7@jugem.jp",
    gender: "Female",
    ip_address: "233.76.218.252",
  },
  {
    id: 9,
    first_name: "Giselle",
    last_name: "Kybbye",
    email: "gkybbye8@senate.gov",
    gender: "Female",
    ip_address: "59.247.32.214",
  },
  {
    id: 10,
    first_name: "Doy",
    last_name: "Brabben",
    email: "dbrabben9@comcast.net",
    gender: "Male",
    ip_address: "248.136.226.188",
  },
];
// female
function addOfNames(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}
function filter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i])) {
      result.push(arr[i]);
    }
  }
  return result;
}

function isGenderMatch(el, gender) {
  return el.gender.toLowercase() === gender.toLowercase();
}

const males = filter(arr, (el) => {
  return isGenderMatch(el, "male");
});

const females = filter(arr, (el) => {
  return isGenderMatch(el, "female");
});

const other = filter(arr, (el) => {
  return isGenderMatch(el, "Genderqueer");
});
console.log(males.length);
console.log(females.length);
console.log(other.length);

function clone(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callback(arr[i]));
  }
  return result;
}

const simplified = clone(arr, (el) => {
  return { value: el.id, label: `${el.first_name} ${el.last_name}` };
});

console.log(simplified);
