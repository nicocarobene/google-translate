import './App.css'
import { Container, Row, Col, Button, Stack } from 'react-bootstrap'
import { useStore } from './Hook/useStore'
import { AUTO_LANGUAGE, VOICE_FORLANGUAGE } from './constant'
import { ArrowsIcon, ClipboardIcon, SpeakerIcon } from './components/icons'
import { LanguageSelected } from './components/LanguageSelected'
import { SectionType } from './types.d'
import { TextArea } from './components/TextArea'
import { useDebounce } from './Hook/useDeounce'

function App () {
  const {
    fromLanguage,
    loading,
    toLanguage,
    fromText,
    result,
    interchangeLanguage,
    setFromLanguage,
    setToLanguage,
    setFromText,
    setResult
  } = useStore()

  const { debounceValue } = useDebounce(fromText, 300)

  const handelClipBoard = () => {
    navigator.clipboard.writeText(result).catch(() => {})
  }
  const handleSpeak = () => {
    const utterance = new SpeechSynthesisUtterance(fromText)
    utterance.lang = VOICE_FORLANGUAGE[toLanguage]
    utterance.rate = 0.9
    speechSynthesis.speak(utterance)
  }
  return (
    <Container>
      <h2>Google Translate</h2>
      <Row>
        <Col >
          <Stack gap={2}>
            <LanguageSelected
              type={SectionType.FROM}
              value={fromLanguage}
              onChange={setFromLanguage} />
            <TextArea
              type={SectionType.FROM}
              value={fromText}
              onChange={setFromText}
            />
          </Stack>
        </Col>
        <Col xs='auto'>
          <Button variant='link' disabled={fromLanguage === AUTO_LANGUAGE} onClick={interchangeLanguage} type='button'>
            <ArrowsIcon />
          </Button>
        </Col>
        <Col >
          <Stack gap={2}>
            <LanguageSelected
              type={SectionType.TO}
              value={toLanguage}
              onChange={setToLanguage} />
            <div style={{ position: 'relative' }}>
              <TextArea
                loading={loading}
                type={SectionType.TO}
                value={result}
                onChange={setResult}
              />
              <div style={{ position: 'absolute', left: 0, bottom: 0, opacity: 0.8, display: 'flex' }}>
                <Button variant='link'
                onClick={handelClipBoard}>
                  <ClipboardIcon/>
                </Button>
                <Button variant='link'
                onClick={handleSpeak}>
                  <SpeakerIcon/>
                </Button>
              </div>
            </div>
          </Stack>
        </Col>
      </Row>
    </Container>
  )
}

export default App
