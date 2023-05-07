import Ripple from './Ripple'

export interface PulseProps {
  isActive: boolean
}

const Pulse: React.FC<PulseProps> = ({ isActive }) => {
  if (!isActive) {
    return null
  }

  return (
    <div className="relative w-full h-full">
      <Ripple delay={0} />
      <Ripple delay={0.3} />
      <Ripple delay={0.6} />
    </div>
  )
}

export default Pulse
