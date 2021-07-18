import React, { FC, FormEvent } from 'react';
import { Header, Container, Form, Button, } from 'semantic-ui-react';
import { VideoPlaylist } from '../../../services/models';

export interface RegistVideoPlaylistProps {
  handlePlaylist?: (targetName: string, newValue: string | boolean) => void;
  handleVideoTitles?: (num: number, newValue: string) => void;
  handleVideoUrls?: (num: number, newValue: string) => void;
  handleRegist?: (event: FormEvent<HTMLFormElement>) => void;
  playlist?: VideoPlaylist,
  // userId?: number,
}

export const RegistVideoPlaylist: FC<RegistVideoPlaylistProps> = ({
  handlePlaylist = () => {},
  handleVideoTitles = () => {},
  handleVideoUrls = () => {},
  handleRegist = () => {},
  playlist = { name: '', is_public: true },
  // userId = ''
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
          {/* <input type="hidden" value={userId} /> */}
        </Form.Field>
        <Form.Field>          
          <label>Public</label>
          <div className="ui toggle checkbox">
            <input type="checkbox" name="is_public" checked={playlist.is_public} onChange={(e: React.ChangeEvent<HTMLInputElement>) => handlePlaylist('is_public', e.target.checked)} />
            <label></label>
          </div>
        </Form.Field>
        <Form.Field>
          <label>Video URLs</label>
          {[...Array(5)].map((el, i) => (
            <div key={i} className="two fields">
              <label>{ i + 1 }</label>
              <div className="field">
                <input type="text" name="video_title" placeholder="Title" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleVideoTitles(i + 1, String(e.target.value))} />
              </div>
              <div className="field">
                <input type="text" name="video_url" placeholder="URL" onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleVideoUrls(i + 1, String(e.target.value))} />
              </div>
            </div>
          ))}
        </Form.Field>
        <Button style={{ marginTop: '1em' }} type='submit'>Regist</Button>
      </Form>
    </Container>
  </div>
);
