import Pixels from './pixels';

export function FramerWrapper() {
  return (
    <div className='fixed top-0 left-0 h-screen z-[10] pointer-events-none'>
      <Pixels />
    </div>
  );
}
