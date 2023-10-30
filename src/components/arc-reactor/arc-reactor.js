import React, { useEffect, useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import './arc-reactor.css';

const ArcReactor = () => {
  const [message, setMessage] = useState('')
  const commands = [
    {
      command: 'peaches * please',
      callback: (verbiage) => setMessage(`${verbiage}`),
      matchInterim: false
    }
  ]
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition
  } = useSpeechRecognition({ commands });

  useEffect(() => {
    SpeechRecognition.startListening({ continuous: true }) // Commands work on continuous being false
  }, []);

  if (!browserSupportsSpeechRecognition) {
    return <span>Browser doesn't support speech recognition.</span>;
  }

  return (

    <div id="arc_container" className="ArcReactor">
      <div className="arc_reactor">
        <div className="case_container">
          <div className="e7">
            <div className="semi_arc_3 e5_1">
              <div className="semi_arc_3 e5_2">
                <div className="semi_arc_3 e5_3">
                  <div className="semi_arc_3 e5_4"></div>
                </div>
              </div>
            </div>
            <div className="core2"></div>
          </div>
          <ul className="marks">
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
            <li></li><li></li><li></li><li></li><li></li><li></li>
          </ul>
        </div>
      </div>
      <p style={{color: 'white'}}>Transcript: {transcript}</p>
      <p style={{color: 'white'}}>Message: {message}</p>
    </div>
    
  )
}

ArcReactor.propTypes = {};

ArcReactor.defaultProps = {};

export default ArcReactor;
