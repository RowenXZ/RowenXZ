import React, { useEffect, useState, useRef, useCallback } from 'react';
import { formateTime } from '../../util'
import './index.css'
export interface ICallingProps {
  history: any
}

const firstPlay = require('../../assets/audio/output_FyWFyx2.wav');
const lastPlay = require('../../assets/audio/output_x0pjDJ5.wav');



export default function Calling(props: ICallingProps) {
  let [time, setTime] = useState(0);
  const audioRef = useRef<any>();
  
  useEffect(() => {
    const timeInterval = setInterval(() => {
      setTime(++time)
    }, 1000)
    return () => {
      setTime(0)
      clearInterval(timeInterval)
    }
  }, [])
  useEffect(() => {
    if (time > 10) {
      onClose()
    }
  }, [time])
  useEffect(() => {
    playSelect()
  }, [audioRef.current])

  const playSelect = (url = firstPlay.default) => {
    let audioPlay = audioRef.current;
    audioPlay.src = '';
    audioPlay.src = url;
    audioPlay.play();
    const endedInter = setInterval(() => {
      if (audioPlay.ended) {
        if (audioPlay.src.indexOf(lastPlay.default) !== -1) {
          clearInterval(endedInter)
          return
        }
        playSelect(lastPlay.default)
      }
    })
  }

  const onClose = () => {
    props.history.replace('/form')
  }
  return (
    <div className="Calling">

      <audio
        ref={audioRef}
        controls={false}
        preload='none'
        controlsList="nodownload">
        <track kind="captions" />
        {/* <source src="https://service.pp-voice.com/media/documents/2021/09/01/output_FyWFyx2.wav" type="audio/x-wav"></source> */}
        Your browser does not support the audio element
      </audio>
      <div className="Calling-content">
        <span className="Calling-title">ICE Mom</span>
        <span className="Calling-time">{formateTime(time)}</span>
      </div>
      <div className="Calling-click" onClick={onClose}></div>
    </div>
  );
}
