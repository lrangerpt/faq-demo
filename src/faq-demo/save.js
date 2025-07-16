/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps } from '@wordpress/block-editor';

/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */
export default function save({ attributes }) {
	const { faqs = [], accordionColor } = attributes;

	// Check if there are any FAQs
	const hasFaqs = faqs && faqs.length > 0;

	// If there are FAQs, generate the JSON-LD schema
	const faqJsonLd = hasFaqs
		? {
			"@context": "https://schema.org",
			"@type": "FAQPage",
			mainEntity: faqs.map(faq => ({
				"@type": "Question",
				name: faq.question,
				acceptedAnswer: {
					"@type": "Answer",
					text: faq.answer
				}
			}))
		}
		: null;

	return (
		<div {...useBlockProps.save()}>
			{!hasFaqs ? (
				<p>Faq Demo – no FAQs added.</p>
			) : (
				<>
					<div className="faq-demo-accordion">
						{faqs.map((faq, i) => (
							<div className="faq-demo-item" style={accordionColor ? { backgroundColor: accordionColor } : undefined} key={i}>
								<button
									type="button"
									className="faq-demo-question"
									aria-expanded="false"
									aria-controls={`faq-demo-answer-${i}`}
									id={`faq-demo-question-${i}`}
								>
									<span>{faq.question}</span>
									<span className="faq-demo-icon" aria-hidden="true">+</span>
								</button>
								<div
									className="faq-demo-answer"
									id={`faq-demo-answer-${i}`}
									role="region"
									aria-labelledby={`faq-demo-question-${i}`}
									hidden
								>
									{faq.answer}
								</div>
							</div>
						))}
					</div>
					{/* Add JSON-LD schema for FAQ */}
					{faqJsonLd && (
						<script type="application/ld+json">
							{JSON.stringify(faqJsonLd)}
						</script>
					)}
				</>
			)}
		</div>
	);
}
