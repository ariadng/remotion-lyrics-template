# Remotion Video Lyrics Template

## Getting Started

After cloning the repository, install all dependencies with this command:

```
$ yarn install
```

Or, if you are using NPM:

```
$ npm install
```

Then open the `public` folder and replace `video.mp4` and `lyrics.srt` with the video file and lyrics file you want.

In `src/Video.tsx` file, change the video configuration inside <Composition /> component.

```jsx
<Composition
  id="MyComp"
  component={MyComposition}
  durationInFrames={300}    // video duration (second * fps)
  fps={30}                  // video frame per second
  width={1080}              // video width
  height={1920}             // video height
/>
```

Inside the `src/Composition.tsx` you can add or remove components as you need. You can also change the social media handler by changing the `label` property on `<AccountHandler />` component.

```jsx
<AccountHandler label='your_social_username' />
```

## Preview Video

Run this command to preview video:

```
$ yarn start
```

Or if you are using NPM:

```
$ npm start
```

## Render the Video

To render the video to mp4 file, you need ```ffmpeg``` installed in your computer.

If it's already available, run this command:

```
$ yarn build
```

Or if you are using NPM:

```
$ npm run build
```

The video will be rendered to `out` folder.