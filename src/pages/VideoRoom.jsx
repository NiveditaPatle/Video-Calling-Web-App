import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import React from 'react'
import { useParams } from 'react-router-dom'

function VideoRoom() {

  let {roomID} = useParams();

  const myMetting = async (element) => {
    // generate Kit Token
    const appID = 135264447;
    const serverSecret = "b5bf274e57f80c78a5b7ee67032c39f1";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appID,serverSecret,roomID,Date.now().toString(),"NP")

    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken);

    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url:`https://video-calling-web-app-seven.vercel.app/room/${roomID}`
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, 
      },
    });
  }

  return (
    <div>
      <div ref={myMetting}/>
    </div>
  )
}

export default VideoRoom
