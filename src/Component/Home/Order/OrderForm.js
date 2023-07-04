import React from 'react';

const OrderForm = ({data}) => {
    const {name,price,_id,image}=data
    const handleSubmit=(event)=>{
        event.preventDefault()
        const form =event.target
        const Name = `${form.firstName.value} ${form.lastName.value}`
        const phone =form.phone.value
        const email =form.email.value
        const message =form.message.value
        const address =form.address.value
        const orders ={
            service: _id,
            serviceName:name,
            customer: Name,
            price,
            image,
            email,
            phone,
            address,
            message,
            status:'Pending'
        }
        fetch('https://chef-kitchen-server.vercel.app/orders',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(orders)
      })
      .then(res  => res.json())
      .then(data => {
        if(data.acknowledged){
            alert('Order Placed')
            form.reset()
        }       
      })
      .catch(err => console.error(err))

    }
    return (
        <form className='bg-slate-200 p-24 rounded-md my-5' onSubmit={handleSubmit}>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <input type="text" name='firstName' placeholder="First Name" className="input input-bordered  w-full " />
                <input type="text" name='lastName' placeholder="Last Name" className="input input-bordered  w-full " />
                <input type="text" name='phone' placeholder="Your Phone" className="input input-bordered  w-full " />
                <input type="text" name='email' placeholder="Your Email"  className="input input-bordered  w-full "/>
                </div>
                <input type="text" name='address' placeholder="Your address ex.(New market,Dhaka)"  className="input input-bordered  w-full my-5 "/>
                <textarea name='message' className="textarea textarea-bordered w-full h-56 " placeholder="Your message"></textarea>
                <button type='submit' className='bg-orange-600 text-white w-full h-16 rounded-md mt-6'>Order Submit</button>
        </form>
    );
};

export default OrderForm;