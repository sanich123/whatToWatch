import styled from 'styled-components';

const VideoPlayer = styled.video`
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
  font-family: "object-fit:cover";
  object-fit: cover`;

interface PreviewPlayerProps {
  videoLink?: string,
  posterImage?: string,
}

export default function PreviewPlayer({videoLink, posterImage}: PreviewPlayerProps) {

  return (
    <VideoPlayer src={videoLink} poster={posterImage} preload='' autoPlay muted />
  );
}
