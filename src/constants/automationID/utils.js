export const mapTestID = (testID, type, max) => {
  const arr = []
  for (let i = 0; i < max; i += 1) {
    arr.push(`${testID}.${type}.${i}`)
  }
  return arr
}
