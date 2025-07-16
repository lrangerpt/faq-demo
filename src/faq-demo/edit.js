import { __ } from "@wordpress/i18n";

import {
	useBlockProps,
	InspectorControls,
	ColorPalette,
} from "@wordpress/block-editor";

import {
	PanelBody,
	Button,
	TextControl,
	TextareaControl,
	Icon,
} from "@wordpress/components";

import { useState } from "@wordpress/element";
import { trash } from "@wordpress/icons";

import "./editor.scss";

import metadata from "./block.json";

export default function Edit({ attributes, setAttributes }) {
	const { className, ...blockProps } = useBlockProps();
	const { faqs = [], accordionColor = '#f7f7f7' } = attributes;

	const [openIndex, setOpenIndex] = useState(null);

	const updateFaq = (index, field, value) => {
		const newFaqs = [...faqs];
		newFaqs[index] = { ...newFaqs[index], [field]: value };
		setAttributes({ faqs: newFaqs });
	};

	const addFaq = () => {
		setAttributes({ faqs: [...faqs, { question: '', answer: '' }] });
		setOpenIndex(faqs.length); // open the new FAQ
	};

	const removeFaq = (index) => {
		const newFaqs = faqs.filter((_, i) => i !== index);
		setAttributes({ faqs: newFaqs });
		if (openIndex === index) setOpenIndex(null);
	};

	const toggleAccordion = (index) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<>
			<div className={`${className} alignfull`} {...blockProps}>
				<div>
					{faqs.length === 0 && (
						<p>{__('No FAQs added yet.', 'usercentrics')}</p>
					)}
					{faqs.map((faq, index) => (
						<div key={index} style={{ marginBottom: '1rem', border: '1px solid #eee', borderRadius: '4px', overflow: 'hidden' }}>
							<div
								style={{
									display: 'flex',
									alignItems: 'center',
									background: accordionColor || '#f7f7f7',
									padding: '0.75em 1em',
									cursor: 'pointer',
									borderBottom: openIndex === index ? '1px solid #eee' : 'none',
									borderRadius: '6px',
								}}
								onClick={() => toggleAccordion(index)}
							>
								<span style={{ flex: 1, fontWeight: 600 }}>
									{faq.question || __('(No question)', 'usercentrics')}
								</span>
								<Button
									icon={<Icon icon={trash} />}
									isDestructive
									label={__('Remove FAQ', 'usercentrics')}
									style={{ marginLeft: '1em' }}
									onClick={e => {
										e.stopPropagation();
										removeFaq(index);
									}}
								/>
							</div>
							{openIndex === index && (
								<div style={{ padding: '1em', background: '#fff' }}>
									<TextControl
										label={__('Question', 'usercentrics')}
										value={faq.question}
										onChange={(value) => updateFaq(index, 'question', value)}
									/>
									<TextareaControl
										label={__('Answer', 'usercentrics')}
										value={faq.answer}
										onChange={(value) => updateFaq(index, 'answer', value)}
									/>
								</div>
							)}
						</div>
					))}
					<Button isPrimary onClick={addFaq} style={{ marginTop: '1em' }}>
						{__('Add FAQ', 'usercentrics')}
					</Button>
				</div>
			</div>

			<InspectorControls>
				<PanelBody title={__("FAQ Settings", metadata.textdomain)}>
					<h4>{__("Accordion Color", "faq-block-demo")}</h4>
					<ColorPalette
						value={accordionColor}
						onChange={(color) =>
							setAttributes({ accordionColor: color || '#f7f7f7' })
						}
					/>
				</PanelBody>
			</InspectorControls>
		</>
	);
}
