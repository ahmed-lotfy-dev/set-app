import { AnimatePresence } from 'motion/react'
import Navbar from './Navbar'

type Props = {}

export default function Header({ }: Props) {

  return (
    <AnimatePresence>
    <header className='w-full flex items-center justify-between mt-4 px-8'>
      <Navbar />
    </header>
    </AnimatePresence>
  )
}