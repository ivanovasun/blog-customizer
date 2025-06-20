import { OptionType } from 'src/constants/articleProps';
import { Text } from 'src/ui/text';

import styles from './RadioGroup.module.scss';
import { useEnterSubmit } from './hooks/useEnterSubmit';

type OptionProps = {
	value: OptionType['value'];
	title: OptionType['title'];
	selected: OptionType;
	groupName: string;
	onChange?: (option: OptionType) => void;
	option: OptionType;
};

export const Option = (props: OptionProps) => {
	const { value, title, selected, groupName, onChange, option } = props;
	const handleChange = () => onChange?.(option);
	const inputId = `${groupName}_radio_item_with_value__${value}`;
	const isChecked = value === selected.value;
	const optionRef = useEnterSubmit({
		onChange,
		option,
	});

	return (
		<div
			className={styles.item}
			key={value}
			data-checked={isChecked}
			data-testid={inputId}
			tabIndex={0}
			ref={optionRef}>
			<input
				className={styles.input}
				type='radio'
				name={groupName}
				id={inputId}
				value={value}
				onChange={handleChange}
				checked={isChecked}
				tabIndex={-1}
			/>
			<label className={styles.label} htmlFor={inputId}>
				<Text size={18} uppercase>
					{title}
				</Text>
			</label>
		</div>
	);
};
