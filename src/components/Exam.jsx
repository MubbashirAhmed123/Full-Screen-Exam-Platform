import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import ViolationModal from './ViolationModal';

function Exam({ terminateExam, completeExam, violationCount, setViolationCount }) {
  const [showViolationModal, setShowViolationModal] = useState(false);

  useEffect(() => {
    enterFullScreen();

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        handleViolation();
      }
    };

    const handleBeforeUnload = (e) => {
      e.preventDefault();
      e.returnValue = '';
    };

    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {
      if (e.key === 'F11') {
        e.preventDefault();
      }
    };

    document.addEventListener('fullscreenchange', handleFullScreenChange);
    window.addEventListener('beforeunload', handleBeforeUnload);
    document.addEventListener('contextmenu', handleContextMenu);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullScreenChange);
      window.removeEventListener('beforeunload', handleBeforeUnload);
      document.removeEventListener('contextmenu', handleContextMenu);
      window.removeEventListener('keydown', handleKeyDown);
      if (document.fullscreenElement) {
        exitFullScreen();
      }
    };
  }, [violationCount]);

  const enterFullScreen = async () => {
    if (document.fullscreenElement) return; 
    const elem = document.documentElement;
    try {
      if (elem.requestFullscreen) {
        await elem.requestFullscreen();
      }
    } catch (err) {
      console.error("Error attempting to enter full-screen mode:", err);
    }
  };

  const exitFullScreen = async () => {
    if (document.fullscreenElement) { 
      try {
        await document.exitFullscreen();
      } catch (err) {
        console.error("Error attempting to exit full-screen mode:", err);
      }
    }
  };

  const handleViolation = () => {
    let newCount = violationCount + 1;
    setViolationCount(newCount);
    if (newCount === 1) {
      setShowViolationModal(true);
    } else {
      terminateExam();
    }
  };

  const handleReEnterFullScreen = async () => {
    setShowViolationModal(false);
    await enterFullScreen();
  };

  const handleSubmit = () => {
    completeExam();
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-white p-4">
      <h2 className="text-3xl mb-4">Exam In Progress</h2>
      <Timer duration={60 * 60} onTimeUp={terminateExam} />
     
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-700">[Exam Questions Here]</p>
      </div>
      <button
        onClick={handleSubmit}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 mb-4"
      >
        Submit Exam
      </button>

      {showViolationModal && (
        <ViolationModal onReEnterFullScreen={handleReEnterFullScreen} />
      )}
    </div>
  );
}

export default Exam;
