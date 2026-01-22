export { };

declare global {
  interface Window {
    puter: {
      ai: {
        txt2speech: (
          text: string,
          options?: {
            voice?: string;
            engine?: 'standard' | 'neural' | 'generative';
            language?: string;
          }
        ) => Promise<HTMLAudioElement>;
      };
    };
  }
}
