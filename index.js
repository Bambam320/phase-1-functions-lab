function distanceFromHqInBlocks(blocks){
    if (blocks <= 42) {
      return 42-blocks
    }
    else (blocks > 42) 
      return blocks-42;
}

function distanceFromHqInFeet(feet) {
    if (feet <= 42){
    return (42 - feet) * 264;
    }
    else (feet > 42);
    return (feet - 42) * 264;
}

function distanceTravelledInFeet(num1,num2) {
    let figure = (Math.max(num1,num2))-(Math.min(num1,num2));
    return figure * 264
}

function calculatesFarePrice(start,stop) {
    let fig = (Math.max(start,stop))-(Math.min(start,stop));
    let figu = fig*264
    if (figu <= 400) {
      return 0
    }
    else if (figu > 401 && figu < 2000) {
      return ((figu)-400) *.02;
    }
    else if (figu > 2001 && figu < 2500) {
      return 25
    }
    else (figu > 2500)
    return ('cannot travel that far')
}