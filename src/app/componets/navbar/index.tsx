import Link from "next/link";

/* interface Props {
    label: string,
    route: string
} */

const navItems = [
    {
        label: 'Home',
        route: '/'
    },
    {
        label: 'Producto',
        route: '/product'
    }
]

const NavBar = () => {
  return (
  <nav>
      {navItems.map((item, index) => {
          return (
          <Link key={index} href={item.route}>
              {item.label}
          </Link>
              
        );
      })}
  </nav>
  )
}

export default NavBar
