export default function createStringFromNum(num) {
  const equity = `${num}`;

  if (equity.length === 9) {
    console.log(`$${equity.slice(0, 3)},${equity.slice(3)}`);
    return `$${equity.slice(0, 3)},${equity.slice(3)}`;
  }

  if (equity.length === 8) {
    console.log(`$${equity.slice(0, 2)},${equity.slice(2)}`);
    return `$${equity.slice(0, 2)},${equity.slice(2)}`
  }

  if (equity.length === 7) {
    console.log(`$${equity.slice(0, 1)},${equity.slice(1)}`);
    return `$${equity.slice(0, 1)},${equity.slice(1)}`;
  }

  if (equity.length < 6 && equity.length > 4) {
    console.log(`$${equity}`);
    return `$${equity}`
  }

  if (equity.length === 3) {
    console.log(`$0${equity}`);
    return `$0${equity}`
  }
};