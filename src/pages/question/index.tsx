import React, { useState, useCallback, useEffect } from 'react';
import { TwitterShareButton } from 'react-share';
// import arrow from '../../assets/image/arrow.png';
import twitter from '../../assets/image/Twitter.png';

import './index.css';
export interface IQuestionProps {
  history: any
}

export default function Question(props: IQuestionProps) {
  // const [userName, setUserName] = useState('')
  // const [userAddress, setUserAddress] = useState('')
  const [yes, setYes] = useState(false);

  useEffect(() => {
    // @ts-ignore
    // console.log(returnCitySN["cip"]+','+returnCitySN['cname']);
  }, [])
  const onChange = useCallback(
    () => {
      setTimeout(() => {
        setYes(!yes)
      }, 1500);
    },
    [yes],
  );
  // const onSubmit = useCallback(
  //   () => {
  //     if (yes) {
  //       const adress = new RegExp(/^0x[a-fA-F0-9]{40}$/);
  //       const name = new RegExp(/(^|[^@\w])@(\w{1,15})\b/);
  //       if (userAddress && adress.test(userAddress)) {
  //         if (userName && name.test(userName)) {
  //           props.history.push({
  //             pathname: '/success',
  //             query: {
  //               userName,
  //               userAddress
  //             }
  //           })
  //         } else {
  //           alert('Please fill in Twitter username!')
  //         }
  //       } else {
  //         alert('Please fill in the account address!')
  //       }
  //     } else {
  //       alert('Please share on Twitter first!')
  //     }
  //   },
  //   [userName, userAddress, yes],
  // )
  return (
    <div className="Question">
      <div className="Question-title">Please follow the prompt steps below</div>
      <div className="Question-form">
        <div className="form-item">
          <div className="form-lable">
            {/* <img src={arrow} alt="arrow" className="lable-icon" /> */}
            <span className="lable-text">Share pinned messages on Twitter</span>
          </div>
          <div className="form-body">
            <div className="bady-warp">
              {
                yes ? (
                  <span className="warp-text">Sharing is successful! thanks for your support!</span>
                ) :
                  (
                    <TwitterShareButton
                      onClick={onChange}
                      url={window.location.origin.toString()}
                      title={'Here Is A Gift from VoiceNFT, Please Have A Check.'}
                      className="Demo__some-network__share-button">
                      <div className="warp-btn"><img className="twitter-iocn" src={twitter} alt="twitter" />Share to Twitter</div>
                    </TwitterShareButton>

                  )
              }
            </div>
          </div>
        </div>
        {/* <div className="form-item">
          <div className="form-lable">
            <img src={arrow} alt="arrow" className="lable-icon" />
            <span className="lable-text">Wallet address(Plian)*</span>
          </div>
          <div className="form-body">
            <input type="text" className="userAddress" value={userAddress} placeholder="Please enter wallet address" onChange={(e) => setUserAddress(e.target.value.trim())} />
          </div>

        </div>
        <div className="form-item">
          <div className="form-lable">
            <img src={arrow} alt="arrow" className="lable-icon" />
            <span className="lable-text">Twitter usernames participating in the repost(@123)*</span>
          </div>
          <div className="form-body">
            <input type="text" className="userName" value={userName} placeholder="Please enter user name" onChange={(e) => setUserName(e.target.value.trim())} />
          </div>

        </div> */}
      </div>
      {/* <button type="submit" className="btn" onClick={onSubmit}>Submit</button> */}
    </div>
  );
}
