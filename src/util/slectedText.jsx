import { m } from 'framer-motion';
export function Heading({ text, selectedText }) {
    return (
        <h1 className="text-4xl font-extrabold text-primary-bg w-fit py-1 font-head">{text}{' '}
            <span className="inline-block relative">
                <m.span
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: false }}
                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                    style={{ originX: 0 }}
                    className="absolute inset-0 bg-primary-bg -z-10" />
                <span className="relative text-white ">{selectedText}</span>
            </span>
        </h1>
    )
}