import type Param from '@lib/types/NewComponentParam';

export default function getParamsNewComponent(element: Element) {
	const params: Param[] = [];

	for (const attribute of element.attributes) {
		if (attribute.name.startsWith('param:')) {
			const {name, value} = attribute;
			const attributeNameAsArray = name.split(':');
			const isOptional = attributeNameAsArray.includes('optional');

			params.push({
				name: attributeNameAsArray[1],
				defaultValue: value,
				optional: isOptional,
			});
		}
	}

	return params;
}
