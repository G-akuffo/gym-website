import React from 'react'

const Contact = () => {
  return (
    <div id="contact">
        <h1>CONTACT US</h1>
        <form>
            <input type="text" placeholder='full name' required />
            <input type="email" placeholder="Type Your E-mail Address" required />
            <textarea placeholder="Write Here..." name="message" id="" cols="30" rows="10"></textarea>
            <input type="submit" value="Send" />
        </form>
    </div>
  )
}

export default Contact