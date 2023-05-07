import VoiceMemo from '@components/VoiceMemo'
import { VoiceMemoType } from '@types'

type VoiceMemoListProps = {
  memos: VoiceMemoType[]
  isRecording: boolean
  onEditWrapper: (id: number) => (text: string) => void
  onReRecordWrapper: (id: number) => () => void
  onDeleteWrapper: (id: number) => () => void
}

const VoiceMemoList: React.FC<VoiceMemoListProps> = ({ memos, isRecording, onEditWrapper, onReRecordWrapper, onDeleteWrapper }) => {
  return (
    <ul className="max-w-md p-6 mx-auto flex flex-col gap-4 overflow-y-auto">
      {memos.map((memo) => (
        <VoiceMemo
          key={memo.id}
          text={memo.text}
          isRecording={isRecording}
          onEdit={onEditWrapper(memo.id)}
          onReRecord={onReRecordWrapper(memo.id)}
          onDelete={onDeleteWrapper(memo.id)}
        />
      ))}
    </ul>
  )
}

export default VoiceMemoList
