type FAQProps = {
    isOpen: boolean;
}

const FAQ = (props: FAQProps) => {
    return (
        <>
            {props.isOpen ? (
                <div className="faq">
                    bus
                </div>
            ) : (
                <div className="faq">
                    <h1>FAQ</h1>
                </div>
            )}
        </>
    )
}

export default FAQ;