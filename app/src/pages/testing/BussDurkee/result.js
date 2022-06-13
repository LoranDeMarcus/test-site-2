const data = {1: true, 2: false, 3: true, 4: false, 5: true, 6: true, 7: false, 8: true, 9: false, 10: true, 11: false, 12: true, 13: false, 14: true, 15: false, 16: false, 17: false, 18: true, 19: false, 20: false, 21: true, 22: false, 23: true, 24: false, 25: false, 26: true, 27: false, 28: true, 29: false, 30: true, 31: false, 32: false, 33: true, 34: false, 35: true, 36: true, 37: false, 38: true, 39: false, 40: true, 41: false, 42: true, 43: false, 44: true, 45: true, 46: true, 47: false, 48: false, 49: true, 50: true, 51: false, 52: false, 53: false, 54: false, 55: true, 56: false, 57: false, 58: true, 59: false, 60: false, 61: true, 62: true, 63: false, 64: false, 65: false, 66: true, 67: false, 68: false, 69: false, 70: false, 71: true, 72: true, 73: false, 74: false, 75: false}


export const Result = (data) => {
  const physicalAggression = []
  const indirectAggression = []
  const annoyance = []
  const negativism = []
  const resentment = []
  const suspicion = []
  const verbalAggression = []
  const guilt = []

  for (const [key, value] of Object.entries(data)) {
    console.log(data[1])
    const keyNum = Number(key)
    if (keyNum === 1 && value === true) {
      physicalAggression.push(1)
    }

  }
}

