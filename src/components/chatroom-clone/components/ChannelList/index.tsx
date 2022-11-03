import React from 'react';

import { Container, Category, AddCategoryIcon } from './styles';

import ChannelButton from '../ChannelButton';

const ChannelList: React.FC = () => {
  return (
      <Container>
          <Category>
            <span>Canais de texto</span>
            <AddCategoryIcon />
          </Category>

          <ChannelButton channelName="chat-livre" selected />
          <ChannelButton channelName="trabalho" />
          <ChannelButton channelName="familia" />
          <ChannelButton channelName="jogos" />
      </Container>
  );
}

export default ChannelList;