import message from '../../assets/image/message.png';
import mes from '../../assets/image/mes.png';
import fill from '../../assets/image/fill.png';

import './index.css'

export interface IndexProps {
    history: any
}

export default function Calling(props: IndexProps) {
    return (
        <div className="Index">
            <header className="Index-header" >
                <img src={message} className="Index-logo" alt="message" />
            </header>
            <div className="Index-content" onClick={() => {
                props.history.push('/catch')
            }} >
                <img src={mes} className="Index-content-click" alt="click" />
                <img src={fill} className="Index-content-fill" alt="click" />
                <span className="Index-content-text" > Please click to get the gift! </span>
            </div>
            <div className="Index-list" >
                Details of the event:
                <ol type="1" >
                    <li>Click “Mail” to get gifts; </li>
                    < li > Follow “@pizzap” Twitter; </li>
                    < li > Fill in the Twitter account and wallet address; </li>
                </ol>
                Award: <br />
                Reward 5 PNFT
            </div>
        </div>
    );
}