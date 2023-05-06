import { motion } from 'framer-motion'
import { faEdit, faTrash, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export interface ViewerProps {
  memoText: string
  onReRecord: () => void
  handleEditButton: () => void
  handleDeleteButton: () => void
}

const Viewer: React.FC<ViewerProps> = ({
  memoText,
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
      <div className="flex justify-between items-center">
        <motion.p className="mb-2" whileHover={{ color: '#10B981' }}>
          {memoText}
        </motion.p>
        <motion.button
          className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={onReRecord}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <FontAwesomeIcon icon={faUndoAlt} />
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
          <motion.div className="flex items-center" variants={buttonVariants}>
            <FontAwesomeIcon icon={faEdit} className="mr-2" />
            Edit
          </motion.div>
        </motion.button>
        <motion.button
          className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
          onClick={handleDeleteButton}
          variants={deleteButtonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          <motion.div className="flex items-center" variants={buttonVariants}>
            <FontAwesomeIcon icon={faTrash} className="mr-2" />
            Delete
          </motion.div>
        </motion.button>
      </motion.div>
    </motion.div>
  )
}

export default Viewer
