import { useState, useCallback } from 'react';

export interface UseVoiceMemoProps {
  initialText: string;
  onEdit: (text: string) => void;
  onReRecord: () => void;
  onDelete: () => void;
}

export interface UseVoiceMemoResult {
  isEditing: boolean;
  text: string;
  handleEditButtonClick: () => void;
  handleSaveButtonClick: () => void;
  handleCancelButtonClick: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDeleteButtonClick: () => void;
}

const useVoiceMemo = ({
  initialText,
  onEdit,
  onReRecord,
  onDelete,
}: UseVoiceMemoProps): UseVoiceMemoResult => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleEditButtonClick = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSaveButtonClick = useCallback(() => {
    onEdit(text);
    setIsEditing(false);
  }, [onEdit, text]);

  const handleCancelButtonClick = useCallback(() => {
    setText(initialText);
    setIsEditing(false);
  }, [initialText]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    [],
  );

  const handleDeleteButtonClick = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return {
    isEditing,
    text,
    handleEditButtonClick,
    handleSaveButtonClick,
    handleCancelButtonClick,
    handleInputChange,
    handleDeleteButtonClick,
  };
};

export default useVoiceMemo;
