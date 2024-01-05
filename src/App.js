import Lottie, {LottieRefCurrentProps} from 'lottie-react';
import underdevData from './UnderDevelopment.json';
import './App.css';
import { useRef } from 'react';
const App = () => {

  const underDevRef = useRef<LottieRefCurrentProps>(null);

  return(
    <>

      <div className="UnderConstruction">
          <div className="lottieFile">

          <Lottie className='LottieAni' animationData={underdevData}
                        lottieRef={underDevRef}  
          
            />

          </div>
          <div className="Detail">
              <h2>Seems like the web is Under Construction </h2>
              <a href="https://sakshamk.com.np/?i=1" target='_blank'>-by Saksham</a>
          </div>
      </div>

      <footer>
        <p>All rights reserved © Hamro Awaj Baal Sanjal & Saksham</p>
      </footer>

    </>

  );
}

export default App;
