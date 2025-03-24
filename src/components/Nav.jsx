
export default function Nav({ menuLinks }) {


  return (
    <nav id="menu">
      <ul>
        {
          menuLinks.map(link => (

            <li key={link.id}>
              <a className={link.active ? "active" : ""} href={link.url}>{link.name}</a>
            </li>

          ))
        }
      </ul>
    </nav>
  )
}