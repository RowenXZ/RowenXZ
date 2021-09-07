import React, { useEffect, useState } from 'react';
import { formateTime } from '../../util'
import AudioPlay from '../../component/AudioPlay'
import './index.css'
export interface ICallingProps {
  history: any
}

const audiomass = require('../../assets/audio/audiomass-output.mp3');



export default function Calling(props: ICallingProps) {
  let [time, setTime] = useState(0);
  // const audioRef = useRef<any>();

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
    if (time >= 15) {
      onClose()
    }
  }, [time])
  // useEffect(() => {
  //   playSelect()
  // }, [audioRef.current])

  // const playSelect = (url = firstPlay.default) => {
  //   let audioPlay = audioRef.current;
  //   audioPlay.src = '';
  //   audioPlay.src = url;
  //   audioPlay.play();
  //   const endedInter = setInterval(() => {
  //     if (audioPlay.ended) {
  //       if (audioPlay.src.indexOf(lastPlay.default) !== -1) {
  //         clearInterval(endedInter)
  //         return
  //       }
  //       playSelect(lastPlay.default)
  //     }
  //   })
  // }

  const onClose = () => {
    props.history.replace('/form')
  }
  return (
    <div className="Calling">
      <AudioPlay
        url={audiomass}
        loop={false}
      />
      {/* <audio
        ref={audioRef}
        controls={false}
        preload='none'
        controlsList="nodownload">
        <track kind="captions" />
        //   Your browser does not support the audio element
      </audio>*/}
      <div className="Calling-content">
        <span className="Calling-title">CZ 🔶 Binance</span>
        <span className="Calling-time">{formateTime(time)}</span>
      </div>
      <div className="Calling-click" onClick={onClose}></div>
    </div>
  );
}
