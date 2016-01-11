//Итак, что такое пузырьковая сортировка? Представьте что мы берем два первых элемента. Если первый элемент больше второго — меняем их местами. Теперь берем второй и третий элемент — повторяем. Таким образом, в конце концов — самый большой элемент окажется последним членом массива. Теперь, повторяем операцию для n-1 первых чисел, потому n-2, и так далее.


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
console.log(bubble_sort(arr));



function bubble_sort(array){
  var length = array.length;
  var swapped = false;
  for (var i = 0; i < length; i++){
    swapped = false;
    for ( var j = 0; j < length — i — 1; j++){
      if (array[j] > array[j + 1] ){
        array.swap(j, j + 1);
        swapped = true;
      } 
    }
 if (!swapped){
      break;
    }
 }
 return array;
};