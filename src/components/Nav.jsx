
export default function Nav({ menuLinks }) {

  const linksList = menuLinks.map(link => (

    <li key={link.id}>
      <a className={link.active ? "active" : ""} href={link.url}>{link.name}</a>
    </li>

  ))

  //console.log(linksList);



  return (
    <nav id="menu">
      <ul>
        {linksList}
      </ul>
    </nav>
  )
}