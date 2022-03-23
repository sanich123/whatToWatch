export interface FullScreenBtnProps {
  current: HTMLVideoElement | null
}

export default function FullScreenBtn({current}: FullScreenBtnProps) {

  const fullScreen = () =>
    !document.fullscreenElement ?
      current?.requestFullscreen() :
      document.exitFullscreen();

  return (
    <button
      onClick={() => fullScreen()}
      type="button"
      className="player__full-screen"
    >
      <svg viewBox="0 0 27 27" width="27" height="27">
        <use xlinkHref="#full-screen" />
      </svg>
      <span>Full screen</span>
    </button>
  );
}
