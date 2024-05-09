export default function SectionContainer({ children, className = "", ...rest }) {
    return (<div
        className={`w-[93.75%] md:w-[87.5%] ${className}`}
        {...rest}
    >
        {children}
    </div>
    )
}