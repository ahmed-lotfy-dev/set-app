import { AnimatePresence } from 'motion/react'
import Navbar from './Navbar'

type Props = {
  onComplete: () => void
}

export default function Header({ onComplete }: Props) {
  return (
    <AnimatePresence>
      <header className='w-full flex items-center justify-between mt-4 px-8'>
        <Navbar onComplete={onComplete} />
      </header>
    </AnimatePresence>
  )
}