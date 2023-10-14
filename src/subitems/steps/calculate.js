



export const PLACES_LIST = {
  flat:"Квартира",
  house:"Частный дом",
  commercial:"Коммерческий объект"
}


//калькулятор
export const calcPrice = ({ type, METR, dollarRate } ) => {

  let COST;

  let sumCOST;
  //квартиры
  if (type === PLACES_LIST.flat) {
    if (METR <= 35) {
      COST = METR * 50;
    }
    if (METR > 35) {
      COST = METR * 47;
    }
    if (METR > 50) {
      COST = METR * 42;
    }
    if (METR > 70) {
      COST = METR * 39;
    }
    if (METR > 85) {
      COST = METR * 35;
    }
    if (METR > 100) {
      COST = METR * 32;
    }

    sumCOST = COST * dollarRate;

  }

  //дома
  if (type === PLACES_LIST.house) {
    if (METR <= 35) {
      COST = METR * 50;
    }
    if (METR > 35) {
      COST = METR * 47;
    }
    if (METR > 50) {
      COST = METR * 42;
    }
    if (METR > 70) {
      COST = METR * 39;
    }
    if (METR > 85) {
      COST = METR * 35;
    }
    if (METR > 100) {
      COST = METR * 32;
    }
    sumCOST = COST * dollarRate;

  }

  //коммерческие объекты
  if (type === PLACES_LIST.commercial) {
    if (METR <= 50) {
      COST = METR * 40;
    }
    if (METR > 50) {
      COST = METR * 35;
    }
    if (METR > 100) {
      COST = METR * 30;
    }
    if (METR > 150) {
      COST = METR * 25;
    }
    if (METR > 600) {
      COST = METR * 20;
    }
    if (METR > 1000) {
      COST = METR * 16;
    }
    if (METR > 5000) {
      COST = METR * 14;
    }
    sumCOST = COST * dollarRate  ;
  }

  return({ COST: (Math.ceil(sumCOST * 100) / 100) , sumUSD:(Math.ceil(COST * 100) / 100) })
};
