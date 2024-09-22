import React from 'react'
import Form from '../../Components/Form/Form'
import './contact.css'
import Customers from '../../Components/Customers/Customers'
const contactIcons=[
  {
    id:1,icon:"/assets/15.jpg",title:"Address",details:"236 5th SE Avenue.New <br/> York NY 10000,United <br/>States"
  },
  {
    id:2,icon:"/assets/12.jpg",title:"Phone",details:"Mobile:+(84)546-6789<br/>Hotline:+(84)456-6789"
  },
  {
    id:3,icon:"/assets/11.jpg",title:"Working Time",details:"Monday-Friday:9:00- <br/>22:00 <br/>Saturday-Sunday:9:00- </br>21:00"
  }
]
function Contact() {
  return (
  <>
    <div  className="contact-page">
    <h1>Contact</h1>
  
  </div>
  <div className='contact-us'>
<h2>Get In Touch With Us</h2>
<p>For More Information About Our Product & Services Feel Free To Drop US<br></br>
An Email. Our Staff Always Be There To Help You Out .Do Not Hesitate!</p>
  </div>
   <div  className="contact-section">
  <div className='adress'>
 { contactIcons.map((item) => (<div key={item.id}>
      
            <h3><img src={item.icon}/>{item.title}</h3>
             <div dangerouslySetInnerHTML={{ __html: item.details }} />
            </div>
          ))}

  </div>
  <div>
      <Form></Form>
  </div>
  </div>
  <div>
    <Customers></Customers>
  </div>
    </>
    
  )
}

export default Contact
