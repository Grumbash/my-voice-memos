import VoiceMemoList from '@components/VoiceMemoList'
import RecordSection from '@components/RecordSection'

import useApp from './useApp'

const App = () => {
  const { memos, isRecording, handleReRecord, handleDelete, handleEdit, toggleRecording } = useApp()

  return (
    <>
      <RecordSection isRecording={isRecording} toggleRecording={toggleRecording} />
      <VoiceMemoList
        memos={memos}
        onEditWrapper={handleEdit}
        onReRecordWrapper={handleReRecord}
        onDeleteWrapper={handleDelete}
      />
    </>
  )
}

export default App
