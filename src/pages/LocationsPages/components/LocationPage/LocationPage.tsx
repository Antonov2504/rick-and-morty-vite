import { Container } from '@components/Container';
import { PageHeader } from '@components/PageHeader';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { Page } from '@constants/pages';
import { Error } from '@src/components/Container/Container.styled';

import { ErrorPageRoutePathEnum } from '@pages/ErrorPage/ErrorPage.types';
import PlaceholderImage from '@src/assets/images/episode.jpg';
import { TLocation } from '@pages/LocationsPages/LocationsPages.types';
import { useFetch } from '@src/hooks/useFetch';
import { Loader } from '@components/Loader';
import { Button } from '@mantine/core';
import * as Styled from './LocationPage.styled';

export const LocationPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const {
    data: locat,
    isLoading,
    error,
  } = useFetch<TLocation>({ url: `https://rickandmortyapi.com/api/location/${id}` });

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error>{error.toString()}</Error>;
  }

  if (locat) {
    const { name, type, dimension, created } = locat;
    const title = `Locations / ${name}`;

    const handleClickBack = () => {
      navigate(`${Page.locations}`);
    };

    const handlePrevClick = () => {
      if (id) {
        navigate(`${Page.locations}/${Number(id) - 1}`);
      }
    };

    const handleNextClick = () => {
      if (id) {
        navigate(`${Page.locations}/${Number(id) + 1}`);
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
                  <Styled.Label>Type:</Styled.Label>
                  <Styled.Value>{type || '—'}</Styled.Value>
                </Styled.Row>

                <Styled.Row>
                  <Styled.Label>Dimension:</Styled.Label>
                  <Styled.Value>{dimension || '—'}</Styled.Value>
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
