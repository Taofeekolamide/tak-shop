function ImageBox({image, text}) {
    return (
        <>
            <div className="imagebox">
                <img src={image} alt="image" />
                <h1>{text}</h1>
            </div>
        </>
    )
}

export default ImageBox;