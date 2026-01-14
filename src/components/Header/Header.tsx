import LogoImage from '../../assets/logo.svg'
import Navbar from './Navbar'

type Props = {}

export default function Header({ }: Props) {

  return (
    <header className='flex items-center justify-between mt-4 px-8'>
      <img src={LogoImage} alt="Setapp Logo" />
      <Navbar />
    </header>
  )
}