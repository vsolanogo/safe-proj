export const pressOnlyNumbers = e => {
  var charCode = e.which ? e.which : e.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    return e.preventDefault()
  }
}

export const pressOnlyNumbersAndPlus = e => {
  var charCode = e.which ? e.which : e.keyCode
  if ((charCode < 48 || charCode > 57) && charCode !== 43) {
    return e.preventDefault()
  }
}
