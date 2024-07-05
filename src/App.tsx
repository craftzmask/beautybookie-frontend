// import { Text } from '@chakra-ui/react'
// export default function App() {
//   return (
//      <div className='theme'>
//       <Text fontSize='6xl' color='black'>Hello World</Text>
//      </div>
//   )
// }

import * as React from "react";
import { RouterProvider } from "react-router-dom";
import router from "@/routes";

interface IAppProps {}

const App: React.FunctionComponent<IAppProps> = () => {
  return (
      <RouterProvider router={router} />
  );
};

export default App;