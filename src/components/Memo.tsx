import { memo, useState } from "react";

interface MemoProps {
  memo: string;
  onEdit: (text: string) => void;
  onReRecord: () => void;
}

function Memo({ memo, onEdit, onReRecord }: MemoProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(memo);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    onEdit(text);
    setIsEditing(false);
  };

  const handleCancelButtonClick = () => {
    setText(memo);
    setIsEditing(false);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      {isEditing ? (
        <>
          <textarea value={text} onChange={handleInputChange} />
          <button onClick={handleSaveButtonClick}>Save</button>
          <button onClick={handleCancelButtonClick}>Cancel</button>
        </>
      ) : (
        <>
          <p>{memo}</p>
          <button onClick={handleEditButtonClick}>Edit</button>
          <button onClick={onReRecord}>Re-record</button>
        </>
      )}
    </div>
  );
}

export default memo(Memo);
