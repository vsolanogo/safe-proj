import { size } from "../styles"
import { useWindowSize } from "./useWindowSize"

export const useDeviceSize = () => {
  const { width } = useWindowSize()

  return Object.keys(size).reduce((acc, el) => {
    if (size[el] <= width) {
      acc[el] = true
    } else {
      acc[el] = false
    }

    return acc
  }, {})
}
