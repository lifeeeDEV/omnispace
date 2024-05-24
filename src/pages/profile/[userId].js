import { Button } from '@chakra-ui/react';
import { Card, CardContent, TextField, Typography } from '@mui/material';
import { useSession, signIn } from 'next-auth/react';  
  

    export default function ProfileCard() {
  
    return (
        <Card>
            <CardContent>
            <Typography variant="h5" component="div">
                User Profile
            </Typography>
            <form>
                <TextField
                label="Username"
                name="username"
                />
                <TextField
                label="Bio"
                name="bio"
                />
                <Button type="submit">Save</Button>
            </form>
            </CardContent>
        </Card>
    );
  }