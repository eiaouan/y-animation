import { type ExtractPropTypes } from 'vue'
const yInputType = ['text','number','password']
export const yInputProps = {
  type: {
    type: String,
    validator (value: string) {
      return yInputType.includes(value)
    }
  },
  placeholder: {
    type: String,
    default: 'plase input'
  }
}

export type YInputProps = ExtractPropTypes<typeof yInputProps>
