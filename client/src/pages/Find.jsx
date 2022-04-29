import BoulderCard from '../components/BoulderCard';
import styled from 'styled-components'


const Find = ({bouldersList}) => {
  return (
    <BoulderList role="list">
      {bouldersList.map(boulder => (
        <BoulderCard
          key={boulder.number}
          id={boulder.number}
          name={boulder.name}
          sector={boulder.sector}
          level={boulder.level}
          hold_color={boulder.hold_color}
          img_start={boulder.img_start}
          likes={boulder.number_of_likes}
          setter={boulder.setter}
          tags={boulder.tags}
          weighting={boulder.weighting}
          detailedMode={false}
        />
      ))}
    </BoulderList>
  );
};

export default Find;

const BoulderList = styled.ul`
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`
