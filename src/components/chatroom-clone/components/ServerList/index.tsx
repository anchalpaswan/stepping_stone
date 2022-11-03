import React from 'react';

import { Container, Separator } from './styles';
import ServerButton from '../ServerButton';

const ServerList: React.FC = () => {
  return (
      <Container>
          <ServerButton isHome />

          <Separator />

          <ServerButton />
          <ServerButton hasNotifications />
          <ServerButton mentions={2} />
          <ServerButton />
          <ServerButton />
          <ServerButton />
          <ServerButton />
          <ServerButton />
          <ServerButton mentions={4} />
          <ServerButton />
          <ServerButton />
          <ServerButton />
      </Container>
  );
}

export default ServerList;