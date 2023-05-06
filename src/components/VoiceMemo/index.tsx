import { memo } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faUndoAlt } from '@fortawesome/free-solid-svg-icons'
import useVoiceMemo from './useVoiceMemo'

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
    handleEditButtonClick,
    handleSaveButtonClick,
    handleCancelButtonClick,
    handleInputChange,
    handleDeleteButtonClick,
  } = useVoiceMemo({
    initialText: memoText,
    onEdit,
    onReRecord,
    onDelete,
  });

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-md shadow-md">
      {isEditing ? (
        <>
          <textarea
            className="block w-full p-2 mb-2 bg-white border border-gray-300 rounded-md shadow-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={text}
            onChange={handleInputChange}
          />
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              onClick={handleSaveButtonClick}
            >
              Save
            </button>
            <button
              className="px-4 py-2 text-white bg-gray-500 rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={handleCancelButtonClick}
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex justify-between items-center">
            <p className="mb-2">{memoText}</p>
            <button
              className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
              onClick={onReRecord}
            >
              <FontAwesomeIcon icon={faUndoAlt} />
            </button>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              className="px-4 py-2 text-white bg-green-500 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={handleEditButtonClick}
            >
              <FontAwesomeIcon icon={faEdit} className="mr-2" />
              Edit
            </button>
            <button
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
              onClick={handleDeleteButtonClick}
            >
              <FontAwesomeIcon icon={faTrash} className="mr-2" />
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default memo(VoiceMemo)
