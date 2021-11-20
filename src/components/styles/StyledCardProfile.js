import styled from 'styled-components'

export const StyledCardProfile = styled.div`

  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1.5rem;
  span {
    flex-basis: 60%;

    h5 {
      font-size: 1.5rem;
      color: var(--dark-greyish-blue); 
    }

    time {
      color: var(--desaturated-dark-blue);
    }
  }
`
export const Share = styled.a.attrs(props => ({
  href: props.href,
}))`

  background-color: var(--light-grayish-blue);
  border-radius: 50%;
  flex-basis: 15%;
  padding: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

`