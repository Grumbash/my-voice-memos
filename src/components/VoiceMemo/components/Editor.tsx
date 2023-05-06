// Note: VoiceMemo Editor Component
import { motion } from 'framer-motion'

export interface EditorProps {
  text: string
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
  handleSaveButton: () => void
  handleCancelButton: () => void
}
const Editor: React.FC<EditorProps> = ({
  text,
  handleInputChange,
  handleSaveButton,
  handleCancelButton,
}) => {
  return (
    <motion.div
      className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.3 }}
    >
      <motion.textarea
        className="block w-full p-2 mb-2 bg-white border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={text}
        onChange={handleInputChange}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="flex justify-end space-x-2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        <motion.button
          className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          onClick={handleSaveButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Save
        </motion.button>
        <motion.button
          className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={handleCancelButton}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Cancel
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Editor
