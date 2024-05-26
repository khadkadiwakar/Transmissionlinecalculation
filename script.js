function calculateCurrent() {
    console.log('Button clicked'); // Check if function is called
    const PowerT = parseFloat(document.getElementById('power').value);
    const VoltageT = parseFloat(document.getElementById('voltage').value);
    const LengthT = parseFloat(document.getElementById('length').value);
    const powerfactor = parseFloat(document.getElementById('powerFactor').value);
  
    // Calculate the power factor in degrees
    const powerfactordeg = Math.acos(powerfactor) * (180 / Math.PI);
  
    // Calculate the current
    const I = (PowerT * 10**3) / (Math.sqrt(3) * VoltageT * powerfactor);
  
    // Display the current
    document.getElementById('current').textContent = I.toFixed(2);
  }
  
