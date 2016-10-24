
export function shiprequest() {
  return {
      type: 'SHIP_REQUEST_NEW',
      meta: {remote: true}
  };
}


export function simstart() {
  return {
      type: 'SIM_START',
      meta: {remote: true}
  };
}


export function simpause() {
  return {
      type: 'SIM_PAUSE',
      meta: {remote: true}
  };
}


export function simadjustspeed(speed) {
  return {
      type: 'SIM_ADJUST_SPEED',
      meta: {remote: true},
      speed: speed
  };
}
