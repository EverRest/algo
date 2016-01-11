//сам алгоритм очень эффективен, и при этом очень прост в понимании.
//Шаги алгоритма следующие:
//Разбитие массива на мелкие части одинакового размера. Рекурсивно массив разбивается пока у нас не будет отдельных элементов
//Сливаем части “соседних массивов” в один с сортировкой. Опять же, сортировка проходит достачтоно интересно: так как мы сливаем уже сортированные массивы — в результате хотелось бы получить сортированный массив. Итак, допустим у нас есть два массива:
//2.1 Указатели указывают на первый элемент обоих массивов. Выбирается наименьший из них
//2.2 В массиве в котором было наименьшее число — указатель переноситься на следующий элемент. Повторяем пункт 2.1.
//2.3 Если в одном из массивов закончились элементы — переносим элементы другого массива в наш отсортированный массив ( слив остатков )
//3. Повторяем пока подмасивы не закончатся

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

  
var merge_sort = function(array){      
    function merge(left, right){
        var result = [];
        var il = 0;
        var ir = 0;
        
        while (il < left.length && ir < right.length){
          if (left[il] < right[ir]){
            result.push(left[il++]);
          } else {
            result.push(right[ir++]);
          }
        }
        
        if ( il < left.length){
            result.push.apply(result,left.slice(il));
        } 

        if (ir < right.length){
            result.push.apply(result,right.slice(ir));
        }
        
        return result;
    }

    function merge_sort(items){
        //well it is only 1 element
        if (items.length < 2){
            return items;
        }

        var middle = Math.floor(items.length / 2);

        //create two arrays
        var left = items.slice(0, middle);
        var right = items.slice(middle);

        return merge(merge_sort(left), merge_sort(right));
    }

    return merge_sort(array);
     
};

var arr = [];
arr.generate_numbers(20);
console.log(arr);
console.log('');
console.log(merge_sort(arr));