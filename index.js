let superBowls = [
    { year: 1999, result: 'L' },
    { year: 2000, result: 'W' },
    { year: 2001, result: 'L' },
    
  ];
  
  
  function superbowlWin(superBowlsArray) {
    let winningYearObj = superBowlsArray.find(superBowl => superBowl.result === 'W');
    return (winningYearObj ? winningYearObj.year : undefined);
  }
  
  
  let firstWinYear = superbowlWin(superBowls);
  console.log(firstWinYear);