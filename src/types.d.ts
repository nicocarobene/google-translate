import { type AUTO_LANGUAGE, type SUPPORTED_LANGUAGES } from './constant'

export type Language = keyof typeof SUPPORTED_LANGUAGES
export type AutoLanguage = typeof AUTO_LANGUAGE
export type FromLanguage = Language | AutoLanguage

export interface State {
  fromLanguage: FromLanguage
  toLanguage: Language
  fromText: string
  result: string
  loading: boolean
}

export type Action =
 | { type: 'INTERCHANGE_LANGUAGES' }
 | { type: 'SET_FROM_LANGUAGE', payload: FromLanguage }
 | { type: 'SET_TO_LANGUAGE', payload: Language }
 | { type: 'SET_FROM_TEXT', payload: string }
 | { type: 'SET_RESULT', payload: string }

export enum SectionType {
  FROM = 'from',
  TO = 'to'
}
