import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Page } from '@constants/pages';

import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import { Error } from '@src/components/Container/Container.styled';
import PlaceholderImage from '@src/assets/images/episode.jpg';
import { useFetch } from '@src/hooks/useFetch';
import { TEpisode } from '@pages/EpisodesPages/EpisodesPages.types';
import { Loader } from '@components/Loader';
import { Button } from '@mantine/core';
import * as Styled from './EpisodePage.styled';

export const EpisodePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: series,
    isLoading,
    error,
  } = useFetch<TEpisode>({ url: `https://rickandmortyapi.com/api/episode/${id}` });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error>{error.toString()}</Error>;
  }

  if (series) {
    const { name, air_date, episode, created } = series;
    const title = `Episodes / ${name}`;

    const handleClickBack = () => {
      navigate(`${Page.episodes}`);
    };

    const handlePrevClick = () => {
      if (id) {
        navigate(`${Page.episodes}/${Number(id) - 1}`);
      }
    };

    const handleNextClick = () => {
      if (id) {
        navigate(`${Page.episodes}/${Number(id) + 1}`);
      }
    };

    return (
      <>
        <PageHeader title={title} showBackButton onClickBack={handleClickBack} />
        <Container>
          <Styled.CardDetail>
            <Styled.Image src={PlaceholderImage} />
            <Styled.Info>
              <Styled.Title>{name || '—'}</Styled.Title>
              <Styled.Description>
                <Styled.Row>
                  <Styled.Label>Air date:</Styled.Label>
                  <Styled.Value>{air_date || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Episode:</Styled.Label>
                  <Styled.Value>{episode || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Created:</Styled.Label>
                  <Styled.Value>
                    {`${new Date(created).toLocaleDateString()} ${new Date(
                      created
                    ).toLocaleTimeString()}` || '—'}
                  </Styled.Value>
                </Styled.Row>
              </Styled.Description>
            </Styled.Info>
          </Styled.CardDetail>

          <Styled.Buttons>
            <Button onClick={handlePrevClick} disabled={Number(id) === 1}>
              Prev
            </Button>
            <Button onClick={handleNextClick}>Next</Button>
          </Styled.Buttons>
        </Container>
      </>
    );
  }

  return <Navigate to={ErrorPageRoutePathEnum.notFound} />;
};
