import styles from '../styles/Article.module.css';
import ArticleItem from './ArticleItem';

const ArticleList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((a) => (
        <ArticleItem key={a.id} article={a} />
      ))}
    </div>
  );
};

export default ArticleList;
