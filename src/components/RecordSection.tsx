import { motion } from 'framer-motion'

export interface RecordSectionProps {
  isRecording: boolean
  toggleRecording: () => void
}

const RecordSection: React.FC<RecordSectionProps> = ({ isRecording, toggleRecording }) => {
  return (
    <motion.header
      className="flex flex-col items-center space-y-4 mb-8 sticky top-0 bg-white z-10"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="text-4xl font-bold">My Voice Memos</h1>
      <motion.button
        className={`bg-indigo-500 text-white px-4 py-2 rounded-full shadow-md ${
          isRecording ? 'bg-red-500' : ''
        }`}
        onClick={toggleRecording}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isRecording ? 'Stop' : 'Start'} recording
      </motion.button>
    </motion.header>
  )
}

export default RecordSection
