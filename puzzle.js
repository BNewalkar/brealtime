var puzz = function(input){
    var arr = input.split("\n");
    console.log(arr);
    var arr2;
    var ord = [];
    // var dict = {1:"A", 2:"B", 3:"C", 4:"D"};
    for (var i=0; i<arr.length-1; i++){
      if (i > 1){
         arr2 = arr[i].substring(1,5).split('');
         console.log(arr2);
         for (var j = 0; j<4; j++){
           if (arr2[j] == ">"){
             ord.push([i-2,j]);
             break;
           } else if (arr2[j] == "<"){
             ord.push([j,i-2]);
             break;
           }
         }
      }
    }
    
    console.log(ord);
    var decider, exit;
    var ord2 = [];
    for (var i=0; i<3; i++){
      for (var j=0; j<3; j++){
        for (var k=0; k<3; k++){
          if (ord[k][1] == ord[j][0] && ord[k][0] == ord[i][1]){
            ord2.push(...ord[i]);
            ord2.push(...ord[j]);  
            exit = true;
            break;  
          }  
        }
      if(exit) break;
      }
    if(exit) break;
    }
  
    console.log(ord2);

    var ans = '';
    for (var i=0; i<4; i++){
      var line = '';
      for (var j=0; j<4; j++){
         if(i == j){
            line += '=';
         }
         else if (ord2.indexOf(i) > ord2.indexOf(j)){
           line += '<';
         } 
         else {
           line += '>';
         }
      }
      if(i==0){
        ans += ' ABCD\nA' + line;
      }
      else {
        ans += '\n' + String.fromCharCode(65 + i) + line;
      }
    }
    return ans;
}

module.exports = puzz;