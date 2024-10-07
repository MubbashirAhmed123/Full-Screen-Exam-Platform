import React from 'react';

const ConfirmationModal = ({ onConfirm, onCancel }) => {
  

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg">
        <h2 className="text-xl mb-4">Start Exam</h2>
        <p>Are you sure you want to start the exam?</p>
        <div className="mt-4 flex justify-end">
          <button
            onClick={()=>onCancel(false)}
            className="px-4 py-2 mr-2 bg-gray-300 rounded"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
