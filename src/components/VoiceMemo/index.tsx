import { motion } from 'framer-motion'

import useVoiceMemo from './useVoiceMemo'
import Editor from './components/Editor'
import Viewer from './components/Viewer'
import Pulse from '@components/animations/Pulse'

export interface MemoProps {
  text: string
  isRecording: boolean
  onEdit: (text: string) => void
  onReRecord: () => void
  onDelete: () => void
}

const VoiceMemo: React.FC<MemoProps> = ({
  text: initialText,
  isRecording,
  onEdit,
  onReRecord,
  onDelete,
}) => {
  const {
    isEditing,
    isReRecord,
    text,
    handleEditButton,
    handleSaveButton,
    handleCancelButton,
    handleInputChange,
    handleDeleteButton,
    handleReRecord,
  } = useVoiceMemo({
    initialText,
    isRecording,
    onEdit,
    onDelete,
    onReRecord,
  })

  return (
    <motion.li
      className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md relative"
      initial={{ opacity: 0, y: 10 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
      whileHover={{ scale: 1.05 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {isEditing ? (
        <Editor
          text={text}
          handleInputChange={handleInputChange}
          handleSaveButton={handleSaveButton}
          handleCancelButton={handleCancelButton}
        />
      ) : (
        <>
          <Pulse isActive={isReRecord} />
          <Viewer
            isReRecord={isReRecord}
            text={text}
            onReRecord={handleReRecord}
            handleEditButton={handleEditButton}
            handleDeleteButton={handleDeleteButton}
          />
        </>
      )}
    </motion.li>
  )
}

export default VoiceMemo
