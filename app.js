//  HW-19

function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(123, "Vasya", 2000, 15000, "Lod", "Israel"),
    createEmployee(124, "David", 1975, 15500, "Tel-Aviv", "Israel"),
    createEmployee(125, "Sara", 1985, 20000, "New York", "USA"),
    createEmployee(126, "Abraham", 1990, 13000, "London", "UK"),
    createEmployee(127, "Moshe", 2000, 15000, "Rehovot", "Israel"),
    createEmployee(128, "Goga", 1993, 10000, "Tbilisi", "Georgia"),
    createEmployee(129, "Sasha", 2000, 25000, "Ramat Gan", "Israel"),
    createEmployee(130, "Victor", 2003, 10000, "Texas", "USA")
]

//  task #1
function getMostPopulatedCountry(employees) {
    //  returns country with most amount of employees
    return getCountriesByPopulation(employees)[0][0];

}
//  task #2
function getMostPopulatedCountries(employees, counter) {
    //  returns a given number (counter) of countries with most amount of employees
    return getCountriesByPopulation(employees).map(element => element[0]).slice(0, counter);
    // return resArr;
}

//  Country population proccess functions
function getCountriesByPopulation(employees) {
    const countryObj = getCountriesOccurrences(employees);
    const countryArr = Object.entries(countryObj);
    return countryArr.sort(compareCountriesByPopulation);
}
function getCountriesOccurrences(employees) {
    const countriesArray = employees.map(empl => empl.address.country);
    const result = {};
    countriesArray.forEach(country => {
        if (!result[country]) {
            result[country] = 1;
        } else {
            result[country]++;
        }
    });
    return result;
}
function compareCountriesByPopulation(entry1, entry2) {
    let result = entry2[1] - entry1[1];
    if (result == 0) {
        result = entry1[1] < entry2[1] ? 1 : -1;
    }
    return result;
}

//  task #3
function isAnagram(word, anagram) {
    //  returns true if a given anagram is indeed an angram of a given word
    let wordArraySorted = Object.entries(getElementsOccurrences(Array.from(word).sort()));
    let anagramArraySorted = Object.entries(getElementsOccurrences(Array.from(anagram).sort()));
    return wordArraySorted.every((array, index) => {
        return ((array[0] === anagramArraySorted[index][0]) && (array[1] === anagramArraySorted[index][1]))
    });
}
function getElementsOccurrences(elementsArray) {
    const result = {};
    elementsArray.forEach(element => {
        if (!result[element]) {
            result[element] = 1;
        } else {
            result[element]++;
        }
    });
    return result;
}