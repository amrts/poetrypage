import { useEffect, useState } from 'react';
let Sheher =()=>
{

  const [p,s]=useState(' ');
  useEffect(()=>
  {
    const afuns = async ()=>{
      let res=await fetch('/poetrypage/Sheher.txt');
      let data = await res.text();
      s(data);
    }
     afuns();
},[])

return(
 <pre
  style={{
    backgroundColor:'navajowhite',
    color: 'brown',
    padding: '20px',
    borderRadius: '10px',
    width: '60%',
    margin: '40px auto',
    textAlign: 'center',
    whiteSpace: 'pre-wrap',
    fontFamily: 'Georgia, serif',
    fontSize: '20px',
    lineHeight: '1.6',
  }}
>
  {p}
</pre>
)

}

export default Sheher;