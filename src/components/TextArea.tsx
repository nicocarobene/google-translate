/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { Form } from 'react-bootstrap'
import { SectionType } from '../types.d'
type Props =
 | { type: SectionType.FROM, loading?: boolean, onChange: (value: string) => void, value: string }
 | { type: SectionType.TO, loading?: boolean, onChange: (value: string) => void, value: string }

const commonStyles = { border: 0, height: '200px', resize: 'none' }
const getPlaceholder = ({ type, loading }: { type: SectionType, loading?: boolean }) => {
  if (type === SectionType.FROM) return 'Introducir Texto'
  if (loading === true) return 'Cargando . . .'
  return 'Traduccion'
}

export const TextArea: React.FC<Props> = ({ type, loading, value, onChange }) => {
  const styles = type === SectionType.FROM
    ? commonStyles as React.CSSProperties
    : { ...commonStyles, backgroundColor: '#f5f5f5' } as React.CSSProperties

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(e.target.value)
  }
  return (
    <Form.Control
     autoFocus= {type === SectionType.FROM }
      as='textarea'// que elemento renderizar es de react-bootstrap
      placeholder= {getPlaceholder({ type, loading })}
      disabled={type === SectionType.TO}
      style={styles}
      value={value}
      onChange={handleChange}
    />
  )
}
