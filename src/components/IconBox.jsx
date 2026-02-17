function IconBox({img, title, content}) {
    return (
        <>
            <div className="icon">
                <img src={img} alt="" />
                <h3>{title}</h3>
                <p>{content}</p>
            </div>
        </>
    )
}

export default IconBox