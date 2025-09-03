// import React, { useRef, useEffect } from 'react';
//  // @ts-ignore
// import UnityView from '@azesmway/react-native-unity';
// import { View } from 'react-native';

// interface IMessage {
//   gameObject: string;
//   methodName: string;
//   message: string;
// }

// const Unity = () => {
//   const unityRef = useRef<UnityView>(null);

//   useEffect(() => {
//     if (unityRef?.current) {
//       const message: IMessage = {
//         gameObject: 'gameObject',
//         methodName: 'methodName',
//         message: 'message',
//       };
//       unityRef.current.postMessage(
//         message.gameObject,
//         message.methodName,
//         message.message
//       );
//     }
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <UnityView
//         ref={unityRef}
//         style={{ flex: 1 }}
//         onUnityMessage={(result: { nativeEvent: { message: any; }; }) => {
//           console.log('onUnityMessage', result.nativeEvent.message);
//         }}
//       />
//     </View>
//   );
// };

// export default Unity;



// import React, { useRef, useEffect } from 'react';

// import UnityView from '@azesmway/react-native-unity';
// import { View } from 'react-native';

// const Unity = () => {
//   const unityRef = useRef <UnityView> (null);

//   useEffect(() => {
//     if (unityRef?.current) {
//       const message = {
//         gameObject: 'gameObject',
//         methodName: 'methodName',
//         message: 'message',
//       };
//       unityRef.current.postMessage(
//         message.gameObject,
//         message.methodName,
//         message.message
//       );
//     }
//   }, []);

//   return (
//     <View style={{ flex: 1 }}>
//       <UnityView
//         ref={unityRef}
//         style={{ flex: 1 }}
//         onUnityMessage={(result: { nativeEvent: { message: any; }; }) => {
//           console.log('onUnityMessage', result.nativeEvent.message);
//         }}
//       />
//     </View>
//   );
// };

// export default Unity;



import React from 'react';
// @ts-ignore
import UnityView from '@azesmway/react-native-unity';
import { Text, View } from 'react-native';

const UnityApp = () => {
  return (
    <View style={{ flex: 1, justifyContent:"center", alignContent:"center", alignItems:"center" }}>
      <Text style={{color:"#000", fontSize:18}}>
        Hello, it's running
      </Text>
      <UnityView
        style={{
          position: 'absolute',
          height: '100%',
          width: '100%',
          top: 1,
          bottom: 1
        }}
      />
    </View>
  );
};

export default UnityApp;