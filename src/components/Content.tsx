import path from 'path';
import type { ReactNode } from 'react';

import type { IArticleFrontmatter } from '@/types/IArticleFrontmatter';
import { AppConfig } from '@/utils/AppConfig';

type IContentProps = {
  content: IArticleFrontmatter;
  children: ReactNode;
};

const Content: React.FC<IContentProps> = (props: IContentProps) => {
  return (
    <div className="mx-auto mt-5 max-w-prose">
      {props.content.imgSrc && (
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={path.join(AppConfig.base, props.content.imgSrc)}
            alt={props.content.imgAlt}
            loading="lazy"
          />
        </div>
      )}
      <div
        id="contents_data"
        className="prose prose-invert mt-8 prose-img:rounded-lg"
      >
        {props.children}
      </div>
    </div>
  );
};

export { Content };
