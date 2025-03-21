export default function Logo({ slogan }) {
  //console.log(slogan); // lo slogan usato quando si chiama il componente
  return (

    <>
      <img src="/logo.png" alt="" />


      {slogan && <p>{slogan}</p>}

    </>

  )
}


/* 
export default function Logo(props) {
  //console.log(props);
  //console.log(props.slogan);


  return (

    <>
      <img src="/logo.png" alt="" />


      {props.slogan && <p>{props.slogan}</p>}
    </>

  )
}

*/