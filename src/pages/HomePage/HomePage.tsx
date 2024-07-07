import { Container } from '@components/Container';
import { Paper, Text, Title } from '@mantine/core';
import * as Styled from './HomePage.styled';

export const HomePage = () => {
  return (
    <Container>
      <Styled.Content>
        <Styled.Logo />
        <Paper
          style={{
            width: '40vw',
            padding: '35px',
            margin: '2vw 0 0 2vw',
            borderRadius: '10px',
            backgroundColor: 'rgba(0 0 0 / 70%)',
            boxShadow: '-1px 5px 20px #000000',
          }}
        >
          <Title c='#c4dd52'>Welcome to the ultimate fan site for Rick and Morty!</Title>
          <Text c='#6bb0c8'>
            Dive into the multiverse with us as we explore the wacky adventures of Rick Sanchez and
            his grandson Morty Smith. Discover behind-the-scenes secrets, character profiles,
            episode guides, and much more. Join us on this interdimensional journey and get ready
            for a portal-hopping experience like no other!
          </Text>
        </Paper>
        <Styled.Portal />
      </Styled.Content>
    </Container>
  );
};
