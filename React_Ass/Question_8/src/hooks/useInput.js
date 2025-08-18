import { useState } from 'react'


export default function useInput(initial = '', validate = () => '') {
  const [value, setValue] = useState(initial)
  const onChange = (e) => setValue(e.target.value)
  const error = validate(value)
  return { value, onChange, error }
}
