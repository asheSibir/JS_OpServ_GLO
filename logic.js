const funcNum = (arr) => arr.map((val, index) => arr.slice(index).filter(a => a < val).length);
export default funcNum;