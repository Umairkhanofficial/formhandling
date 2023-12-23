"use client"
import { error, table } from "console"
import { useState } from "react"
import * as yup from "yup"

export default function ContactForm(){
  const contactSchema = yup.object().shape({
    name:yup.string().min(3,"Name should be at least 3 character").required(),
    email:yup.string().email().required(),
    message:yup.string().min(15,"Message lenght should be at least 15 character").required(),
    phone:yup.number().min(8).required(),
    country:yup.string().min(2,"Please Enter Your Country"),
    city:yup.string().min(5,"Enter City"),
    age:yup.number().min(5,"Enter your Age"),
    gender:yup.string().min(3,"Enter Gender Please"),
    address:yup.string().min(5,"Enter Your Address"),
    postalcode:yup.string().min(2,"Enter Code"),

  })
  const [contactInfo,setContactInfo]=useState<contactInfoType>(
    {name:"",
    email:"",
    message:"",
    phone:0,
    country:"",
    city:"",
    age:0,
    gender:"",
    address:"",
    postalcode:0,
  }
    )
    const [contactInfoList,setContactInfoList]=useState<contactInfoType[]>([])

    const [errors,setErrors]=useState<string[]>([])
    const onChangeHandler=(event:eventType)=>{
    setContactInfo({...contactInfo,[event.target.name]:event.target.value})
    }
  
    const onClickHandler=async ()=>{
      try{
        const result=await contactSchema.validate(contactInfo)
        if(!result){
          return
        }
        let addListVariable:contactInfoType[]=[...contactInfoList,contactInfo]
        setContactInfoList(addListVariable)
        setContactInfo(
          {name:"",
    email:"",
    message:"",
    phone:0,
    country:"",
    city:"",
    age:0,
    gender:"",
    address:"",
    postalcode:0,      
  }
    )
    setErrors([])
        
      }
      catch(err:any){
        setErrors(err.errors)
      }
    }
    return (
        <>
        <form className="max-w-md mx-auto">
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Name
        </label>
        <input
        onChange={onChangeHandler}
          type="text"
          id="name"
          value={contactInfo.name}
          name="name"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Email
        </label>
        <input
        onChange={onChangeHandler}
          type="email"
          value={contactInfo.email}
          id="email"
          name="email"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Message
        </label>
        <textarea
        onChange={onChangeHandler}
          id="message"
          value={contactInfo.message}
          name="message"
          rows={4}
          className="w-full px-3 py-2 border rounded-md"
          required
        ></textarea>
      </div>
      <div className="mb-4">
        <label htmlFor="phone" className="block text-gray-700 text-sm font-bold mb-2">
          phone
        </label>
        <input
        onChange={onChangeHandler}
          type="number"
          value={contactInfo.phone}
          id="phone"
          name="phone"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="country" className="block text-gray-700 text-sm font-bold mb-2">
          Country
        </label>
        <input
        onChange={onChangeHandler}
          type="text"
          value={contactInfo.country}
          id="country"
          name="country"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="city" className="block text-gray-700 text-sm font-bold mb-2">
          City
        </label>
        <input
        onChange={onChangeHandler}
          type="text"
          value={contactInfo.city}
          id="city"
          name="city"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="age" className="block text-gray-700 text-sm font-bold mb-2">
          Age
        </label>
        <input
        onChange={onChangeHandler}
          type="number"
          value={contactInfo.age}
          id="age"
          name="age"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="gender" className="block text-gray-700 text-sm font-bold mb-2">
          Gender
        </label>
        <input
        onChange={onChangeHandler}
          type="text"
          value={contactInfo.gender}
          id="gender"
          name="gender"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="address" className="block text-gray-700 text-sm font-bold mb-2">
          Address
        </label>
        <input
        onChange={onChangeHandler}
          type="text"
          value={contactInfo.address}
          id="address"
          name="address"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div className="mb-4">
        <label htmlFor="postalcode" className="block text-gray-700 text-sm font-bold mb-2">
          Postalcode
        </label>
        <input
        onChange={onChangeHandler}
          type="number"
          value={contactInfo.postalcode}
          id="postalcode"
          name="postalcode"
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>







      <div className="mb-6">
        {errors.map((err)=>{return(
          <h1 style={{color:"red"}}>{err}</h1>
        )})}

        <button
          type="button"
          className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          onClick={onClickHandler}
        >
          Submit
        </button>
      </div>
    </form>
 
      {/* {
      contactInfoList.map((item,index)=>{
        return(
       
       
       <h1 key={index}>
            {index} {item.name}
          </h1>
        )
      })
      } */}
      <table className="sm:w-full min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                #
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Message
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Phone
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Country
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                City
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Age
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Gender
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Address
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Postal Code
              </th>
              {/* Add more table headers based on your data structure */}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {contactInfoList.map((item, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.message}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.country}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.city}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.gender}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.address}</td>
                <td className="px-6 py-4 whitespace-nowrap">{item.postalcode}</td>


                {/* Add more table data cells based on your data structure */}
              </tr>
            ))}
          </tbody>
        </table>
        </>
    )
}