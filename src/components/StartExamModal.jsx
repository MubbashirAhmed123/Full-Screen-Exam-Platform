import React, { useState } from 'react';
import ConfirmationModal from './ConfirmationModal';

function StartExamModal({ startExam }) {

    const[conform,setConfirm]=useState(false)

  const handleStart = () => {
    setConfirm(true)
    // startExam();
  };

  return (
    <>
    { conform && <ConfirmationModal onConfirm={startExam} onCancel={setConfirm}/>}
    <div className="bg-white p-8 rounded shadow-md">
      <h2 className="text-2xl mb-4">Start Your Exam</h2>
      <p className="mb-6">Please confirm to start the exam. Once started, the exam will enter full-screen mode.</p>
      <button
        onClick={handleStart}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Start Exam
      </button>
    </div>
    </>
  );
}

export default StartExamModal;
