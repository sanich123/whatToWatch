import { useEffect } from 'react';
import { FullScreenBtnProps } from './full-screen-btn';
import styled from 'styled-components';

const StyledBtn = styled.button`display: block;
  width: 26px;
  height: 26px;
  font-size: 0;
  border: none;
  padding: 0;
  cursor: pointer;
  background: 0 0;
  -webkit-transition: .2s -webkit-transform;
  transition: .2s -webkit-transform;
  transition: .2s transform;
  transition: .2s transform, .2s -webkit-transform`;

interface PlayBtnProps extends FullScreenBtnProps {
  setIsPlaying: (arg: boolean) => void,
  isPlaying: boolean,
}

export default function PlayBtn({isPlaying, setIsPlaying, current}: PlayBtnProps): JSX.Element {

  const playVideo = (): void => {
    if (!isPlaying) {
      current?.play();
      setIsPlaying(true);
    } else if (isPlaying) {
      current?.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    const onKeyDownWhiteSpace =
    (evt: KeyboardEvent) => {
      if (evt.key === 'Space') {
        evt.preventDefault();
        current?.play();
      }
    };
    document.addEventListener('keydown', onKeyDownWhiteSpace);

    return () => {
      document.removeEventListener('keydown', onKeyDownWhiteSpace);
    };
  });

  return (
    <StyledBtn
      onClick={() => playVideo()}
      type="button"
    >
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref={isPlaying ? '#pause' : '#play-s'} />
      </svg>
      <span>Play</span>
    </StyledBtn>
  );
}
