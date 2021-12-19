import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import "./AddService.css"


const allservices = [
    {serviceId:1, service:"4BHK Moving", detail:"4 Bedroom, Hallroom & Kitchen,Shifters 8-10 Persons, depending upon the size of your consignment.1 Supervisor, 2 Ton Open Truck ( 2 Trip ) depending upon the size of your consignment. Service Duration 8hr", cost:33000, img:"https://i.ibb.co/rMwjByJ/4bhk.jpg"},

    {serviceId:2, service:"3BHK Moving", detail:"3 Bedroom, Hallroom & Kitchen,Shifters 6-7 Persons, depending upon the size of your consignment.1 Supervisor, 2 Ton Open Truck ( 1 Trip ) depending upon the size of your consignment. Service Duration 8hr", cost:24000, img:"https://i.ibb.co/m0yF4d4/p1.png"},

    {serviceId:3, service:"2BHK Moving", detail:"2 Bedroom, Hallroom & Kitchen,Shifters 4-5 Persons, depending upon the size of your consignment.1 Supervisor, 2 Ton Open Truck ( 1 Trip ) depending upon the size of your consignment. Service Duration 6hr", cost:17000, img:"https://i.ibb.co/q06MYy1/c700x420-8.png"},

    {serviceId:4, service:"1BHK Moving", detail:"1 Bedroom, Hallroom & Kitchen,Shifters 3-4 Persons, depending upon the size of your consignment.1 Supervisor, 1.5 Ton Open Truck ( 1 Trip ) depending upon the size of your consignment. Service Duration 5hr", cost:9000, img:"https://i.ibb.co/xSzXj57/1bhk.png"},

    {serviceId:5, service:"Premium Shifting", detail:"Premium home shifting, 1 Wrapping Roll:4000 meters, 20 cartoons, Shifters 8-10 Persons.2 Supervisor, 2 Ton Covered Truck ( 3 Trip ) depending upon the size of your consignment. Service Duration 8hr", cost:50000, img:"https://i.ibb.co/r40d6x1/packing.png"},

    {serviceId:6, service:"Packing & Wrapping", detail:"Our expert Packer will Packing and wrapping your belongings including your home furniture, electronics and appliances, included 20 cartoons 2feet by 2 feet and 4000 meter wrapping roll(export quality)", cost:40000, img:"https://i.ibb.co/rZwM2B8/packWrap.png"},

    {serviceId:7, service:"Furniture Shifting", detail:"Our expert mover will load your belongings including your home furniture, electronics and appliances onto the moving transportation. Options Household Furniture Shifting, maximum distance 5km", cost:1200, img:"https://i.ibb.co/1ZGzG15/al-ain2.png"},

    {serviceId:8, service:"Transport Services", detail:"The rear body of this type of truck is 12 feet usually used for transporting medium type business goods and for family relocation. Popular truck brands in this category are JAC and T-King ", cost:1500, img:"https://i.ibb.co/xLGY682/jac.png"},

    {serviceId:9, service:"Free Consultancy", detail:"A general home moving consultant is a specialist within a moving company that will assist you with your home relocations. Either type of consultant will assist with services needed so contact with us", cost:0, img:"https://i.ibb.co/5WxyhHW/do-free-information-security-consultancy.png"}
]







const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = (data) => {
      //   const dataobject ={bookingInfo:     }
        console.log(data)
        axios.post("https://afternoon-dawn-04949.herokuapp.com/services",data)
        .then(respo=>{
            console.log(respo);
            if(respo.status==200){
   reset()
            }
        })
     
    };

    return (
        <div className="add-Packages-Plan">
        <h2 className="common-header">You Can Add New Package Plan</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input required placeholder="Enter Service plane ID" type="number" {...register("serviceId")} />
          <input required placeholder="Enter Service name " {...register("service")} />
          <textarea required  placeholder="Enter description about your Service packages" {...register("detail")} />
          
          <input required placeholder="Enter Approximate cost for your Package"  type="number" {...register("cost")} />
          <input required placeholder="You can submit photo, must need resorts/cottages url  "  {...register("img")} />
  
          <input className="bg-danger" type="submit" />
        </form>
      </div>
    );
};

export default AddService;