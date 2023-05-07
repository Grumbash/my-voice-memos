import useIndexedDb from '@hooks/useIndexedDb'
import useSpeechRecognition from '@hooks/useSpeechRecognition'

const useApp = () => {
  const { memos, addMemo, editMemo, deleteMemo } = useIndexedDb()
  const { isRecording, startRecording, stopRecording } = useSpeechRecognition({
    addMemo,
    editMemo,
  })

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const handleEdit = (id: number) => (text: string) => {
    editMemo(id, text)
  }

  const handleReRecord = (id: number) => () => {
    stopRecording()
    startRecording(id)
  }

  const handleDelete = (id: number) => () => {
    deleteMemo(id)
  }

  return {
    memos,
    isRecording,
    toggleRecording,
    handleEdit,
    handleReRecord,
    handleDelete,
  }
}

export default useApp
