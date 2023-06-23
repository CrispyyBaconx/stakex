type FAQProps = {
    isOpen: boolean;
}

const FAQ = (props: FAQProps) => {
    return (
        <>
            {!props.isOpen ? (
                <div className="faq">
                    bus
                </div>
            ) : (
                <div className="faq">
                    <ul>
                        <li>What is the minimum amount of BUSD I can stake?</li>
                        <p>0</p>
                    </ul>
                </div>
            )}
        </>
    )
}

export default FAQ;