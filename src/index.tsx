import { createRoot } from 'react-dom/client';
import { StrictMode, CSSProperties, useState } from 'react';
import clsx from 'clsx';

import { Article } from './components/article/Article';
import { ArticleParamsForm } from './components/article-params-form/ArticleParamsForm';
import { defaultArticleState } from './constants/articleProps';

import './styles/index.scss';
import styles from './styles/index.module.scss';

const domNode = document.getElementById('root') as HTMLDivElement;
const root = createRoot(domNode);

const App = () => {
	const [articleParams, setArticleParams] = useState({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		width: defaultArticleState.contentWidth,
		fontSize: defaultArticleState.fontSizeOption
  	});
	return (
		<main
			className={clsx(styles.main)}
			style={
				{
					'--font-family': articleParams.fontFamily.value !== defaultArticleState.fontFamilyOption.value ? articleParams.fontFamily.value : defaultArticleState.fontFamilyOption.value,
					'--font-size': articleParams.fontSize.value !== defaultArticleState.fontSizeOption.value ? articleParams.fontSize.value : defaultArticleState.fontSizeOption.value,
					'--font-color': articleParams.fontColor.value !== defaultArticleState.fontColor.value ? articleParams.fontColor.value : defaultArticleState.fontColor.value,
					'--container-width': articleParams.width.value !== defaultArticleState.contentWidth.value ? articleParams.width.value : defaultArticleState.contentWidth.value,
					'--bg-color': articleParams.backgroundColor.value !== defaultArticleState.backgroundColor.value ? articleParams.backgroundColor.value : defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onSubmit={setArticleParams}/>
			<Article />
		</main>
	);
};

root.render(
	<StrictMode>
		<App />
	</StrictMode>
);
