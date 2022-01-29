import './player-styles.css';

interface PreviewPlayerProps {
  videoLink?: string,
  posterImage?: string,
}

export default function PreviewPlayer({videoLink, posterImage}: PreviewPlayerProps): JSX.Element {

  return (
    <video src={videoLink} className="player__video" poster={posterImage} preload='' autoPlay muted />
  );
}
