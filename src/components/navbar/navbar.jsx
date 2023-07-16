

/* um componente tem que ter 4 regras
   1 - Ter uma função
   2 - a funçaõ tem que ter nome Maiusculo
   3 - export a função
   4 - precisa receber um retorno em HTML 
*/

import styles from './navbar.module.css'
import { BsCart4} from 'react-icons/bs'
import Logo from '@/components/logo/logo'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input />
      <BsCart4 size={40} />
    </nav>
  )
}
