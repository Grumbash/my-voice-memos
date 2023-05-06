import VoiceMemoList from '@components/VoiceMemoList'
import useIndexedDb from '@hooks/useIndexedDb'
import useSpeechRecognition from '@hooks/useSpeechRecognition'

const App = () => {
  const { memos, addMemo, editMemo, deleteMemo } = useIndexedDb()
  const { isRecording, startRecording, stopRecording } = useSpeechRecognition({ addMemo, editMemo })

  const handleRecording = () => {
    if (isRecording) {
      stopRecording()
    } else {
      startRecording()
    }
  }

  const handleEdit = (id: number) => (text: string) => {
    editMemo(id, text)
  }

  const handleReRecord = (id: number) => async () => {
    stopRecording()
    startRecording(id)
  }

  const handleDelete = (id: number) => () => {
    deleteMemo(id)
  }

  return (
    <>
      <div className="flex flex-col items-center space-y-4 mb-8">
        <h1 className="text-4xl font-bold">My Voice Memos</h1>
        <button
          className={`bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md ${
            isRecording ? 'bg-red-500' : ''
          }`}
          onClick={handleRecording}
        >
          {isRecording ? 'Stop' : 'Start'} recording
        </button>
      </div>

      <VoiceMemoList
        memos={memos}
        onEdit={handleEdit}
        onReRecord={handleReRecord}
        onDelete={handleDelete}
      />
    </>
  )
}

export default App
