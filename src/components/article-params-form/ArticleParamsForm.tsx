import { ArrowButton } from '../../ui/arrow-button';
import { Button } from '../../ui/button';
import { useState, useRef } from 'react';
import styles from './ArticleParamsForm.module.scss';
import clsx from 'clsx';
import { Separator } from '../../ui/separator';
import { Select } from '../../ui/select/Select';
import { RadioGroup } from '../../ui/radio-group/RadioGroup';
import {
	fontFamilyOptions,
	OptionType,
	fontColors,
	backgroundColors,
	contentWidthArr,
	defaultArticleState,
	fontSizeOptions,
} from '../../constants/articleProps';
import { Text } from '../../ui/text/Text';
import { useOutsideClickClose } from '../../ui/select/hooks/useOutsideClickClose';

type ArticleParamsFormProps = {
	onSubmit?: (params: {
		fontFamily: OptionType;
		fontColor: OptionType;
		backgroundColor: OptionType;
		width: OptionType;
		fontSize: OptionType;
	}) => void;
};

export const ArticleParamsForm = ({ onSubmit }: ArticleParamsFormProps) => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [selectedFontFamily, setSelectedFontFamily] = useState<OptionType>(
		defaultArticleState.fontFamilyOption
	);
	const [selectedFontColor, setSelectedFontColor] = useState<OptionType>(
		defaultArticleState.fontColor
	);
	const [selectedBckColors, setSelectedBckColors] = useState<OptionType>(
		defaultArticleState.backgroundColor
	);
	const [selectedWidth, setSelectedWidth] = useState<OptionType>(
		defaultArticleState.contentWidth
	);
	const [selectFontSize, setSelectedFontSize] = useState<OptionType>(
		defaultArticleState.fontSizeOption
	);
	const formRef = useRef<HTMLElement>(null);

	const handleCloseForm = () => setIsMenuOpen(!isMenuOpen);

	const handleSubmitChange = () => {
		const params = {
			fontFamily: selectedFontFamily,
			fontColor: selectedFontColor,
			backgroundColor: selectedBckColors,
			width: selectedWidth,
			fontSize: selectFontSize,
		};
		onSubmit?.(params);
		handleCloseForm();
	};

	const handleReset = () => {
		const params = {
			fontFamily: defaultArticleState.fontFamilyOption,
			fontColor: defaultArticleState.fontColor,
			backgroundColor: defaultArticleState.backgroundColor,
			width: defaultArticleState.contentWidth,
			fontSize: defaultArticleState.fontSizeOption,
		};
		onSubmit?.(params);
		setSelectedFontFamily(defaultArticleState.fontFamilyOption);
		setSelectedFontColor(defaultArticleState.fontColor);
		setSelectedBckColors(defaultArticleState.backgroundColor);
		setSelectedWidth(defaultArticleState.contentWidth);
		setSelectedFontSize(defaultArticleState.fontSizeOption);
	};

	useOutsideClickClose({
		isOpen: isMenuOpen,
		onChange: handleCloseForm,
		rootRef: formRef,
	});

	return (
		<>
			<ArrowButton isOpen={isMenuOpen} onClick={handleCloseForm} />
			<aside
				className={clsx(styles.container, {
					[styles.container_open]: isMenuOpen,
				})}
				ref={formRef}>
				<form
					className={styles.form}
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmitChange();
					}}>
					<Text
						as='p'
						dynamic={false}
						size={31}
						weight={800}
						fontStyle='normal'
						uppercase={true}
						align='left'
						family='open-sans'
						dynamicLite={false}>
						Задайте параметры
					</Text>
					<Select
						selected={selectedFontFamily}
						options={fontFamilyOptions}
						placeholder='Open Sans'
						onChange={setSelectedFontFamily}
						title='шрифт'
					/>
					<RadioGroup
						name='font-size'
						options={fontSizeOptions}
						selected={selectFontSize}
						onChange={setSelectedFontSize}
						title='Размер шрифта'
					/>
					<Select
						selected={selectedFontColor}
						options={fontColors}
						placeholder='Чёрный'
						onChange={setSelectedFontColor}
						title='Цвет шрифта'
					/>
					<Separator />
					<Select
						selected={selectedBckColors}
						options={backgroundColors}
						placeholder='Белый'
						onChange={setSelectedBckColors}
						title='Цвет фона'
					/>
					<Select
						selected={selectedWidth}
						options={contentWidthArr}
						placeholder='Широкий'
						onChange={setSelectedWidth}
						title='Ширина контента'
					/>
					<div className={styles.bottomContainer}>
						<Button
							title='Сбросить'
							htmlType='reset'
							type='clear'
							onClick={handleReset}
						/>
						<Button title='Применить' htmlType='submit' type='apply' />
					</div>
				</form>
			</aside>
		</>
	);
};
