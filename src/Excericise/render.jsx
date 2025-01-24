// create a component usinf props which will render list with follwing properties : fontsize,backgroundcolor,,fontcolor,fontstyle
//  pass above listed props as an argument to component and render output in string

export default function Render(){
    const props = {
        fontSize: '20',
        backgroundColor: 'lightgrey',
        fontColor: 'black',
        fontStyle: 'italic',
     
    }

    return (
        <div style={{fontSize: props.fontSize, backgroundColor: props.backgroundColor, color: props.fontColor, fontStyle: props.fontStyle}}>
            My name is Arati
        </div>

       
    )

}