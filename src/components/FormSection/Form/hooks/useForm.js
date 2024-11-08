import { useState } from "react"
import { validateField } from "../validator/validator"

const initialErrors = {
  name: [],
  email: [],
  phoneNumber: [],
  notes: [],
}

const initialFormValues = {
  name: "",
  email: "",
  phoneNumber: "",
  notes: "",
}

const API_URL = 'https://app.sosafe.io/app/save-contacts';

export const useForm = () => {
  const [formValues, setFormValues] = useState(initialFormValues)
  const [apiError, setApiError] = useState("")
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)
  const [formErrors, setFormErrors] = useState(initialErrors)
  const [formState, setFormState] = useState({
    isSubmitting: false,
    isValid: false,
  })

  const handleFormChange = () => {
    setFormState({ ...formState, isValid: false })

    if (isValid()) {
      setFormState({ ...formState, isValid: true })
    }
  }

  const handleInputChange = (event, fieldName) => {
    setFormErrors({
      ...formErrors,
      [fieldName]: [],
    })
    setFormValues({
      ...formValues,
      [fieldName]: event.target.value
    })
  }

  const validate = (event, fieldName) => {
    const errors = validateField(fieldName, event.target.value);

    setFormErrors({
      ...formErrors,
      [fieldName]: errors
    })
  }

  const isValid = () => {
    const hasNoErrors =
      !formErrors.name.length
      && !formErrors.email.length
      && !formErrors.phoneNumber.length
      && !formErrors.notes.length

    return (formValues.name.length && formValues.email.length) && hasNoErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isValid()) {
      setFormState({ ...formState, isSubmitting: true })

      const formData = {
        name: formValues.name,
        email: formValues.email,
        phoneNumber: formValues.phoneNumber,
        notes: formValues.notes || '',
      }

      fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
        .then(response => {
          if (response.status === 201) {
            setFormValues(initialFormValues)
            setApiError("")
            setShowSuccessMessage(true)
            setFormState({ isValid: false, isSubmitting: false })
            return true;
          } else {
            return response.json()
          }
        })
        .then(res => {
          if (res.error) {
            setApiError(res.message[0])
            setFormState({ isValid: false, isSubmitting: false })
          }
        }).catch(error => {
        console.log(error)
      })
    }
  }

  return {
    formValues,
    apiError,
    showSuccessMessage,
    setShowSuccessMessage,
    formErrors,
    formState,
    handleFormChange,
    handleInputChange,
    handleSubmit,
    validate,
  }
}