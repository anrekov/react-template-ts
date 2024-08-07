import { useActions, useAppSelector } from 'hooks';
import { useEffect, type FC } from 'react';
import { useParams } from 'react-router-dom';
import { TuserQueryParams } from 'types';

import { Box, Typography } from '@mui/material';

import { UserItem } from 'components/atoms/UserItem';

export const Profile: FC = () => {
  const { userId } = useParams<TuserQueryParams>();
  const { loadUsers } = useActions();
  const userIds = useAppSelector((state) => state.users.allIds);

  useEffect(() => {
    loadUsers();
  }, [loadUsers]);

  return (
    <Box data-testid="profile-page">
      <Typography variant="h4">Profile of "{userId}"</Typography>

      {userIds.map((id) => (
        <UserItem key={id} id={id} />
      ))}
    </Box>
  );
};

export default Profile;
