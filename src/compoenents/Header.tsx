import styled from 'styled-components';

/** [Styled element] TripPageHeader */
const StyledTripPageHeader = styled.div`
  display: block;
  position: relative;
  * {
    display: block;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .title {
    font-size: 12px;
    font-weight: 400;
  }
  .destination {
    font-size: 26px;
    font-weight: 700;
  }
  .date {
    color: #9A9A9A;
    font-size: 13px;
  }
`;

/** [Interface] Properties for tripPageHeader */
interface TripPageHeaderProps {
  date: string;
  destination: string;
}

export const TripPageHeader = ({ date, destination }: TripPageHeaderProps): JSX.Element => {
  return (
    <StyledTripPageHeader>
      <p className='title'>A destination of trip</p>
      <h2 className='destination'>{destination}</h2>
      <p className='date'>{date}</p>
    </StyledTripPageHeader>
  );
}