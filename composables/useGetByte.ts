const LINE_FEED = 10;

const getByteLength = (decimal: number) => {
  return (decimal >> 7) || (LINE_FEED === decimal) ? 3 : 1; // 원래는 2바이트로 계산하지만 특수한 상황이라 3바이트로 계산.
}

const useGetByte = (str: string) => {
  return str.split('')
    .map((s) => s.charCodeAt(0))
    .reduce((prev, unicodeDecimalValue) => prev + getByteLength(unicodeDecimalValue), 0);
}

export default useGetByte;
