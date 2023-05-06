import VoiceMemo from '@components/VoiceMemo'
import { VoiceMemoType } from '@types'

type VoiceMemoListProps = {
  memos: VoiceMemoType[]
  onEdit: (id: number) => (text: string) => void
  onReRecord: (id: number) => () => void
  onDelete: (id: number) => () => void
}

const VoiceMemoList = ({ memos, onEdit, onReRecord, onDelete }: VoiceMemoListProps) => {
  return (
    <div className="max-w-md mx-auto flex flex-col gap-4">
      {memos.map((memo) => (
        <VoiceMemo
          key={memo.id}
          text={memo.text}
          onEdit={onEdit(memo.id)}
          onReRecord={onReRecord(memo.id)}
          onDelete={onDelete(memo.id)}
        />
      ))}
    </div>
  )
}

export default VoiceMemoList
