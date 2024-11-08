const fieldTypes = {
  name: "name",
  email: "email",
  phoneNumber: "phoneNumber",
  notes: "notes",
}

export const preventNonNumericValue = event => {
  const allowedKeyCodes = [
    8, // delete
    9, // tab
    19, // shift
    37, // arrow left
    38, // arrow up
    39, // arrow right
    40, // arrow down
  ]
  if ((event.which < 48 || event.which > 57) && !allowedKeyCodes.includes(event.keyCode)) {
    event.preventDefault();
  }
}

const validationMethods = {
  validateEmail: value => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
  validatePhoneNumber: value => /^[0-9]+$/.test(value),
  lengthShouldBeGreaterOrEqual: (field, number) => field.length >= parseInt(number),
  lengthShouldBe: (field, number) => field.length === parseInt(number),
  nonEmptyValue: field => field && field.length > 0,
  onlyLettersRegex: field => field.match(/^[\p{L}']*[ \p{L}'-]*[\p{L}]$/u)
}

const instructions = {
  [fieldTypes.name]: [
    {
      validationMethod: validationMethods.nonEmptyValue,
      errorMessage: "formSection.form.validation.nonEmpty",
      break: true
    },
    {
      validationMethod: validationMethods.onlyLettersRegex,
      errorMessage: "formSection.form.validation.lettersOnly",
    },
    {
      validationMethod: validationMethods.lengthShouldBeGreaterOrEqual,
      param: 3,
      errorMessage: "formSection.form.validation.length",
    }
  ],
  [fieldTypes.email]: [
    {
      validationMethod: validationMethods.nonEmptyValue,
      errorMessage: "formSection.form.validation.nonEmpty",
      break: true
    },
    {
      validationMethod: validationMethods.validateEmail,
      errorMessage: "formSection.form.validation.email",
    }
  ],
  [fieldTypes.phoneNumber]: [
    {
      validationMethod: validationMethods.validatePhoneNumber,
      errorMessage: "formSection.form.validation.phoneFormat",
      break: true,
    },
    {
      validationMethod: validationMethods.lengthShouldBe,
      param: 10,
      errorMessage: "formSection.form.validation.phoneLength",
    },
  ],
  [fieldTypes.notes]: [
    {
      validationMethod: validationMethods.lengthShouldBeGreaterOrEqual,
      param: 5,
      errorMessage: "formSection.form.validation.questionLength",
    },
  ],
}

export const validateField = (fieldType, value) => {
  const validationInstructions = instructions[fieldType];
  const errors = [];

  for (let index = 0; index < validationInstructions.length; index++) {
    const currentInstruction = validationInstructions[index];

    if (
      !currentInstruction.validationMethod(value, currentInstruction.param) &&
      !errors.includes(currentInstruction["errorMessage"])
    ) {
      errors.push(
        currentInstruction["errorMessage"]
      );

      if (currentInstruction.break) {
        break;
      }
    }
  }

  return errors;
};
