function SubHeading({ icon, text, heading }) {
    return (
        <>
            <div className="subheading">
                <div className="iconbox">
                    <span style={{ borderRadius: "50%", paddingTop: "3px", paddingLeft: "5px", paddingRight: "5px", paddingBottom: "1px", backgroundColor: "#3577f0", color: "white", fontSize: "25px" }}> {icon} </span>
                    <h4>{text}</h4>
                </div>


                <h1>{heading}</h1>
            </div>
        </>
    )
}

export default SubHeading