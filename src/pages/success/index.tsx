import React from 'react';
import { subSplit } from '../../util'
import Succ from '../../assets/image/succ.png'
import Successs from '../../assets/image/success.png'
import './index.css'
export interface ISuccessProps {
  location: {
    query: {
      userAddress: string,
      userName: string,
    }
  }
}

export default function Success(props: ISuccessProps) {
  const { userAddress, userName } = props.location.query;
  const userObj = [
    'Sharing is successful!',
    `Wallet address：${subSplit(userAddress, 6, 6)}`,
    `Twitter account：${userName}`
  ]
  return (
    <div className="Success">
      <div className="Success-title">Thanks for your support!</div>
      <div className="Success-list">
        {userObj && userObj.map((item, index) => (
          <div className="list-item" key={index}>
            <img src={Succ} className="item-suc-icon" alt="Suc" />
            {item}
          </div>
        ))}
      </div>
      <div className="Success-content">
        The 5 PNFT rewards will be distributed to the wallet address you submitted as an airdrop at 14:00 on August 31, 2021.
        <br />
        <br />
        Please check it out! Thank you for your support and participation!
      </div>
      <div style={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
        <img src={Successs} className="success-icon" alt="Success" />
      </div>
    </div>
  );
}