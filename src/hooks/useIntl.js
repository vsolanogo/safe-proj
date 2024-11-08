import { useIntl } from "gatsby-plugin-intl"

export const useFormatMessage = () => {
  const intl = useIntl()

  return (id, value) => intl.formatMessage({ id }, value)
}
