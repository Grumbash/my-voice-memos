import { motion } from 'framer-motion'

export interface RippleProps {
  delay: number
}

const Ripple: React.FC<RippleProps> = ({ delay }) => {
  return (
    <motion.div
      className="absolute rounded-full"
      style={{
        width: '10px',
        height: '10px',
        backgroundColor: '#10B981',
        opacity: 0.5,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        scale: 0,
      }}
      animate={{ scale: [0, 2], opacity: [0.5, 0] }}
      transition={{ duration: 1.5, delay, ease: 'easeInOut', repeat: Infinity }}
    />
  )
}

export default Ripple
