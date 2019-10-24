function lin(num) {
      var sum = 0;
  for (var i = 1; i <= num; i++) {
          if (num % i == 0) {
            sum++;
        }
     }
      if (sum == 2) {
          return true;
  } else {
        return false;
   }
  }
  function goldbach(odd) {
    odd = document.getElementById('odd').value
    odd = parseInt(odd);
    let str = '';
    for (var x = 2; x < odd; x++) {
        var z = odd - x;
        if (lin(x) && lin(z) && x <= z) {
            str += ("偶数" + odd + "可以拆分成质数" + x + "和" + z + '<br>')
             }
                     }
        document.getElementById('goldbach').innerHTML = str;
        if(isNaN(odd)||odd<=2||odd%2==1){
          alert('请输入大于2的偶数')
          return false
        }
      }