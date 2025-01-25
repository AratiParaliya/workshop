// create a component usinf props which will render list with follwing properties : fontsize,backgroundcolor,,fontcolor,fontstyle
//  pass above listed props as an argument to component and render output in string

export default function Render(props){
    
  

    return (
        <div >
            <h1>Component Example</h1>         
           <p style={{fontSize: props.fontSize, backgroundColor: props.backgroundColor, color: props.fontColor, fontStyle: props.fontStyle , padding:12}}> My name is Arati</p>
        </div>

       
    )

}