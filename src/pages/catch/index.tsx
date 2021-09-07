import React from 'react';
// import AudioPlay from '../../component/AudioPlay'
import './index.css'
export interface ICatchProps {
  history: any
}

export default function Catch(props: ICatchProps) {
  // const audioRef = useRef();
  // useEffect(() => {
  //   console.log(audioRef.current);
  // }, [])
  return (
    <div className="Catch">
      <div className="Catch-content">
        <span className="Catch-title">CZ 🔶 Binance</span>
      </div>
      <div className="Catch-click" onClick={() => {
        props.history.push('/calling')
      }}></div>
    </div>
  );
}
