import React from 'react';
import css from './Blog.module.scss';
import type { BlogData } from '../../pages/BlogPage/BlogPage';
import { useNavigate } from 'react-router-dom';

const Blog = (
  props: Pick<
    BlogData,
    'title' | 'content' | 'reply' | 'thumbnailImgUrl' | 'createdAt' | 'id'
  >
) => {
  const { title, content, reply, thumbnailImgUrl, createdAt, id } = props;
  const date = new Date(createdAt);
  const navigate = useNavigate();
  const postingDate = `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일`;
  return (
    <div className={css.blogContainner} onClick={() => navigate(`/post/${id}`)}>
      <section className={css.contents}>
        <div className={css.contentWrapper}>
          <p className={css.writeDate}>{postingDate}</p>
          <div className={css.titleWrapper}>
            <h3 className={css.contentTitle}>{title}</h3>
            {reply && <p className={css.reply}>({reply})</p>}
          </div>
          <div className={css.contentWrap}>
            <p
              className={css.content}
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
        {thumbnailImgUrl !== null && (
          <img className={css.contentImg} src={thumbnailImgUrl} alt="BlogImg" />
        )}
      </section>
    </div>
  );
};

export default Blog;
