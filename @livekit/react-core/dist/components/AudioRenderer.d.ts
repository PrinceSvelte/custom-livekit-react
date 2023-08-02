import { Track } from 'livekit-client';
export interface AudioTrackProps {
    track: Track;
    isLocal: boolean;
}
export declare const AudioRenderer: ({ track, isLocal }: AudioTrackProps) => null;
