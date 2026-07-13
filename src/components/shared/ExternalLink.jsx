export function ExternalLink({ href, className, children }) {
	const props = {
		href,
		className,
		target: `_blank`,
		rel: `noopener noreferrer`,
	};
	return <a {...props}>{children}</a>;
}
