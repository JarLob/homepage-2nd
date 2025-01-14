import type { MarkdownHeading } from 'astro';
import type { CollectionEntry } from 'astro:content';
import path from 'path';
import type { ReactNode } from 'react';

import { EditGitHub } from '@/components/EditGitHub';
import { Toc } from '@/components/Toc';
import { AppConfig } from '@/utils/AppConfig';

type IContentProps = {
  content: CollectionEntry<'posts'>;
  headings: MarkdownHeading[];
  maxCharWidth: string;
  children: ReactNode;
};

const Content: React.FC<IContentProps> = (props: IContentProps) => {
  return (
    <div>
      {props.content.data.imgSrc && (
        <div className="aspect-h-2 aspect-w-3">
          <img
            className="h-full w-full rounded-lg object-cover object-center"
            src={path.join(AppConfig.base, props.content.data.imgSrc)}
            alt={props.content.data.imgAlt}
            loading="lazy"
          />
        </div>
      )}
      <div className="invisible fixed right-10 top-40 float-right max-w-[12%] lg:visible xl:max-w-xs">
        <Toc headings={props.headings} />
      </div>
      <div
        id="contents_data"
        className={`prose prose-invert mt-8 ${props.maxCharWidth} prose-img:rounded-lg`}
      >
        {props.children}
      </div>
      <br />
      <EditGitHub
        id={props.content.id}
        collection={props.content.collection}
      ></EditGitHub>
    </div>
  );
};

export { Content };
