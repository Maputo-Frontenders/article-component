import { RoundSmallImage, ShareIcon } from './styles/Image.styled';
import { StyledCardProfile, Share } from './styles/StyledCardProfile';
import avatar from '../images/avatar-michelle.jpg'
import share from '../images/icon-share.svg'

export default function CardProfile() {
  return (
    <StyledCardProfile>
      <RoundSmallImage src={avatar} alt='Avatar' />
      <span>
        <h5>Michelle Appleton</h5>
        <time dateTime="2020-06-28">28 Jun 2020</time>
      </span>
      <Share href='/'>
        <ShareIcon src={share} alt='share' />
      </Share>
    </StyledCardProfile>
  )
}