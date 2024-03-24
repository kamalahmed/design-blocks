/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from "@wordpress/i18n";

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ToggleControl,
	HorizontalRule,
	RangeControl,
} from "@wordpress/components";

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import "./editor.scss";
import Curve from "./components/Curve";
/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit(props) {
	const { attributes, setAttributes } = props;
	const { enableTopCurve, topWidth, topHeight, topFlipX, topFlipY } =
		attributes;
	const { className, ...otherProps } = useBlockProps();
	return (
		<>
			<section className={`alignfull ${className}`} {...otherProps}>
				{enableTopCurve && <Curve height={topHeight} width={topWidth} />}
			</section>

			{/* Controls starts */}
			<InspectorControls>
				<PanelBody title={__("Top Curve", "design-blocks")}>
					<ToggleControl
						label={__("Enable Top Curve", "design-blocks")}
						checked={enableTopCurve}
						onChange={(isChecked) => {
							setAttributes({
								enableTopCurve: isChecked,
							});
						}}
					/>
					{enableTopCurve && (
						<>
							<HorizontalRule />
							<RangeControl
								label={__("Width", "design-blocks")}
								min={100}
								max={300}
								value={topWidth || 100}
								onChange={(value) => {
									setAttributes({
										topWidth: parseInt(value, 10),
									});
								}}
							/>
							<RangeControl
								label={__("Height", "design-blocks")}
								min={0}
								max={280}
								value={topHeight}
								onChange={(value) => {
									setAttributes({
										topHeight: parseInt(value, 10),
									});
								}}
							/>
							<HorizontalRule />
							<ToggleControl
								label={__("Flip Horizontally", "design-blocks")}
								checked={topFlipX}
								onChange={(isChecked) => {
									setAttributes({
										topFlipX: isChecked,
									});
								}}
							/>

							<ToggleControl
								label={__("Flip Vertically", "design-blocks")}
								checked={topFlipY}
								onChange={(isChecked) => {
									setAttributes({
										topFlipY: isChecked,
									});
								}}
							/>
						</>
					)}
				</PanelBody>
			</InspectorControls>
		</>
	);
}
