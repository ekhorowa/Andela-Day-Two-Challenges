//Word Count Program
 function word (sentence){
  //variable declaration
  var obj_1= {};//I created an object and I assigned it to variable obj_1
  sentence.split(/\s+/).forEach(function(item) {
    if(!obj_1.hasOwnProperty(item)){
      obj_1[item] = 1;
    }
    else{
      obj_1[item] = obj_1[item] + 1 ;
    }
  });
  return obj_1;
}

module.exports = word;

