import React from 'react';

type OldTranscriptpProps = {
    transcript: string;
}

const OldTranscript = ({ transcript }: OldTranscriptpProps) => {
  return (
    <div className='flex flex-col w-[300px] h-[150px] p-5 bg-neutral-900 rounded-[20px] text-white text-xl overflow-auto scrollbar-hide'>{transcript}</div>
  )
}

export default OldTranscript