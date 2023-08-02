/// <reference types="react" />
import { Property } from 'csstype';
import { Track } from 'livekit-client';
interface ScreenShareProps {
    track: Track;
    width?: Property.Width;
    height?: Property.Height;
}
export declare const ScreenShareView: ({ track, width, height }: ScreenShareProps) => JSX.Element;
export {};
