const Title = ({ firstPart, lastPart }) => {
    return (
        <>
            <div className="section-title">
                <h2>{firstPart} <span>{lastPart}</span></h2>
            </div>
        </>
    )
}

export default Title