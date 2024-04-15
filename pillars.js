function pillars(numPill, dist, width) {
    // your code here
    
    let totalWidth = (numPill -2) * width

    let totalDist = (numPill - 1) * dist * 100
    const distanceBetweenPillars = totalDist + totalWidth;

    
    return Math.max(distanceBetweenPillars, 0);

  
  }
  console.log(pillars(2,20,25))
