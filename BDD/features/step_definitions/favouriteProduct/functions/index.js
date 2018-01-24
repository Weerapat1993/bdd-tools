
/**
 * Click Login With Emial Button
 * @param {string} testID 
 */
export const clickLoginWithEmailButton = (testID) => device => (
  device.waitForElementByAccessibilityId(testID).click()
)  
