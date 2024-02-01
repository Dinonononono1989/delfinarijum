import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'

export default function Dugme() {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition();
  const startListening = () => {
    SpeechRecognition.startListening({ language: 'sr-SP' });
  }


  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  const command = () => {
    SpeechRecognition.stopListening({ language: 'sr-SP' });
    window.open(`https://delfi.rs/pretraga?c=0&q=${transcript}`);
  }

  return (
    <div>
      <button
        onTouchStart={startListening}
        onMouseDown={startListening}
        onTouchEnd ={command}
        onMouseUp={command}
      >Држи дугме и причај!</button>
    </div>
  );
}
