import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Homepage() {
  return (
<div className='master'>
<div className='top'> 
 <a href='https://www.instagram.com/amritash.mishra.56/?hl=en' className='lg'>Instagram</a>
 <a href='https://in.linkedin.com/in/amritash-mishra-b5a0381b2?original_referer=https%3A%2F%2Fwww.google.com%2F' className='lg'>Linkedin</a>
 <a href='amritashm59@gmail.com' className='lg'>Gmail</a>
 


<div className='M'>
 
<div className='left'>
<h1>My Creations</h1>
<Link className='buttonLink' to="/Anjaan">Ghazal : Anjaan</Link>
<Link className='buttonLink' to="/Dil e Nadaan">Ghazal : Aainaa</Link>
<Link className='buttonLink' to="/Dil e Nadaan">Ghazal : Raakh</Link>
<Link className='buttonLink' to="/Coffee">Short Story : Coffee</Link>
<Link className='buttonLink' to="/Sheher">Short Story : Sheher</Link>
   </div>
 

<div className='container'>
<h1 className='intro-box'>Hello! This is Amritash!</h1>
<img className='image' src='./pic.jpg'></img>
<h1 className='intro-box'>Here you will find my own short stories and poems, as well as a collection of my favourite poems! Enjoy!</h1>
  </div>
 
 
<div className='right'>
<h1>My Favourites </h1>
<Link className='buttonLink' to="/Dil e Nadaan">Dil e Nadaan : Mirza Ghalib</Link>
<Link className='buttonLink' to="/Halatehaal">Halat e haal : Jaun Eliya</Link>
<Link className='buttonLink' to="/Nadaamat"> Nadaamat : Jaun Eliya</Link>
<Link className='buttonLink' to="/Ranjish">Ranjish Hi Sahi : Faraz</Link>
<Link className='buttonLink' to="/Dil e Nadaan">Dil e Nadaan:Mirza Ghalib</Link>

 </div>
  
  
</div>
</div>
</div>
  );
}

export default Homepage;