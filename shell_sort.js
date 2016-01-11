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
console.log(shell_sort(arr));


//Shell Sort — это тот же самый Insertion Sort, но перед сортировкой с помощью Insertion Sort, мы проводим “грубый” проход. Грубый проход — это сравнение элементов, которые находяться на расстоянии D. После этого сравниваются элементы которые находятся на меньшем расстоянии, и так, пока D=1, что является заключительной проверкой, после которой мы имеем отсортированный массив. Как помните из статьи об Insertion Sort сортировка проходит практически мгновенно, в случае если массив частично отсортирован.
//Есть огромное количество методов выбора числа D:
//Самый просто пример это D = n / 2, D2 = D /2 … Dn =1 . В худшем случае сложность алогритма O(n) = N ^ 2
//Предложение Хиббарда: проверить на всем N ^i — 1<= N. В таком случае сложность алгоритма O(n) = n ^ (3/2)
//Числа Седжвика и много много другого


//для нашего примера D = (3^k -1) / 2

function shell_sort(array){
  var length = array.length;
  var h = 1;
  while( h < length/3){
    h = 3 * h + 1;
  }
  while( h > 0 ){
    for ( var i = h; i < length; i++){
      for ( var j = i; j > 0 && array[j] < array[j-h]; j-=h){
        array.swap(j, j-h);
      }
   }
   //decreasing h
   h = --h/3;
  }
  return array;
};