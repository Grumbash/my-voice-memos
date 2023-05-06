import Memo from './components/Memo';
import useIndexedDb from './hooks/useIndexedDb';
import useSpeechRecognition from './hooks/useSpeechRecognition';

const App = () => {
  const { memos, addMemo, editMemo, deleteMemo } = useIndexedDb();
  const { isRecording, startRecording, stopRecording } = useSpeechRecognition({addMemo});

  const handleRecordingClick = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const handleEditAction = (id: number) => (text: string) => {
    editMemo(id, text);
  };

  const handleReRecordAction = (id: number) => () => {
    const memo = memos.find((memo) => memo.id === id);
    if (!memo) {
      return;
    }

    deleteMemo(id);

    startRecording();
  };

  return (
    <>
      <h1>My Voice Memos</h1>
      <button onClick={handleRecordingClick}>{isRecording ? 'Stop' : 'Start'} recording</button>
      {memos.map((memo) => (
        <Memo key={memo.id} memo={memo.text} onEdit={handleEditAction(memo.id)} onReRecord={handleReRecordAction(memo.id)} />
      ))}
    </>
  );
};

export default App;
