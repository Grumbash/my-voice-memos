import { useState, useEffect } from 'react'

const recognitionSvc = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new recognitionSvc()
recognition.lang = 'en-US'

const useSpeechRecognition = ({ addMemo }: { addMemo: (memoText: string) => void }) => {
  const [isRecording, setIsRecording] = useState(false)

  const startRecording = () => {
    setIsRecording(true)
    recognition.start()
  }

  const stopRecording = () => {
    setIsRecording(false)
    recognition.stop()
  }

  useEffect(() => {
    recognition.onresult = (event) => {
      for (const result of event.results) {
        addMemo(result[0].transcript)
      }
      setIsRecording(false)
    }

    return () => {
      recognition.stop()
    }
  }, [])

  return {
    isRecording,
    startRecording,
    stopRecording,
  }
}

export default useSpeechRecognition
