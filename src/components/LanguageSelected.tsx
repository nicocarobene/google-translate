import { Form } from 'react-bootstrap'
import { AUTO_LANGUAGE, SUPPORTED_LANGUAGES } from '../constant'
import { SectionType, type FromLanguage, type Language } from '../types.d'

// algo interesante que agrega midu con el object.entrie de un objeto sacamos la key como el value
// interface Props {
//   onChange: (language: Language) => void
// }
type Props =
 | { type: SectionType.FROM, value: FromLanguage, onChange: (language: FromLanguage) => void }
 | { type: SectionType.TO, value: Language, onChange: (language: Language) => void }

export const LanguageSelected: React.FC<Props> = ({ onChange, type, value }) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as Language)
  }
  return (
    <Form.Select aria-label='Selecciona el idioma' onChange={handleChange} value={value}>
        {type === SectionType.FROM && <option value={AUTO_LANGUAGE}>Dectectar Idioma</option>}
        {Object.entries(SUPPORTED_LANGUAGES).map(([key, literal]) => (
            <option key={key} value={key}>
                {literal}
            </option>
        ))}
    </Form.Select>
  )
}
