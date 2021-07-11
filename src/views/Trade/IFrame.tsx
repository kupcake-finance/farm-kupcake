import React, { useContext, useRef } from 'react'
import IframeResizer from 'iframe-resizer-react'
import { ThemeContext } from '../../contexts/ThemeContext'
import { LanguageContext } from '../../contexts/Localisation/languageContext'

interface IFrameProps {
  url: string
  title: string
}

const IFrame: React.FC<IFrameProps> = (props) => {
  const { url, title } = props
  const iframeRef = useRef(null)
  const { isDark } = useContext(ThemeContext)
  const { selectedLanguage } = useContext(LanguageContext)
  const sendSettings = () => {
    const payload = {
      isDark,
      selectedLanguage,
    }
    iframeRef.current.sendMessage(payload)
  }
  return (
    <IframeResizer
      forwardRef={iframeRef}
      heightCalculationMethod="max"
      title={title}
      src={url}
      onLoad={sendSettings}
      style={{ width: '100%', maxWidth: '900px', height: '900px', borderRadius: '20px', zIndex: -1 }}
    />
  )
}

export default IFrame