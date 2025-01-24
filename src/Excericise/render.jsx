// create a component usinf props which will render list with follwing properties : fontsize,backgroundcolor,,fontcolor,fontstyle
//  pass above listed props as an argument to component and render output in string

export default function Render(){
    const props = {
        fontSize: '20',
        backgroundColor: 'lightgrey',
        fontColor: 'black',
        fontStyle: 'italic',
     
    }
    const props2 ={
        fontSize: '18',
        backgroundColor: 'lightblue',
        fontColor: 'white',
        fontStyle: 'normal',
    }

    return (
        <div >
            <h1>Component Example</h1>
          <p style={{fontSize: props2.fontSize, backgroundColor: props2.backgroundColor, color: props2.fontColor, fontStyle: props2.fontStyle}}>I am a computer student</p>
           <p style={{fontSize: props.fontSize, backgroundColor: props.backgroundColor, color: props.fontColor, fontStyle: props.fontStyle}}> My name is Arati</p>
        </div>

       
    )

}