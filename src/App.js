import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Poemmm from './Dilenadaan.js';
import Halatehaal from './Halatehaal.js';
import Homepage from './mainpage.js';

import Nadaamat from './Nadaamat.js';
import Ranjish from './Ranjish.js';
import Anjaan from './Anjaan.js';
import Coffee from './Coffee.js';
import Sheher from './Sheher.js';

import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>



<Routes>
<Route path="/" element={<Homepage />}/>
<Route path="/Dil e Nadaan" element={<Poemmm />} />
<Route path="/Halatehaal" element={<Halatehaal />} />
<Route path="/Nadaamat" element={<Nadaamat />} />
<Route path="/Ranjish" element={<Ranjish />} />
<Route path="/Anjaan" element={<Anjaan />} />
<Route path="/Coffee" element={<Coffee />} />
<Route path="/Sheher" element={<Sheher />} />
</Routes>

</div>
  )
}

/*<div>
<Homepage/>
</div>
  );
}*/


export default App;



