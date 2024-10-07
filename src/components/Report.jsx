import React from 'react';

function Report({ resetExam }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md text-center w-11/12 max-w-md">
        <h2 className="text-2xl mb-4">Exam Completed</h2>
        <p className="mb-6">Congratulations! You have successfully completed the exam.</p>
        <button
          onClick={resetExam}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Restart Exam
        </button>
      </div>
    </div>
  );
}

export default Report;
