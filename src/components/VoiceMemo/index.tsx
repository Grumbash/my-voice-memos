import { memo } from 'react'
import { motion } from 'framer-motion'

import useVoiceMemo from './useVoiceMemo'
import Editor from './components/Editor'
import Viewer from './components/Viewer'

export interface MemoProps {
  text: string
  onEdit: (text: string) => void
  onReRecord: () => void
  onDelete: () => void
}

const VoiceMemo: React.FC<MemoProps> = ({ text: memoText, onEdit, onReRecord, onDelete }) => {
  const {
    isEditing,
    text,
    handleEditButton,
    handleSaveButton,
    handleCancelButton,
    handleInputChange,
    handleDeleteButton,
  } = useVoiceMemo({
    initialText: memoText,
    onEdit,
    onDelete,
  })

  return (
    <motion.div
      className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      {isEditing ? (
        <Editor
          text={text}
          handleInputChange={handleInputChange}
          handleSaveButton={handleSaveButton}
          handleCancelButton={handleCancelButton}
        />
      ) : (
        <Viewer
          memoText={text}
          onReRecord={onReRecord}
          handleEditButton={handleEditButton}
          handleDeleteButton={handleDeleteButton}
        />
      )}
    </motion.div>
  )
}

export default memo(VoiceMemo)
