function confirmEnding(str, target) {
    let targetLength = target.length;
    let targetToMatch = str.slice(str.length - targetLength, str.length);
    if(targetToMatch == target){
      return true;
    }
    return false;
  }
  
  console.log(confirmEnding("Congratulation", "on"));