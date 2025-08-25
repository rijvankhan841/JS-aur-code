const marvel_heroes = ["Thor","Ironman", "Spidermen"]
const dc_heroes = ["Superman", "Flash", "Batman"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[3][1])

// const all_heroes = marvel_heroes.concat(dc_heroes)
// console.log(all_heroes)

const all_new_heroes = [...marvel_heroes, ...dc_heroes]
// console.log(all_new_heroes)

const another_arr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_arr.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("Rijvan"))
console.log(Array.from("Hitesh"))
console.log(Array.from({name :"hitesh"}))  // Intersting 




