import VoiceMemo from '@components/VoiceMemo'
import { VoiceMemoType } from '@types'

type VoiceMemoListProps = {
  memos: VoiceMemoType[]
  onEditWrapper: (id: number) => (text: string) => void
  onReRecordWrapper: (id: number) => () => void
  onDeleteWrapper: (id: number) => () => void
}

const VoiceMemoList: React.FC<VoiceMemoListProps> = ({ memos, onEditWrapper, onReRecordWrapper, onDeleteWrapper }) => {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-4 h-screen overflow-y-auto">
      {memos.map((memo) => (
        <VoiceMemo
          key={memo.id}
          text={memo.text}
          onEdit={onEditWrapper(memo.id)}
          onReRecord={onReRecordWrapper(memo.id)}
          onDelete={onDeleteWrapper(memo.id)}
        />
      ))}
    </div>
  )
}

export default VoiceMemoList
