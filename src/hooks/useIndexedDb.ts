import { useEffect, useState } from 'react';
import { openDB } from 'idb';

interface Memo {
  id: number;
  text: string;
}

interface IndexedDb {
  memos: Memo[];
}

const useIndexedDb = () => {
  const [memos, setMemos] = useState<Memo[]>([]);

  useEffect(() => {
    const initDb = async () => {
      const db = await openDB<IndexedDb>('my-voice-memos', 1, {
        upgrade(db) {
          db.createObjectStore('memos', { keyPath: 'id' });
        },
      });
      const tx = db.transaction('memos', 'readonly');
      const store = tx.objectStore('memos');
      const storedMemos = await store.getAll();
      setMemos(storedMemos);
    };
    initDb();
  }, []);

  const saveMemo = async (memo: Memo) => {
    const db = await openDB<IndexedDb>('my-voice-memos', 1);
    const tx = db.transaction('memos', 'readwrite');
    const store = tx.objectStore('memos');
    await store.put(memo);
    await tx.done;
    setMemos((prevMemos) => [...prevMemos, memo]);
  };

  const addMemo = (memoText: string) => {
    const id = new Date().getTime();
    const memo: Memo = { id, text: memoText };
    saveMemo(memo);
  };

  const deleteMemo = async (id: number) => {
    const db = await openDB<IndexedDb>('my-voice-memos', 1);
    const tx = db.transaction('memos', 'readwrite');
    const store = tx.objectStore('memos');
    await store.delete(id);
    await tx.done;
    setMemos((prevMemos) => prevMemos.filter((memo) => memo.id !== id));
  };

  const editMemo = async (id: number, text: string) => {
    const db = await openDB<IndexedDb>('my-voice-memos', 1);
    const tx = db.transaction('memos', 'readwrite');
    const store = tx.objectStore('memos');
    const memo = await store.get(id);
    memo.text = text;
    await store.put(memo);
    await tx.done;
    setMemos((prevMemos) =>
      prevMemos.map((memo) => (memo.id === id ? { ...memo, text } : memo))
    );
  };

  return { memos, addMemo, deleteMemo, editMemo };
};

export default useIndexedDb;
