export default function LabelComponent({
  label,
  className,
  required,
  ...args
}) {
  return (
    <>
      <label className={className ? className : "label"}>
        {label} {required ? <span className="text_danger">*</span> : null}
      </label>
    </>
  );
}
