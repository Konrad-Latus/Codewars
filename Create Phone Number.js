function createPhoneNumber(numbers){
    let Fpart = "";
    let Spart = "";
    let Tpart = "";
    
    for (let i = 0; i < numbers.length; i++) {
      if (i < 3) {
        Fpart += numbers[i].toString();
    } else if (i >= 3 && i < 6) {
        Spart += numbers[i].toString();
    } else if (i >= 6) {
        Tpart += numbers[i].toString();
      }
    }
    return `(${Fpart}) ${Spart}-${Tpart}`;
  }