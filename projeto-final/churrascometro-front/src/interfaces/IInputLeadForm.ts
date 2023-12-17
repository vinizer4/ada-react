import { ChangeEvent } from "react"

export interface IInputLeadForm {
  type: string 
  id: string 
  placeholder: string 
  error?: string
  name: string

  onChange: (ev: ChangeEvent<HTMLInputElement>) => void
}