// метод который добавляет в обычный массив функцию смены позиций 2х элементов

Array.prototype.swap = function(a,b) {
	var cur = this[a];
	this[a] = this[b];
	this[b] = cur;
}

// функция для заполнения массива случайными числами

Array.prototype.generate_numbers = function(amount){
 for (var i = 0; i < amount; i++ ){
 this[i] = Math.floor(Math.random() * amount + 1);
 }
}


//метод срт-вки Кнута для массива
//алгоритм отличается своей простотой, стабильностью, и очень хорошими показателями в случае если массив частично отсортирован. 

function knut(array){
 var length = array.length;
for (var i = 0; i < length; i++){
for (var j = i; j > 0; j--){
 if (array[j] < array[j-1] ){
     array.swap(j, j-1);
   } else {
     break;
   }
  }
}
return array;
}

/*Array.prototype.knuth_shuffle = function() {
  var random = 0;
  for (var i = 1; i < this.length; i++){
    var random = Math.floor(Math.random() * i);
    this.swap(i, random); 
  }
};*/

var res = [];
res.generate_numbers(20);
console.log(res);
//res.knuth_shuffle();

console.log(knut(res));
console.log('');
//res = res.knuth_shuffle();
//console.log(res);
//res = res.knuth_shuffle();


