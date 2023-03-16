import {AbsoluteFill,Sequence,Video,staticFile} from 'remotion';

export const MyComposition = () => {
	return <AbsoluteFill>
    <Sequence from={60} durationInFrames={150}>
      <Video src={staticFile("sample-5s.mp4")} />
    </Sequence>
    <Sequence from={300} durationInFrames={150}>
      <Video src={staticFile("sample-5s.mp4")} />
    </Sequence>
  </AbsoluteFill>;
};
