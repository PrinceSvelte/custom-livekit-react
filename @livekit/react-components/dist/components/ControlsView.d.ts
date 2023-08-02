/// <reference types="react" />
import { Room } from 'livekit-client';
export interface ControlsProps {
    room: Room;
    enableScreenShare?: boolean;
    enableAudio?: boolean;
    enableVideo?: boolean;
    onLeave?: (room: Room) => void;
}
export declare const ControlsView: ({ room, enableScreenShare, enableAudio, enableVideo, onLeave, }: ControlsProps) => JSX.Element;
