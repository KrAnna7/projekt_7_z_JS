
var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
	animal = 'Zielone słonie';
	animalUppercase = animal.toUpperCase();

console.log(animalUppercase)

var text2 = text.replace('Papugi', animalUppercase);
	partOfText2 = text2.substr(0,(text2.length)/2);

console.log(partOfText2)
