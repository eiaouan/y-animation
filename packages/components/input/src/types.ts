import { type ExtractPropTypes } from 'vue'
const yInputType = ['text','number','password']
export const yInputProps = {
  type: {
    type: String,
    validator (value: string) {
      return yInputType.includes(value)
    }
  }
}

export type YInputProps = ExtractPropTypes<typeof yInputProps>
