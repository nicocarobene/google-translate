import { Api } from '../Api'
import { type FromLanguage, type Language } from '../types'

const getResult = async ({ fromLanguage, toLanguage, text }: { fromLanguage: FromLanguage, toLanguage: Language, text: string }) => {
  if (text === '') return
  if (fromLanguage === 'auto')fromLanguage = 'en'

  const url = Api({ fromLanguage, toLanguage, text })

  return await fetch(url).then(async res => await res.json()).then(result => {
    const { translatedText } = result.responseData
    return translatedText
  })
}

export default getResult
