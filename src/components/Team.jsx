function Team({ image, work, name }) {
    return (
        <>
            <div className="team">
                <img src={image} alt="" />
                <p>{work}</p>
                <h2>{name}</h2>
            </div>
        </>
    )
}

export default Team;