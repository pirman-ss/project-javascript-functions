const palindrome = param => {
    let word = '';
    for(let i = param.length - 1 ; i >=0 ; i--) {
      word += param[i]
    }
    if(word == param){
      console.log(`This ${word} is a palindrome`);
    }else{
      console.log(word);
    }
  }