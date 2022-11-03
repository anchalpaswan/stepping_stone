import React from 'react';

import { Container, Role, User, Avatar } from './styles';

// interface UserRowProps {
//   nickname: string;
//   isBot?: boolean;
// }

const UserRow = ({
  nickname,
  isBot
}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''} />

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList = () => {
  return (
      <Container>
        <Role>Disponível - 1</Role>
        <UserRow nickname="Ariene Maiara" />

        <Role>Offline - 1</Role>
        <UserRow nickname="Bot 1" isBot />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
        <UserRow nickname="Fulano" />
      </Container>
  );
}

export default UserList;