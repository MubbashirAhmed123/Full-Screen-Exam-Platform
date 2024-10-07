import React, { useState } from 'react';
import StartExamModal from './components/StartExamModal';
import Exam from './components/Exam';
import TerminationModal from './components/TerminationModal';
import Report from './components/Report';

function App() {
  const [examStarted, setExamStarted] = useState(false);
  const [examTerminated, setExamTerminated] = useState(false);
  const [examCompleted, setExamCompleted] = useState(false);
  const [violationCount, setViolationCount] = useState(0);

  const startExam = () => {
    setExamStarted(true);
  };

  const terminateExam = () => {
    setExamTerminated(true);
  };

  const completeExam = () => {
    setExamCompleted(true);
  };

  const resetExam = () => {
    setExamStarted(false);
    setExamTerminated(false);
    setExamCompleted(false);
    setViolationCount(0);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      {!examStarted && !examTerminated && !examCompleted && (
        <StartExamModal startExam={startExam} />
      )}

      {examStarted && !examTerminated && !examCompleted && (
        <Exam
          terminateExam={terminateExam}
          completeExam={completeExam}
          violationCount={violationCount}
          setViolationCount={setViolationCount}
        />
      )}

      {examTerminated && (
        <TerminationModal resetExam={resetExam} />
      )}

      {examCompleted && (
        <Report resetExam={resetExam} />
      )}
    </div>
  );
}

export default App;
