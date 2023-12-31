import * as React from 'react';
import type { Participant } from 'livekit-client';
import { ConnectionQuality } from 'livekit-client';
/** @public */
export interface ConnectionQualityIndicatorOptions {
    participant?: Participant;
}
/** @public */
export type ConnectionQualityIndicatorProps = React.HTMLAttributes<HTMLDivElement> & ConnectionQualityIndicatorOptions;
/** @public */
export declare function useConnectionQualityIndicator(options?: ConnectionQualityIndicatorOptions): {
    className: "lk-list" | "lk-button" | "lk-rotate" | "lk-audio-conference" | "lk-audio-conference-stage" | "lk-audio-container" | "lk-button-group" | "lk-button-group-container" | "lk-camera-off-note" | "lk-chat" | "lk-chat-entry" | "lk-chat-form" | "lk-chat-form-input" | "lk-chat-messages" | "lk-control-bar" | "lk-focus-layout-wrapper" | "lk-form-control" | "lk-grid-layout-wrapper" | "lk-join-button" | "lk-message-body" | "lk-meta-data" | "lk-participant-name" | "lk-prejoin" | "lk-timestamp" | "lk-username-container" | "lk-video-conference" | "lk-video-conference-inner" | "lk-video-container" | "lk-audio-visualizer" | "lk-button-group-menu" | "lk-button-menu" | "lk-carousel" | "lk-chat-toggle" | "lk-connection-quality" | "lk-device-menu" | "lk-device-menu-heading" | "lk-disconnect-button" | "lk-focus-layout" | "lk-focus-toggle-button" | "lk-focused-participant" | "lk-grid-layout" | "lk-media-device-select" | "lk-pagination-control" | "lk-pagination-count" | "lk-pagination-indicator" | "lk-participant-media-audio" | "lk-participant-media-video" | "lk-participant-metadata" | "lk-participant-metadata-item" | "lk-participant-placeholder" | "lk-participant-tile" | "lk-pip-track" | "lk-room-container" | "lk-spinner" | "lk-start-audio-button" | "lk-toast" | "lk-track-muted-indicator-camera" | "lk-track-muted-indicator-microphone";
    quality: ConnectionQuality;
};
/**
 * The ConnectionQualityIndicator shows the individual connection quality of a participant.
 *
 * @example
 * ```tsx
 * <ConnectionQualityIndicator />
 * ```
 * @public
 */
export declare function ConnectionQualityIndicator(props: ConnectionQualityIndicatorProps): React.JSX.Element;
//# sourceMappingURL=ConnectionQualityIndicator.d.ts.map