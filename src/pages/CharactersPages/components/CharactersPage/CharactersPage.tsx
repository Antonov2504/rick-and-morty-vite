import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';

import * as Styled from '@src/components/Container/Container.styled';
import { Card } from '@components/Card';
import { useNavigate } from 'react-router-dom';
import { Page } from '@constants/pages';
import { TCharacter } from '@pages/CharactersPages/CharactersPages.types';
import { useInfinityScroll } from '@src/hooks/useInfinityScroll';
import { useRef } from 'react';

const TITLE = 'Characters';

export const CharactersPage = () => {
  const navigate = useNavigate();

  const refContainer = useRef<HTMLDivElement | null>(null);

  const { cards, isLoading, error, ref } = useInfinityScroll<TCharacter>({
    url: 'https://rickandmortyapi.com/api/character',
    root: refContainer.current,
    threshold: 1,
  });

  const handleClick = (id: number) => {
    navigate(`${Page.characters}/${id}`);
  };

  return (
    <>
      <PageHeader title={TITLE} />
      <Container innerRef={refContainer}>
        <Styled.Cards>
          {cards?.map(({ id, name, image, created }, index) => {
            const newCreated = `${new Date(created).toLocaleDateString()} ${new Date(created).toLocaleTimeString()}`;

            if (cards.length === index + 1) {
              return (
                <Card
                  key={id}
                  innerRef={ref}
                  id={id}
                  title={name}
                  created={newCreated}
                  src={image}
                  onClick={handleClick}
                />
              );
            }

            return (
              <Card
                key={id}
                id={id}
                title={name}
                src={image}
                onClick={handleClick}
                created={newCreated}
              />
            );
          }) ?? []}
        </Styled.Cards>
        {isLoading && <Styled.Loading>Loading...</Styled.Loading>}
        {error && <Styled.Loading>{error.toString()}</Styled.Loading>}
      </Container>
    </>
  );
};
