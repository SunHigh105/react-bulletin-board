import React, { FC, FormEvent } from 'react';
import { Header, Container, Form, Button, Checkbox } from 'semantic-ui-react';
import { VideoPlaylist, Video } from '../../../services/models';

export interface RegistVideoPlaylistProps {
  handlePlaylist?: (targetName: string, newValue: string) => void;
  handleVideos?: () => void;
  handleRegist?: (event: FormEvent<HTMLFormElement>) => void;
  playlist?: VideoPlaylist,
  videos?: Array<Video>
}

export const RegistVideoPlaylist: FC<RegistVideoPlaylistProps> = ({
  handlePlaylist = () => {},
  handleVideos = () => {},
  handleRegist = () => {},
  playlist = { name: '', user_id: 0, is_public: false },
  videos = [],
}) => (
  <div>
    <Header as='h2'>Regist Video Playlist</Header>
    <Container>
      <Form onSubmit={handleRegist}>
        <Form.Field>
          <label>Playlist Name</label>
          <input
            type="text"
            name="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePlaylist('name', String(e.target.value))}
            value={playlist.name}
          />
        </Form.Field>
        <Form.Field>
          <input type="hidden" value={playlist.user_id} />
          <label>Public</label>
          <Checkbox toggle />
        </Form.Field>
        <label>Video URLs</label>
        <Form.Group>
          <Form.Input label='Title' />
          <Form.Input label='URL' />
        </Form.Group>
        <Button style={{ marginTop: '1em' }} type='submit'>Regist</Button>
      </Form>
    </Container>
  </div>
);
