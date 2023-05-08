import { motion } from 'framer-motion'
import { faEdit, faTrash, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ViewerProps {
  text: string
  isReRecord: boolean
  onReRecord: () => void
  handleEditButton: () => void
  handleDeleteButton: () => void
}

const Viewer: React.FC<ViewerProps> = ({
  text,
  isReRecord,
  onReRecord,
  handleEditButton,
  handleDeleteButton,
}) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.2 } },
  }

  const buttonVariants = {
    hover: { scale: 1.05 },
    tap: { scale: 0.9 },
  }

  const deleteButtonVariants = {
    hover: { backgroundColor: '#EF4444' },
    tap: { scale: 0.9 },
  }

  return (
    <motion.div variants={containerVariants} initial="hidden" animate="visible">
      <div className="flex justify-between items-center mb-2">
        <motion.p whileHover={{ color: '#10B981' }}>
          {text}
        </motion.p>
        <motion.button
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={onReRecord}
          disabled={isReRecord}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faUndoAlt} className="mr-2" />
            <span>Re-Record</span>
          </div>
        </motion.button>
      </div>
      <motion.div className="flex justify-end space-x-2">
        <motion.button
          className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={handleEditButton}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            <span>Edit</span>
          </div>
        </motion.button>
        <motion.button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleDeleteButton}
          variants={deleteButtonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <div className="flex items-center">
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            <span>Delete</span>
          </div>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Viewer
