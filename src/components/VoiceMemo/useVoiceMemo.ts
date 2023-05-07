import { useState, useCallback, useEffect } from 'react';

export interface UseVoiceMemoProps {
  initialText: string;
  onEdit: (text: string) => void;
  onDelete: () => void;
  onReRecord: () => void;
}

export interface UseVoiceMemoResult {
  isEditing: boolean;
  isReRecord: boolean;
  text: string;
  handleEditButton: () => void;
  handleSaveButton: () => void;
  handleCancelButton: () => void;
  handleInputChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleDeleteButton: () => void;
  handleReRecord: () => void;
}

const useVoiceMemo = ({
  initialText,
  onEdit,
  onDelete,
  onReRecord
}: UseVoiceMemoProps): UseVoiceMemoResult => {
  const [isEditing, setIsEditing] = useState(false);
  const [isReRecord, setIsReRecord] = useState(false);
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
    setIsReRecord(false);
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

  const handleReRecord = useCallback(() => {
    onReRecord();
    setIsReRecord(true);
  }, []);

  useEffect(() => {
    setText(initialText);
    setIsReRecord(false);
  }, [initialText]);

  return {
    isEditing,
    isReRecord,
    text,
    handleEditButton,
    handleSaveButton,
    handleCancelButton,
    handleInputChange,
    handleDeleteButton,
    handleReRecord,
  };
};

export default useVoiceMemo;
