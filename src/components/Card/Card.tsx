import { MouseEvent } from 'react';

import PlaceholderImage from '@src/assets/images/episode.jpg';
import { Badge, Button, Card as CardMantine, Group, Image, Text, Title } from '@mantine/core';

type CardProps = {
  id: number;
  title: string;
  onClick: (id: number) => void;
  src?: string;
  created?: string;
  innerRef?: (element: unknown) => void;
};

export const Card = ({
  id,
  title,
  created,
  onClick,
  src = PlaceholderImage,
  innerRef,
}: CardProps) => {
  const handleClick = (e: MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClick(id);
  };

  return (
    <CardMantine shadow='sm' padding='lg' radius='md' mih={450} withBorder onClick={handleClick}>
      <Image ref={innerRef} src={src} height={160} />

      <Title order={3}>{title}</Title>

      <Group justify='space-between' mt='md' mb='xs'>
        <Text fw={500}>created:</Text>
        <Badge color='pink'>{created ?? 'created'}</Badge>
      </Group>

      <Button color='blue' fullWidth mt='md' radius='md'>
        More
      </Button>
    </CardMantine>
  );
};
