let selectionSort = (arr) => {
    console.log("Selection Sort!!");
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        let min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    return arr;
}
let insertionSort = (nums) => {
    console.log("Insertion Sort!!");
    for (let i = 1; i < nums.length; i++) {
      let j = i - 1
      let temp = nums[i]
      while (j >= 0 && nums[j] > temp) {
        nums[j + 1] = nums[j]
        j--
      }
      nums[j+1] = temp
    }
    return nums
  }
let bubbleSort=(nums)=>
{
    console.log("Bubble Sort!!");
    var swapp;
    var n = nums.length-1;
    var x=nums;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] > x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}

const mergeSort = (list) =>{
    if(list.length <= 1) return list;
    const middle = list.length / 2 ;
    const left = list.slice(0, middle);
    const right = list.slice(middle, list.length);
    return merge(mergeSort(left), mergeSort(right));
  }
  
  const merge = (left, right) => {
    var result = [];
    while(left.length || right.length) {
      if(left.length && right.length) {
        if(left[0] < right[0]) {
          result.push(left.shift())
        } else {
          result.push(right.shift())
        }
      } else if(left.length) {
          result.push(left.shift())
        } else {
          result.push(right.shift())
        }
      }
    return result;
  }


  function QuickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index
  
    if(len > 1) {
  
      index = partition(arr, left, right)
  
      if(left < index - 1) {
        QuickSort(arr, left, index - 1)
      } 
  
      if(index < right) {
        QuickSort(arr, index, right)
      }
  
    }
  
    return arr
  
  }
  
  function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,                
        j = right               
  
    while(i <= j) {
  
      while(arr[i] < pivot) {
        i++
      }

      while(arr[j] > pivot) {
        j--
      }
      if(i <= j) {
        [arr[i], arr[j]] = [arr[j], arr[i]]  
        i++
        j--
      }
    }
  
    return i
  
  }


  
var array_length; 
function heap_root(input, i) {
    var left = 2 * i + 1;
    var right = 2 * i + 2;
    var max = i;

    if (left < array_length && input[left] > input[max]) {
        max = left;
    }

    if (right < array_length && input[right] > input[max])     {
        max = right;
    }

    if (max != i) {
        swap(input, i, max);
        heap_root(input, max);
    }
}

function swap(input, index_A, index_B) {
    var temp = input[index_A];

    input[index_A] = input[index_B];
    input[index_B] = temp;
}

function heapSort(input) {
    console.log("Heap Sort!!");
    array_length = input.length;

    for (var i = Math.floor(array_length / 2); i >= 0; i -= 1)      {
        heap_root(input, i);
      }

    for (i = input.length - 1; i > 0; i--) {
        swap(input, 0, i);
        array_length--;
      
      
        heap_root(input, 0);
    }
}



function countingSort(arr, min, max)
  {
    var i, z = 0, count = [];
 
    for (i = min; i <= max; i++) {
        count[i] = 0;
    }
 
    for (i=0; i < arr.length; i++) {
        count[arr[i]]++;
    }
 
    for (i = min; i <= max; i++) {
        while (count[i]-- > 0) {
            arr[z++] = i;
        }
    }
 return arr;
}


document.querySelector(".b1").addEventListener("click",function() //Selection Sort 
{
    var str=document.querySelector(".array1").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    selectionSort(arr);
    var t1=performance.now();
    document.querySelector(".ans1").textContent=arr;
    document.querySelector(".time1").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp1").textContent="Time Complexity: O(n^2)";
    console.log(arr)
    console.log(typeof(arr))
})
document.querySelector(".b2").addEventListener("click",function()  //Bubble Sort
{
    var str=document.querySelector(".array2").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    bubbleSort(arr);
    var t1=performance.now();
    document.querySelector(".ans2").textContent=arr;
    document.querySelector(".time2").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp2").textContent="Time Complexity: O(n^2)";
    console.log(arr)
    console.log(typeof(arr))
})
document.querySelector(".b3").addEventListener("click",function()  //Insertion Sort
{
    var str=document.querySelector(".array3").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    insertionSort(arr);
    var t1=performance.now();
    document.querySelector(".ans3").textContent=arr;
    document.querySelector(".time3").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp3").textContent="Time Complexity: O(n^2)";
    console.log(arr)
    console.log(typeof(arr))
})
document.querySelector(".b4").addEventListener("click",function()  //merge Sort
{
    var str=document.querySelector(".array4").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    arr=mergeSort(arr);
    var t1=performance.now();
    document.querySelector(".ans4").textContent=arr;
    document.querySelector(".time4").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp4").textContent="Time Complexity: O(nlog(n))";
    console.log(arr)
    console.log(typeof(arr))
})
document.querySelector(".b5").addEventListener("click",function()  //quick Sort
{
    var str=document.querySelector(".array5").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    QuickSort(arr);
    var t1=performance.now();
    document.querySelector(".ans5").textContent=arr;
    document.querySelector(".time5").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp5").textContent="Time Complexity: Worst Case: O(n^2), Average Case: O(nlog(n))";
    console.log(arr)
    console.log(typeof(arr))
})
document.querySelector(".b6").addEventListener("click",function()  //heap sort
{
    var str=document.querySelector(".array6").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    heapSort(arr);
    var t1=performance.now();
    document.querySelector(".ans6").textContent=arr;
    document.querySelector(".time6").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp6").textContent="Time Complexity: O(nlog(n))";
    console.log(arr)
    console.log(typeof(arr))
})
document.querySelector(".b7").addEventListener("click",function()  //count Sort
{
    var str=document.querySelector(".array7").value;
    var newList=str.split(" ");
    var arr=[];
    for(var i=0;i<newList.length;i++)
    {
        arr.push(Number(newList[i]));
    }
    var t0=performance.now();
    console.log("Array: ",arr);
    var minm=arr[0];
    var maxm=arr[0];
    for(var i=1;i<arr.length;i++)
    {
        if(arr[i]<minm)
        {
            minm=arr[i];
        }
        if(arr[i]>maxm)
        {
            maxm=arr[i];
        }
    }
    console.log(minm,maxm);
    arr=countingSort(arr,minm,maxm);
    var t1=performance.now();
    document.querySelector(".ans7").textContent=arr;
    document.querySelector(".time7").textContent="Time taken: "+String(t1-t0)+ " ms" ;
    document.querySelector(".comp7").textContent="Time Complexity: O(n)";
    console.log(arr)
    console.log(typeof(arr))
})