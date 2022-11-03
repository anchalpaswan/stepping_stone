import React, { useRef, useEffect } from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
import ChannelMessage, { Mention } from '../ChannelMessage';

const ChannelData: React.FC = () => {

  const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const div = messageRef.current;

    if (div) {
      div.scrollTop = div.scrollHeight;
    }

  }, [messageRef]);

  return (
      <Container>
          <Messages ref={messageRef}>
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Ariene Maiara"
              date="21/06/2020"
              content="Esta é minha mensagem"
            />
            <ChannelMessage 
              author="Bot 1"
              date="21/06/2020"
              content={
                <>
                  <Mention>@Ariene Maiara</Mention>, olá!
                </>
              }
              hasMention
              isBot
            />
          </Messages>
          <InputWrapper>
            <Input type="text" placeholder="Conversar em chat livre" />
            <InputIcon />
          </InputWrapper>
      </Container>
  );
}

export default ChannelData;