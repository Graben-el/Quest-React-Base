const ColoredText = ({ textColor, textCase, bgColor, textWeight }) => {
    return (
        <div style={
            { color: textColor, 
              textTransform: textCase, 
              backgroundColor: bgColor, 
              fontWeight: textWeight }
        }>
            <p>Texto colorido para a Quest de React Básico</p>
        </div>
    )
}

export default ColoredText