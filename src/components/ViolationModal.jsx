import React from 'react';

function ViolationModal({ onReEnterFullScreen }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-8 rounded shadow-md w-11/12 max-w-md">
        <h2 className="text-2xl mb-4 text-red-600">Violation Warning</h2>
        <p className="mb-6">
          Exiting full-screen mode is not allowed during the exam. Please remain in full-screen mode.
        </p>
        <div className="flex justify-center">
          <button
            onClick={onReEnterFullScreen}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Re-enter Full-Screen
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViolationModal;
