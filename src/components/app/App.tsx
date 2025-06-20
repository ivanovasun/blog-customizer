import { CSSProperties, useState } from 'react';

import { Article } from '../article/Article';
import { ArticleParamsForm } from '../article-params-form/ArticleParamsForm';
import { defaultArticleState } from '../../constants/articleProps';

import './App.scss';
import styles from './App.module.scss';

export const App = () => {
	const [articleParams, setArticleParams] = useState({
		fontFamily: defaultArticleState.fontFamilyOption,
		fontColor: defaultArticleState.fontColor,
		backgroundColor: defaultArticleState.backgroundColor,
		width: defaultArticleState.contentWidth,
		fontSize: defaultArticleState.fontSizeOption,
	});
	return (
		<main
			className={styles.main}
			style={
				{
					'--font-family':
						articleParams.fontFamily.value !==
						defaultArticleState.fontFamilyOption.value
							? articleParams.fontFamily.value
							: defaultArticleState.fontFamilyOption.value,
					'--font-size':
						articleParams.fontSize.value !==
						defaultArticleState.fontSizeOption.value
							? articleParams.fontSize.value
							: defaultArticleState.fontSizeOption.value,
					'--font-color':
						articleParams.fontColor.value !==
						defaultArticleState.fontColor.value
							? articleParams.fontColor.value
							: defaultArticleState.fontColor.value,
					'--container-width':
						articleParams.width.value !== defaultArticleState.contentWidth.value
							? articleParams.width.value
							: defaultArticleState.contentWidth.value,
					'--bg-color':
						articleParams.backgroundColor.value !==
						defaultArticleState.backgroundColor.value
							? articleParams.backgroundColor.value
							: defaultArticleState.backgroundColor.value,
				} as CSSProperties
			}>
			<ArticleParamsForm onSubmit={setArticleParams} />
			<Article />
		</main>
	);
};
