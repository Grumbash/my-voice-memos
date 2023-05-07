import { motion } from 'framer-motion'

import useVoiceMemo from './useVoiceMemo'
import Editor from './components/Editor'
import Viewer from './components/Viewer'

interface WaveProps {
  delay: number
}

const Wave: React.FC<WaveProps> = ({ delay }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: '#10B981',
        opacity: 0.5,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 0,
      }}
      animate={{ scale: [0, 1.5, 2], opacity: [0.5, 0.2, 0] }}
      transition={{ duration: 1.5, delay, repeat: Infinity }}
    />
  )
}

interface PulseProps {
  isReRecord: boolean
}

const Pulse: React.FC<PulseProps> = ({ isReRecord }) => {
  if (!isReRecord) {
    return null
  }

  return (
    <div className="relative w-full h-full">
      <Wave delay={0} />
      <Wave delay={0.3} />
      <Wave delay={0.6} />
    </div>
  )
}

export interface MemoProps {
  text: string
  onEdit: (text: string) => void
  onReRecord: () => void
  onDelete: () => void
}

const VoiceMemo: React.FC<MemoProps> = ({ text: initialText, onEdit, onReRecord, onDelete }) => {
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
    onEdit,
    onDelete,
    onReRecord,
  })

  return (
    <motion.div
      className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md relative"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <Pulse isReRecord={isReRecord} />
      {isEditing ? (
        <Editor
          text={text}
          handleInputChange={handleInputChange}
          handleSaveButton={handleSaveButton}
          handleCancelButton={handleCancelButton}
        />
      ) : (
        <Viewer
          isReRecord={isReRecord}
          text={text}
          onReRecord={handleReRecord}
          handleEditButton={handleEditButton}
          handleDeleteButton={handleDeleteButton}
        />
      )}
    </motion.div>
  )
}

export default VoiceMemo
