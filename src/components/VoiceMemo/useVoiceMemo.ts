import { useState, useCallback } from 'react';

export interface UseVoiceMemoProps {
  initialText: string;
  onEdit: (text: string) => void;
  onDelete: () => void;
}

export interface UseVoiceMemoResult {
  isEditing: boolean;
  text: string;
  handleEditButton: () => void;
  handleSaveButton: () => void;
  handleCancelButton: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDeleteButton: () => void;
}

const useVoiceMemo = ({
  initialText,
  onEdit,
  onDelete,
}: UseVoiceMemoProps): UseVoiceMemoResult => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleEditButton = useCallback(() => {
    setIsEditing(true);
  }, []);

  const handleSaveButton = useCallback(() => {
    onEdit(text);
    setIsEditing(false);
  }, [onEdit, text]);

  const handleCancelButton = useCallback(() => {
    setText(initialText);
    setIsEditing(false);
  }, [initialText]);

  const handleInputChange = useCallback(
    (event: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(event.target.value);
    },
    [],
  );

  const handleDeleteButton = useCallback(() => {
    onDelete();
  }, [onDelete]);

  return {
    isEditing,
    text,
    handleEditButton,
    handleSaveButton,
    handleCancelButton,
    handleInputChange,
    handleDeleteButton,
  };
};

export default useVoiceMemo;
