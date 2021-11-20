import drawers from '../images/drawers.jpg'
import { Image } from '../components/styles/Image.styled';
import CardContent from '../components/CardContent'
import CardProfile from '../components/CardProfile'

export default function Card() {
  return (
    <div className='card'>
      <Image src={drawers} />
      <CardContent />
      <CardProfile />
    </div>
  )
}
