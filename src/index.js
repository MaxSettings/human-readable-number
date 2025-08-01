module.exports = function toReadable(number) {
  const numStr = number.toString();
  const numLength = numStr.length;
  let res = '';
  const ones = +numStr[numLength - 1];
  const tens = numLength > 1 ? +numStr[numLength - 2] : 0;
  const hundreds = numLength > 2 ? +numStr[0] : 0;

  if (number === 0) {
    return 'zero';
  }

  if (numLength === 3) {
    switch (hundreds) {
      case 1:
        res += 'one';
        break;
      case 2:
        res += 'two';
        break;
      case 3:
        res += 'three';
        break;
      case 4:
        res += 'four';
        break;
      case 5:
        res += 'five';
        break;
      case 6:
        res += 'six';
        break;
      case 7:
        res += 'seven';
        break;
      case 8:
        res += 'eight';
        break;
      case 9:
        res += 'nine';
        break;
      default:
        break;
    }

    res += ' hundred';
  }

  if (numLength > 1) {
    if (tens === 1) {
      switch (ones) {
        case 0:
          res += ' ten';
          break;
        case 1:
          res += ' eleven';
          break;
        case 2:
          res += ' twelve';
          break;
        case 3:
          res += ' thirteen';
          break;
        case 4:
          res += ' fourteen';
          break;
        case 5:
          res += ' fifteen';
          break;
        case 6:
          res += ' sixteen';
          break;
        case 7:
          res += ' seventeen';
          break;
        case 8:
          res += ' eighteen';
          break;
        case 9:
          res += ' nineteen';
          break;
        default:
          break;
      }
    } else {
      switch (tens) {
        case 1:
          res += ' ten';
          break;
        case 2:
          res += ' twenty';
          break;
        case 3:
          res += ' thirty';
          break;
        case 4:
          res += ' forty';
          break;
        case 5:
          res += ' fifty';
          break;
        case 6:
          res += ' sixty';
          break;
        case 7:
          res += ' seventy';
          break;
        case 8:
          res += ' eighty';
          break;
        case 9:
          res += ' ninety';
          break;
        default:
          res += '';
      }
    }
  }

  if (tens !== 1)
    switch (ones) {
      case 1:
        res += ' one';
        break;
      case 2:
        res += ' two';
        break;
      case 3:
        res += ' three';
        break;
      case 4:
        res += ' four';
        break;
      case 5:
        res += ' five';
        break;
      case 6:
        res += ' six';
        break;
      case 7:
        res += ' seven';
        break;
      case 8:
        res += ' eight';
        break;
      case 9:
        res += ' nine';
        break;
      default:
        break;
    }

  return res.trim();
};
