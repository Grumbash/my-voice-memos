import { useState, useEffect } from 'react'

const recognitionSvc = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new recognitionSvc()
recognition.lang = 'en-US'

export interface UseSpeechRecognitionProps {
  addMemo: (memoText: string) => void
  editMemo: (id: number, memoText: string) => void
}

const useSpeechRecognition = ({ addMemo, editMemo }: UseSpeechRecognitionProps) => {
  const [isRecording, setIsRecording] = useState(false)
  const [id, setId] = useState<number>()

  const startRecording = (id?: number) => {
    if (id) setId(id)
    setIsRecording(true)
    recognition.start()
  }

  const stopRecording = () => {
    setIsRecording(false)
    recognition.stop()
  }

  useEffect(() => {
    recognition.onresult = (event) => {
      if (id) {
        editMemo(id, event.results[0][0].transcript)
        setId(undefined)
      } else {
        addMemo(event.results[0][0].transcript)
      }
    }

    recognition.onend = () => {
      setIsRecording(false)
    }
  }, [id])

  useEffect(() => {
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
