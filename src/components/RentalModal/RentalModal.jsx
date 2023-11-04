import { splitString, joinString, formatNumberWithCommas } from 'utils/index';

import {
  Condition,
  ConditionsContainer,
  ImageContainer,
  RentalAccessories,
  RentalContainer,
  RentalDescription,
  RentalFunctionalities,
  RentalInfoText,
  RentalLink,
  RentalSubtitle,
  RentalTitle,
} from './RentalModal.styled';

const RentalModal = ({ content }) => {
  const address = splitString(content.address, ',');
  const conditions = splitString(content.rentalConditions, ',');

  return (
    <RentalContainer>
      <ImageContainer>
        <img src={content.img} alt={content.model} width={461} height={248} />
      </ImageContainer>

      <RentalTitle>
        {content.make} <span>{content.model}</span>, {content.year}
      </RentalTitle>
      <RentalInfoText>
        {address[2]} | {address[1]} | Id: {content.id} | Year: {content.year} |{' '}
        Type: {content.type}
        <br />
        Fuel consumption: {content.fuelConsumption} | Engine size:{' '}
        {content.engineSize}
      </RentalInfoText>

      <RentalDescription>{content.description}</RentalDescription>
      <RentalSubtitle>Accessories and functionalities:</RentalSubtitle>
      <RentalAccessories>
        {joinString(content.accessories, ' | ')}
      </RentalAccessories>
      <RentalFunctionalities>
        {joinString(content.functionalities, ' | ')}
      </RentalFunctionalities>
      <RentalSubtitle>Rental conditions:</RentalSubtitle>
      <ConditionsContainer>
        <div>
          {conditions.map(condition => {
            const [key, value] = splitString(condition, ':');

            if (value)
              return (
                <Condition key={key}>
                  {key}: <span>{value}</span>
                </Condition>
              );
            return <Condition key={key}>{key}</Condition>;
          })}
        </div>
        <div>
          <Condition>
            Mileage: <span>{formatNumberWithCommas(content.mileage)}</span>
          </Condition>
          <Condition>
            Price: <span>{content.rentalPrice}</span>
          </Condition>
        </div>
      </ConditionsContainer>

      <RentalLink href="tel:+380730000000">Rental</RentalLink>
    </RentalContainer>
  );
};
export default RentalModal;
