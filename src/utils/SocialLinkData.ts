type SocialTypes = 'Blog' | 'SNS' | 'Slide' | 'Career';

export type ISocialLink = {
  url: string;
  name: string;
  imgSrc: string;
  height: number;
  width: number;
  type?: SocialTypes;
  isTop: boolean;
};

export const SocialLinkData: Array<ISocialLink> = [
  {
    url: 'https://github.com/korosuke613',
    name: 'GitHub',
    imgSrc: '/assets/images/shields_github.svg',
    height: 20,
    width: 65,
    isTop: true,
  },
  {
    url: 'https://twitter.com/Shitimi_613',
    name: 'Twitter',
    imgSrc: '/assets/images/shields_twitter.svg',
    height: 20,
    width: 67,
    type: 'SNS',
    isTop: true,
  },
  {
    url: 'https://bsky.app/profile/korosuke613.dev',
    name: 'Bluesky',
    imgSrc: '/assets/images/shields_bluesky.svg',
    height: 20,
    width: 53,
    type: 'SNS',
    isTop: true,
  },
  {
    url: 'https://www.threads.net/@tibi_auwa_auwa',
    name: 'Threads',
    imgSrc: '/assets/images/shields_threads.svg',
    height: 20,
    width: 73,
    type: 'SNS',
    isTop: true,
  },
  {
    url: 'https://www.facebook.com/futa.hirakoba.5',
    name: 'Facebook',
    imgSrc: '/assets/images/shields_facebook.svg',
    height: 20,
    width: 79,
    type: 'SNS',
    isTop: false,
  },
  {
    url: 'https://www.instagram.com/kwlv613/',
    name: 'Instagram',
    imgSrc: '/assets/images/shields_instagram.svg',
    height: 20,
    width: 85,
    type: 'SNS',
    isTop: true,
  },
  {
    url: 'https://korosuke613.hatenablog.com/',
    name: 'Blog',
    imgSrc: '/assets/images/shields_blog.svg',
    height: 20,
    width: 53,
    type: 'Blog',
    isTop: true,
  },
  {
    url: 'https://zenn.dev/korosuke613',
    name: 'Zenn',
    imgSrc: '/assets/images/shields_zenn.svg',
    height: 20,
    width: 57,
    type: 'Blog',
    isTop: true,
  },
  {
    url: 'http://qiita.com/Shitimi_613',
    name: 'Qiita',
    imgSrc: '/assets/images/shields_qiita.svg',
    height: 20,
    width: 53,
    type: 'Blog',
    isTop: false,
  },
  {
    url: 'https://www.slideshare.net/FutaHirakoba/presentations',
    name: 'SlideShare',
    imgSrc: '/assets/images/shields_slideshare.svg',
    height: 20,
    width: 87,
    type: 'Slide',
    isTop: false,
  },
  {
    url: 'https://speakerdeck.com/korosuke613',
    name: 'SpeakerDeck',
    imgSrc: '/assets/images/shields_speakerdeck.svg',
    height: 20,
    width: 101,
    type: 'Slide',
    isTop: false,
  },
  {
    url: 'https://www.docswell.com/user/korosuke613',
    name: 'Docswell',
    imgSrc: '/assets/images/shields_docswell.svg',
    height: 20,
    width: 77,
    type: 'Slide',
    isTop: true,
  },
  {
    url: 'https://www.wantedly.com/id/futa_hirakoba',
    name: 'Wantedly',
    imgSrc: '/assets/images/shields_wantedly.svg',
    height: 20,
    width: 79,
    type: 'Career',
    isTop: false,
  },
  {
    url: 'https://lapras.com/public/korosuke613',
    name: 'LAPRAS',
    // https://img.shields.io/static/v1?label=&message=LAPRAS&color=1131a3&style=flat
    imgSrc: '/assets/images/shields_lapras.svg',
    height: 20,
    width: 53,
    type: 'Career',
    isTop: false,
  },
  {
    url: 'https://findy-code.io/share_profiles/VIEfTIdxGcZ8K',
    name: 'Findy',
    // https://img.shields.io/static/v1?label=&message=Findy&color=2a5599&style=flat
    imgSrc: '/assets/images/shields_findy.svg',
    height: 20,
    width: 39,
    type: 'Career',
    isTop: false,
  },
  {
    url: 'https://misskey.io/@korosuke613',
    name: 'Misskey',
    // https://img.shields.io/static/v1?label=&message=Findy&color=2a5599&style=flat
    imgSrc: '/assets/images/shields_misskey.svg',
    height: 20,
    width: 71,
    type: 'SNS',
    isTop: false,
  },
];

/* https://img.shields.io/static/v1?label=&message=Docswell&color=4B9FD6&style=flat&logoColor=white&logo=data:image/png;base64,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 */
/* https://img.shields.io/static/v1?label=&message=Misskey&color=a1bb52&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAApGVYSWZNTQAqAAAACAAGARIAAwAAAAEAAQAAARoABQAAAAEAAABWARsABQAAAAEAAABeASgAAwAAAAEAAgAAATIAAgAAABQAAABmh2kABAAAAAEAAAB6AAAAAAAAAEgAAAABAAAASAAAAAEyMDIxOjEwOjMwIDIzOjUzOjI0AAADoAEAAwAAAAEAAQAAoAIABAAAAAEAAABQoAMABAAAAAEAAABQAAAAAPDIwjcAAAAJcEhZcwAACxMAAAsTAQCanBgAAAd7aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJYTVAgQ29yZSA2LjAuMCI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iPgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjM4NDwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4zODQ8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICAgICA8dGlmZjpJbWFnZVdpZHRoPjM4NDwvdGlmZjpJbWFnZVdpZHRoPgogICAgICAgICA8dGlmZjpJbWFnZUxlbmd0aD4zODQ8L3RpZmY6SW1hZ2VMZW5ndGg+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPGRjOnRpdGxlPgogICAgICAgICAgICA8cmRmOkFsdD4KICAgICAgICAgICAgICAgPHJkZjpsaSB4bWw6bGFuZz0ieC1kZWZhdWx0Ij5NaXNza2V5TWkgZ3JlZW48L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QWx0PgogICAgICAgICA8L2RjOnRpdGxlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAyMS0xMC0zMFQyMzo1MzoyNDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMjEtMTAtMzBUMjM6NTM6MjQrMDk6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFmZmluaXR5IERl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
アイコンの情報 https://simpleicons.org/
以下のURLで得られるSVGを保存する
https://img.shields.io/static/v1?label=&message=${サービス名}&color=${背景のカラーコード}&style=flat&logo=${サービス名}&logoColor=white
https://img.shields.io/static/v1?label=&message=Wantedly&color=21BDDB&style=flat&logo=Wantedly&logoColor=white
*/
