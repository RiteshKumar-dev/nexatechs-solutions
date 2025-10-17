'use client';

export default function VideoSectionComponent() {
  return (
    <div className="flex justify-center w-fullpx-4">
      <video
        className="w-full max-w-[85vw] h-auto rounded-2xl shadow-lg"
        controls
        autoPlay
        muted
        loop
        src="https://res.cloudinary.com/dx92c81cg/video/upload/v1760705984/AirBnb_DEV/Landing-Page-Updated-Video_1_odcvcu.mp4"
        poster="/video-poster.jpg"
      />
    </div>
  );
}
