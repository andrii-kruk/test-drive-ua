import { PageContainer, Text, TextContainer, Title } from './MainPage.styled';

const MainPage = () => {
  return (
    <PageContainer>
      <Title>About Us</Title>
      <TextContainer>
        <Text>
          Welcome to our car rental service! We're dedicated to providing you
          with a convenient and flexible way to rent a car by the hour. Whether
          you're looking for a quick ride around the city or need a reliable
          vehicle for a short-term trip, we've got you covered.
        </Text>
        <Text>
          Our mission is to make car rental as easy as possible. With a simple
          registration process and a user-friendly app, you can book a car in
          just a few clicks. Our diverse fleet of vehicles ensures that you'll
          find the perfect car to suit your needs, from compact cars to spacious
          SUVs.
        </Text>
        <Text>
          Customer satisfaction is our top priority, and we take pride in
          delivering clean, well-maintained cars. You can rely on us for
          transparent pricing, hassle-free pickups, and a seamless return
          process. Discover the freedom of hourly car rentals with us!
        </Text>
      </TextContainer>
    </PageContainer>
  );
};

export default MainPage;
