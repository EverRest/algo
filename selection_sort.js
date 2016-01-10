//Суть алгоритма достаточно проста, мы берем первый элемент массива, и бегаем по всему оставшемуся массиву в поисках числа меньше нашего первого элемента. Когда мы пробегаем весь массив, если меньшее число найдено — меняем его местами с первым элементом. После этого мы вибраем второй элемент, и все повторяется, пока для каждого элемента мы не пройдем оставшуюся часть массива.


// метод который добавляет в обычный массив функцию смены позиций 2х элементов

Array.prototype.swap = function(a,b) {
	var cur = this[a];
	this[a] = this[b];
	this[b] = cur;
}


// метод для заполнения массива случайными числами

Array.prototype.generate_numbers = function(amount){
 for (var i = 0; i < amount; i++ ){
 this[i] = Math.floor(Math.random() * amount + 1);
 }
}

var arr = [];
arr.generate_numbers(20);
console.log(arr);
console.log('');
console.log(selection_sort(arr));

// ф-ция для сортировки
function selection_sort(array){
  var length = array.length;
  for (var i = 0; i < length; i++){ 
    var min = i;
    for (var j = i + 1 ; j < length; j++){  
      if (array[min] > array[j]){
        min = j;
      }
    }
    array.swap(i,min);
  }
  return array;
}